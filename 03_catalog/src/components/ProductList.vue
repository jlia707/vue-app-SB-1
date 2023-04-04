<template>
  <ul>
    <ProductItem
      v-for="(product, index) in products"
      :product="product"
      :key="index"
    />
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  props: ['products'],
};
</script>
