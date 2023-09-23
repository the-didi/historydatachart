import {defineStore} from 'pinia'

export const BusStore = defineStore({
    id: 'BusStore',
    state: ()=>{
        return {
            sport: null as any,
            reader: null as any,
            writer: null as any,
            // 血压
            d1: 0 as number,
            // 心率
            d2: 0 as number,
            // 舒张压力
            d3: 0 as number
        }
    },
    getters: {

    },
    actions: {

    }
})