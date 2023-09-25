<template>
  <div class="bg-color-ayni">
    <form @submit="onSubmit" class="login-container mt-8">
      <pv-card class="bg-transparent">
        <template #header>
          <div class="flex justify-content-center">
            <div class="signup-image">
              <img src="../../assets/logo.png">
            </div>
          </div>
        </template>
        <template #content>
          <div class="flex flex-column align-items-center gap-1">
          <span class="p-float-label p-input-icon-left">
              <i class="pi pi-user"></i>
              <pv-input-text id="username"
                             v-model="username"
                             class="w-25rem"
                             :class="{'p-invalid': usernameError}"
                             aria-describedby="text-error"/>
              <label for="username">Username</label>
            </span>
            <small class="p-error " id="text-error">{{ usernameError || '&nbsp;' }}</small>

            <span class="p-float-label p-input-icon-left">
            <i class="pi pi-user"/>
            <pv-input-text id="email"
                           v-model="emailVal"
                           class="w-25rem login-input--username"
                           :class="{'p-invalid': passwordError}"
                           aria-describedby="text-error"/>
            <label for="email">Enter Email</label>
          </span>
            <small class="p-error " id="text-error">{{ emailError || '&nbsp;' }}</small>

            <span class="p-float-label p-input-icon-left">
              <i class="pi pi-key"></i>
              <pv-input-text type="password"
                             id="password"
                             v-model="passwordVal"
                             class="w-25rem"
                             :class="{'p-invalid': passwordError}"
                             aria-describedby="text-error"/>
              <label for="password">Password</label>
            </span>
            <small class="p-error " id="text-error">{{ passwordError || '&nbsp;' }}</small>
            <div class="flex align-content-ends">
              <pv-checkbox v-model="checked" :binary="true"/>
              <label class="ml-2"> I accept terms and agreements </label>
            </div>
            <div class="login-buttons flex flex-column gap-1">
              <div class="flex justify-content-center">
                <router-link to="/select-rol" class="plain-link">
                  <pv-button type="submit"
                             label="Create Account"
                             class="w-15rem"/>
                </router-link>

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
import {useField, useForm} from "vee-validate";

export default {
  name: "sign-up",
  data() {
    return {
      checked: false
    };
  },
  setup() {

    const {handleSubmit, resetForm} = useForm();
    const checked = false;
    const {value: username, errorMessage: usernameError} = useField('username', validateUsername);
    const {value: passwordVal, errorMessage: passwordError} = useField('password', validatePassword);
    const {value: emailVal, errorMessage: emailError} = useField('email', validateEmail);
    function validateUsername(value) {
      if (!value) {
        return 'Username is required.';
      }
      return true;
    }
    function validatePassword(value) {
      if (!value) {
        return 'Password is required.';
      }
      return true;
    }
    function validateEmail(value) {
      if (!value) {
        return 'Email is required.';
      }
      return true;
    }
    const onSubmit = handleSubmit((values) => {
      resetForm();
    });
    return {
      username,
      usernameError,
      passwordVal,
      passwordError,
      onSubmit,
      emailVal,
      emailError
    };
  }
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

.signup-image {
  width: 300px;
  height: 300px;
}

.login-container{
  width: 500px;
  margin: 0 auto;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}


</style>