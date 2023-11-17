<template>
  <div class="grid-container container">

    <div class="itemCarousel">

      <h2 class="center">My Orders:</h2>
      <div class="carousel-display">

        <pv-card v-for="order in paginatedOrders" class="farmer-home-card">

          <template #header>
            <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                 class="centered-image" width="200" height="200"/>
          </template>
          
          <template #title> {{order.user.username}}</template>
          <template #subtitle> Requested product: {{order.user.username}} </template>
          <template #content>

            Date: {{order.orderedDate}}
            <p></p>

              Description: {{order.description}}
              <p></p>
              Price: {{order.totalPrice}}
              <p></p>
              Payment Method: {{order.paymentMethod}}

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
  <pv-paginator v-model:first="first" :rows="3" :totalRecords="totalRecords"></pv-paginator>

</template>

<script>

import {UserOrdersApiService} from "@/Shopping/orders/services/UserOrders-api.service";

export default {
  name: "my-orders",


  data(){
    return{
      orders: [],
      ordersService: new UserOrdersApiService(),
      columns: null,
      first: 0,
      totalRecords: 0
    }
  },
  computed: {
    paginatedOrders() {
      const start = this.first;
      const end = start + 3;
      return this.orders.slice(start, end);
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    this.ordersService.getAllOrders(this.currentUser.id).then((response) => {
      this.orders = response.data.slice(0, 6);
      this.totalRecords = response.data.length; // Calcula el total de registros
    });
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