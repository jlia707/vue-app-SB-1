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
    updateCartProductAmuont(state, { productId2, amount2 }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId2);
      if (item) {
        item.amount += amount2;
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
    },
    decrementAmount(state, { productId1, amount1 }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId1);
      if (item) {
        item.amount -= amount1;
      }
    },
    incrementAmount(state, { productId1, amount1 }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId1);
      if (item) {
        item.amount += amount1;
      }
    },
  },
  getters: {
    cartDetailProducts(state) {
      const cartWithDitails = state.cartProducts.map((item) => {
        const productDetails = products.find((p) => p.id === item.productId);
        return {
          ...item,
          product: productDetails,
        };
      });
      return cartWithDitails;
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts
        .reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
    cartLength(state, getters) {
      return getters.cartDetailProducts.length;
    },
  },
});
