<template>

  <div>

    <pv-button label="Ver más costos" severity="success" />

  </div>
  <div class="card flex justify-content-center">
    <h1></h1>
    <pv-listbox v-model="costoss" :options="itemscostos" filter optionLabel="name" class="w-full md:w-14rem" />

  </div>
  <img src="https://github.com/upc-pre-202302-GreatMinds-SW51/SW51-GreatMinds-OpenSource/assets/104078975/651be919-2573-45a3-b741-2d630f9debe6">

  <div class="card flex justify-content-center">
    <pv-listbox v-model="gastoss" :options="itemsgastos" filter optionLabel="name" class="w-full md:w-14rem" />
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
      costoss: null,
      itemscostos: [
        { name: 'Pago de agua', code: 'NY' },
        { name: 'Pago de cajas', code: 'RM' },
        { name: 'Comida para personal', code: 'LDN' },
        { name: 'Reparaciones', code: 'IST' },
        { name: 'Semillas', code: 'PRS' },
        { name: 'Jornaleros', code: 'PRS' }
      ],
      gastoss: null,
      itemsgastos: [
        { name: 'Venta de manzana', code: 'NY' },
        { name: 'Venta de zanahoria', code: 'RM' },
        { name: 'Venta de papayas', code: 'LDN' },
        { name: 'Venta de espinaca', code: 'IST' },
        { name: 'Venta de platanos', code: 'PRS' },
        { name: 'Venta de pimientos', code: 'PRS' }
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