
<template>
  <div class="product-container">
    <h1 class="product-title">Productos</h1>

    <div class="product-grid">
      <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/Shopping/products/components/product-card.component.vue";
import { ProductsApiService } from "@/Shopping/products/services/products-api.service";

export default {
  name: "ProductsComponent",
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
   async mounted() {
     try {
       const productsService = new ProductsApiService();
       const response = await productsService.getAllProducts();
       this.products = response.data;
     } catch (error) {
       console.error("Error al obtener los productos", error);
     }
  },
};
</script>

