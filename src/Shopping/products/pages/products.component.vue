
<template>
  <div class="product-container">
    <h1 class="product-title">Productos</h1>

    <div class="product-grid">
      <product-card
          v-for="product in displayedProducts"
          :key="product.id"
          :product="product"
      />
    </div>

    <pv-paginator
        @page="onPageChange"
        :rows="pageSize"
        :totalRecords="totalRecords"
    ></pv-paginator>

    <router-link to="/products/add-product">
      <pv-button class="add-button">Agregar Producto</pv-button>
    </router-link>
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
      currentPage: 1,
      pageSize: 6,
      totalRecords: 0,
    };
  },
  computed: {
    displayedProducts() {
      const start = (this.currentPage-1) * this.pageSize;
      const end = this.pageSize + start;
      return this.products.slice(start, end);
    },
  },
  methods: {
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
  },
  async mounted() {
    try {
      const productsService = new ProductsApiService();
      const response = await productsService.getAllProducts();
      this.products = response.data;
      this.totalRecords = this.products.length;
    } catch (error) {
      console.error("Error al obtener los productos", error);
    }
  },
};
</script>