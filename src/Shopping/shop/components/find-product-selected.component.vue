<template>
  <h2 class="center">{{ product.name }}</h2>
  <div class="container">
    <div class="display">
      <div class="calendar-display">
        <div class="product-img">
          <img :src="product.image_url" width="300" height="200">
        </div>
        <img :src="product.image_url" width="300" height="200">
      </div>
      <div class="info-display">
        <h3>Plant Details:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque enim, placerat sed erat sed, fermentum congue lorem. Praesent ac arcu sit amet lorem fermentum rutrum. Proin vestibulum tempor sollicitudin. Vestibulum volutpat mi velit, ac euismod nibh hendrerit ac. Nunc massa mauris, volutpat porttitor rhoncus quis, viverra at eros. Donec eget nunc condimentum, faucibus dui ut, tincidunt magna. Sed rhoncus ultrices turpis nec eleifend. Cras eu eleifend sem. Morbi libero urna, euismod vel elementum sit amet, sagittis hendrerit metus. Maecenas dui est, pellentesque sit amet porttitor non, porta non lectus. Sed maximus ex ex, at dignissim ligula sollicitudin non. Vivamus varius, enim ac lacinia commodo, lacus ante porttitor tortor, eget tincidunt orci augue id leo. Aenean id elit in lectus efficitur dignissim nec vel diam. Etiam fermentum condimentum convallis.
        </p>
        <pv-divider/>
        <h3>Cultivation Plan:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque enim, placerat sed erat sed, fermentum congue lorem. Praesent ac arcu sit amet lorem fermentum rutrum. Proin vestibulum tempor sollicitudin. Vestibulum volutpat mi velit, ac euismod nibh hendrerit ac. Nunc massa mauris, volutpat porttitor rhoncus quis, viverra at eros. Donec eget nunc condimentum, faucibus dui ut, tincidunt magna. Sed rhoncus ultrices turpis nec eleifend. Cras eu eleifend sem. Morbi libero urna, euismod vel elementum sit amet, sagittis hendrerit metus. Maecenas dui est, pellentesque sit amet porttitor non, porta non lectus. Sed maximus ex ex, at dignissim ligula sollicitudin non. Vivamus varius, enim ac lacinia commodo, lacus ante porttitor tortor, eget tincidunt orci augue id leo. Aenean id elit in lectus efficitur dignissim nec vel diam. Etiam fermentum condimentum convallis.
        </p>
        <pv-divider/>
        <h3>Supplies:</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque enim, placerat sed erat sed, fermentum congue lorem. Praesent ac arcu sit amet lorem fermentum rutrum. Proin vestibulum tempor sollicitudin. Vestibulum volutpat mi velit, ac euismod nibh hendrerit ac. Nunc massa mauris, volutpat porttitor rhoncus quis, viverra at eros. Donec eget nunc condimentum, faucibus dui ut, tincidunt magna. Sed rhoncus ultrices turpis nec eleifend. Cras eu eleifend sem. Morbi libero urna, euismod vel elementum sit amet, sagittis hendrerit metus. Maecenas dui est, pellentesque sit amet porttitor non, porta non lectus. Sed maximus ex ex, at dignissim ligula sollicitudin non. Vivamus varius, enim ac lacinia commodo, lacus ante porttitor tortor, eget tincidunt orci augue id leo. Aenean id elit in lectus efficitur dignissim nec vel diam. Etiam fermentum condimentum convallis.
        </p>
      </div>
    </div>
    <div class="buttons">
      <pv-button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="onCancel"/>
      <pv-button label="Buy" severity="success" rounded size="large" @click="onBuy"></pv-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "find-product-selected",
  props: {
    product: null
  },
  methods: {
    onBuy() {
      this.$router.push("/sales/step-1");
    },
    onCancel() {
      this.$emit('onCancel', null);
    }
  }
}
</script>

<style>
.display{
  display: grid;
  grid-template-columns: 35% 65%;
  gap: 2rem;
}
.calendar-display{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.product-img{
  padding: 1rem;
  background-color: #808080;
}
.buttons{
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
</style>