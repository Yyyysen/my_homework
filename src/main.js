import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import VueRouter from 'vue-router';
import Indx from './views/Indx.vue';
import Point from './views/Point.vue';
import Class from './views/Class.vue';
import Mall from './views/Mall.vue';
import Com from './views/Sun/Com.vue';
import Frontend from './views/Sun/Frontend.vue';
import Backend from './views/Sun/Backend.vue';
import Recomm from './views/Sun/Grandson/Recomm.vue';
import New from './views/Sun/Grandson/New.vue';
import Hot from './views/Sun/Grandson/Hot.vue';
Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err);
};
const routes = [
  {
    path: '/',
    redirect: '/indx', // 作业前几个的时候改成 /index 即可  换成购物车时候 这里改成 /mygoodlist
  },
  {
    path: '/indx',
    name: 'Indx',
    component: Indx,
    redirect: '/indx/com',
    children: [
      {
        path: 'com',
        component: Com,
        name: 'Com',
        redirect: '/indx/com/recomm',
        children: [
          {
            path: 'recomm',
            component: Recomm,
          },
          {
            path: 'new',
            component: New,
          },
          {
            path: 'hot',
            component: Hot,
          },
        ],
      },
      {
        path: 'frontend',
        name: 'Frontend',
        component: Frontend,
      },
      {
        path: 'backend',
        name: 'Backend',
        component: Backend,
      },
    ],
  },
  {
    path: '/point',
    name: 'Point',
    component: Point,
  },
  {
    path: '/class',
    name: 'Class',
    component: Class,
  },
  {
    path: '/mall',
    name: 'Mall',
    component: Mall,
  },
];
// 创建路由对象 -  传入规则
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
