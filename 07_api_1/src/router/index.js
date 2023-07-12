import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../page/MainPage.vue';
import NotFoundPage from '../page/NotFoundPage.vue';
import ProductPage from '../page/ProductPage.vue';
// import CartIndicator from '../components/CartIndicator.vue';
import CartPage from '../page/CartPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'product', component: ProductPage, path: '/product/:id' },
  // { name: 'cart', component: CartIndicator, path: '/cart/:id' },
  { name: 'cartPage', component: CartPage, path: '/cart/' },
  { name: 'notFound', component: NotFoundPage, path: '*' },
];

const router = new VueRouter({
  routes,
});

export default router;
