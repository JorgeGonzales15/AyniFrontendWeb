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
  name: "stepper-content",
  data() {
    // Initialize component data
    return {
      userId: null, // User ID (not initialized in this code)
      steps: [
        {
          label: "Paso 1",
          to: "step-1",
        },
        {
          label: "Paso 2",
          to: "step-2",
        },
        {
          label: "Paso 3",
          to: "step-3",
        },
      ],
      formObject: {}, // Object to store form data
      errors: [], // Array to store form validation errors
    };
  },
  methods: {
    // Method to move to the next page in the stepper
    nextPage(event) {
      // Copy form data to formObject
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      // Store formObject in localStorage for persistence
      localStorage.setItem("formObject", JSON.stringify(this.formObject));
      // Navigate to the next step in the stepper
      this.$router.push(this.steps[event.pageIndex + 1].to);
    },
    // Method to move to the previous page in the stepper
    prevPage(event) {
      // Navigate to the previous step in the stepper
      this.$router.push(this.steps[event.pageIndex - 1].to);
    },
    // Method to handle completion of the stepper
    async complete(event) {
      // Copy form data to formObject
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
    },
  }
};
</script>

<style scoped>

</style>
