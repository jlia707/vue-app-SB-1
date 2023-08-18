import BaseFormFieldVue from '@/components/BaseFormField.vue';

export default {
  components: { BaseFormFieldVue },
  props: ['title', 'error', 'placeholder', 'name', 'value'],
  computed: {
    dataValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
