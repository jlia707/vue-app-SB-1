<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" href="#" :to="{ name: 'main' }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info" v-if="cartLength > 4 "> {{ cartLength }} товаров </span>
      <span class="content__info" v-else-if="cartLength > 1 "> {{ cartLength }} товарa </span>
      <span class="content__info" v-else> {{ cartLength }} товар </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <cart-item
              v-for="item in productsCalc"
              :key="item.productId"
              :item="item"
            ></cart-item>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
          </p>
          <p class="cart__price">Итого: <span> {{ productsSumma | numberFormat }} </span></p>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import numberFormat from '@/helpers/numberFormat';
import products from '@/data/products';
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'CartPage',
  data() {
    return {
      totalCartProduct: 'товар',
    };
  },
  components: { CartItem },
  filters: { numberFormat },
  computed: {
    ...mapGetters({
      productsCalc: 'cartDetailProducts',
      productsSumma: 'cartTotalPrice',
      cartLength: 'cartLength',
      product() {
        return products.find(
          (product) => product.id === +this.$route.params.id,
        );
      },
    }),
  },
};
</script>
