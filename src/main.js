import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
});