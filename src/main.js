import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.scss'
import { components } from './components/UI/exportUiComponents'


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component);
})

app.use(createPinia())

app.use(router)

app.use(ElementPlus)

app.mount('#app')
