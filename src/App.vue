<template>
  <navigation-component></navigation-component>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavigationComponent from "@/shared/components/navigation.component.vue";

export default {
  name: 'App',
  components: {NavigationComponent}
}
</script>

<style>
html, body{
  background: rgb(208,243,203);
  background: linear-gradient(0deg, rgba(208,243,203,1) 0%, rgba(42,175,135,1) 100%);
}
</style>
