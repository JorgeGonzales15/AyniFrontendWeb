<script>
import {CropsContentApiService} from "@/Management/crops/services/crops-content-api.service";

export default {
  name: "crops",
  data() {
    return {
      crops: [],
      cropsService: new CropsContentApiService(),
      columns: null,
    };
  },
  mounted() {
    this.cropsService.getAll().then((response) => (this.crops = response.data.slice(0,3)));
  }
}

</script>

<template>
  <div class="grid-container container">
    <div class="itemCarousel">
      <h2 class="center text-center">My Crops:</h2>
      <div class="carousel-display">
        <pv-card v-for="crop in crops" class="farmer-home-card">
          <template #header>
            <img :src="crop.image_url" class="centered-image mx-auto"/>
          </template>
          <template #title> <div class="text-center">{{crop.name}} </div></template>
          <template #content>
            <div class="text-center">{{crop.description}}</div>
          </template>
          <template #footer>
            <pv-button label="Ver más" class="centered-image mx-auto" />
          </template>
        </pv-card>
      </div>
    </div>
  </div>
  <p></p>
  <pv-paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></pv-paginator>
</template>

<style scoped>
.container{
  max-width: 1400px;
  margin: 0 auto;
}
.grid-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  grid-row-gap: 5rem;
  grid-template-areas:
    "seccion1 seccion2 seccion3"
    "seccion4 seccion4 seccion4";
}

.centered-image {
  display: block;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}
.itemCarousel {
  grid-area: seccion4;
}
.carousel-display{
  display: flex;
  gap: 20px;
}
.farmer-home-card{
  min-width: 30%;
}
@media (max-width: 1024px) {
  .carousel-display{
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .grid-container{
    display: flex;
    flex-direction: column;
  }

  .itemCarousel{
    order: 3;
  }


}
</style>