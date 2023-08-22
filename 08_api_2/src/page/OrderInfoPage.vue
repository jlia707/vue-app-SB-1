<template>
  <div>
    <main class="content container">
      <div class="content__top">
        <ul class="breadcrumbs">
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="index.html"> Каталог </a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="cart.html"> Корзина </a>
          </li>
          <li class="breadcrumbs__item">
            <a class="breadcrumbs__link"> Оформление заказа </a>
          </li>
        </ul>

        <h1 class="content__title">Заказ оформлен <span>№ 23621</span></h1>
      </div>

      <section class="cart">
        <form class="cart__form form" action="#" method="POST">
          <div class="cart__field">
            <p class="cart__message">
              Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту
              придет письмо с&nbsp;деталями заказа. Наши менеджеры свяжутся
              с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
            </p>

            <ul class="dictionary">
              <order-info-item-vue
                title="Получатель"
                :item="orderInfo.name"
              ></order-info-item-vue>
              <order-info-item-vue
                title="Адрес доставки"
                :item="orderInfo.address"
              ></order-info-item-vue>
              <li class="dictionary__item">
                <span class="dictionary__key"> Адрес доставки </span>
                <span class="dictionary__value">
                  Москва, ул. Ленина, 21, кв. 33
                </span>
              </li>
              <order-info-item-vue
                title="Телефон"
                :item="orderInfo.phone"
              ></order-info-item-vue>
              <order-info-item-vue
                title="Email"
                :item="orderInfo.email"
              ></order-info-item-vue>
              <li class="dictionary__item">
                <span class="dictionary__key"> Способ оплаты </span>
                <span class="dictionary__value"> картой при получении </span>
              </li>
            </ul>
          </div>

          <div class="cart__block">
            <ul class="cart__orders">
              <order-item-vue
                class="cart__order"
                v-for="item in orderInfo.basket.items"
                :key="item.id"
                :item="item"
              >
              </order-item-vue>
            </ul>
          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого: <b>
              {{ orderInfo.basket.items.length }}</b> товара на сумму <b>
              {{ orderInfo.totalPrice }} ₽</b></p>
          </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import OrderItemVue from '@/components/OrderItem.vue';
import numberFormat from '@/helpers/numberFormat';
import OrderInfoItemVue from '@/components/OrderInfoItem.vue';

export default {
  filters: { numberFormat },
  components: {
    OrderItemVue, OrderInfoItemVue,
  },
  computed: {
    ...mapState(['orderInfo']),
  },
  created() {
    if (
      this.$store.state.orderInfo && this.$store.state.orderInfo.id === this.$route.params.id
    ) {
      return;
    }
    this.$store.dispatch('loadOrderInfo', this.$route.params.id);
  },
  methods: {
    ...mapActions(['loadOrderInfo']),
    ...mapMutations({
      productsCalc: 'updateOrderInfoData',
    }),
    // не получилось через скобки связать
  },
};
</script>
