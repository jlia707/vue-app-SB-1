/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
  // здесь происходит создание экземпляра
  // render - это функуция, которая отрисовывает наш компонент APP
  // хранится он в файле APP.Vue
}).$mount('#app');
