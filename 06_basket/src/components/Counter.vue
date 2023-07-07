<template>
  <div class="product__counter form__counter">
    <button
      type="button"
      @click="conterDecrease"
      aria-label="Убрать один товар"
      :disabled="amount <= 1"
    >
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <label for="id8">
      <input
        type="text"
        :value="amount"
        @input="$emit('update-amount', +$event.target.value)"
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
  model: {
    prop: 'amount',
    event: 'update-amount',
  },
  props: ['amount'],
  methods: {
    conterDecrease() {
      if (this.amount > 1) {
        this.$emit('update-amount', this.amount - 1);
      }
    },
    conterIncrease() {
      this.$emit('update-amount', this.amount + 1);
    },
  },
};
</script>
