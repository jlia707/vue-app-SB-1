/* eslint-disable */
<template>
  <base-form-field-vue :title="title" :error="error" :name="name">
  <label for="FN-1">
    <input
      class="form__input"
      type="text"
      v-model="dataValue"
      :placeholder="placeholder"
    />
  </label>
  </base-form-field-vue>
</template>
<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  props: ['type'],
  mixins: [formFieldMixin],
};
</script>
