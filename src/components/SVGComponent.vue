<template>
    <div ref="svgComponent"></div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from 'vue'
const svgComponent = ref<any>()
type  Props = {
    svg: any
}
const props = defineProps<Props>()
onMounted(()=>{
    registerSVGString()
})

const registerSVGString = ()=>{
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svg.innerHTML = props.svg
    const currentElement:any = svg.children[0]
    svgComponent.value.appendChild(currentElement)
}
</script>
<style lang="scss" scoped></style>