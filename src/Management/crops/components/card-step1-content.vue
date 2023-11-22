<template>
  <pv-card class="border-none shadow-none bg-transparent">
    <template v-slot:title>
      <div class="text-center">Seleccione los procesos que requiera</div>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="p-fluid">
          <div class="field m-2">
            <label for="product" class="font-bold">Deshacerse de la maleza</label>
            <pv-checkbox v-model="undergrowth" binary="true" />
          </div>
          <div class="field m-2 md:w-full">
            <label for="quantity" class="font-bold">Abonar el terreno</label>
            <pv-checkbox v-model="fertilize" binary="true" />
          </div>
          <div class="field m-2">
            <label for="date" class="font-bold">Oxigenar el terreno</label>
            <pv-checkbox v-model="oxygenate" binary="true" />
          </div>
          <div class="field m-2">
            <label for="method" class="font-bold">Realizar las líneas de cultivo</label>
            <pv-checkbox v-model="lines" binary="true" />
          </div>
          <div class="field m-2">
            <label for="method" class="font-bold">Hacer los agujeros</label>
            <pv-checkbox v-model="holes" binary="true" />
          </div>
          <div class="field m-2">
            <pv-button
                class="p-button-info text-white bg-button w-full"
                label="Siguiente"
                type="submit"
            />
          </div>
        </div>
      </form>
    </template>
  </pv-card>
</template>

<script>
// Import necessary module for form validation
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "card-step1-content",
  // Setup function to initialize Vuelidate
  setup: () => ({ v$: useVuelidate() }),
  data() {
    // Initialize component data
    return {
      submitted: false, // Flag to track whether the form has been submitted
      undergrowth: false, // Checkbox state for undergrowth
      fertilize: false, // Checkbox state for fertilize
      oxygenate: false, // Checkbox state for oxygenate
      lines: false, // Checkbox state for lines
      holes: false, // Checkbox state for holes
    };
  },
  validations() {
    // Vuelidate validations for each form field
    return {
      submitted: {},
      undergrowth: {},
      fertilize: {},
      oxygenate: {},
      lines: {},
      holes: {},
    };
  },
  methods: {
    // Method to emit an event to move to the next page
    nextPage() {
      this.$emit("next-page", {
        formData: {
          undergrowth: this.undergrowth ? this.undergrowth : false,
          fertilize: this.fertilize ? this.fertilize : false,
          oxygenate: this.oxygenate ? this.oxygenate : false,
          lines: this.lines ? this.lines : false,
          holes: this.holes ? this.holes : false,
        },
        pageIndex: 0,
      });
    },
    // Method to handle form submission
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage(); // Move to the next page if the form is valid
      }
    },
  },
};
</script>

<style scoped>
</style>
