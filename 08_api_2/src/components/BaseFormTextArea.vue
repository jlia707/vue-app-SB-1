<template>
  <base-form-field-vue :title="title" :error="error" :name="name">
    <label for="textarea">
      <textarea
        v-model="dataValue"
        class="form__input form__input--area"
        name="comment"
        placeholder="Ваши пожелания"
      ></textarea>
    </label>
  </base-form-field-vue>
</template>
<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
};
</script>
