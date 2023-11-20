<template>
  <div class="order-container flex flex-column align-items-center gap-3 text-white p-3">
    <h1 class="order-title">My Crops</h1>

    <div class="order-grid" >
      <div v-for="order in displayedCrops"  :key="order.id">
       <div class="order-card ">
          <img class="order-image" src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0" alt="order image_url" />
          <h2 class="order-name">{{ order.user.username }}</h2>
         <p>Date:  {{order.orderedDate}}</p>
         <p>Description:  {{order.description}}</p>
         <p>Status:  {{order.status}}</p>
         <p>Price:  {{order.totalPrice}}</p>
         <p>Payment Method:  {{order.paymentMethod}}</p>
         <pv-button @click="acceptOrder(order)" icon="pi pi-check" label="Accept" />
         <pv-button @click="declineOrder(order)" icon="pi pi-times" label="Decline" severity="secondary" style="margin-left: 0.5em" />
        </div>
      </div>
    </div>

    <pv-paginator class="paginator mt-5"
                  @page="onPageChange"
                  :rows="pageSize"
                  :totalRecords="totalRecords"
                  :style="{background:'none', border: ''}"
                  :pt="{
        pageButton: ({ props, state, context }) => ({
          class: context.active ? 'bg-primary hover:bg-blue-600' : 'bg-blue-100 hover:bg-blue-300'
        })
      }"
    ></pv-paginator>

  </div>
</template>

<script>
import {OrdersService} from "@/Shopping/orders/services/orders.service";

export default {
  name: "my-orders",
  data() {
    return {
      orders: [],
      currentPage: 1,
      pageSize: 6,
      totalRecords: 0,
    };
  },
  computed: {
    displayedCrops() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.pageSize + start;
      return this.orders.slice(start, end);
    },
  },
  methods: {
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
    async acceptOrder(order) {
      try {
        const updatedOrder ={
          description: order.description,
          status: "on the way",
          orderedDate: order.orderedDate,
          totalPrice: order.totalPrice,
          paymentMethod: order.paymentMethod,
          productId: order.product.id,
          userId: order.user.id
        }
        const ordersService = new OrdersService();
        await ordersService.update(order.id, updatedOrder);

        this.orders = this.orders.filter((o) => o.id !== order.id);
        console.log("Order accepted:", order);

      } catch (error) {
        console.error("Error accepting order:", error);
      }
    },
    async declineOrder(order) {
      try {
        const ordersService = new OrdersService();
        await ordersService.delete(order.id);
        this.orders = this.orders.filter((o) => o.id !== order.id);
        console.log("Order declined:", order);
      } catch (error) {
        console.error("Error declining order:", error);
      }
    }
  },
  async mounted() {
    try {
      const ordersService = new OrdersService();
      const response = await ordersService.getAll();
      console.log(response.data);
      this.orders = response.data.filter((a) => a.user.id === 1 /*this.currentUser.id*/ && a.status === "on pending");
      this.totalRecords = this.orders.length;
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  },
};
</script>

<style scoped>
.order-container{
  font-family: 'Archive', sans-serif;
}

.order-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(1, minmax(200px, 1fr));
  grid-gap: 40px;
  max-width: 60%;
}

 .order-card {
   background-color: rgba(35, 32, 32, 0.55);
   border-radius: 10px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   cursor: pointer;
   padding: 20px;
   overflow: hidden;
   max-width: 300px;
   text-align: center;

   @media (max-width: 767px) {
     align-self: center;
     max-width: 100%;
   }
 }

.order-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.order-image {
  width: 100%;
  height: 110px;
  object-fit: cover;
  margin-bottom: 10px;
}

.order-name {
  font-size: 18px;
  margin: 0 auto;
  padding: 5px 0;
  width: 100%;
  color: white;
  background-color: #3EAF2C;
  text-decoration: none !important;
}

</style>