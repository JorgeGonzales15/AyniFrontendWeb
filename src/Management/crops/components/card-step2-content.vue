<template>
  <pv-card class="border-none shadow-none bg-transparent">
    <template v-slot:title>
      <div class="text-center">Datos de la tarjeta</div>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="p-fluid">
          <div class="field m-2">
            <label for="username" class="font-bold">Seleccione en que frecuencia de dias vas a hacer el regado</label>
            <pv-inputnumber id="watered" v-model="watered"></pv-inputnumber>
          </div>
          <div class="field m-2 md:w-full">
            <label for="pestcleaning" class="font-bold">Seleccione en que frecuencia de dias vas a hacer el desparasitado</label>
            <pv-inputnumber id="pestcleaning" v-model="pestcleaning"></pv-inputnumber>
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
// Import necessary validators and module for form validation
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "card-step1-content",
  // Setup function to initialize Vuelidate
  setup: () => ({ v$: useVuelidate() }),
  data() {
    // Initialize component data
    return {
      submitted: false, // Flag to track whether the form has been submitted
      watered: "", // Input field for watering information
      pestcleaning: "", // Input field for pest cleaning information
    };
  },
  validations() {
    // Vuelidate validations for each form field
    return {
      watered: {
        required, // Ensure that the watering field is not empty
      },
      pestcleaning: {
        required, // Ensure that the pest cleaning field is not empty
      },
    };
  },
  methods: {
    // Method to emit an event to move to the next page
    nextPage() {
      this.$emit("next-page", {
        formData: {
          watered: this.watered,
          pestcleaning: this.pestcleaning,
        },
        pageIndex: 1,
      });
    },
    // Method to handle form submission
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage(); // Move to the next page if the form is valid
      }
    },
    // Method to emit an event to move to the previous page
    prevPage() {
      this.$emit("prev-page", { pageIndex: 1 });
    },
  }
};
</script>

<style scoped>

</style>
