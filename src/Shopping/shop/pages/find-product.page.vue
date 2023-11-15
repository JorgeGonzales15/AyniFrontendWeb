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
import FindProductMain from "@/Shopping/shop/components/find-product-main.component.vue";
import FindProductSelected from "@/Shopping/shop/components/find-product-selected.component.vue";
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";

export default {
  name: "find-product",
  components: {FindProductSelected, FindProductMain},
  data() {
    return {
      products: null,
      product: null,
      productApi: new ProductsApiService()
    }
  },
  mounted() {
    this.productApi.getAllProducts().then((response) => {
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