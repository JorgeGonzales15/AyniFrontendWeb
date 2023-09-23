<template>

  <div>
    <pv-button label="Ver más costos" severity="success" />
  </div>
  <div class="card flex justify-content-center">
    <h1></h1>
    <pv-listbox v-model="selectedCity" :options="cities" filter optionLabel="name" class="w-full md:w-14rem" />

  </div>
  <img src="https://github.com/upc-pre-202302-GreatMinds-SW51/SW51-GreatMinds-OpenSource/assets/104078975/651be919-2573-45a3-b741-2d630f9debe6">

  <div class="card flex justify-content-center">
    <pv-listbox v-model="selectedCity" :options="cities" filter optionLabel="name" class="w-full md:w-14rem" />
  </div>

  <div>
    <pv-button label="Ver más ganancias" severity="success" />
  </div>


</template>

<script>
export default  {
  name: "list-box",
  data() {
    return {
      selectedCity: null,
      cities: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ]
    };
  }
};

</script>
<style>
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}
</style>