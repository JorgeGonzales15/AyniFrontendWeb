<template>
  <div class="container flex flex-column align-items-center  gap-3 text-white p-3">

    <div class="form-container bg-black-alpha-50 py-3 px-4  border-round-xl shadow-6">
      <h2 class="text-center">Ingrese los datos de la nueva planta</h2>
      <form class="form flex text-sm align-items-center" @submit.prevent="addPlant">

        <div class="form-text flex flex-column gap-3 px-3">
          <div class="form-group">
            <label for="plantName">Nombre de la Planta:</label>
            <input id="plantName" v-model="newPlant.name" class="input" placeholder="Ingrese el nombre aquí" required
                   type="text">
          </div>
          <div class="form-group">

            <label  for="plantDistance">Distancia:</label>
            <input id="plantDistance" v-model="newPlant.distance" class="input"
                   placeholder="Ingrese la distancia entre cultivos aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantDepth">Profundidad:</label>
            <input id="plantDepth" v-model="newPlant.depth" class="input"
                   placeholder="Ingrese la profundidad del cultivo aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantClimate">Clima:</label>
            <input id="plantClimate" v-model="newPlant.climate" class="input"
                   placeholder="Ingrese el clima adecuado de la planta aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantSoilType">Tipo de tierra:</label>
            <input id="plantSoilType" v-model="newPlant.soilType" class="input"
                   placeholder="Ingrese el tipo de tierra adecuado para la planta aquí"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantSeason">Temporada:</label>
            <input id="plantSeason" v-model="newPlant.season" class="input"
                   placeholder="Ingrese la temporada adecuada para la planta aquí"
                   required type="text">
          </div>
        </div>

        <div class=" form-image flex flex-column align-items-center gap-3 px-3">
          <label class="cursor-pointer" for="plantImage">Imagen de la Planta:</label>
          <input id="plantImage" class="hidden" type="file" @change="handleImageUpload">
          <img :src="imagePreview || defaultImageUrl" alt="Vista previa de la imagen" class="max-w-15rem max-h-15rem">
        </div>

      </form>
      <p v-if="showMessage" class="message text-center">
        {{
          messageType === 'success' ? 'El producto ha sido agregado con éxito.' : (messageType === 'duplicate') ? 'El producto ya existe en la lista.' : 'Los datos estan incompletos'
        }}
      </p>
    </div>
    <pv-button class="button p-mr-2 hover:bg-green-700 border-none" type="submit" @click="addPlant">Agregar Planta
    </pv-button>

  </div>
</template>

<script>
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";

export default {
  name: "AddProductComponent",
  data() {
    return {
      newPlant: {
        name: "",
        distance: "",
        depth: "",
        climate: "",
        soilType: "",
        season: "",
        image_url: null
      },
      selectedImage: null,
      imagePreview: null,
      showMessage: false,
      messageType: '',
      defaultImageUrl: 'https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
    };
  },
  methods: {
    async addPlant() {

      if (this.isFormIncomplete()) {
        this.messageType = 'incomplete';
        this.showMessage = true;
        return;
      }
      const productsApiService = new ProductsApiService();
      const verify = await productsApiService.findProductByTitle(this.newPlant.name);
      const isDuplicate = Array.isArray(verify.data) && verify.data.length > 0;

      if (isDuplicate) {
        this.messageType = 'duplicate';
        this.showMessage = true;
        return;
      }

      productsApiService.createProduct(JSON.stringify(this.newPlant)).then((response) => {
        console.log(response.data);
        this.messageType = 'success';
        this.showMessage = true;

      }).catch((error) => {
        this.showMessage = false;
        console.error("Error al crear el registro:", error);
      });

      this.newPlant = {
        name: "",
        distance: "",
        depth: "",
        climate: "",
        soilType: "",
        season: "",
        image_url: null
      };
      this.selectedImage = null;
      this.imagePreview = null;
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = file;
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    isFormIncomplete() {
      return !this.newPlant.name ||
          !this.newPlant.distance ||
          !this.newPlant.depth ||
          !this.newPlant.climate ||
          !this.newPlant.soilType ||
          !this.newPlant.season ||
          !this.selectedImage;
    }
  }
};
</script>


<style scoped>
.form-container {
  font-family: 'Archive', sans-serif;
  width: 60%;
  min-height: 522px;
}
.form-image, .form-text {
  width: 50%;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input {
  color: white;
  padding: 5px;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
}
.input::placeholder {
  color: white;
}
.message {
  color: rgba(59, 251, 3, 0.98);
}
.button {
  background-color: rgb(37, 183, 19);
}
@media screen and (max-width: 768px) {
  .form {
    flex-direction: column;
  }
  .form-container {
    width: 80%;
  }
  .form-image, .form-text {
    width: 100%;
    padding: 20px;
  }
}
</style>