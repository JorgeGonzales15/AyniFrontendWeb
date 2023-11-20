<template>
  <div class="crop-details-container flex flex-column gap-4 align-items-center bg-black-alpha-50 p-4 border-round-xl shadow-6 mt-6" v-if="crop">
    <h1 class="text-center text-white">{{ crop.name }}</h1>

    <div class="crop-details flex flex-wrap justify-content-center gap-4">
      <img :src="crop.imageUrl" alt="Crop Image" class="crop-image" />

      <div class="crop-info">
        <p><strong>Description:</strong> {{ crop.description }}</p>
        <p><strong>Distance:</strong> {{ crop.distance }}</p>
        <p><strong>Depth:</strong> {{ crop.depth }}</p>
        <p><strong>Weather:</strong> {{ crop.weather }}</p>
        <p><strong>Ground Type:</strong> {{ crop.groundType }}</p>
        <p><strong>Season:</strong> {{ crop.season }}</p>
      </div>
    </div>

    <div class="flex flex-wrap gap-4">
    <pv-button class="sell-button p-button-success px-4 py-2 max-w-10rem" v-if="!productSold" @click="openSellDialog" label="Sell product" icon="pi pi-external-link" />
    <pv-button class="sell-button p-button-success px-4 py-2 max-w-10rem" v-if="productSold" label="Product Sold" icon="pi pi-check" />
    <router-link to="/crops">
      <pv-button class="button p-button-success hover:bg-green-700 border-none" >Return</pv-button>
    </router-link>
    </div>

    <!-- PrimeVue Dialog for selling crop -->
    <pv-dialog v-model:visible="visible" @onHide="resetForm()" modal header="Sell Product" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <div  class="flex flex-column gap-2">
        <label for="name">Name:</label>
        <pv-input-text class="p-1" type="text"  v-model="name" placeholder="Enter name" :class="{ 'p-invalid': !name }" disabled/>
        <pv-message v-if="productNameExists" severity="error">A product with the same name already exists and it is sold.</pv-message>

        <label for="description">Description:</label>
        <pv-input-text class="p-1" type="text"   v-model="description" placeholder="Enter description" :class="{ 'p-invalid': !description }" />

        <label for="unitPrice">Unit Price:</label>
        <pv-inputnumber class="p-1" type="number"  v-model="unitPrice" placeholder="Enter unit price" :class="{ 'p-invalid': !unitPrice }"/>

        <label for="quantity">Quantity:</label>
        <pv-inputnumber class="p-1" type="number" v-model="quantity" placeholder="Enter quantity" :class="{ 'p-invalid': !quantity }"/>

        <label for="imageUrl">Image URL:</label>
        <pv-input-text class="p-1" type="text"  v-model="imageUrl" placeholder="Enter image URL" :class="{ 'p-invalid': !imageUrl }" />
      </div>

      <template #footer>
        <pv-button label="Confirm Sell" @click="sellCrop" class="p-button-success px-4 py-2" />

      </template>
    </pv-dialog>
  </div>
</template>

<script>
import { CropsApiService } from "@/Management/crops/services/crops-api.service";
import { ProductsApiService } from "@/Shopping/products/services/products-api.service";



export default {
  name: 'CropDetailsComponent',
  data() {
    return {
      crop: null,
      visible: false,
      productSold: false,
      name:'',
      description:'',
      unitPrice: null,
      quantity: null,
      imageUrl:'',
      productNameExists: false,
    };
  },
  async created() {
    try {
      const cropsService = new CropsApiService();
      const response = await cropsService.getAll();
      const cropId = Number(this.$route.params.id);

      this.crop = response.data.find((c) => c.id === cropId);
      this.name= this.crop.name;
      this.description= this.crop.description;
      this.unitPrice= this.crop.unitPrice;
      this.quantity= this.crop.quantity;
      this.imageUrl= this.crop.imageUrl;

    } catch (error) {
      console.error('Error fetching crop details:', error);
    }
  },
  methods: {
    openSellDialog() {
      this.visible = true;
    },
    resetForm() {
      this.visible = false;
      this.name = "";
      this.description = "";
      this.unitPrice = null;
      this.quantity = null;
      this.imageUrl = "";
    },
    async sellCrop() {
      try {

        const productData = {
          id: 0,
          name: this.name,
          description: this.description,
          unitPrice: this.unitPrice,
          quantity: this.quantity,
          imageUrl: this.imageUrl,

        };

        const productsService = new ProductsApiService();
        const allProducts = await productsService.getAllProducts();

        const existingProduct = allProducts.data.find(product => product.name === this.name && !product.sold);
        if (existingProduct) {
          this.productNameExists = true;
          return;
        }
        await productsService.createProduct(productData);
        this.productSold = true;
        this.resetForm();
        this.productNameExists = false;

      } catch (error) {
        console.error('Error selling crop:', error);
      }
    }
  },
};
</script>


<style scoped>
*{
  padding:0;
  margin:0;
}
/* Estilos para el componente de detalles del crop */
.crop-details-container {
  max-width: 60%;
  border-radius: 10px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}

.crop-details {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.crop-image {
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.crop-info {
  font-family: Roboto, sans-serif;
  color: #ffffff;
  line-height: 1.5;
}

.crop-info p {
  margin-bottom: 5px;
}

.back-button {
  background-image: linear-gradient(to right, #000000, #1a1a1a);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.back-button:hover {
  background-image: linear-gradient(to right, #f5f5f5, #888);
}
</style>
