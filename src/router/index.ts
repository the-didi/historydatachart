import {createRouter,createWebHistory} from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/Login.vue'
import UserInfo from '@/views/UserInfo/index.vue'
import AddUser from '@/views/Detail/add.vue'
import InfoUser from '@/views/Detail/info.vue'
import DataScreen from '@/views/DataScreen/index.vue'
import Evaluate from '@/views/Evaluate/index.vue'
import EvaluateAdd from '@/views/Evaluate/Add/index.vue'
import EvaluateInfo from '@/views/Evaluate/Info/index.vue'
import Visitor from '@/views/Visitor/index.vue'
import VisitorAdd from '@/views/Visitor/AddVisitor.vue'
import VisitorInfo from '@/views/Visitor/InfoVisitor.vue'
import VisitorEditor from '@/views/Visitor/EditVisitor.vue'
import CarePlan from '@/views/CarePlan/index.vue'
import CarePlanAdd from '@/views/CarePlan/Add.vue'
import CarePlanManager from '@/views/CarePlan/Manager.vue'
import Chronic from '@/views/Chronic/index.vue'
import ChronicManager from '@/views/Chronic/manager.vue'
import CarePlanWordManager from '@/views/CarePlanManager/index.vue'
import PhoneJudge from '@/views/PhoneJudge/index.vue'
import UserCountManage from '@/views/UserCountManage/index.vue'
import UserDataManage from '@/views/UserDataManage/index.vue'
import Analyze from '@/views/Analyze/index.vue'
import AnalyzeManage from '@/views/Analyze/manage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Default',
            redirect: '/main'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: "/datascreen",
            name: 'DataScreen',
            component: DataScreen
        },
        {
            path: '/phonejudge',
            component: PhoneJudge
        },
        {
            path: '/main',
            name: 'Main',
            component: Main,
            redirect: '/visitor',
            children: [
                {
                    path: 'user',
                    component: UserInfo
                },
                {
                    path: "add",
                    component: AddUser
                },
                {
                    path: "info",
                    component: InfoUser
                },
                {
                    path: '/evaluate',
                    name: 'Evaluate',
                    component: Evaluate,
                },
                {
                    path: '/evalueateadd',
                    name: 'EvaluateAdd',
                    component: EvaluateAdd
                },
                {
                    path: '/evaluateinfo',
                    name: 'EvaluateInfo',
                    component: EvaluateInfo
                },
                {
                    path: '/visitor',
                    component: Visitor
                },
                {
                    path: '/visitoradd',
                    component: VisitorAdd
                },
                {
                    path: '/visitorinfo',
                    component: VisitorInfo
                },
                {
                    path: '/visitoreditor',
                    component: VisitorEditor
                },
                {
                    path: '/careplan',
                    component: CarePlan
                },
                {
                    path: '/careplanadd',
                    component: CarePlanAdd
                },
                {
                    path: '/chroinc',
                    component: Chronic
                },
                {
                    path: '/chronicmanager',
                    component: ChronicManager
                },
                {
                    path: '/careplanmanager',
                    component: CarePlanManager
                },
                {
                    path: '/careplanwordmanager',
                    component: CarePlanWordManager
                },
                {
                    path: '/usercountmanage',
                    component: UserCountManage
                },
                {
                    path: '/userdatamanage',
                    component: UserDataManage
                },
                {
                    path: '/analyze',
                    component: Analyze
                },
                {
                    path: '/analyzeManage',
                    component: AnalyzeManage
                }
            ]
        }
    ]
})

// router.beforeEach((to,from,next)=>{
//     if(!window.localStorage.getItem("token")){
//         router.replace({
//             path: '/login'
//         })
//         return
//     }
// })

export default router