<template>
  <li
    class="cart__item product"
  >
    <div class="product__pic">
      <img
        :src="item.product.image"
        width="120"
        height="120"
        srcset="img/phone-square-3@2x.jpg 2x"
        :alt="item.product.image"
      />
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <p class="product__info">Объем: <span>128GB</span></p>
    <span class="product__code"> {{ item.product.id }} </span>

    <counter v-model="amount"
    ></counter>

    <b class="product__price">
      {{ (item.amount * item.product.price) | numberFormat }} P
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
import { mapMutations } from 'vuex';
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
        this.$store.dispatch('updateCartProductAmuont', { productId2: this.item.productId, amount2: value });
      },
    },
  },
  methods: {
    ...mapMutations({ deleteProduct: 'deleteCartProduct' }),
  },
};
</script>
