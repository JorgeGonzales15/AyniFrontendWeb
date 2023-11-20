<template class="nav">
  <pv-toolbar class="toolbar" v-if="this.currentUser">
    <template #start>
      <pv-split-button :model="items" icon="pi pi-plus" severity="secondary" text>
        <pv-avatar icon="pi pi-user" class="mr-2" size="large"/>
        <p>Welcome, <span>{{ currentUser.username }}</span></p>
      </pv-split-button>
    </template>

    <template #end>
      <div v-if="rolWatcher === 'ROLE_MERCHANT'" class="nav-button-container">
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
      </div>
      <div v-else class="nav-button-container">
        <router-link v-for="route in routesFarmer"
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
        { label: 'Logout', icon: 'pi pi-fw pi-power-off', command: () => { this.logOut(); } }
      ],
      routesFarmer: [
        { label: "Home", to: "/farmer-home" },
        { label: "My Crops", to: "/crops"},
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
      return this.$store.getters['auth/getUserRol'];
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/signin');
    }
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
@media (max-width: 768px) {
  .nav-button-container{
    display: flex;
    flex-direction: column;
  }
}
</style>