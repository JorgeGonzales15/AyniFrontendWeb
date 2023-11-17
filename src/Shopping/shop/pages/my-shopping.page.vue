<template>
  <my-shopping-main v-if="order === null"
                    :orders="orders"
                    @orderStateEvent="handleOrderState($event)">
  </my-shopping-main>
  <my-shopping-state v-else
                     @orderStateEvent="handleOrderState($event)"
                     :order="order" >
  </my-shopping-state>
</template>

<script>

import {OrderApiService} from "@/Shopping/shop/services/order-api.service";
import MyShoppingMain from "@/Shopping/shop/components/my-shopping-main.component.vue";
import MyShoppingState from "@/Shopping/shop/components/my-shopping-state.component.vue";

export default {
  name: "my-shopping",
  components: {MyShoppingState, MyShoppingMain},
  data() {
    return {
      orders: null,
      orderApi: new OrderApiService(),
      order: null
    };
  },
  mounted() {
    this.orderApi.getAll().then((response) => {
      console.log(response.data);
      this.orders = response.data;
    });
  },
  methods : {
    handleOrderState(orderState){
      this.order = orderState;
    }
  }
}
</script>

<style>

</style>