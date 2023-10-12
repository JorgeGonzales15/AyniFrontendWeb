<template>
  <div class="grid-container container">

    <div class="itemCarousel">

      <h2 class="center">My Orders:</h2>
      <div class="carousel-display">

        <pv-card v-for="order in orders" class="farmer-home-card">

          <template #header>
            <img :src="order.orders.image_url" class="centered-image"/>
          </template>
          
          <template #title> {{order.orders.merchant_name}}</template>
          <template #subtitle> Requested product: {{order.orders.product_name}} </template>
          <template #content>

            Date: {{order.orders.date}}
            <p></p>

              Description: {{order.orders.description}}
              <p></p>
              Price: {{order.orders.price}}
              <p></p>
              Quantity: {{order.orders.quantity}}

          </template>
          <template #footer>
            <pv-button icon="pi pi-check" label="Accept" />
            <pv-button icon="pi pi-times" label="Decline" severity="secondary" style="margin-left: 0.5em" />
          </template>


        </pv-card>



      </div>
    </div>


  </div>
  <p></p>
  <pv-paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></pv-paginator>
</template>

<script>

import {OrdersService} from "@/Shopping/orders/services/orders.service";

export default {
  name: "my-orders",


  data(){
    return{
      orders: [],
      ordersService: new OrdersService(),
      columns: null,
    }
  },
  mounted() {
    this.ordersService.getAll().then((response) => (this.orders = response.data.slice(0,3)));
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

.centered-image {
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.itemCarousel {
  grid-area: seccion4;
}
.carousel-display{
  display: flex;
  gap: 20px;
}
.farmer-home-card{
  min-width: 30%;
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

  .itemCarousel{
    order: 3;
  }


}
</style>