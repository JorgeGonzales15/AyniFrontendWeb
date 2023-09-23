<template>
  <div class="bg-armor-feed">
    <div style="max-width: 45rem; width: 100%; margin: 0 auto; min-height: 90vh">
      <pv-steps :model="steps" :exact="false"></pv-steps>
      <router-view
          v-slot="{ Component }"
          :formData="formObject"
          @next-page="nextPage($event)"
          @prev-page="prevPage($event)"
          @complete="complete"
      >
        <KeepAlive>
          <component :is="Component"></component>
        </KeepAlive>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer-quotation",
  data() {
    return {
      userId: null,
      steps: [
        {
          label: "Paso 1",
          to: "card-step1-content",
        },
        {
          label: "Paso 2",
          to: "card-step2-content",
        },
        {
          label: "Paso 3",
          to: "card-step3-content",
        },
      ],
      formObject: {},
      errors: [],
    };
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      localStorage.setItem("formObject", JSON.stringify(this.formObject));
      this.$router.push(this.steps[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.steps[event.pageIndex - 1].to);
    },
    async complete(event) {
      // Registered the last payment
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
    },
  }
};
</script>

<style scoped>

</style>
