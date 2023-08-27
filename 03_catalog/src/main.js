/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // здесь происходит создание экземпляра
  // render - это функуция, которая отрисовывает наш компонент APP
  // хранится он в файле APP.Vue
}).$mount('#app');
