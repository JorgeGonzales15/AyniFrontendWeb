<template>
  <pv-card class="border-none shadow-none bg-transparent">
    <template v-slot:title>
      <div class="text-center">Datos de la tarjeta</div>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="p-fluid">
          <div class="field m-2">
            <label for="username" class="font-bold">Nombre del propietario</label>
            <pv-inputtext id="username" v-model="username"></pv-inputtext>
          </div>
          <div class="field m-2 md:w-full">
            <label for="cardnumber" class="font-bold">Numero de tarjeta</label>
            <pv-inputnumber id="cardnumber" v-model="cardnumber"></pv-inputnumber>
          </div>
          <div class="field m-2">
            <label for="expiration" class="font-bold">Fecha de expiracion</label>
            <pv-calendar id="expiration" view="month" date-format="mm/yy" v-model="expiration"></pv-calendar>
          </div>
          <div class="field m-2">
            <label for="cvv" class="font-bold">CVV</label>
            <pv-inputtext id="cvv" v-model="cvv"></pv-inputtext>
          </div>
          <div class="flex justify-content-between w-full my-2">
            <pv-button class="p-button-success text-white w-full m-2" label="Atras" icon="pi pi-angle-left" iconPos="left" @click="prevPage"></pv-button>
            <pv-button class="p-button-info text-white w-full m-2" label="Siguiente" icon="pi pi-angle-right" iconPos="right" type="submit"></pv-button>
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
  name: "step-2",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
      username: "",
      cardnumber: 0,
      expiration: "",
      cvv: "",
    };
  },
  validations() {
    return {
      username: {
        required,
      },
      cardnumber: {
        required,
      },
      expiration: {
        required,
      },
      cvv: {
        required,
      },
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page", {
        formData: {
          username: this.username,
          cardnumber: this.cardnumber,
          expiration: this.expiration,
          cvv: this.cvv,
        },
        pageIndex: 1,
      });
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage();
      }
    },
    prevPage() {
      this.$emit("prev-page", { pageIndex: 1 });
    },
  }
};
</script>

<style scoped>

</style>
