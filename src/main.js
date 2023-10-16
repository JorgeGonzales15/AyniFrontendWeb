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
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toolbar from "primevue/toolbar";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import Row from "primevue/row";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import Tag from "primevue/tag";
import Card from "primevue/card";
import Listbox from 'primevue/listbox';
import Avatar from "primevue/avatar";
import InputText from "primevue/inputtext";
import SplitButton from "primevue/splitbutton";
import TabMenu from "primevue/tabmenu";
import Fieldset from "primevue/fieldset";
import Divider from "primevue/divider";
import Carousel from "primevue/carousel";
import store from "@/store/store";
import Paginator from "primevue/paginator";

const app = createApp(App)

app
    .use(router)
    .use(ToastService)
    .use(PrimeVue, { ripple: true })
    .use(store)
    .component("pv-steps", Steps)
    .component("pv-card", Card)
    .component("pv-dialog", Dialog)
    .component("pv-button", Button)
    .component('pv-input-text', InputText)
    .component("pv-inputnumber", InputNumber)
    .component("pv-dropdown", Dropdown)
    .component("pv-calendar", Calendar)
    .component("pv-checkbox", Checkbox)
    .component('pv-data-table', DataTable)
    .component("pv-column", Column)
    .component('pv-toolbar', Toolbar)
    .component('pv-textarea', Textarea)
    .component('pv-button', Button)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-menu', Menu)
    .component('pv-toast', Toast)
    .component('pv-tag', Tag)
    .component('pv-listbox', Listbox)
    .component('pv-tab-menu', TabMenu)
    .component('pv-split-button', SplitButton)
    .component('pv-avatar', Avatar)
    .component('pv-paginator', Paginator)
    .component('pv-field-set', Fieldset)
    .component('pv-divider', Divider)
    .component('pv-carousel', Carousel)
    .mount('#app')
