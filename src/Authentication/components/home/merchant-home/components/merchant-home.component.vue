<template>
  <div class="home">

    <div class="hero-section">
      <h1>Welcome to Ayni Marketplace, {{ currentUser.username }}</h1>
      <p>Discover fresh and locally sourced products from our farmers. Enjoy a seamless shopping experience.</p>
    </div>

    <div class="features-section">
      <div class="feature">
        <img
            alt="Explore Products Icon"
            class="h-10rem"
            src="https://www.unlockfood.ca/getattachment/3405ed4c-970c-4ce8-a3dd-071097f9586e/bigstock-Low-cholesterol-vegan-plant-ba-429847295.jpg.aspx"
        />
        <h2>Explore Products</h2>
        <p>Discover a variety of fresh and locally produced goods.</p>
        <router-link class="btn btn-green" to="/my-shopping">Explore Now</router-link>
      </div>

      <div class="feature">
        <img alt="Order History Icon"   class="h-10rem" src="https://www.netsuite.com/portal/assets/img/products-redwood/erp/social-order-management.jpg" />
        <h2>Order History</h2>
        <p>Track and manage your order history with ease.</p>
        <router-link class="btn btn-green" to="/my-shopping">View Orders</router-link>
      </div>

      <div class="feature">
        <img
            class="h-10rem"
            alt="Rate Products Icon"
            src="https://i.fbcd.co/products/resized/resized-750-500/b8c6e8130e5374f4e5fdc903feaad917814bd58caef6a8d9a2c48f20b983bc33.jpg"
        />
        <h2>Rate Products</h2>
        <p>Share your experience by rating and reviewing the products you've purchased.</p>
        <router-link class="btn btn-green" to="/rates">Rate Now</router-link>
      </div>

      <!-- Add more buyer-focused features as needed -->
    </div>

    <div>
      <!-- Recent Products Section -->
      <div class="recent-products-section">
        <h2>Your Recent Purchases</h2>
        <div class="recent-products p-grid">
          <!-- Display recently purchased products -->
          <div v-for="order in recentPurchases" :key="order.id" class="recent-product p-col-12 p-md-4">
            <img :alt="order.name" :src="order.product.imageUrl" class="product-image" />
            <h3 class="product-name">{{ order.product.name }}</h3>
          </div>
        </div>
      </div>

      <div class="tables flex border-red-900">
        <div class="itemCalendar">
          <h2 class="header">Your Orders</h2>
          <pv-data-table class="p-datatable-sm" :value="orders" tableStyle="max-width: 100rem">
            <pv-column v-for="col of columns"
                       :key="col.field"
                       :field="col.field"
                       :header="col.header" ></pv-column>
          </pv-data-table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ProductsApiService } from "@/Shopping/products/services/products-api.service";
import {OrderApiService} from "@/Shopping/shop/services/order-api.service";

export default {
  name: "merchant-home",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      ordersApi: new OrderApiService(),
      columns: null,
      orders: [],
      recentPurchases: [], // Update data property name
    };
  },
  created() {
    this.columns = [
      { field: 'status', header: 'Status' },
      { field: 'paymentMethod', header: 'Payment' },
      { field: 'orderedDate', header: 'Ordered Date' },
      { field: 'description', header: 'Description' }
    ];
  },
  mounted() {
    this.loadRecentPurchases();
    this.ordersApi.getAll().then((response) => (this.orders = response.data.slice(0,3)));
  },
  methods: {
    async loadRecentPurchases() {
      try {
        const orderApiService = new OrderApiService();
        const response = await orderApiService.getAll(); // Adjust API call as needed
        const sortedOrders = response.data.sort((a, b) => b.id - a.id);
        this.recentPurchases = sortedOrders.slice(0, 3);
      } catch (error) {
        console.error('Error loading recent purchases:', error);
      }
    },
    toMyShoppingPage() {
      this.$router.push("/my-shopping");
    }
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
