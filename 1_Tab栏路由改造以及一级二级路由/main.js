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
import 'bootstrap/dist/css/bootstrap.css';
import './assets/fonts/iconfont.css';
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';
import axios from 'axios';
Vue.use(VueRouter);
axios.defaults.baseURL = 'https://www.escook.cn';
// 全局指令
Vue.directive('focus', {
  inserted(el) {
    el.focus();
  },
});
Vue.prototype.$axios = axios;
const routes = [
  {
    path: '/',
    redirect: '/index', // 作业前几个的时候改成 /index 即可  换成购物车时候 这里改成 /mygoodlist
  },
  {
    path: '/mygoodlist',
    component: MyGoodsList,
  },
  {
    path: '/mygoodsearch',
    component: MyGoodsSearch,
  },
  {
    path: '/myuserinfo',
    component: MyUserInfo,
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
