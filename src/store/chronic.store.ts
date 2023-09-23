import {defineStore} from 'pinia'

export const ChronicStore = defineStore({
    id: 'ChronicStore',
    state: ()=>{
        return {
            userId: '' as string,
            managerUser: null as any,
            creatingChronic: {} as any,
            tmpArr1: [{},{}] as any,
            tmpArr2: [{},{}] as any,
            currentShowTab: [] as any
        }
    }
})