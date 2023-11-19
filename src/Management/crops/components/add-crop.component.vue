<template>
  <div class="container flex flex-column align-items-center  gap-3 text-white p-4">

    <div class="form-container bg-black-alpha-50 p-3  border-round-xl shadow-6">
      <h2 class="text-center mb-4">Enter data for the new crop</h2>
      <form class="form flex flex-wrap text-sm align-items-center justify-content-around gap-4" @submit.prevent="addPlant">

        <div class="form-text flex flex-column gap-3 px-3">
          <div class="form-group">
            <label for="plantName">Plant Name:</label>
            <input id="plantName" v-model="newPlant.name" class="input" placeholder="Enter the name here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantDescription">Plant Description:</label>
            <input id="plantDescription" v-model="newPlant.description" class="input" placeholder="Enter the description here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantDistance">Distance:</label>
            <input id="plantDistance" v-model="newPlant.distance" class="input" placeholder="Enter the distance between crops here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantDepth">Depth:</label>
            <input id="plantDepth" v-model="newPlant.depth" class="input" placeholder="Enter the depth of cultivation here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantWeather">Weather:</label>
            <input id="plantWeather" v-model="newPlant.weather" class="input" placeholder="Enter the suitable climate for the plant here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantGroundType">Ground Type:</label>
            <input id="plantGroundType" v-model="newPlant.groundType" class="input" placeholder="Enter the suitable soil type for the plant here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantSeason">Season:</label>
            <input id="plantSeason" v-model="newPlant.season" class="input" placeholder="Enter the suitable season for the plant here" required type="text">
          </div>
          <div class="form-group">
            <label for="plantImageUrl">Plant Image URL:</label>
            <input id="plantImageUrl" v-model="newPlant.imageUrl" class="input" placeholder="Enter the image URL here" required type="text">
          </div>
        </div>

      </form>
      <p v-if="showMessage" class="message text-center mt-5">
        {{
          messageType === 'success' ? 'The product has been successfully added.' : (messageType === 'duplicate') ? 'The product already exists in the list.' : 'Data is incomplete'
        }}
      </p>
    </div>
    <pv-button class="button p-mr-2 hover:bg-green-700 border-none" type="submit" @click="addPlant">Add Crop</pv-button>

  </div>
</template>

<script>
import { CropsApiService } from "@/Management/crops/services/crops-api.service";
import {mapGetters} from "vuex";

export default {
  name: "AddCropComponent", // Cambiado el nombre del componente
  computed: {
    ...mapGetters('auth', ['getUserId']),
  },
  data() {
    return {
      newPlant: {
        name: "",
        description: "",
        distance: "",
        depth: "",
        weather: "",
        groundType: "",
        season: "",
        imageUrl: "",
        userId: 0,
      },
      showMessage: false,
      messageType: "",
    };
  },
  methods: {
    async addPlant() {
      if (this.isFormIncomplete()) {
        this.messageType = "incomplete";
        this.showMessage = true;
        return;
      }

      const cropsApiService = new CropsApiService();
      const verify = await cropsApiService.findByTitle(this.newPlant.name);
      const isDuplicate = Array.isArray(verify.data) && verify.data.length > 0;

      if (isDuplicate) {
        this.messageType = "duplicate";
        this.showMessage = true;
        return;
      }

      const apiData = {
        name: this.newPlant.name,
        description: this.newPlant.description,
        distance: this.newPlant.distance,
        depth: this.newPlant.depth,
        weather: this.newPlant.weather,
        groundType: this.newPlant.groundType,
        season: this.newPlant.season,
        imageUrl: this.newPlant.imageUrl,
        userId: 1,/*this.getUserId,*/
      };

      cropsApiService.create(JSON.stringify(apiData)).then((response) => {
        console.log(response.data);
        this.messageType = "success";
        this.showMessage = true;
      }).catch((error) => {
        this.showMessage = false;
        console.error("Error creating crop:", error);
      });

      // Restablecer las propiedades del nuevo cultivo después de enviar los datos
      this.newPlant = {
        name: "",
        description: "",
        distance: "",
        depth: "",
        weather: "",
        groundType: "",
        season: "",
        imageUrl: "",
        userId: 0,
      };
    },
    isFormIncomplete() {
      return !this.newPlant.name ||
          !this.newPlant.description ||
          !this.newPlant.distance ||
          !this.newPlant.depth ||
          !this.newPlant.weather ||
          !this.newPlant.groundType ||
          !this.newPlant.season ||
          !this.newPlant.imageUrl;
    },
  },
};
</script>


<style scoped>

.form-container {
  font-family: 'Archive', sans-serif;
  width: 60%;
}

label{
  font-weight: bold;
}

.form-text{
  min-width: 360px;
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
  .form-container {
    width: 80%;
  }
}
</style>