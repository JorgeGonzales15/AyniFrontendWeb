<template>
  <div class="container flex justify-content-center gap-4">
    <div class="w-45 bg-black-alpha-10">
      <h2 class="center pt-5 pb-5 text-white">Costs</h2>
      <pv-data-table :value="costs" striped-rows class="overflow-y-auto h-30rem">
        <pv-column field="name" header="Name"/>
        <pv-column field="description" header="Description"/>
        <pv-column field="amount" header="Amount"/>
      </pv-data-table>
      <div class="center pt-5 pb-3">
        <pv-button severity="success" label="See More" @click="onCostsSelected"/>
      </div>
    </div>
    <div class="w-45 bg-black-alpha-10 text-white">
      <h2 class="center pb-5 pt-5">Profits</h2>
      <div class="center pr-6 pl-6">
        <pv-data-table :value="profits" striped-rows class="overflow-y-auto h-30rem">
          <pv-column field="nameP" header="Name"/>
          <pv-column field="descriptionP" header="Description"/>
          <pv-column field="amountP" header="Amount"/>
        </pv-data-table>
      </div>
      <div class="center pt-5 pb-3">
        <pv-button severity="success" label="See More" @click="onProfitsSelected"/>
      </div>
    </div>
  </div>
</template>

<script>
// Import necessary classes
import { UserProfitsApiService } from "@/Finance/services/userProfits-api.service";
import { UserCostsApiService } from "@/Finance/services/userCosts-api.service";

export default {
  name: "select-transaction",
  data() {
    // Initialize component data
    return {
      profits: [], // Array to store the retrieved profits
      costs: [], // Array to store the retrieved costs
      userProfitsApi: new UserProfitsApiService(), // Instance of the API service to manage user profits
      userCostsApi: new UserCostsApiService() // Instance of the API service to manage user costs
    }
  },
  computed: {
    // Computed property to get the current user from the state storage
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    // Navigate to the costs page
    onCostsSelected() {
      this.$router.push("/costs");
    },
    // Navigate to the profits page
    onProfitsSelected() {
      this.$router.push("/profits");
    }
  },
  mounted() {
    // Fetch a subset of profits for the current user when the component is mounted
    this.userProfitsApi.getAllProfits(this.currentUser.id).then((response) => this.profits = response.data.slice(0, 5));
    // Fetch a subset of costs for the current user when the component is mounted
    this.userCostsApi.getAllCosts(this.currentUser.id).then((response) => this.costs = response.data.slice(0, 5));
  }
}
</script>

<style>
.w-45{
  width: 45%;
}
</style>