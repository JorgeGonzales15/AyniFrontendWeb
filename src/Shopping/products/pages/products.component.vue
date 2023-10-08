
<template>
  <div class="product-container flex flex-column align-items-center gap-3 text-white p-3">
    <h1 class="product-title">Productos</h1>

    <div class="product-grid">
      <product-card
          v-for="product in displayedProducts"
          :key="product.id"
          :product="product"
      />
    </div>

    <pv-paginator class="paginator"
        @page="onPageChange"
        :rows="pageSize"
        :totalRecords="totalRecords"
        :style="{background:'none', border: ''}"
        :pt="{
        pageButton: ({ props, state, context }) => ({
        class: context.active ? 'bg-primary hover:bg-blue-600' : 'bg-blue-100 hover:bg-blue-300'
      })
        }"
    ></pv-paginator>

    <router-link to="/products/add-product">
      <pv-button  class="p-mr-2 hover:bg-green-700 " style="background-color: rgb(37,183,19); border: none;">Agregar Producto</pv-button>
    </router-link>
  </div>
</template>

<script>
import ProductCard from "@/Shopping/products/components/product-card.component.vue";
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";

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
<style scoped>
* {
  padding: 0;
  margin: 0;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(2, minmax(150px, 1fr));
  grid-gap: 10px;
  max-width: 50%;
}


</style>