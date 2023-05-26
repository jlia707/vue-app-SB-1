<template>
  <li class="catalog__item">
    <router-link
      class="catalog__pic"
      href="#"
      :to="{name: 'product', params: {id: product.id}}"
    >
      <img :src="product.image" :srcset="product.srcset" :alt="product.title" />
    </router-link>
    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price">
      {{ product.price }}
    </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color.id">
        <label class="colors__label" for="fn1">
          <input
            id="fn1"
            class="colors__radio sr-only"
            type="radio"
            name="color-1"
            :value="color.color"
          />
          <span class="colors__value" :style="{ background: color.color }">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '../data/colors';
import gotoPage from '../helpers/gotoPage';

export default {
  name: 'ProducItem',
  components: {},
  props: ['product'],
  data() {
    return {
      colors,
    };
  },
  methods: {
    gotoPage,
  },
};
</script>
