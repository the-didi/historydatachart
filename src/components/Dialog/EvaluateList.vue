<template>
    <div class="evaluate-list">
        <div class="evaluate-title">
            <span>评估记录</span>
            <svg @click="handlerCancel" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15" stroke="#393E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 5L15 15" stroke="#393E46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div class="evaluate-body">
            <span>老年综合评估</span>
            <div class="evaluate-body-list">
                <div v-for="item in dataList" class="evaluate-body-list-item">
                    <span>评估编号: {{ item.assessmentRecordsId }}</span>
                    <span>创建人: {{ item.createName }}</span>
                    <span>创建时间: {{ item.createTime }}</span>
                </div>
            </div>
            <div class="btn-group">
                <a-button @click="handlerPrev">上一页</a-button>
                <a-button @click="handlerNext" style="background-color:#1A6FAC;color:#fff">下一页</a-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import {EvaluateStore} from '@/store/evaluate.store'

const evaluateStore = EvaluateStore()

type Props = {
    recordId: string
}

const currentIndex = ref(0)

const dataList = ref<any>([])

const handlerPrev=()=>{

}

const handlerNext=()=>{

}

const props = defineProps<Props>()

const emiter = defineEmits(['cancel'])

onMounted(() => {
    loadData()
})

const handlerCancel = ()=>{
    emiter('cancel')
}

const loadData = () => {
    const token = window.localStorage.getItem("token")
    const entity:any = {
        pageNum: currentIndex.value,
        pageSize: 5
    }
    const searchSchame:any = new URLSearchParams(entity)
    fetch(`/api/assessment/report/list/${evaluateStore.userId}?`+searchSchame,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log("--打印数据条目--")
        console.log(data)
        dataList.value = data.data.rows
    })
}

</script>
<style lang="scss" scoped>
.evaluate-list {
    width: 630px;
    height: auto;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;

    .evaluate-title {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        span{
            font-size: 20px;
        }
        .evaluate-body-list-item{
            width: 100%;
            height: 45px;
            border: 1px solid #eee;
            border-radius: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 21px;
        }
    }
    .evaluate-body{
        width: 100%;
        height: auto;
        .evaluate-body-list{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            .evaluate-body-list-item{
                width: 100%;
                height: 45px;
                border-radius: 15px;
                border: 1px solid #eee;
                display: flex;
                flex-direction: row;
                align-items: center;
                box-sizing: border-box;
                padding: 0 10px;
                gap: 15px;
            }
        }
        .btn-group{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
        }
    }
}
</style>