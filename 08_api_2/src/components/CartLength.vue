<template>
<b> {{ cartLength }} </b>
</template>
<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  computed: {
    cartLength() {
      return this.item.basket.items.length;
    },
  },
  name: 'CartLength',
  props: ['item'],
  filters: { numberFormat },
};
</script>
