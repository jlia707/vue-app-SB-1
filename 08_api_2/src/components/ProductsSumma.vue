<template>
<b> {{ cartLength }} </b>
</template>
<script>
import numberFormat from '@/helpers/numberFormat';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      productsCalc: 'cartDetailProducts',
      cartLength: 'cartLength',
    }),
    product() {
      return this.item.productDetails || this.item;
    },
    amount() {
      return this.item.amount || this.item.quantity;
    },
  },
  name: 'ProductsSumma',
  props: ['item'],
  filters: { numberFormat },
};
</script>
// (amount * product.product.price) | numberFormat
