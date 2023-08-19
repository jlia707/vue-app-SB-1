import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../page/MainPage.vue';
import NotFoundPage from '../page/NotFoundPage.vue';
import ProductPage from '../page/ProductPage.vue';
import CartPage from '../page/CartPage.vue';
import OrderPage from '../page/OrderPage.vue';
import OrderInfoPage from '../page/OrderInfoPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  { name: 'cartPage', component: CartPage, path: '/cart/' },
  { name: 'order', component: OrderPage, path: '/order' },
  { name: 'orderInfo', component: OrderInfoPage, path: '/order/:id' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];

const router = new VueRouter({
  routes,
});

export default router;
