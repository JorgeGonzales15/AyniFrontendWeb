import { createRouter, createWebHistory } from 'vue-router'
import stepperContent from "@/Management/crops/components/stepper-content.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [

    {
      path: "/",
      props: true,
      component: stepperContent,
      children: [
        {
          path: "/",
          name: "stepper-content",
          props: true,
          component: () =>
              import("@/Management/crops/components/stepper-content.vue")
        },
        {
          path: "/card-step1-content",
          props: true,
          component: () =>
                import("@/Management/crops/components/card-step1-content.vue")
        },
        {
          path: "/card-step2-content",
          props: true,
          component: () =>
              import("@/Management/crops/components/card-step2-content.vue")
        },
        {
          path: "/card-step3-content",
          props: true,
          component: () =>
              import("@/Management/crops/components/card-step3-content.vue")
        },
      ],
    },
  ]
})

export default router
