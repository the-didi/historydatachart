<template>
    <div class="vertify-component" @click="getVertifyCode">
        <img id="vertifyCode" alt="">
    </div>
</template>
<script lang="ts" setup>
import {onMounted} from 'vue'
import {AppStore} from '@/store/app.store'
const appStore = AppStore()
onMounted(()=>{
    getVertifyCode()
})
const getVertifyCode=async ()=>{
    const res = await fetch('/api/getCaptcha',{
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({token:""})
    }).then(res=>res.json())
    // 存储当前加载验证码的ID
    appStore.currentVertifyCodeId  = res.data.token
    // 将res的内容变成图片
    const vertifyCode = document.getElementById("vertifyCode")
    vertifyCode?.setAttribute("src",res.data.img)
}

</script>
<style lang="scss" scoped>
.vertify-component{
    width: 100%;
    height: 100%;
    #vertifyCode{
        width: 100%;
        height: 100%;
    }
}
</style>