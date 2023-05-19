<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        href="#"
        class="pagination__link pagination__link--arrow pagination__link--disabled"
        aria-label="Предыдущая страница"
        @click.prevent="paginatePrev"
        v-bind:key="page"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li
      class="pagination__item"
      v-for="pageNumer in pages"
      v-bind:key="pageNumer"
    >
      <a
        href="#"
        class="pagination__link"
        v-bind:class="{ 'pagination__link--current': pageNumer === page }"
        @click.prevent="paginate(pageNumer)"
      >
        {{ pageNumer }}
      </a>
    </li>
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
        @click.prevent="paginateNext"
      >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    paginatePrev() {
      if (this.page === 1) return;
      this.paginate(this.page - 1);
    },
    paginateNext() {
      if (this.page === this.pages) return;
      this.paginate(this.page + 1);
    },
  },
};
</script>
