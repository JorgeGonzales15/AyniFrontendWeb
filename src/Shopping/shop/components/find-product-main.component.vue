<template>
  <div class="container">
    <h2 class="center">Available Products:</h2>
    <pv-data-view :value="products" paginator :rows="6">
      <template #list="slotProps">
        <div class="col-4">
          <div class="item">
            <img src="https://th.bing.com/th/id/OIP.BLM0pFxm4dnZFahpArbaAQHaE9?pid=ImgDet&rs=1" width="300" height="200">
            <p><pv-button class="find-button"
                          :label="slotProps.data.name"
                          @click="onSelectedProduct(slotProps.data)"></pv-button></p>
          </div>
        </div>

      </template>
    </pv-data-view>
  </div>

</template>

<script>
export default {
  name: "find-product-main",
  props: {
    products: null
  },
  methods: {
    onSelectedProduct(selectedProduct) {
      this.$emit('selectedProduct', selectedProduct);
    }
  }
}
</script>

<style>
.item {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

}
.find-button{
  width: 300px;
}

</style>