<template>
  <router-link :to="{ name: 'crop-details', params: { id: crop.id } }">
    <div class="crop-card">
      <img class="crop-image" :src="crop.imageUrl" alt="crop image_url" />
      <h2 class="crop-name">{{ crop.name }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    crop: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.crop-card {
  background-color: rgba(35, 32, 32, 0.55);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 20px;
  overflow: hidden;
  max-width: 300px;
  text-align: center;

  @media (max-width: 767px) {
    align-self: center;
    max-width: 100%;
  }
}

.crop-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.crop-image {
  width: 100%;
  height: 110px;
  object-fit: cover;
  margin-bottom: 10px;
}

.crop-name {
  font-size: 16px;
  margin: 0 auto;
  padding: 5px 0;
  width: 100%;
  color: white;
  background-color: #3EAF2C;
}
</style>
