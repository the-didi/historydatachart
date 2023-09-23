<template>
    <div class="img-dialog">
        <img :src="`http://81.68.76.155:8090/image${img}`" />
    </div>
</template>
<script lang="ts" setup>
import {onMounted} from 'vue'
type Props = {
    img: string
}
const props = defineProps<Props>()

onMounted(()=>{
    loadImg()
})
const loadImg = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/image${props.img}`,{
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}

</script>
<style>
.img-dialog{
    width: auto;
}
</style>