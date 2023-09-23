import {App} from 'vue'
import router from '@/router'
import {createPinia} from 'pinia'
import VXETable from 'vxe-table'
import Antd from 'ant-design-vue';
import 'xe-utils'
import 'vxe-table/lib/style.css'
import 'ant-design-vue/dist/antd.css'
import '@/theme/index.scss'


export function registerPlugin(app:App){
    const pinia = createPinia()
    app.use(VXETable)
    app.use(Antd)
    app.use(pinia)
    app.use(router)
}