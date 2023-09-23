import {defineStore} from 'pinia'

export const AppStore = defineStore({
    id: 'AppStore',
    state: ()=>{
        return {
            currentVertifyCodeId: "",
            currentRouter: "来访信息管理"
        }
    },
    getters: {

    },
    actions: {

    }
})