<template>
  <li class="cart__order">
    <h3>{{ product.product.title }}</h3>
    <b> {{ (amount * product.product.price) | numberFormat }} </b>
    <span> Артикул: {{ product.product.id }}</span>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  computed: {
    product() {
      return this.item.productDetails || this.item;
    },
    amount() {
      return this.item.amount || this.item.quantity;
    },
  },
  name: 'OrderItem',
  props: ['item'],
  filters: { numberFormat },
};
</script>
