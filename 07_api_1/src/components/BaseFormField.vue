<template>
  <label class="form__label" for="id1">
    <slot/>
    <input style="display:none" type="text">
    <!-- как избавиться от инпута -->
    <span class="form__value"> {{ title }} </span>
    <span class="form__error" v-if="error">
      {{ error }}
    </span>
  </label>
</template>

<script>

export default {
  props: ['title', 'error'],
};
</script>
