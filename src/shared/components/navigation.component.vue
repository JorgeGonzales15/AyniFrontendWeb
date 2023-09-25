<template class="nav">
  <pv-toolbar class="toolbar">
    <template #start>
      <pv-split-button :model="items" icon="pi pi-plus" severity="secondary" text>
        <pv-avatar icon="pi pi-user" class="mr-2" size="large"/>
        <p>Welcome, <span>user.email</span></p>
      </pv-split-button>
    </template>
    <template #center>
      <router-link v-for="route in routesMerchant"
                   :to="route.to"
                   custom
                   v-slot="{ navigate, href }"
                   :key="route.label">
        <pv-button class="mr-2 b-font font-bold"
                   :href="href"
                   @click="navigate"
                   :label="route.label"
                   text></pv-button>
      </router-link>
    </template>
    <template #end>
      <span class="p-input-icon-left">
        <i class="pi pi-search"/>
        <pv-input-text placeholder="Search" type="text" size="small"></pv-input-text>
      </span>
    </template>
  </pv-toolbar>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {

      items: [
        { label: 'farmer', icon: 'pi pi-user' },
        {label: 'Logout', icon: 'pi pi-fw pi-power-off', to: "/signin"}
      ],
      routesFarmer: [
        { label: "Home", to: "/sign-in" },
        { label: "My Products", to: "/farmer-home"},
        { label: "Financial Management", to: "/farmer-home"},
        { label: "My Orders", to: "/farmer-home"}
      ],
      routesMerchant: [
        { label: "Home", to: "/home" },
        { label: "Find Products", to: "/farmer-home"},
        { label: "My Shopping", to: "/farmer-home"},
        { label: "Rate", to: "/farmer-home"}
      ]
    };
  }
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

</style>