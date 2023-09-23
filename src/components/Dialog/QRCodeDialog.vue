<template>
    <div class="img-dialog">
        <div class="header">
            <span>用户二维码</span>
            <svg @click="onHandlerClose" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L4.5 13.5" stroke="#393E46" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M4.5 4.5L13.5 13.5" stroke="#393E46" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        <div class="body">
            <img :src="imgSrc" />
            <div class="btns">
                <a-button size="large" @click="onHandlerClose">取消</a-button>
                <a-button size="large" @click="onHandlerConfirm" type="primary">确定</a-button>
            </div>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
import { emit } from 'process'
import {onMounted,ref} from 'vue'
type Props = {
    recordId: string
}
const props = defineProps<Props>()

const emiter = defineEmits(['handlerQRCodeConfirm','handlerQRCodeClose'])

const imgSrc=ref("")
onMounted(()=>{
    loadImg()
})
const loadImg = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/basicInformation/getQRCode/${props.recordId}`,{
        method: 'GET',
        headers: {
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        imgSrc.value = data.data
    })
}
const onHandlerClose = ()=>{
    emiter('handlerQRCodeClose')
}
const onHandlerConfirm = ()=>{
    emiter('handlerQRCodeConfirm')
}
</script>
<style lang="scss" scoped>
.img-dialog{
    width: 403px;
    height: 413px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    .header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
        text-align: center;
        color: #393E46;
        font-weight: 400;
        svg{
            cursor: pointer;
        }
    }
    .body {
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 251px;
            height: 243px;
        }
        .btns{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

        }
    }
}
</style>