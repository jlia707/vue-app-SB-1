<template>
  <ul class="catalog__list">
    <ProductItem
      v-for="(product) in products"
      :product="product"
      :key="product.title"
      @gotoPage="(pageName, pageParams) => $emit('gotoPage', pagePName, pageParams)">
      </ProductItem>
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
