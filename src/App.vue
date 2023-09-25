<script>
import { RouterLink, RouterView } from 'vue-router'
import ListBox from "@/Finance/components/listbox-content/ListBox.vue";
import CardsCosts from "@/Finance/components/cost-main-content/Cards.vue";

export default {
  name: "App",
  components: {
    CardsCosts,
    ListBox,


  },
};

</script>

<template>

  <div class="background">
    <div class="lista1 contenedor">
      <list-box></list-box>
    </div>
  </div>
  <!-- <cards-costs></cards-costs>-->


</template>

<style scoped>

.lista1{
  background-color: #8f8d8d;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgb(33, 33, 33);
}
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  max-width: 50%;
  margin: auto;
}
.background{
  background: linear-gradient(to bottom, #2AAF87, #48D4AA, #ABEDD9, #D0F3CB, white);
  background-size: cover;
}



</style>