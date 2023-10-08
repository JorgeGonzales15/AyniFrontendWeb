<template>
  <div class="product-card">
    <img class="product-image" :src="product.image_url" alt="product image_url"/>
    <h2 class="product-name">{{ product.name }}</h2>
  </div>
</template>


<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.product-card {
  background-color: rgba(35, 32, 32, 0.55);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 20px;
  overflow: hidden;
  max-width: 250px;

  @media (max-width: 767px) {
    align-self: center;
    max-width: 80%;
  }
}

.product-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.product-image {
  width: 100%;
  height: 110px;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-name {
  font-size: 16px;
  margin: 0 auto;
  padding: 5px 0;
  width: 100%;
  background-color: #3EAF2C;
}
</style>
