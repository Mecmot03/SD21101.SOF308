import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'      // bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  // bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css'   // bootstrap icons

import './assets/css/style.css'          
import './assets/css/admin.css'

createApp(App).use(router).mount('#app')
