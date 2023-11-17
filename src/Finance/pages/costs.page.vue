<template>
  <div class="container bg-black-alpha-10">
    <h1 class="center">Costs</h1>

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
  </div>
  <div class="container pt-2 flex justify-content-between">
    <pv-button label="Return" @click="onReturn" severity="success"/>
    <pv-button label="Add Cost" @click="onAddCost" severity="success"/>
  </div>
</template>

<script>
import {UserCostsApiService} from "@/Finance/services/userCosts-api.service";

export default {
  name: "CostsPage",
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      totalRecords: 0,
      costs: [],
      userCostsApi: new UserCostsApiService()
    }
  },
  computed: {
    displayedCosts() {
      const start = (this.currentPage-1) * this.pageSize;
      const end = this.pageSize + start;
      return this.costs.slice(start, end);
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    onPageChange(event) {
      this.currentPage = event.page + 1;
    },
    onReturn(){
      this.$router.push("/select-transaction");
    },
    onAddCost(){
      this.$router.push("/costs/add-cost");
    }
  },
  mounted() {
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
  grid-gap: 70px;
}
.profit-card{
  background-color: white;
  padding: 10px;
  border-radius: 20px;
}

</style>