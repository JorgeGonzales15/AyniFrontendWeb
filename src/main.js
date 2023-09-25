import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// App Theme
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Add PrimeFlex
import 'primeflex/primeflex.css';

// Prime Components
import Avatar from "primevue/avatar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";
import Toolbar from "primevue/toolbar";
import SplitButton from "primevue/splitbutton";
import TabMenu from "primevue/tabmenu";
import Fieldset from "primevue/fieldset";
import Divider from "primevue/divider";
import Carousel from "primevue/carousel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";


const app = createApp(App)

app.use(router)
app.component('pv-checkbox', Checkbox)
app.component('pv-tab-menu', TabMenu)
app.component('pv-toolbar', Toolbar)
app.component('pv-split-button', SplitButton)
app.component('pv-avatar', Avatar)
app.component('pv-input-text', InputText)
app.component('pv-button', Button)
app.component('pv-card', Card)
app.component('pv-field-set', Fieldset)
app.component('pv-divider', Divider)
app.component('pv-carousel', Carousel)
app.component('pv-data-table', DataTable)
app.component('pv-column', Column)

app.mount('#app')
