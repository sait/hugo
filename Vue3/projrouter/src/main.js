import { createApp } from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

import router from './router'

createApp(App).use(router).mount('#app')
