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
                :title="title"
                v-for="item in OrderInfo2"
                :key="item.id"
              ></order-info-item-vue>
              <li class="dictionary__item">
                <span class="dictionary__key"> Получатель </span>
                <span class="dictionary__value">
                  Иванова Василиса Алексеевна
                </span>
              </li>
              <li class="dictionary__item">
                <span class="dictionary__key"> Адрес доставки </span>
                <span class="dictionary__value">
                  Москва, ул. Ленина, 21, кв. 33
                </span>
              </li>
              <li class="dictionary__item">
                <span class="dictionary__key"> Телефон </span>
                <span class="dictionary__value"> 8 800 989 74 84 </span>
              </li>
              <li class="dictionary__item">
                <span class="dictionary__key"> Email </span>
                <span class="dictionary__value"> lalala@mail.ru </span>
              </li>
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
                v-for="item in productsCalc2"
                :key="item.productId"
                :item="item"
              >
              </order-item-vue>
            </ul>

            <div class="cart__total">
              <p>Доставка: <b>500 ₽</b></p>
              <p>
                Итого: <b>{{ cartLength }}</b> товара на сумму
                <b> {{ productsSumma | numberFormat }} ₽</b>
              </p>
            </div>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import OrderItemVue from '@/components/OrderItem.vue';
import numberFormat from '@/helpers/numberFormat';
import OrderInfoItemVue from '@/components/OrderInfoItem.vue';

export default {
  filters: { numberFormat },
  components: { OrderItemVue, OrderInfoItemVue },
  computed: {
    ...mapGetters({
      productsCalc2: 'updateOrderInfo',
      productsSumma: 'cartTotalPrice',
      cartLength: 'cartLength',
    }),
    ...mapMutations({
      OrderInfo2: 'updateOrderInfo',
    }),
  },
  created() {
    if (
      this.$store.state.orderInfo && this.$store.state.orderInfo.id === this.$route.params.id
    ) {
      return;
    }
    this.$store.dispatch('loadOrderInfo', this.$route.params.id);
  },
};
</script>
