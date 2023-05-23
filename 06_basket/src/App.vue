<template>
  <!-- Vue есть специальный тег component, который позволяет изменять компаненты динамически -->
  <component
    :is='currentPageComponent'
    :page-params='currentPageParams'>
  </component>
</template>

<script>
import eventBus from './eventBus';
import MainPage from './page/MainPage.vue';
import NotFoundPage from './page/NotFoundPage.vue';
import ProductPage from './page/ProductPage.vue';
// задаем обычную переменную ввиде массива
const route = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  name: 'App',
  data() {
    return {
      // main - это название страницы
      currentPage: 'main',
      // необхождимо передавать конкретную страницу соответсвенно
      // добавляем еще одно свойство
      currentPageParams: {},
    };
  },
  methods: {
    gotoPage1(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return route[this.currentPage] || 'NotFoundPage';
    },
  },
  components: { MainPage, ProductPage, NotFoundPage },
  created() {
    eventBus.$on('gotoPageQQQ', (pageName, pageParams) => this.gotoPage1(pageName, pageParams));
  },
};
</script>
