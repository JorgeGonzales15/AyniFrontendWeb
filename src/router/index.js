import salesstepperContent from "@/Shopping/sales/components/stepper-content.vue";
import salescardstep1Content from "@/Shopping/sales/components/card-step1-content.vue";
import salescardstep2Content from "@/Shopping/sales/components/card-step2-content.vue";
import salescardstep3Content from "@/Shopping/sales/components/card-step3-content.vue";
import cropsstepperContent from "@/Management/crops/components/stepper-content.vue";
import cropscardstep1Content from "@/Management/crops/components/card-step1-content.vue";
import cropscardstep2Content from "@/Management/crops/components/card-step2-content.vue";
import cropscardstep3Content from "@/Management/crops/components/card-step3-content.vue";
import HomeView from '../views/HomeView.vue'
import Cards from "@/Finance/components/cost-main-content/Cards.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/sales/",
      props: true,
      component: salesstepperContent,
      children: [
        {
          path: "/sales/",
          name: "stepper-content",
          props: true,
          component: salesstepperContent,
        },
        {
          path: "/sales/step-1",
          name:"sales-step1",
          props: true,
          component: salescardstep1Content,
        },
        {
          path: "/sales/step-2",
          name:"sales-step2",
          props: true,
          component: salescardstep2Content,
        },
        {
          path: "/sales/step-3",
          name:"sales-step3",
          props: true,
          component: salescardstep3Content,
        },
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
