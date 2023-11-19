import { createRouter, createWebHistory } from 'vue-router';
import SignInComponent from "@/Authentication/components/sign-in.component.vue";
import SignUpComponent from "@/Authentication/components/sign-up.component.vue";
import SelectRolComponent from "@/Authentication/components/select-rol.component.vue";
import FarmerHomeComponent from "@/Authentication/components/home/farmer-home/components/farmer-home.component.vue";
import MerchantHomeComponent from "@/Authentication/components/home/merchant-home/components/merchant-home.component.vue";
import salesstepperContent from "@/Shopping/sales/components/stepper-content.vue";
import salescardstep1Content from "@/Shopping/sales/components/card-step1-content.vue";
import salescardstep2Content from "@/Shopping/sales/components/card-step2-content.vue";
import salescardstep3Content from "@/Shopping/sales/components/card-step3-content.vue";
import cropsstepperContent from "@/Management/crops/components/stepper-content.vue";
import cropscardstep1Content from "@/Management/crops/components/card-step1-content.vue";
import cropscardstep2Content from "@/Management/crops/components/card-step2-content.vue";
import cropscardstep3Content from "@/Management/crops/components/card-step3-content.vue";
import Cards from "@/Finance/components/cost-main-content/Cards.vue";
import MyShoppingPage from "@/Shopping/shop/pages/my-shopping.page.vue";
import RatePage from "@/Shopping/rates/pages/rate.page.vue";
import FindProductPage from "@/Shopping/shop/pages/find-product.page.vue";
import MyOrders from "@/Shopping/orders/components/cards-content.vue";
import SelectTransactionPage from "@/Finance/pages/select-transaction.page.vue";
import CostsPage from "@/Finance/pages/costs.page.vue";
import ProfitsPage from "@/Finance/pages/profits.page.vue";
import AddProfitPage from "@/Finance/pages/add-profit.page.vue";
import AddCostPage from "@/Finance/pages/add-cost.page.vue";
import AddCropComponent from "@/Management/crops/components/add-crop.component.vue";
import CropsComponent from "@/Management/crops/components/crops.component.vue";
import CropDetailsComponent from "@/Management/crops/components/crop-details.component.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: 'signin'},
    { path: '/signin', name: 'signin', component: SignInComponent},
    { path: '/signup', name: 'signup', component: SignUpComponent },
    { path: "/select-rol",name: "select-rol", component: SelectRolComponent},
    { path: "/farmer-home", name: "farmer-home", component: FarmerHomeComponent },
    { path: "/merchant-home", name: "merchant-home", component: MerchantHomeComponent },
    { path: "/my-shopping", name: "my-shopping", component: MyShoppingPage },
    { path: "/rates", name: "rates", component: RatePage },
    { path: "/find-products", name: "find-products", component: FindProductPage },
    { path: "/crops", name: "crops", component: CropsComponent},
    { path: "/crops/add-crop", name: "add-crop", component: AddCropComponent },
    {path: '/crop/:id', name: 'crop-details', component: CropDetailsComponent, props: true,},
    { path: "/my-orders", name: "my-orders", component: MyOrders },
    { path: "/select-transaction", name: "select-transaction", component: SelectTransactionPage },
    { path: "/costs", name: "costs", component: CostsPage },
    { path: "/costs/add-cost", name: "add-cost", component: AddCostPage },
    { path: "/profits", name: "profits", component: ProfitsPage },
    { path: "/profits/add-profit", name: "add-profit", component: AddProfitPage },

      /*For customer*/
    { path: "/sales/", props: true, component: salesstepperContent,
      children: [
        { path: "/sales/", name: "stepper-content", props: true, component: salesstepperContent,},
        { path: "/sales/step-1", name:"sales-step1", props: true, component: salescardstep1Content,},
        { path: "/sales/step-2", name:"sales-step2", props: true, component: salescardstep2Content,},
        { path: "/sales/step-3", name:"sales-step3", props: true, component: salescardstep3Content,},
      ],
    },
    /*For farmer*/
    {
      path: "/crops/step-1",
      props: true,
      component: cropsstepperContent,
      children: [
        {
          path: "/crops/step-1",
          name: "stepper-content",
          props: true,
          component: cropsstepperContent,
        },
        {
          path: "/crops/step-1",
          name:"crops-step1",
          props: true,
          component: cropscardstep1Content,
        },
        {
          path: "/crops/step-2",
          name:"crops-step2",
          props: true,
          component: cropscardstep2Content,
        },
        {
          path: "/crops/step-3",
          name:"crops-step3",
          props: true,
          component: cropscardstep3Content,
        },
      ],
    },
  ]
})

export default router
