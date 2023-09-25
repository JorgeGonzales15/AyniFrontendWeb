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
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "card-step1-content",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
      undergrowth: false,
      fertilize: false,
      oxygenate: false,
      lines: false,
      holes: false,
    };
  },
  validations() {
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
    nextPage() {
      this.$emit("next-page", {
        formData: {
          undergrowth: this.undergrowth ? this.undergrowth: false,
          fertilize: this.fertilize ? this.fertilize: false,
          oxygenate: this.oxygenate ? this.oxygenate: false,
          lines: this.lines ? this.lines: false,
          holes: this.holes ? this.holes: false,
        },
        pageIndex: 0,
      });
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage();
      }
    },
  },
};
</script>

<style scoped>
</style>
