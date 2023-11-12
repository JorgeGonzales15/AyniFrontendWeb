<template class="nav">
  <pv-toolbar class="toolbar">
    <template #start>
      <pv-split-button :model="items" icon="pi pi-plus" severity="secondary" text>
        <pv-avatar icon="pi pi-user" class="mr-2" size="large"/>
        <p>Welcome, <span>user.email</span></p>
      </pv-split-button>
    </template>

    <template #end>
      <div class="nav-button-container">
        <router-link v-for="route in routesMerchant"
                     :to="route.to"
                     v-if="rolWatcher === 'merchant'"
                     custom
                     v-slot="{ navigate, href }"
                     :key="route.label">
          <pv-button class="mr-2 b-font font-bold"
                     :href="href"
                     @click="navigate"
                     :label="route.label"
                     text></pv-button>
        </router-link>
      </div>
      <div class="nav-button-container">
        <router-link v-for="route in routesFarmer"
                     :to="route.to"
                     v-if="rolWatcher === 'farmer'"
                     custom
                     v-slot="{ navigate, href }"
                     :key="route.label">
          <pv-button class="mr-2 b-font font-bold"
                     :href="href"
                     @click="navigate"
                     :label="route.label"
                     text></pv-button>
        </router-link>
      </div>

    </template>
  </pv-toolbar>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      rol: null,
      items: [
        { label: 'farmer', icon: 'pi pi-user' },
        { label: 'Logout', icon: 'pi pi-fw pi-power-off', to: "/signin"}
      ],
      routesFarmer: [
        { label: "Home", to: "/farmer-home" },
        { label: "My Plants", to: "/product"},
        { label: "Financial Management", to: "/select-transaction"},
        { label: "My Orders", to: "/my-orders"}
      ],
      routesMerchant: [
        { label: "Home", to: "/merchant-home" },
        { label: "Find Products", to: "/find-products"},
        { label: "My Shopping", to: "/my-shopping"},
        { label: "Rate", to: "/rates"}
      ]
    };
  },
  computed: {
    rolWatcher() {
      return this.$store.getters['authentication/getUserRol'];
    }
  },
}
</script>

<style>
.b-font{
  color: black !important;
}
.toolbar{
  border: none;
  border-radius: 0;
}
@media (max-width: 768px) {
  .nav-button-container{
    display: flex;
    flex-direction: column;
  }
}
</style>