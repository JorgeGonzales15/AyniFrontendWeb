<template>
  <div class="crop-container flex flex-column align-items-center gap-3 text-white p-3">
    <h1 class="crop-title">My Crops</h1>

    <div class="crop-grid">
      <crop-card
          v-for="crop in displayedCrops"
          :key="crop.id"
          :crop="crop"
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

    <router-link to="/crops/add-crop">
      <pv-button class="p-mr-2 hover:bg-green-700 " style="background-color: rgb(37,183,19); border: none;">Add Crop</pv-button>
    </router-link>
  </div>
</template>

<script>
import CropCard from "@/Management/crops/components/crop-card.component.vue";
import {CropsApiService} from "@/Management/crops/services/crops-api.service";

export default {
  name: "CropsComponent",
  components: {
    CropCard,
  },
  data() {
    return {
      crops: [],
      currentPage: 1,
      pageSize: 6,
      totalRecords: 0,
    };
  },
  computed: {
    displayedCrops() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.pageSize + start;
      return this.crops.slice(start, end);
    },
  },
  methods: {
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
  },
  async mounted() {
    try {
      const cropsService = new CropsApiService();
      const response = await cropsService.getAll(); // Assuming this should be getAllCrops()
      console.log(response.data);
      this.crops = response.data;
      this.totalRecords = this.crops.length;
    } catch (error) {
      console.error("Error fetching crops:", error);
    }
  },
};
</script>

<style >


.crop-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(2, minmax(200px, 1fr));
  grid-gap: 40px;
  max-width: 60%;
}


</style>