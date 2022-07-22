import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import VueRouter from 'vue-router';
import Ind from './views/Ind.vue';
import Class from './views/Class.vue';
import Order from './views/Order.vue';
import My from './views/My.vue';
import ChildInd from './views/Child/ChildInd.vue';
import ChildClass from './views/Child/ChildClass.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Ind,
  },
  {
    path: '/class',
    component: Class,
  },
  {
    path: '/order',
    component: Order,
  },
  {
    path: '/my',
    component: My,
    redirect: '/my/childInd',
    children: [
      {
        path: 'childInd',
        component: ChildInd,
      },
      {
        path: 'childClass',
        component: ChildClass,
      },
    ],
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
