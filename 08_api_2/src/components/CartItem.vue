<template>
  <li
    class="cart__item product"
  >
    <div class="product__pic">
      <img
        :src="item.productDetails.product.image.file.url"
        width="120"
        height="120"
        srcset="img/phone-square-3@2x.jpg 2x"
        :alt="item.productDetails.product.image"
      />
    </div>
    <h3 class="product__title">
      {{ item.productDetails.product.title }}
    </h3>
    <p class="product__info">Объем: <span>128GB</span></p>
    <span class="product__code"> {{ item.productDetails.product.id }} </span>

    <counter v-model="amount"
    ></counter>

    <b class="product__price">
      {{ (item.amount * item.productDetails.product.price) | numberFormat }} P
    </b>

    <button
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
      @click.prevent="deleteProduct(item.productId)"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
import Counter from './Counter.vue';

export default {
  name: 'CartItem',
  props: ['item'],
  components: { Counter },
  filters: { numberFormat },
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.commit('updateCartProductAmuont', { productId: this.item.productId, amount: value });
      },
    },
  },
  methods: {
    ...mapActions({ deleteProduct: 'deleteCartProductAction' }),
  },
};
</script>
