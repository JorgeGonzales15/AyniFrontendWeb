<script>
import { RouterLink, RouterView } from 'vue-router'
import NavigationComponent from "@/shared/components/navigation.component.vue";

export default {
  name: 'App',
  components: {
    RouterLink,
    RouterView,
    NavigationComponent
  }
}

</script>

<template>
  <navigation-component></navigation-component>
  <RouterView/>
</template>

<style>
html, body{
  background: rgb(208,243,203);
  background: linear-gradient(0deg, rgba(208,243,203,1) 0%, rgba(42,175,135,1) 100%);
}
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
