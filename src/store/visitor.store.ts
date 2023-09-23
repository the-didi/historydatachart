import { defineStore } from 'pinia'

export const VisitorStore = defineStore('VisitorStore',{
    state:()=>{
        return {
            visitorID: '' as string
        }
    }
})