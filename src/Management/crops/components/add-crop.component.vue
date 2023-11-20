<template>
  <div class="container flex flex-column align-items-center  gap-3 text-white p-4">

    <div class="form-container bg-black-alpha-50 p-4  border-round-xl shadow-6">
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
    </div>
    <p v-if="showMessage" class="message text-center font-bold text-1xl text-red-500 mt-2">
      {{
        messageType === 'success' ? 'The product has been successfully added.' : (messageType === 'duplicate') ? 'The product already exists in the list.' : 'Data is incomplete'
      }}
    </p>
    <div class="flex gap-3">
    <pv-button class="button  hover:bg-green-700 border-none" type="submit" @click="addPlant">Add Crop</pv-button>
      <router-link to="/crops">
    <pv-button class="button hover:bg-green-700 border-none" >Return</pv-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { CropsApiService } from "@/Management/crops/services/crops-api.service";
import {mapGetters} from "vuex";

export default {
  name: "AddCropComponent", // Cambiado el nombre del componente
  computed: {
    savedUser() {
      return this.$store.state.data.user;
    },
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

      this.newPlant.userId = this.savedUser.id;

      if (this.isFormIncomplete()) {
        this.messageType = "incomplete";
        this.showMessage = true;
        return;
      }

      const cropsApiService = new CropsApiService();
      const response = await cropsApiService.getAll();
      const isDuplicate = response.data.some(crop => crop.name.toLowerCase() === this.newPlant.name.toLowerCase())

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
        userId: this.savedUser.id,
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
  height: 580px;
  overflow-y:auto;

}
.message {
  font-family: 'Archive', sans-serif;
}

label{
  font-weight: bold;
  font-size: 18px;
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
  font-size: 16px;
}
.input::placeholder {
  color: white;
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