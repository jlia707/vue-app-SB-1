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

    orderInfo: null,

    orderInfoData: null,
  },
  mutations: {
    updateOrderInfo(state, orderInfo) {
      state.orderInfo = orderInfo;
    },
    updateOrderInfoData(state, orderInfo) {
      state.orderInfoData = orderInfo.totalPrice;
    },
    resetCart(state) {
      state.cartProducts = [];
      state.cartProductsData = [];
    },
    updateCartProductAmuont(state, { productId, amount }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId);
      if (item) {
        item.amount = amount;
      }
    },
    updateCartProductPush(state, productId) {
      const item = state.cartProducts.find((item1) => item1.productId === productId);
      if (item > 1) {
        item.amount -= 1;
      }
    },
    deleteCartProduct(state, productId) {
      state.cartProducts = state.cartProducts.filter((item) => item.productId !== productId);
      state.cartProductsData = state.cartProductsData
        .filter((item) => item.product.id !== productId);
    },
    decrementAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId);
      if (item) {
        item.amount -= amount;
      }
    },
    incrementAmount(state, { productId, amount }) {
      const item = state.cartProducts.find((item1) => item1.productId === productId);
      if (item) {
        item.amount += amount;
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
    deleteCartProductAction(context, productId) {
      return axios
        .delete(`${API_BASE_URL}/api/baskets/products`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
          data: {
            productId,
          },
        })
        .then(() => {
          context.commit('deleteCartProduct', productId);
        });
    },
    loadOrderInfo(context, orderId) {
      return axios
        .get(`${API_BASE_URL}/api/orders/${orderId}`, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          debugger;
          context.commit('updateOrderInfo', response.data);
          context.commit(' updateOrderInfoData', response.data);
        });
    },
    loadCart(context) {
      return axios
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
    addProductToCart(context, { productId, amount }) {
      console.log(productId);
      return axios
        .post(`${API_BASE_URL}/api/baskets/products`, {
          productId,
          quantity: amount,
        }, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          context.commit('updateCartProductsData', response.data.items);
          context.commit('syncCartProducts');
        });
    },
    updateCartProductAmuont(context, { productId, amount }) {
      context.commit('updateCartProductAmount', { productId, amount });

      return axios
        .put(`${API_BASE_URL}/api/baskets/products`, {
          productId,
          quantity: amount,
        }, {
          params: {
            userAccessKey: context.state.userAccessKey,
          },
        })
        .then((response) => {
          context.commit('updateCartProductsData', response.data.items);
          context.commit('syncCartProducts');
        })
        .catch(() => {
          context.commit('syncCartProducts');
        });
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => {
        const productDetails = state.cartProductsData.find((p) => p.product.id === item.productId);
        return {
          ...item,
          productDetails,
        };
      });
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts
        .reduce((acc, item) => (item.productDetails.product.price * item.amount) + acc, 0);
    },
    cartLength(state, getters) {
      return getters.cartDetailProducts.length;
    },
    cartTotalPriceOrder(state) {
      return state.orderInfoData
        .reduce((acc, item) => {
          debugger;
          return acc + (item.product.price * item.quantity);
        }, 0);
    },
  },
});
