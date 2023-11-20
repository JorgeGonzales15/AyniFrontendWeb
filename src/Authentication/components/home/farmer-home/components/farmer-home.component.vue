<template>
  <div class="home">

    <div class="hero-section">
      <h1>Welcome to Ayni {{currentUser.username}}</h1>
      <p>Manage your crops, products, finances, orders, and activities efficiently.</p>
    </div>

    <div class="features-section">
      <div class="feature">
        <img
            alt="My Crops Icon"
            src="https://gonzalesequipment.com/wp-content/uploads/2018/10/bigstock-Farmer-Checking-The-Quality-Of-242888065.jpg"/>
        <h2>My Crops</h2>
        <p>Explore and manage your crops easily.</p>
        <router-link class="btn btn-green" to="/crops">Learn more</router-link>
      </div>

      <!--<div class="feature">
        <img
            alt="Products Icon"
            src="https://www.unlockfood.ca/getattachment/3405ed4c-970c-4ce8-a3dd-071097f9586e/bigstock-Low-cholesterol-vegan-plant-ba-429847295.jpg.aspx"/>
        <h2>Products</h2>
        <p>Visualize and manage your products effectively.</p>
        <router-link class="btn btn-green" to="/products">Explore</router-link>
      </div>-->

      <div class="feature">
        <img alt="Finance Icon" src="https://wwflac.awsassets.panda.org/img/original_ww128655_674524.jpg"/>
        <h2>Finances</h2>
        <p>Keep track of your finances and transactions.</p>
        <router-link class="btn btn-green" to="/select-transaction">Details</router-link>
      </div>

      <div class="feature">
        <img
            alt="Orders Icon"
            src="https://assets-global.website-files.com/6298f816727c4877f3fc6f6f/62be01d4d2b9b25161b14bdc_6088aa5e500d043933821ce9_Green_Ethical_Sustainable_Retail_shutterstock_1698156682.jpeg"/>
        <h2>Orders</h2>
        <p>Manage your buyer's orders in an organized manner.</p>
        <router-link class="btn btn-green" to="/my-orders">View Orders</router-link>
      </div>
    </div>

    <div>
      <!-- Recent Products Section -->
      <div class="recent-products-section">
        <h2>Recent Products</h2>
        <div class="recent-products p-grid">
          <div v-for="product in recentProducts" :key="product.id" class="recent-product p-col-12 p-md-4">
            <img :alt="product.name" :src="product.imageUrl" class="product-image"/>
            <h3 class="product-name">{{ product.name }}</h3>
          </div>
        </div>
      </div>
      <div class="tables flex border-red-900">
        <!-- Financials Section -->
        <div class="financials-section">
          <h2 class="header">Profits</h2>
          <div class="itemAdvertising">
            <pv-data-table :value="profits" class="p-datatable-sm" tableStyle="max-width: 100rem">
              <pv-column v-for="col of columnsF" :key="col.field" :field="col.field" :header="col.header"></pv-column>
            </pv-data-table>
          </div>
        </div>

        <!-- Activities Calendar Section -->
        <div class="calendar-section">
          <h2>Activities Calendar</h2>
          <div class="itemCalendar">
            <pv-data-table :value="activities" class="p-datatable-sm" tableStyle="max-width: 100rem">
              <pv-column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></pv-column>
            </pv-data-table>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {ProductsApiService} from "@/Shopping/products/services/products-api.service";
import {ActivityApiService} from "@/Authentication/components/home/farmer-home/services/activity-api.service";
import {UserProfitsApiService} from "@/Finance/services/userProfits-api.service";

export default {
  name: "farmer-home",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      recentProducts: [],
      activities: [],
      profits: [],
      columns: null,
      columnsF: null,
      activityApi: new ActivityApiService(),
      profitsApi: new UserProfitsApiService(),
    };
  },
  created() {
    this.columns = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'start_date', header: 'Start Date' },
      { field: 'finish_date', header: 'Finish Date' }
    ];
    this.columnsF = [
      { field: 'nameP', header: 'Name' },
      { field: 'descriptionP', header: 'Description' },
      { field: 'amountP', header: 'Amount' }
    ];
  },
  mounted() {
    this.loadRecentProducts();
    this.activityApi.getAll().then((response) => (this.activities = response.data.slice(0, 3)));
    this.profitsApi.getAllProfits(this.currentUser.id).then((response) => (this.profits = response.data.slice(0, 3)));
  },
  methods: {
    async loadRecentProducts() {
      try {
        const productsApiService = new ProductsApiService();
        const response = await productsApiService.getAllProducts();
        const sortedProducts = response.data.sort((a, b) => b.id - a.id);
        this.recentProducts = sortedProducts.slice(0, 3);
      } catch (error) {
        console.error('Error loading recent products:', error);
      }
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
  font-family: 'Archive', sans-serif;
}

.hero-section {
  background: linear-gradient(to bottom, #7cde80, #2ea434);
  color: #fff;
  padding: 40px;

  border-radius: 15px;
  margin-bottom: 40px;
  text-align: center;
}

.features-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 40px;
}

.feature {
  flex: 1;
  max-width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  transition: box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.feature img {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.feature img:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  margin-top: 10px;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s;
  background-color: #4CAF50;
}

.btn:hover {
  background-color: #388e3c;
}

.recent-products-section {
  margin-top: 50px;
  text-align: center;
}

.recent-products {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.recent-product {
  max-width: 250px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  transition: transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recent-product:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.recent-product img {
  max-width: 100%;
  width: 350px;
  height: 150px;
  border-radius: 5px;
}

.recent-product h3 {
  font-size: 1.2em;
  margin: 10px 0;
  color: #2c3e50;
}

.recent-product p {
  color: #555;
}

.tables{
  display: flex;
  justify-content: center;
  align-items: center;
  gap:80px;
  margin: 40px 100px;
}
@media only screen and (max-width: 1200px) {

  .tables {
  flex-wrap: wrap;
  }
}

</style>
