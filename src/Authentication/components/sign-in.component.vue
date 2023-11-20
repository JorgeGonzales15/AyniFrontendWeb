<template>
  <div class="login-container">
    <Form @submit.prevent="handleLogin" class="mt-8">
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
              <i class="pi pi-key"></i>
              <pv-input-text
                  type="password"
                  id="password"
                  v-model="password"
                  class="w-100"
                  :class="{ 'is-invalid': errors.password && password === '' }"
              />
              <div class="error-message" v-if="errors.password && password === ''">
                {{ errors.password }}
              </div>
              <label for="password">Password</label>
            </span>


            <div class="login-buttons flex flex-column gap-1 mt-4">
              <div class="flex justify-content-center">
                <pv-button type="submit" label="Log in" class="w-15rem" />
              </div>
              <div class="flex justify-content-center">
                <router-link to="/signup">
                  <pv-button
                      type="submit"
                      label="Sign in"
                      class="w-15rem"
                      outlined
                  />
                </router-link>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-content-center">
            <pv-button
                type="submit"
                class="w-15rem flex justify-content-between"
                size="small"
                text
            >
              <span>Login using Google</span>
              <i class="pi pi-google" style="font-size: 2rem"></i>
            </pv-button>
          </div>

          <div class="flex justify-content-center">
            <pv-button
                type="submit"
                class="w-15rem flex justify-content-between"
                size="small"
                text>
              <span>Forgot your password?</span>
              <i class="pi pi-exclamation-circle" style="font-size: 2rem"></i>
            </pv-button>
          </div>
        </template>
      </pv-card>
    </Form>
  </div>
</template>

<script>
export default {
  name: "sign-in",
  data() {
    return {
      username: null,
      password: null,
      errors: {
        username: "Username is required.",
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
    handleLogin() {
      if (this.username === "" || this.password === "" ||
        this.username === null || this.password === null) {
        // Show a general error message if any field is empty
        this.message = "Please fill in all fields.";
        return;
      }
      console.log(this.username + this.password);
      console.log(this.$store.state.auth.user);
      console.log(this.$store.state.auth.user.role);
      // Your login logic here
      this.$store
          .dispatch("auth/login", { username: this.username,
            email: "string",
            role: "string",
            password: this.password })
          .then(
              () => {

                if (this.$store.state.auth.user.role === 'ROLE_MERCHANT') this.$router.push("/merchant-home");
                else this.$router.push("/farmer-home");
              },
              (error) => {
                this.message =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
              }
          );
    },
  },
};
</script>

<style>
.login-image {
  width: 300px;
  height: 300px;
}

.login-container {
  width: 500px;
  margin: 0 auto;
}
@media screen and (max-width: 762px) {
  .login-container{
    width: 100%;
  }
}
.is-invalid {
  border-color: #dc3545 !important;
}
.w-100{
  width: 100%;
}

</style>
