<template>
  <div class="grid-container container">
    <div class="itemCalendar">
      <h3>Your Orders</h3>
      <pv-data-table class="p-datatable-sm" :value="orders_payment" tableStyle="max-width: 30rem">
        <pv-column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></pv-column>
      </pv-data-table>
    </div>
    <div class="itemLogo">
      <img src="./../../../../../assets/logo.png">
    </div>
    <div class="itemAdvertising">
      <h1>ItemAdvertising</h1>
    </div>

    <div class="itemCarousel">
      <h2 class="center">Recent Orders</h2>
      <div class="carousel-display">
        <pv-card v-for="order in orders_details">
          <template #header>
            <img :src="order.product.image_url" width="350px">
          </template>

          <template #content>
            <p>Quantity: {{ order.quantity }}</p>
            <p>Unit Price: {{ order.product.unit_price }}</p>
            <p>{{ order.product.description }}</p>
          </template>
          <template #footer>
            <pv-button>{{ order.product.name }}</pv-button>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  OrderDetailsApiService
} from "@/Authentication/components/home/merchant-home/services/order-details-api.service";
import {
  OrderPaymentApiService
} from "@/Authentication/components/home/merchant-home/services/order-payment-api.service";

export default {
  name: "merchant-home",
  data() {
    return {
      orders_details: [],
      orders_payment: [],
      orderDetailApi: new OrderDetailsApiService(),
      orderPaymentApi: new OrderPaymentApiService(),

      columns: null,
      responsiveOptions: [
        {breakpoint: '1199px', numVisible: 3, numScroll: 3},
        {breakpoint: '991px', numVisible: 2, numScroll: 2},
        {breakpoint: '767px', numVisible: 1, numScroll: 1}
      ]
    };
  },
  created() {
    this.columns = [
      { field: 'order_detail.product.name', header: 'Name' },
      { field: 'order_detail.quantity', header: 'Quantity' },
      { field: 'ordered_date', header: 'Ordered Date' }
    ];
  },
  mounted() {
    this.orderPaymentApi.getAll().then((response) => (this.orders_payment = response.data.slice(0,5)));
    this.orderDetailApi.getAll().then((response) => (this.orders_details = response.data.slice(0,3)));
  }
};
</script>

<style>
.container{
  max-width: 1400px;
  margin: 0 auto;
}
.grid-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  grid-row-gap: 5rem;
  grid-template-areas:
    "seccion1 seccion2 seccion3"
    "seccion4 seccion4 seccion4";
}
.itemCalendar {
  grid-area: seccion1;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.itemLogo {
  grid-area: seccion2;
  text-align: center;
}

.itemAdvertising {
  grid-area: seccion3;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.itemCarousel {
  grid-area: seccion4;
}
.carousel-display{
  display: flex;
  gap: 20px;
}
@media (max-width: 1024px) {
  .carousel-display{
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .grid-container{
    display: flex;
    flex-direction: column;
  }
  .itemCalendar{
    order: 2;
  }
  .itemLogo{
    order: 1;
  }
  .itemCarousel{
    order: 3;
  }
  .itemAdvertising{
    order: 4;
  }
}
</style>