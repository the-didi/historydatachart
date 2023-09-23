import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {registerPlugin} from '@/plugins/index'

const app = createApp(App)
registerPlugin(app)
app.mount('#app')
