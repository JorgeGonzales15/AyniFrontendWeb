<template>
  <pv-dialog v-model:visible="visible" modal header="Header" :style="{ width: '50vw' }">
    <p>Compra exitosa</p>
    <template #footer>
      <pv-button label="Aceptar" icon="pi pi-check" @click="visible = false"/>
    </template>
  </pv-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    closeDialog() {
      this.$emit('cerrar');
    }
  }
}
</script>

<style scoped>

</style>
