<script>
export default {
  name:"cards-costs",
}

</script>

<template>

<div class="page-background">
  <pv-card style="width: 25em">
    <template #header>
    </template>
    <template #title> Pago de agua </template>
    <template #subtitle> Categoría: Servicio </template>
    <template #content>
      <p>
       Fecha: 2019-10-10
      </p>
      <p>
        Monto: 200
      </p>
      <p>
        Cantidad: 1
      </p>
      <p>
        Descripcion: se pagó el agua del mes de octubre
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Save" />
      <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
  </pv-card>
  <pv-card style="width: 25em">
    <template #header>
    </template>
    <template #title> Pago de cajas contenedoras </template>
    <template #subtitle> Categoría: Servicio </template>
    <template #content>
      <p>
        Fecha: 2019-11-10
      </p>
      <p>
        Monto: 500
      </p>
      <p>
        Cantidad: 45 cajas contenedoras
      </p>
      <p>
        Descripcion: se compraron cajas contenedoras para la producción de zanahorias
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Save" />
      <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
  </pv-card>
  <pv-card style="width: 25em">
    <template #header>
    </template>
    <template #title> Comida para el personal </template>
    <template #subtitle> Categoría: Servicio </template>
    <template #content>
      <p>
        Fecha: 2019-12-05
      </p>
      <p>
        Monto: 300
      </p>
      <p>
        Cantidad: 1 compra
      </p>
      <p>
        Descripcion: Compra de alimentos para el personal de la granja
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Save" />
      <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
  </pv-card>
  <pv-card style="width: 25em">
    <template #header>
    </template>
    <template #title> Reparacion de maquinaria </template>
    <template #subtitle> Categoría: Servicio </template>
    <template #content>
      <p>
        Fecha: 2020-01-15
      </p>
      <p>
        Monto: 800
      </p>
      <p>
        Cantidad: 1 reparacion
      </p>
      <p>
        Descripcion: Se reparo la trilladora de maíz
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Save" />
      <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
  </pv-card>
  <pv-card style="width: 25em">
    <template #header>
    </template>
    <template #title> Semillas de tomate </template>
    <template #subtitle> Categoría: Producto </template>
    <template #content>
      <p>
        Fecha: 2020-02-20
      </p>
      <p>
        Monto: 150
      </p>
      <p>
        Cantidad: 1 paquete
      </p>
      <p>
        Descripcion: Compra de semillas de tomate para la temporada de primavera
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Save" />
      <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
  </pv-card>
  <pv-card style="width: 25em">
    <template #header>
    </template>
    <template #title> Jornaleros para la cosecha </template>
    <template #subtitle> Categoría: Servicio </template>
    <template #content>
      <p>
        Fecha: 2020-03-25
      </p>
      <p>
        Monto: 1000
      </p>
      <p>
        Cantidad: 5 jornaleros por 1 semana
      </p>
      <p>
        Descripcion: Contratacion de jornaleros para la cosecha de maiz
      </p>
    </template>
    <template #footer>
      <pv-button icon="pi pi-check" label="Save" />
      <pv-button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
    </template>
  </pv-card>





</div>
  <div class="bodybutton buttonn">
    <pv-button label="Añadir costo" severity="success" />
  </div>

</template>

<style>
.page-background {
  background: linear-gradient(to bottom, #2AAF87, #48D4AA, #ABEDD9, #D0F3CB, white);
  background-size: cover;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.bodybutton{
  display:flex;
  justify-content: center;
  align-items: center;
}
.buttonn{
  margin: auto;
  height: 80px;
}

</style>