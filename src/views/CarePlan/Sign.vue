<template>
    <div class="sign">
        <canvas id="signCanvas" style="width:100%;height: 100%;"></canvas>
    </div>
</template>
<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import {CarePlanStore} from '@/store/careplan.store'
onMounted(() => {
    loadData()
})

const carePlanStore = CarePlanStore()



let canvas: any = ref<any>(null)
let context: any = null



const loadData = () => {
    canvas.value = document.getElementById("signCanvas")

    context = canvas.value.getContext("2d")
    let isWringting = false
    canvas.value.addEventListener("mousedown", (e:any) => {
        console.log(e)
        context.strokeStyle = "black"
        context.moveTo(e.offsetX,e.offsetY)
        isWringting = true
    })
    canvas.value.addEventListener("mousemove", (e:any) => {
        if(isWringting){
            context.lineTo(e.offsetX,e.offsetY)
            context.stroke()
        }
    })  
    canvas.value.addEventListener("mouseup", (e:any) => {
        isWringting = false
        carePlanStore.base64Data = canvas.value.toDataURL("image/png")
    })
}

</script>
<style lang="scss" scoped>
.sign {
    width: 100%;
    height: 70%;
    border: 1px solid #eee;
    background-color: #eee;
    padding: 10px;
}
</style>