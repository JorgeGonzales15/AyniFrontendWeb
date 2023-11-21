<template>
  <h2 class="center">{{ product.name }}</h2>
  <div class="container">
    <div class="display">
      <div class="calendar-display">
        <div class="product-img">
          <img :src="product.imageUrl" width="300" height="200">
        </div>
        <div class="product-img">
          <pv-calendar v-model="date" inline showWeek></pv-calendar>
        </div>
      </div>
      <div class="info-display">
        <h3>About the crop:</h3>
        <p>
          El cultivo de {{ crop.name }}, conocido como "{{ crop.name }}", es un producto agrícola que se lleva a cabo en condiciones específicas. Este tipo de cultivo se destaca por sus características distintivas, su descripcion en esta ocacion es "{{ crop.description }}".
        </p>
        <pv-divider/>
        <h3>Crop Details:</h3>
        <p>
          <ul>
            <li><strong>Nombre:</strong> {{ crop.name }}</li>
            <li><strong>Descripción:</strong> {{ crop.description }}</li>
            <li><strong>Distancia entre Plantas:</strong> {{ crop.distance }} metros</li>
            <li><strong>Profundidad del Cultivo:</strong> {{ crop.depth }} centímetros</li>
            <li><strong>Clima Favorable:</strong> {{ crop.weather }}</li>
            <li><strong>Tipo de Suelo Preferido:</strong> {{ crop.groundType }}</li>
            <li><strong>Temporada de Cultivo:</strong> {{ crop.season }}</li>
          </ul>
        </p>
        <pv-divider/>
        <h3>Supplies:</h3>
        <p>
          El cultivo de {{ crops.name }} requiere cuidados específicos, y su desarrollo óptimo se logra mejor en condiciones de suelo {{ crop.groundType }} y clima {{ crop.weather }}. Durante la temporada de {{ crop.season }}, su producción prospera y producen {{ crop.name }} de alta calidad, ideales para la elaboración insumos agricolas.

          Este cultivo es una práctica agrícola significativa que combina la ciencia y el arte para lograr resultados excepcionales en la industria agricola.
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
  data() {
    return {
      date: new Date(),
      crop: {
        "name": "Producto Agrícola",
        "description": "Descripción general del cultivo",
        "distance": "3",
        "depth": "40",
        "weather": "Templado",
        "groundType": "Fértil",
        "season": "Cualquier estación"
      }
    };
  },
  props: {
    product: null,
    crops: []
  },
  mounted() {
    this.crop = this.crops.filter(crop => {
      return crop.name.toLowerCase().includes(this.product.name.toLowerCase());
    })[0];

    console.log(this.crop)
  },
  methods: {
    onBuy() {
      this.$store.dispatch("data/saveProduct", this.product);
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
  max-width: 500px;
  padding: 1rem;
  background-color: #808080;
}
.buttons{
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
</style>