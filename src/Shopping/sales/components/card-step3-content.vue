<template>
  <div>
    <pv-card>
      <template v-slot:title>
        Confirmation
      </template>
      <template v-slot:content>
        <div class="field col-12">
          <label for="product">Producto</label>
          <b>{{ formData.product ? formData.product : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="quantity">Cantidad</label>
          <b>{{ formData.quantity ? formData.quantity : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="date">Fecha de compra</label>
          <b>{{ formData.date ? formData.date : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="method">Metodo de pago</label>
          <b>{{ formData.method ? formData.method : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="username">Propietario</label>
          <b>{{ formData.username ? formData.username : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="cardnumber">Numero de tarjeta</label>
          <b>{{ formData.cardnumber ? formData.cardnumber : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="expiration">Fecha de expiracion</label>
          <b>{{ formData.expiration ? formData.expiration : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="cvv">CVV</label>
          <b>{{ formData.cvv && formData.cvv.length === 3 ? '**' + formData.cvv[2] : '-' }}</b>
        </div>
      </template>
      <template v-slot:footer>
        <div class="grid grid-nogutter justify-content-between">
          <pv-button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
          <pv-button label="Complete" @click="complete()" icon="pi pi-check" iconPos="right" class="p-button-success" />
        </div>
      </template>
    </pv-card>
  </div>
</template>

<script>
import { SalesApiService } from "@/Shopping/sales/services/sales-api.service";

export default {
  name:"step-3",
  props: {
    formData: Object,
  },
  methods: {
    prevPage() {
      this.$emit("prev-page", { pageIndex: 2 });
    },

    complete() {
      const salesApiService = new SalesApiService();
      const data = {
        product: this.formData.product,
        quantity: this.formData.quantity,
        date: this.formData.date,
        method: this.formData.method,
      };

      salesApiService
          .create(data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error("Error al crear el registro:", error);
          });
    },
  },
};
</script>

<style scoped>

</style>
