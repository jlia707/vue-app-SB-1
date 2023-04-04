<template>
    <li
      class="catalog__item">
      <a class="catalog__pic" href="#">
        <img
          :src="product.image"
          :srcset="product.srcset"
          :alt="product.title"
        />
      </a>
      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>
      <span class="catalog__price">
        {{ product.price }}
      </span>
    </li>
</template>

<script>

export default {
  name: 'ProducItem',
  components: {},
  props: ['products'],
};
</script>
