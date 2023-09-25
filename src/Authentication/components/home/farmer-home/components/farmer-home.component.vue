<template>
  <div class="grid-container container">
    <div class="itemCalendar">
      <h3>Today Activities</h3>
      <pv-data-table class="p-datatable-sm" :value="activities" tableStyle="max-width: 30rem">
        <pv-column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></pv-column>
      </pv-data-table>
    </div>
    <div class="itemLogo">
      <img src="./../../../../../assets/logo.png">
    </div>
    <div class="itemAdvertising">
      <h1>ItemAdvertising</h1>
    </div>

    <div class="itemCarousel">
      <h2 class="center">Recent Products</h2>
      <div class="carousel-display">
        <pv-card v-for="product in products" class="farmer-home-card">
          <template #header>
            <img :src="product.image_url" width="350px">
          </template>

          <template #content>
            <p>Unit Price: {{ product.unit_price }}</p>
            <p>Description: {{ product.description }}</p>
          </template>
          <template #footer>
            <pv-button>{{ product.name }}</pv-button>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script>

import {ProductApiService} from "@/Authentication/components/home/farmer-home/services/product-api.service";
import {ActivityApiService} from "@/Authentication/components/home/farmer-home/services/activity-api.service";

export default {
  name: "farmer-home",
  data() {
    return {
      products: [],
      activities: [],
      productApi: new ProductApiService(),
      activityApi: new ActivityApiService(),
      columns: null,
    };
  },
  created() {
    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'finish_date', header: 'Finish Date' }
    ];
  },
  mounted() {
    this.productApi.getAll().then((response) => (this.products = response.data.slice(0,3)));
    this.activityApi.getAll().then((response) => (this.activities = response.data.slice(0,3)));
  }
};
</script>

<style>
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
.itemCalendar {
  grid-area: seccion1;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.itemLogo {
  grid-area: seccion2;
  text-align: center;
}

.itemAdvertising {
  grid-area: seccion3;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .itemCalendar{
    order: 2;
  }
  .itemLogo{
    order: 1;
  }
  .itemCarousel{
    order: 3;
  }
  .itemAdvertising{
    order: 4;
  }
}
</style>