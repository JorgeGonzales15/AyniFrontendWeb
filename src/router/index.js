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
import CropsContent from "@/Management/crops/components/crops-content.vue";
import ProductsComponent from "@/Shopping/products/pages/products.component.vue";
import AddProductComponent from "@/Shopping/products/pages/add-product.component.vue";
import SelectTransactionPage from "@/Finance/pages/select-transaction.page.vue";
import CostsPage from "@/Finance/pages/costs.page.vue";
import ProfitsPage from "@/Finance/pages/profits.page.vue";
import AddProfitPage from "@/Finance/pages/add-profit.page.vue";
import AddCostPage from "@/Finance/pages/add-cost.page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: 'signin'},
    { path: '/signin', name: 'signin', component: SignInComponent},
    { path: '/signup', name: 'signup', component: SignUpComponent },
    { path: "/select-rol",name: "select-rol", component: SelectRolComponent},
    { path: "/farmer-home", name: "farmer-home", component: FarmerHomeComponent },
    { path: "/merchant-home", name: "merchant-home", component: MerchantHomeComponent },
    { path: "/my-orders", name: "my-orders", component: MyOrders },
    { path: "/select-transaction", name: "select-transaction", component: SelectTransactionPage },
    { path: "/costs", name: "costs", component: CostsPage },
    { path: "/costs/add-cost", name: "add-cost", component: AddCostPage },
    { path: "/profits", name: "profits", component: ProfitsPage },
    { path: "/profits/add-profit", name: "add-profit", component: AddProfitPage },
    { path: "/my-shopping", name: "my-shopping", component: MyShoppingPage },
    { path: "/rates", name: "rates", component: RatePage },
    { path: "/find-products", name: "find-products", component: FindProductPage },
    { path: "/crops-content", name: "crops-content", component: CropsContent },
    { path: "/product", name: "products", component: ProductsComponent},
    { path: "/products/add-product", name: "add-product", component: AddProductComponent },

    { path: "/sales/", props: true, component: salesstepperContent,
      children: [
        { path: "/sales/", name: "stepper-content", props: true, component: salesstepperContent,},
        { path: "/sales/step-1", name:"sales-step1", props: true, component: salescardstep1Content,},
        { path: "/sales/step-2", name:"sales-step2", props: true, component: salescardstep2Content,},
        { path: "/sales/step-3", name:"sales-step3", props: true, component: salescardstep3Content,},
      ],
    },
    {
      path: "/crops/",
      props: true,
      component: cropsstepperContent,
      children: [
        {
          path: "/crops/",
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
