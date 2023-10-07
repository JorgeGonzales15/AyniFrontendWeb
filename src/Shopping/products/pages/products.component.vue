<template>
  <div class="product-container">
    <h1 class="product-title">Productos disponibles</h1>
    <div class="product-grid">
      <pv-card v-for="product in products" class="product-card" :key="product.id">
        <template class="content" #content>
          <img class="product-image" alt="product image" :src="product.image_url" />
          <h2 class="product-name">{{ product.name }}</h2>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";

export  default {
  name: 'ProductsComponent',
  data(){
    return{
      products: [],
    };
  },
  mounted(){
    const productsService = new ProductsApiService();
    productsService.getAllProducts().then((response)=>{
      this.products = response.data;
    }).catch((error) => {
      console.error('Error al obtener los productos', error);
    });
  },

}

</script>
<style>
.product-container {
  font-family: 'Segoe UI', sans-serif;
  padding: 100px;
  text-align: center;
}

.product-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  grid-gap: 40px;
}

.product-card {
  background-color: rgba(14, 14, 14, 0.43) !important; /* Fondo negro más oscuro */
  padding: 20px;
}

.product-image {
  width: 170px;
  height: 200px;
}

.product-name {
  font-size: 18px;
  margin-top: 10px;
  color: white;
  background: rgba(63, 237, 36, 0.8);
  padding: 10px 0;
}

@media (max-width: 768px) {
  /* Estilos para pantallas más pequeñas (responsive) */
  .product-grid {
    grid-template-columns: 1fr; /* Una columna en pantallas pequeñas */
  }
}
</style>