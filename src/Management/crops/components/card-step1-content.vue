<template>
  <pv-card class="border-none shadow-none bg-transparent">
    <template v-slot:title>
      <div class="text-center">Realiza tu pedido</div>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="p-fluid">
          <div class="field m-2">
            <label for="product" class="font-bold">Producto</label>
            <pv-inputtext id="product" v-model="product"></pv-inputtext>
          </div>
          <div class="field m-2 md:w-full">
             <label for="quantity" class="font-bold">Cantidad</label>
             <pv-inputnumber id="quantity" v-model="quantity" :class="{}" mode="decimal" :min="1" :max="100"></pv-inputnumber>
          </div>
          <div class="field m-2">
            <label for="date" class="font-bold">Fecha</label>
            <pv-calendar id="date" v-model="date"></pv-calendar>
          </div>
          <div class="field m-2">
            <label for="method" class="font-bold">Metodo de pago</label>
            <pv-inputtext id="method" v-model="method"></pv-inputtext>
          </div>
          <div class="field m-2">
                <pv-button class="p-button-info text-white bg-button w-full" label="Siguiente" type="submit"/>
          </div>
        </div>
      </form>
    </template>
  </pv-card>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "card-step1-content",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
      product: "",
      quantity: 0,
      date: "",
      method: "",
    };
  },
  validations() {
    return {
      product: {
        required,
      },
      quantity: {
        required,
      },
      date: {
        required,
      },
      method: {
        required,
      },
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page", {
        formData: {
          product: this.product,
          quantity: this.quantity,
          date: this.date,
          method: this.method,
        },
        pageIndex: 0,
      });
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        let weightDimensional = (this.height + this.width + this.length) / 5000;
        let weight =
            weightDimensional > this.weight ? weightDimensional : this.weight;
        this.nextPage(weight);
      }
    },
  }
};
</script>

<style scoped>

</style>
