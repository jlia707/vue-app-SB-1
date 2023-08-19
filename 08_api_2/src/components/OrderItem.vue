<template>
  <li class="cart__order">
    <h3>{{ item.productDetails.product.title }}</h3>
    <b> {{ (item.amount * item.productDetails.product.price) | numberFormat }} </b>
    <span> Артикул: {{ item.productDetails.product.id }}</span>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  name: 'OrderItem',
  props: ['item'],
  filters: { numberFormat },
};
</script>
