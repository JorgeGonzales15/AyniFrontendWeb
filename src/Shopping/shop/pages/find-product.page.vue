<template>
  <find-product-main v-if="product === null"
                     :products="products"
                     @selectedProduct="handleSelectedProduct">
  </find-product-main>
  <find-product-selected v-else
                         :product="product"
                         :crops="crops"
                         @onCancel="handleBuyCanceled">

  </find-product-selected>
</template>

<script>
import FindProductMain from "@/Shopping/shop/components/find-product-main.component.vue";
import FindProductSelected from "@/Shopping/shop/components/find-product-selected.component.vue";
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";
import {CropsApiService} from "@/Management/crops/services/crops-api.service";

export default {
  name: "find-product",
  components: {FindProductSelected, FindProductMain},
  data() {
    return {
      products: null,
      product: null,
      crops: null,
      productApi: new ProductsApiService(),
      cropsApi: new CropsApiService(),
    }
  },
  mounted() {
    this.productApi.getAllProducts().then((response) => {
      this.products = response.data;
    })
    this.cropsApi.getAll().then((response) => {
      this.crops = response.data;
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