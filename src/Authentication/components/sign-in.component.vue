<template>
  <div>
    <Form @submit.prevent="onSubmit" class="login-container mt-8">
      <pv-card class="bg-transparent">
        <template #header>
          <div class="flex justify-content-center">
            <div class="login-image">
              <img src="../../assets/logo.png">
            </div>
          </div>
        </template>
        <template #content>
          <div class="flex flex-column align-items-center gap-1">
            <span class="p-float-label p-input-icon-left">
              <i class="pi pi-user"></i>
              <pv-input-text id="email"
                             v-model="email"
                             class="w-25rem"
                             :class="{'p-invalid': emailError}"
                             aria-describedby="text-error"/>
              <label for="email">Email</label>
            </span>
            <small class="p-error " id="text-error">{{ emailError || '&nbsp;' }}</small>
            <span class="p-float-label p-input-icon-left">
              <i class="pi pi-key"></i>
              <pv-input-text type="password"
                             id="password"
                             v-model="password"
                             class="w-25rem"
                             :class="{'p-invalid': passwordError}"
                             aria-describedby="text-error"/>
              <label for="password">Password</label>
            </span>
            <small class="p-error " id="text-error">{{ passwordError || '&nbsp;' }}</small>

            <div class="login-buttons flex flex-column gap-1 mt-4">
              <div class="flex justify-content-center">
                <pv-button type="submit"
                           label="Log in"
                           class="w-15rem"/>
              </div>
              <div class="flex justify-content-center">
                <router-link to="/signup">
                  <pv-button type="submit"
                             label="Sign in"
                             class="w-15rem"
                             outlined/>
                </router-link>
              </div>
            </div>
          </div>

        </template>
        <template #footer>
          <div class="flex justify-content-center">
            <pv-button type="submit"
                       class="w-15rem flex justify-content-between"
                       size="small"
                       text>
              <span>Login using Google</span>
              <i class="pi pi-google" style="font-size: 2rem"></i>
            </pv-button>
          </div>

          <div class="flex justify-content-center">
            <pv-button type="submit" class="w-15rem flex justify-content-between" size="small" text>
              <span>Forgot your password?</span>
              <i class="pi pi-exclamation-circle" style="font-size: 2rem"></i>
            </pv-button>
          </div>
        </template>
      </pv-card>
    </Form>
    <Toast/>
  </div>

</template>

<script>
import {useForm, useField} from 'vee-validate';
export default {
  name: "sign-in",
  setup() {
    const {handleSubmit, resetForm} = useForm();

    const {value: email, errorMessage: emailError} = useField('email', validateEmail);
    const {value: password, errorMessage: passwordError} = useField('password', validatePassword);
    // Vee Validate
    function validateEmail(value){
      if(!value){
        return 'Email is required.';
      }
      return true;
    }
    function validatePassword(value){
      if(!value){
        return 'Password is required.';
      }
      return true;
    }

    const onSubmit = handleSubmit((values) => {

    });

    return {
      email,
      emailError,
      password,
      passwordError,
      onSubmit,
    };
  }
};
</script>
<style>
.login-image {
  width: 300px;
  height: 300px;
}

.login-container{
  width: 500px;
  margin: 0 auto;
}



</style>