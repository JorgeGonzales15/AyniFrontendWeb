import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import Steps from "primevue/steps";
import Card from "primevue/card";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";

const app = createApp(App)

app
    .use(router)
    .use(ToastService)
    .use(PrimeVue, { ripple: true })
    .component("pv-steps", Steps)
    .component("pv-card", Card)
    .component("pv-dialog", Dialog)
    .component("pv-button", Button)
    .component("pv-inputtext", InputText)
    .component("pv-inputnumber", InputNumber)
    .component("pv-dropdown", Dropdown)
    .component("pv-calendar", Calendar)
    .component("pv-checkbox", Checkbox)
app.mount('#app')
