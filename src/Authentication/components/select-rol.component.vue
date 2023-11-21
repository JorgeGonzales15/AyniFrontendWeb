
<template>
  <div class="center">
    <h1 >Select your rol</h1>
  </div>
  <div class="card-container">
    <pv-field-set legend="Farmer" class="field-set">
      <p>In the role of producer, you will have access to the following functions:</p>
      <ul>
        <li>
          <p>Crop planning</p>
          Use Google calendar and dashboards for planning
        </li>
        <pv-divider/>
        <li>
          <p>Manage your costs and profits </p>
          Track your profits and costs for your organization
        </li>
        <pv-divider/>
        <li>
          <p>Fulfill merchant orders </p>
          Sell your products and fulfill your orders
        </li>
        <pv-divider/>
        <li>
          <p>Manage supplies</p>
          Track inputs used on your crops
        </li>
      </ul>
      <pv-button type="submit"
                 @click="onFarmerSelected"
                 label="Start as a Farmer"
                 class="w-15rem mt-5"/>
    </pv-field-set>

    <pv-field-set legend="Merchant" class="field-set">
      <p>In the merchant role, you will have access to the following functions:</p>
      <ul>
        <li>
          <p>Search for products </p>
          Find all types of fruits and vegetables
        </li>
        <pv-divider/>
        <li>
          <p>Buy quality products </p>
          Access the secure shopping process that we offer
        </li>
        <pv-divider/>
        <li>
          <p>Rate your purchase and quality </p>
          Rate your purchases and the quality of your products
        </li>
        <pv-divider/>
        <li>
          <p>Complete purchase tracking </p>
          Track the status of your orders 24/7
        </li>
      </ul>
      <pv-button type="submit"
                 @click="onMerchantSelected"
                 label="Start as a Merchant"
                 class="w-15rem mt-5"/>
    </pv-field-set>

  </div>
</template>

<script>
export default {
  name: "select-rol",
  computed: {
    savedUser() {
      return this.$store.state.data.user;
    },
  },
  methods: {
    onMerchantSelected() {
      this.$store.dispatch('data/updateUserRol', 'ROLE_MERCHANT');
      this.$store.dispatch('auth/register', this.savedUser);
      this.$router.push("/signin");
    },
    onFarmerSelected() {
      this.$store.dispatch('data/updateUserRol', 'ROLE_FARMER');
      this.$store.dispatch('auth/register', this.savedUser);
      this.$router.push("/signin");
    }
  }
}
</script>

<style>
.center{
  text-align: center;
  margin: 0 auto;
  background-color: transparent !important;
}
.field-set{
  height: fit-content;
}
ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul > li > p {
  font-weight: bold;
}
.card-container{
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
}
@media (max-width: 768px) {
  .card-container{
    flex-direction: column;
  }
}
</style>