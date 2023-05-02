<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :srcset="product.srcset" :alt="product.title" />
    </a>
    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price">
      {{ product.price }}
    </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label" for="fn1">
          <input id="fn1"
            class="colors__radio sr-only"
            type="radio"
            name="color-1"
            :value=product.color1
          />
          <span class="colors__value" :style="{background: product.color1}"> </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label" for="fn2">
          <input id="fn2"
            class="colors__radio sr-only"
            type="radio"
            name="color-2"
            :value=product.color2
            v-model="color"
          />
          <span class="colors__value" :style="{background: product.color2}"> </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label" for="fn3">
          <input for="fn3"
            class="colors__radio sr-only"
            type="radio"
            name="color-3"
            :value=product.color3
            v-model="color"
          />
          <span class="colors__value" style="background-color: #111"> </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '../data/colors';

export default {
  name: 'ProducItem',
  components: {},
  props: ['product'],
  data() {
    return {
      colors,
    };
  },
};
</script>
