<template>
  <div class="bg-color-ayni">
    <form @submit.prevent="handleRegister" class="login-container mt-8">
      <pv-card class="bg-transparent">
        <template #header>
          <div class="flex justify-content-center">
            <div class="login-image">
              <img src="../../assets/logo.png">
            </div>
          </div>
        </template>
        <template #content>
          <div class="flex flex-column align-items-center gap-4">
            <span class="p-float-label p-input-icon-left w-100">
              <i class="pi pi-user"></i>
              <pv-input-text
                  type="text"
                  id="username"
                  v-model="username"
                  class="w-100"
                  :class="{ 'is-invalid': errors.username && username === '' }"
                  aria-describedby="username-help"
              />
              <label for="username">Username</label>
            </span>
            <span class="p-float-label p-input-icon-left w-100">
              <i class="pi pi-user"></i>
              <pv-input-text
                  type="email"
                  id="email"
                  v-model="email"
                  class="w-100"
                  :class="{ 'is-invalid': errors.email && email === '' }"
              />
              <label for="email">Email</label>
            </span>
            <span class="p-float-label p-input-icon-left w-100">
              <i class="pi pi-key"></i>
              <pv-input-text
                  type="password"
                  id="password"
                  v-model="password"
                  class="w-100"
                  :class="{ 'is-invalid': errors.password && password === '' }"
              />
              <label for="password">Password</label>
            </span>
            <div class="flex align-content-ends">
              <pv-checkbox v-model="checked" :binary="true"/>
              <label class="ml-2"> I accept terms and agreements </label>
            </div>
            <div v-if="message" class="alert">{{ message }}</div>
            <div class="login-buttons flex flex-column gap-1">
              <div class="flex justify-content-center">
                <pv-button type="submit"
                           label="Create Account"
                           class="w-15rem"/>
              </div>
            </div>
          </div>

        </template>
        <template #footer>
          <div class="flex justify-content-center">
            <pv-button type="submit" class="w-15rem flex justify-content-between" size="small" text>
              <span>Register using Google</span>
              <i class="pi pi-google" style="font-size: 2rem"></i>
            </pv-button>
          </div>

          <div class="flex justify-content-center">
            <router-link to="/signin" class="plain-link">
              <pv-button type="submit" class="w-15rem flex justify-content-between" size="small" text>
                <span>Return to Login</span>
                <i class="pi pi-exclamation-circle" style="font-size: 2rem"></i>
              </pv-button>
            </router-link>
          </div>
        </template>
      </pv-card>
    </form>
  </div>

</template>

<script>
export default {
  name: "sign-up",
  data() {
    return {
      checked: null,
      username: '',
      email: '',
      password: '',
      errors: {
        username: "Username is required.",
        email: "Email is required.",
        password: "Password is required.",
      },
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    async handleRegister() {
      if (this.username === "" || this.email === "" || this.password === "" ||
          this.username === null || this.email === null || this.password === null
          || this.checked == null || this.checked == false) {

        await this.showMessage("Please fill all fields");
        return;
      }
      console.log(this.username + this.email + this.password)
      // Your login logic here
      this.$store
          .dispatch("data/saveUser", { username: this.username, email: this.email, password: this.password });
      this.$router.push('select-rol');
    },
    async showMessage(message){
      this.message = message;
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.message = false;
    }
  },
}
</script>

<style>
.plain-link {
  text-decoration: none;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-size: inherit;
}


.alert{
  color: red;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}


</style>