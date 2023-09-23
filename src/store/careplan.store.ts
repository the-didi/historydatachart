import {defineStore} from 'pinia'

export const CarePlanStore = defineStore({
    id: 'CarePlanStore',
    state: ()=>{
        return {
            userId: '' as string,
            base64Data: '' as string
        }
    }
})