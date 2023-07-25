import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import API_BASE_URL from '../config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
    userAccessKey: null,

    cartProductsData: [],
  },
  mutations: {
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
    },
    updateCartProductAmuont(state, { productId2, amount2 }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId2);
      if (item) {
        item.amount = amount2;
      }
    },
    updateCartProductPush(state, productId2) {
      const item = state.cartProducts.find((item1) => item1.productId === productId2);
      if (item > 1) {
        item.amount -= 1;
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
    updateUserAccessKey(state, accessKey) {
      state.userAccessKey = accessKey;
    },
    updateCartProductsData(state, items) {
      state.cartProductsData = items;
    },
    syncCartProducts(state) {
      state.cartProducts = state.cartProductsData.map((item) => ({
        productId: item.product.id,
        amount: item.quantity,
      }));
    },
  },
  actions: {
    loadCart(context) {
      axios
        .get(`${API_BASE_URL}/api/baskets`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          if (!context.state.userAccessKey) {
            localStorage.setItem('userAccessKey', response.data.user.accessKey);
            context.commit('updateUserAccessKey', response.data.user.accessKey);
          }
          context.commit('updateCartProductsData', response.data.items);
          context.commit('syncCartProducts');
        });
    },
  },
  getters: {
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts
        .reduce((acc, item) => (item.product.price * item.amount) + acc, 0);
    },
    cartLength(state, getters) {
      return getters.cartDetailProducts.length;
    },
  },
});
