import { createApp } from 'vue'
import './style.css'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'
import App from './App.vue'

const app = createApp(App)

AOS.init();

app.use(router)

app.mount('#app')
