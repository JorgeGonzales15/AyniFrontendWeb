<template>
  <find-product-main v-if="product === null"
                     :products="products"
                     @selectedProduct="handleSelectedProduct">
  </find-product-main>
  <find-product-selected v-else
                         :product="product"
                         @onCancel="handleBuyCanceled">

  </find-product-selected>
</template>

<script>
import {ProductApiService} from "@/Authentication/components/home/farmer-home/services/product-api.service";
import FindProductMain from "@/Shopping/shop/components/find-product-main.component.vue";
import FindProductSelected from "@/Shopping/shop/components/find-product-selected.component.vue";

export default {
  name: "find-product",
  components: {FindProductSelected, FindProductMain},
  data() {
    return {
      products: null,
      product: null,
      productApi: new ProductApiService()
    }
  },
  mounted() {
    this.productApi.getAll().then((response) => {
      this.products = response.data;
    })
  },
  methods: {
    handleSelectedProduct(selectedProduct) {
      this.product = selectedProduct;
    },
    handleBuyCanceled() {
      this.product = null;
    }

  }
}
</script>

<style>

</style>