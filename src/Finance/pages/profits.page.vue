<template>
  <div class="container bg-black-alpha-10 p-4">
    <h1 class="center text-white">Profits</h1>

    <div class="profit-grid pt-5 pb-5">
      <div v-for="profit in displayedProfits">
        <div class="pt-4 profit-card">
          <h3 class="center">{{ profit.nameP }}</h3>
          <p class="center pt-3">{{ profit.descriptionP }}</p>
          <p class="center pt-3">${{ profit.amountP }}</p>
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
      <pv-button label="Add Profit" @click="onAddProfit" severity="success"/>
    </div>
  </div>

</template>

<script>
// Import necessary classes
import { UserProfitsApiService } from "@/Finance/services/userProfits-api.service";

export default {
  name: "ProfitsPage",
  data() {
    // Initialize component data
    return {
      currentPage: 1, // Current page number for pagination
      pageSize: 6, // Number of items to display per page
      totalRecords: 0, // Total number of records (profits) available
      profits: [], // Array to store the retrieved profits
      userProfitApi: new UserProfitsApiService() // Instance of the API service to manage user profits
    }
  },
  computed: {
    // Computed property to get the subset of profits to be displayed on the current page
    displayedProfits() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = this.pageSize + start;
      return this.profits.slice(start, end);
    },
    // Computed property to get the current user from the state storage
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    // Navigate back to the select transaction page
    onReturn() {
      this.$router.push("/select-transaction");
    },
    // Method triggered when the page changes in the pagination component
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
    // Navigate to the add profit page
    onAddProfit() {
      this.$router.push("/profits/add-profit");
    }
  },
  mounted() {
    // Fetch all profits for the current user when the component is mounted
    this.userProfitApi.getAllProfits(this.currentUser.id).then((response) => {
      this.profits = response.data;
      this.totalRecords = this.profits.length;
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