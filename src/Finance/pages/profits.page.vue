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
import {UserProfitsApiService} from "@/Finance/services/userProfits-api.service";

export default {
  name: "ProfitsPage",
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      totalRecords: 0,
      profits: [],
      userProfitApi: new UserProfitsApiService()
    }
  },
  computed: {
    displayedProfits() {
      const start = (this.currentPage-1) * this.pageSize;
      const end = this.pageSize + start;
      return this.profits.slice(start, end);
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    onReturn(){
      this.$router.push("/select-transaction");
    },
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
    onAddProfit(){
      this.$router.push("/profits/add-profit");
    }
  },
  mounted() {
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