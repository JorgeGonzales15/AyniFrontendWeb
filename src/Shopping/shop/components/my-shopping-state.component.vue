<template>
  <h2 class="center">State of your purchase:</h2>
  <div class="container">
    <div class="col-12 my-shopping-container">
      <div class="my-shopping-order-container">
        <div class="product-image">
          <p class="dates-label">Date: {{ order.ordered_date }}</p>
          <img :src="`${order.image_url}`" width="300" height="200">
          <p><pv-button :label="order.product.name" severity="secondary" raise class="rates-button"/></p>
        </div>
        <div class="">
          <p>Quantity: {{ order.quantity }}</p>
          <p>Producer: {{ order.username }}</p>
          <p>Price: {{ order.unit_price }}</p>
          <p>State: {{ order.ordered_state }}</p>
        </div>
      </div>
      <div class="my-shopping-productor-container">
        <div class="productor-image">
          <p>Producer: {{ order.username }}</p>
          <img :src="`${order.image_url}`" width="300" height="200">
        </div>
        <div class="productor-image">
          <p><pv-button label="See cultivation plan" severity="primary" raise class="rates-button"/></p>
          <p><pv-button label="Cancel " severity="secondary" raise class="rates-button" @click="onCancel" /></p>
          <pv-dialog v-model:visible="visible" modal class="rates-dialog">
            <p class="dialog-text">The order was cancelled</p>
          </pv-dialog>
        </div>
      </div>
    </div>
    <pv-divider class="divider"></pv-divider>
    <div class="state-container">
      <div class="state-header">
        <h3>Purchase state:</h3>
        <pv-steps :model="items" aria-label="Form Steps" :readonly="false" class="stepper-container">
          <template #item="{ label, item, index, props }">
            <div class="step-container">
              <pv-button v-bind="props.step"
                         :label="index+1"
                         severity="primary"
                         @click="changeState(index+1)"
                         rounded></pv-button>
              <span v-bind="props.label">{{ label }}</span>
            </div>
          </template>
        </pv-steps>
      </div>
      <div class="text-container">
        <template v-if="state === 1">
          <h3>Packaging</h3>
        </template>
        <template v-else-if="state === 2">
          <h3>On the way</h3>
        </template>
        <template v-else>
          <h3>Devoted</h3>
        </template>
      </div>
    </div>
    <p><pv-button label="Return" severity="primary" raise class="return-button" @click="sendOrderState"/></p>
  </div>

</template>

<script>
export default {
  name: "my-shopping-state",
  props: {
    order: null
  },
  data() {
    return {
      items: [
        {label: 'Packaging'},
        {label: 'On the way'},
        {label: 'Devoted'}
      ],
      visible: null,
      state: 1
    }
  },
  mounted() {

  },
  methods: {
    sendOrderState() {
      this.$emit('orderStateEvent', null);
    },
    onCancel(){
      this.visible = true;
    },
    changeState(num){
      this.state = num;
    }
  }
}
</script>

<style>
.my-shopping-container{
  background-color: white;
}
.state-container{
  width: 80%;
  background-color: white;
  padding: 0.5rem;
  margin: 0 auto;

}
.divider{
  padding: 10rem;
}
.step-container{
  display: flex;
  flex-direction: column;
}
.state-header{
  padding: 0.2rem;
  -webkit-box-shadow: 0px 9px 25px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 9px 25px -6px rgba(0,0,0,0.75);
  box-shadow: 0px 9px 25px -6px rgba(0,0,0,0.75);
}
.text-container{
  height: 200px;
}

</style>