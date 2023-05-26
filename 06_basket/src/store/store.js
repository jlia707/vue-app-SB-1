import products from '@/data/products';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      { productId: 1, amount: 2 },
    ],
  },
  mutations: {
    // название функции - название мутации
    // обработчик фунции принимает несколько аргументов
    // первый аргумент - это объект состояние
    // второй- какая либо информация котрая будет передавться при вызове этой мутации
    addProductToCart(state, { productId1, amount1 }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId1);

      if (item) {
        item.amount += amount1;
      } else {
        state.cartProducts.push({
          productId: productId1,
          amount: amount1,
        });
      }
      // вариант записи
      // addProductToCart(state, {productId, amount}) {
      // state.cartProducts.push({
      // productId: productId,
      // amount: amount,
    },
  },
  getters: {
    cartDetailProducts(state) {
      const cartWithDitails = state.cartProducts.map((item) => {
        const productDetails = products.find((p) => p.id === item.productId1);
        return {
          ...item,
          product: productDetails,
        };
      });
      return cartWithDitails;
    },
  },
});
