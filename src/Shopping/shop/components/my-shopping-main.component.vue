<template>
  <h2 class="center">My Shopping:</h2>
  <div class="container">
    <pv-data-view :value="orders" paginator :rows="2">
      <template #list="slotProps">
        <div class="col-12 my-shopping-container">
          <div class="my-shopping-order-container">
            <div class="product-image">
              <p class="dates-label">Date: {{ slotProps.data.orderedDate }}</p>
              <img :src="`${slotProps.data.product.imageUrl}`" width="300" height="200">
              <p><pv-button :label="slotProps.data.product.name" severity="success" raise class="rates-button"/></p>
            </div>
            <div class="">
              <p>Description: {{ slotProps.data.description }}</p>
              <p>Producer: {{ slotProps.data.user.username }}</p>
              <p>Unit Price: {{ slotProps.data.product.unitPrice }}</p>
              <p>Total Price: {{ slotProps.data.totalPrice }}</p>
              <p>State: {{ slotProps.data.status }}</p>
              <span class="">
              <pv-dialog v-model:visible="visible" modal class="">
                <p class="dialog-text">Thanks for rate</p>
              </pv-dialog>
              </span>
            </div>
          </div>
          <div class="my-shopping-productor-container">
            <div class="productor-image">
              <p class="font-bold">Producer: {{ slotProps.data.user.username }}</p>
              <img src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
                   class="centered-image" width="200" height="200"/>
            </div>
            <div class="productor-image">
              <span v-if="findOrderState(slotProps.data)">
                <p><pv-button label="See state" severity="primary" raise class="rates-button" @click="sendOrderState(slotProps.data)"/></p>
                <p><pv-button label="Cancel " severity="danger" raise class="rates-button" @click="onCancel(slotProps.data)"/></p>
                <pv-dialog v-model:visible="cancelDialog" modal class="rates-dialog">
                  <p class="dialog-text">The order was cancelled</p>
                </pv-dialog>
              </span>
              <span v-else>
                <p><pv-button label="Rate purchase" severity="primary" raise class="rates-button"/></p>
                <p><pv-button label="Re-buy" severity="secondary" raise class="rates-button"/></p>
              </span>
            </div>
          </div>
        </div>
      </template>
    </pv-data-view>
  </div>
</template>

<script>
import {OrderApiService} from "@/Shopping/shop/services/order-api.service";

export default {
  name: "my-shopping-main",
  data() {
    return {
      orderApi: new OrderApiService(),
      visible: false,
      cancelDialog: false,
      changeWindow: false
    }
  },
  props: {
    orders: null
  },
  methods: {
    sendOrderState(selectedItem) {
      this.$emit('orderStateEvent', selectedItem);
    },
    findOrderState(item) {
      if (item.status === 'pending' || item.status === 'on the way'){
        return true;
      }
      return false;
    },
    onCancel(data){
      this.orderApi.delete(data.id)
          .then((response) => {
            console.log(response.data);
            location.reload();
            this.cancelDialog = true;
          })
          .catch((error) => {
            console.error("Error al eliminar el registro:", error);
          });

    }
  }
}
</script>

<style>
.dates-label{
  font-weight: bold;
  font-size: 20px;
}
.my-shopping-container{
  display: flex;
  justify-content: space-between;
}
.my-shopping-order-container{
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 2rem;
}
.my-shopping-productor-container{
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-right: 2rem;
}
</style>