<template>
  <div class="container flex flex-column align-items-center  gap-3 text-white p-3">

    <div class="form-container bg-black-alpha-50 py-3 px-4  border-round-xl shadow-6">
      <h2 class="text-center">Enter the data of the new record</h2>
      <form class="form flex flex-wrap text-sm align-items-center justify-content-around gap-4" @submit.prevent="addProfit">

        <div class="form-text flex flex-column gap-3 px-3">
          <div class="form-group">
            <label for="plantName">Transaction name:</label>
            <input id="plantName" v-model="newProfit.name" class="input" placeholder="Enter the transaction name" required
                   type="text">
          </div>
          <div class="form-group">

            <label  for="plantDistance">Amount of profit:</label>
            <input id="plantDistance" v-model="newProfit.amount" class="input"
                   placeholder="Enter the profit amount"
                   required type="text">
          </div>

          <div class="form-group">
            <label  for="plantDepth">Description:</label>
            <input id="plantDepth" v-model="newProfit.description" class="input"
                   placeholder="Enter the profit description"
                   required type="text">
          </div>

        </div>
      </form>
      <p v-if="showMessage" class="message text-center">
        {{
          messageType === 'success' ? 'The profit succesfully added.' : 'All camps are required'
        }}
      </p>
      <div class="center pt-8">
        <pv-button class="button p-mr-2 hover:bg-green-700 border-none" severity="success" type="submit" @click="addProfit">Add Profit
        </pv-button>
      </div>
      <div class="flex pt-8">
        <pv-button class="button p-mr-2 hover:bg-green-700 border-none" severity="success" type="submit" @click="onReturn">Return
        </pv-button>
      </div>
    </div>


  </div>
</template>

<script>
import {ProfitsApiService} from "@/Finance/services/profits-api.service";
import {Profit} from "@/Finance/models/profit.entity";

export default{
  name: "AddProfitPage",
  data() {
    return {
      newProfit: {},
      profitsApi: new ProfitsApiService(),
      showMessage: false,
      messageType: '',
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    onReturn(){
      this.$router.push("/profits");
    },
    isFormIncomplete() {
      return !this.newProfit.name ||
          !this.newProfit.amount ||
          !this.newProfit.description
    },
    async addProfit() {
      if (this.isFormIncomplete()) {
        this.messageType = 'incomplete';
        this.showMessage = true;
        return;
      }

      // Manage the data
      const profitData = new Profit();

      profitData.nameP = this.newProfit.name;
      profitData.amountP = parseInt(this.newProfit.amount);
      profitData.descriptionP = this.newProfit.description;
      profitData.userId = this.currentUser.id;

      console.log(profitData);

      this.profitsApi.createProfit(JSON.stringify(profitData)).then((response) => {
        console.log(response.data);
        this.messageType = 'success';
        this.showMessage = true;
      }).catch((error) => {
        this.showMessage = false;
        console.error("Error al crear el registro:", error);
        this.messageType = error.response.data;
      });

    }
  }
}

</script>

<style>
.form-container {
  font-family: 'Archive', sans-serif;
  width: 60%;
  min-height: 522px;
}

.form-text{
  min-width: 360px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input {
  color: white;
  padding: 5px;
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
}
.input::placeholder {
  color: white;
}
.message {
  color: rgba(59, 251, 3, 0.98);
}

@media screen and (max-width: 768px) {
  .form-container {
    width: 80%;
  }
}
</style>