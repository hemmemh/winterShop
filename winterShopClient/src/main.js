import { createApp } from 'vue'
import App from './App.vue'
import  router  from './router/router'
import PrimeVue from 'primevue/config';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import store from "./store"
const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App);
app.use(router).use(PrimeVue).use(store).use(vuetify).mount('#app')
