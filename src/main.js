import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import "../src/assets/font/iconfont.css"
import {installElement} from './plugins/element'
import "animate.css"
const app = createApp(App)
installElement(app)
app.use(store).use(router).use(installElement).mount('#app')
