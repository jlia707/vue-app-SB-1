<template>
  <div class="product__counter form__counter">
    <button
      type="button"
      @click="conterDecrease"
      aria-label="Убрать один товар"
      :disabled="value <= 1"
    >
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <label for="id8">
      <input
        type="text"
        :value="value"
        @input="$emit('input', +$event.target.value)"
      />
    </label>
    <button
      type="button"
      @click="conterIncrease"
      aria-label="Добавить один товар"
    >
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>

export default {
  name: 'counter-changed',
  props: ['value'],
  methods: {
    conterDecrease() {
      if (this.value > 1) {
        this.$emit('input', this.value - 1);
      }
    },
    conterIncrease() {
      this.$emit('input', this.value + 1);
    },
  },
};
</script>
