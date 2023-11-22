<template>
  <div class="container bg-black-alpha-10 p-4">
    <h1 class="center text-white">Costs</h1>

    <div class="profit-grid pt-5 pb-5">
      <div v-for="cost in displayedCosts">
        <div class="pt-4 profit-card">
          <h3 class="center">{{ cost.name }}</h3>
          <p class="center pt-3">{{ cost.description }}</p>
          <p class="center pt-3">${{ cost.amount }}</p>
          <div class="center pt-3"><pv-button label="Register" severity="success" size="small"/></div>
        </div>
      </div>
    </div>
    <div class="container pt-2 flex justify-content-between">
      <pv-button label="Return" @click="onReturn" severity="success"/>
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
      <pv-button label="Add Cost" @click="onAddCost" severity="success"/>
    </div>
  </div>

</template>

<script>
// Import necessary classes
import { UserCostsApiService } from "@/Finance/services/userCosts-api.service";

export default {
  name: "CostsPage",
  data() {
    // Initialize component data
    return {
      currentPage: 1, // Current page number for pagination
      pageSize: 6, // Number of items to display per page
      totalRecords: 0, // Total number of records (costs) available
      costs: [], // Array to store the retrieved costs
      userCostsApi: new UserCostsApiService() // Instance of the API service to manage user costs
    }
  },
  computed: {
    // Computed property to get the subset of costs to be displayed on the current page
    displayedCosts() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.pageSize + start;
      return this.costs.slice(start, end);
    },
    // Computed property to get the current user from the state storage
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    // Method triggered when the page changes in the pagination component
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
    // Navigate back to the select transaction page
    onReturn() {
      this.$router.push("/select-transaction");
    },
    // Navigate to the add cost page
    onAddCost() {
      this.$router.push("/costs/add-cost");
    }
  },
  mounted() {
    // Fetch all costs for the current user when the component is mounted
    this.userCostsApi.getAllCosts(this.currentUser.id).then((response) => {
      this.costs = response.data;
      this.totalRecords = this.costs.length;
    });
  }
}
</script>

<style>


.profit-grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 40px;
  padding:10px;
}
.profit-card{
  background-color: rgba(35, 32, 32, 0.55);
  color: white;
  padding: 10px;
  min-height: 220px;
  border-radius: 20px;
}

</style>