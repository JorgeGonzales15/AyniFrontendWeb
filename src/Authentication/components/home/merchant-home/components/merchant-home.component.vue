<template>
  <div class="grid-container container">
    <div class="itemCalendar">
      <h3 class="header">Your Orders</h3>
      <pv-data-table class="p-datatable-sm" :value="orders" tableStyle="max-width: 100rem">
        <pv-column v-for="col of columns"
                   :key="col.field"
                   :field="col.field"
                   :header="col.header" ></pv-column>
      </pv-data-table>

    </div>

    <div class="itemLogo">
      <img src="./../../../../../assets/logo.png">
    </div>
    <div class="itemAdvertising">
      <h1>ItemAdvertising</h1>
    </div>

    <div class="itemCarousel">
      <h2 class="header">Recent Products</h2>
      <div class="carousel-display">
        <pv-card v-for="product in products" class="farmer-home-card">
          <template #header>
            <img
                :src="product.imageUrl"
                width="350" height="150" class="w-100">
          </template>
          <template #content>
            <p><span class="font-bold">Unit Price:</span> {{ product.unitPrice }}</p>
            <p><span class="font-bold">Description:</span> {{ product.description }}</p>
          </template>
          <template #footer>
            <div class="w-100">
              <pv-button severity="success" class="product-button">{{ product.name }}</pv-button>
            </div>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>

import {OrderApiService} from "@/Shopping/shop/services/order-api.service";
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";

export default {
  name: "merchant-home",
  data() {
    return {
      orders: [],
      products: [],
      //orderDetailApi: new OrderDetailsApiService(),
      ordersApi: new OrderApiService(),
      productApi: new ProductsApiService(),
      columns: null
    };
  },
  created() {
    this.columns = [
      { field: 'status', header: 'Status' },
      { field: 'paymentMethod', header: 'Payment' },
      { field: 'orderedDate', header: 'Ordered Date' },
      { field: 'description', header: 'Description' }
    ];
  },
  mounted() {
    this.productApi.getAllProducts().then((response) => (this.products = response.data.slice(0,3)));
    this.ordersApi.getAll().then((response) => (this.orders = response.data.slice(0,3)));
  },
  methods: {
    toMyShoppingPage() {
      this.$router.push("/my-shopping");
    }
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
.image{
  width: 200px;
  height: 130px;
}
.image-container{
  padding-top: 0.5rem;
  max-height: 100px;
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