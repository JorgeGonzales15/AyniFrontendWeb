<template>
  <div class="flex justify-content-center gap-4">
    <div class="w-45 bg-black-alpha-10">
      <h2 class="center pt-5 pb-5">Costs</h2>
      <pv-data-table :value="costs" striped-rows >
        <pv-column field="name" header="Name"/>
        <pv-column field="description" header="Description"/>
        <pv-column field="amount" header="Amount"/>
      </pv-data-table>
      <div class="center pt-5 pb-3">
        <pv-button severity="success" label="See More" @click="onCostsSelected"/>
      </div>
    </div>
    <div class="w-45 bg-black-alpha-10">
      <h2 class="center pb-5 pt-5">Profits</h2>
      <div class="center pr-6 pl-6">
        <pv-data-table :value="profits" striped-rows table-style="">
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

import {UserProfitsApiService} from "@/Finance/services/userProfits-api.service";
import {UserCostsApiService} from "@/Finance/services/userCosts-api.service";

export default {
  name: "select-transaction",
  data() {
    return {
      profits: [],
      costs: [],
      userProfitsApi: new UserProfitsApiService(),
      userCostsApi: new UserCostsApiService()
    }
  },
  methods: {
    onCostsSelected(){
      this.$router.push("/costs");
    },
    onProfitsSelected(){
      this.$router.push("/profits");
    }
  },
  mounted() {
    this.userProfitsApi.getAllProfits(1).then((response) => this.profits = response.data.slice(0, 5));
    this.userCostsApi.getAllCosts(1).then((response) => this.costs = response.data.slice(0, 5));
  }
}
</script>

<style>
.w-45{
  width: 45%;
}
</style>