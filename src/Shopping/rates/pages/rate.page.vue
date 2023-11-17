<template>
  <h2 class="center">Rate orders:</h2>
  <div class="container">
    <pv-data-view :value="orders" paginator :rows="2">
      <template #list="slotProps">
        <div class="col-12 rates-container">
          <div class="rates-image">
            <img :src="`${slotProps.data.imageUrl}`" width="300" height="200">
            <p>
              <pv-button :label="slotProps.data.user.username" severity="secondary" raise class="rates-button"/>
            </p>
          </div>
          <div class="rates-properties">
            <p>
              Date of purchase:
              {{ slotProps.data.orderedDate }}
            </p>
            <p>
              Quantity:
              {{ slotProps.data.quantity }}
            </p>
            <p>
              Producer:
              {{ slotProps.data.user.username }}
            </p>
            <p>
              Price:
              {{ slotProps.data.totalPrice }}
            </p>
            <span class="rates-values">
              <pv-rating v-model="value" :cancel="false" />
              <pv-button label="Rate" @click="onSubmitRate" />
              <pv-dialog v-model:visible="visible" modal class="rates-dialog">
                <p class="dialog-text">Thanks for rate</p>
              </pv-dialog>
            </span>
          </div>
        </div>
      </template>
    </pv-data-view>
  </div>
</template>

<script>
import {OrderApiService} from "@/Shopping/shop/services/order-api.service";

export default {
  name: "rate.page",
  data() {
    return {
      orders: null,
      orderApi: new OrderApiService(),
      value: null,
      visible: false
    };
  },
  mounted() {
    this.orderApi.getAll().then((response) => {
      this.orders = response.data;
    });

  },
  methods : {
    onSubmitRate() {
      this.visible = true;
      this.value = 0;
    }
  }
}
</script>

<style>
.rates-container{
  display: flex;
  gap: 2rem;
  height: 20rem;
  margin: 1rem;
}
.rates-image{
  width: 50%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rates-properties{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.rates-values{
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.rates-dialog{
  width: 20%;
}
.dialog-text{
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.rates-button{
  width: 300px;
}

</style>