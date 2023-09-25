import { createRouter, createWebHistory } from 'vue-router'
import SignInComponent from "@/Authentication/components/sign-in.component.vue";
import SignUpComponent from "@/Authentication/components/sign-up.component.vue";
import SelectRolComponent from "@/Authentication/components/select-rol.component.vue";
import FarmerHomeComponent from "@/Authentication/components/home/farmer-home/components/farmer-home.component.vue";
import MerchantHomeComponent from "@/Authentication/components/home/merchant-home/components/merchant-home.component.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: 'signin'},
    { path: '/signin', name: 'signin', component: SignInComponent},
    { path: '/signup', name: 'signup', component: SignUpComponent },
    { path: "/select-rol",name: "select-rol", component: SelectRolComponent},
    { path: "/farmer-home", name: "farmer-home", component: FarmerHomeComponent },
    { path: "/merchant-home", name: "merchant-home", component: MerchantHomeComponent },
  ]
})

export default router
