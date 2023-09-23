import {defineStore} from 'pinia'

export const EvaluateStore = defineStore({
    id: 'EvaluateStore',
    state: ()=>{
        return {
            currentRecordsId: '' as string,
            userId: '' as string,
            judgeMap : {} as any,
            creatingName: '' as string
        }
    },
    getters: {

    },
    actions: {

    }
})