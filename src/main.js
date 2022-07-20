import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
Vue.config.productionTip = false;
Vue.use(ElementUI);
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';

Vue.prototype.$axios = axios;
new Vue({
  el: '#app',
  render: (h) => h(App),
});
