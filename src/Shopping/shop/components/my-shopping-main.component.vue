<template>
  <h2 class="center">My Purchases:</h2>
  <div class="container">
    <pv-data-view :value="orders" paginator :rows="2">
      <template #list="slotProps">
        <div class="col-12 my-shopping-container">
          <div class="my-shopping-order-container">
            <div class="product-image">
              <p class="dates-label">Date: {{ slotProps.data.ordered_date }}</p>
              <img :src="`${slotProps.data.image_url}`" width="300" height="200">
              <p><pv-button :label="slotProps.data.product.name" severity="success" raise class="rates-button"/></p>
            </div>
            <div class="">
              <p>Quantity: {{ slotProps.data.quantity }}</p>
              <p>Producer: {{ slotProps.data.username }}</p>
              <p>Price: {{ slotProps.data.product.unit_price }}</p>
              <p>State: {{ slotProps.data.ordered_state }}</p>
              <span class="">
              <pv-dialog v-model:visible="visible" modal class="">
                <p class="dialog-text">Thanks for rate</p>
              </pv-dialog>
              </span>
            </div>
          </div>
          <div class="my-shopping-productor-container">
            <div class="productor-image">
              <p>Producer: {{ slotProps.data.username }}</p>
              <img :src="`${slotProps.data.image_url}`" width="300" height="200">
            </div>
            <div class="productor-image">
              <span v-if="findOrderState(slotProps.data)">
                <p><pv-button label="See state" severity="primary" raise class="rates-button" @click="sendOrderState(slotProps.data)"/></p>
                <p><pv-button label="Cancel " severity="danger" raise class="rates-button" @click="onCancel"/></p>
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
export default {
  name: "my-shopping-main",
  data() {
    return {
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
      if (item.ordered_state === 'Packaging' || item.ordered_state === 'On the way'){
        return true;
      }
      return false;
    },
    onCancel(){
      this.cancelDialog = true;
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