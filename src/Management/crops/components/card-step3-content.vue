<template>
  <div>
    <pv-card>
      <template v-slot:title>
        Confirmation
      </template>
      <template v-slot:content>
        <div class="field col-12">
          <label for="undergrowth">Maleza</label>
          <b>{{ formData.undergrowth ? 'Si' : 'No' }}</b>
        </div>
        <div class="field col-12">
          <label for="fertilize">Abonar</label>
          <b>{{ formData.fertilize ? 'Si' : 'No' }}</b>
        </div>
        <div class="field col-12">
          <label for="oxygenate">Oxigenar</label>
          <b>{{ formData.oxygenate ? 'Si' : 'No' }}</b>
        </div>
        <div class="field col-12">
          <label for="lines">Lineas</label>
          <b>{{ formData.lines ? 'Si' : 'No' }}</b>
        </div>
        <div class="field col-12">
          <label for="holes">Agujeros</label>
          <b>{{ formData.holes ? 'Si' : 'No' }}</b>
        </div>
        <div class="field col-12">
          <label for="watered">Intervalo de regado</label>
          <b>{{ formData.watered ? formData.watered : '-' }}</b>
        </div>
        <div class="field col-12">
          <label for="pestcleaning">Intervalo de desinfestacion</label>
          <b>{{ formData.pestcleaning ? formData.pestcleaning : '-' }}</b>
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
import {CropsApiService} from "@/Management/crops/services/crops-api.service";

export default {
  props: {
    formData: Object,
  },
  methods: {
    prevPage() {
      this.$emit("prev-page", { pageIndex: 2 });
    },

    complete() {
      const salesApiService = new CropsApiService();
      const data = {
        undergrowth: this.formData.undergrowth,
        fertilize: this.formData.fertilize,
        oxygenate: this.formData.oxygenate,
        lines: this.formData.lines,
        holes: this.formData.holes,
        watered: this.formData.watered,
        pestcleaning: this.formData.pestcleaning,
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
