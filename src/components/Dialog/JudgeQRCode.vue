<template>
    <div class="wechat-container">
        <div class="title">用户评价</div>
        <div class="btn-group">
            <a-button @click="handlerCancel" style="background-color: transparent; border-radius: 10px;">关闭</a-button>
        </div>
        <div class="qr-code">
            <div>用户评价</div>
            <div>完成项目: {{ props.projectName }}</div>
            <div>操作人员姓名: {{ props.operationName }}</div>
            <canvas id="qrcanvas" width="200" height="200"></canvas>
            <div>请用户使用微信扫码，评价此次服务</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import QRCode from 'qrcode'

const emit = defineEmits(['cancel'])

type Prop = {
    qrCodeStr: string,
    projectName: string,
    operationName: string
}
const props = defineProps<Prop>()

onMounted(() => {
    loadData()
})

function coverString(qrCodeJSON){
    let str = ''
    for(const key of Object.keys(qrCodeJSON)){
        str+=`${key}=${qrCodeJSON[key]}&`
    }
    return str
}

const loadData = () => {
    const qrcanvas = document.getElementById("qrcanvas")
    console.log(props.qrCodeStr)
    const qrCodeJSON = JSON.parse(props.qrCodeStr)
    const url=new URL("http://192.168.27.23:4090")
    url.pathname = "/phonejudge"
    url.search = coverString(qrCodeJSON)
    QRCode.toCanvas(qrcanvas, url.toString(), (error) => {
        console.log(error)
    })
}

const handlerCancel = () => {
    emit('cancel')
}

</script>
<style lang="scss" scoped>
.wechat-container {
    width: 495px;
    height: 560px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0px 0px 6px 4px rgba(255, 255, 255, 0.25) inset;
    position: relative;
    box-sizing: border-box;
    background-color: #fff;
    padding: 20px;

    .qr-code {
        position: absolute;
        left: 50%;
        z-index: 999;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 18px;
        text-align: center;
    }

    .background {
        position: absolute;
        right: -10px;
        top: 0;
        filter: blur(3px);
    }

    .title {
        font-size: 24px;
    }

    .btn-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
}
</style>