/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';

import { message2 } from './constants';
import {data,message} from './constants';
// import {data2,Hello} from './utils';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // здесь происходит создание экземпляра
  // render - это функуция, которая отрисовывает наш компонент APP
  // хранится он в файле APP.Vue
}).$mount('#app');

alert(message2);
alert(data.message);
Hello();
