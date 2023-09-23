<template>
    <div class="download-container">
        <!-- 需要下载的内容 -->
        <div id="downloadElement" class="download-container">
            <!-- title -->
            <span class="title">德阳市中西医结合医院</span>
            <span class="desc">老年综合评估(CGA)报告单</span>
            <div class="record">评估编号: {{ downloadEntity.recordid }}</div>
            <div class="table">
                <div class="th">
                    <span>评估项目</span>
                    <span>初筛结果</span>
                    <span>详细评估类型</span>
                </div>
                <div class="td" v-for="item in downloadEntity.recordList">
                    <span>{{ item.diseaseName }}</span>
                    <span style="text-decoration: underline;">{{ item.isException }}</span>
                    <span>{{ item.type }}</span>
                </div>
            </div>
            <div class="td" style="display: flex;flex-direction: row;justify-content: space-between;">
                <span>评估人: {{ downloadEntity.recordBy }}</span>
                <span style="margin-left: 10px;">评估时间: {{ downloadEntity.recordTime }}</span>
            </div>
            <span>注：本评估报告通过受检者以及照顾者收集，仅仅反映受检者近期情况！</span>
        </div>
        <!-- 按钮组 -->
        <div class="btn-group">
            <a-button @click="handlerCancle" style="border: 1px solid #4D8FBE">取消</a-button>
            <a-button @click="handlerDownload" style="background-color: #1A6FAC;color:#fff;">下载图片</a-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {onMounted,ref} from 'vue'

const downloadEntity = ref<any>({

})

type Prop = {
    recordId: string
}
const props = defineProps<Prop>()

const emiter = defineEmits(['cancel','download'])

onMounted(()=>{
    loadData()
})

const loadData = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/assessment/report/${props.recordId}`,{
        method: 'GET',
        headers:{
            'Content-type': 'application/json',
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        downloadEntity.value.recordid = props.recordId
        downloadEntity.value.recordBy = data.data.updateByName
        downloadEntity.value.recordTime = data.data.updateTime
        downloadEntity.value.recordList = genetorRecordList(data.data.diseaseMenu)
    })
}
function genetorRecordList(menus:any[]){
    let result:any[] = []
    for(const item of menus){
        for(let i=0;i<item.diseaseItems.length;i++){
            result.push({
                isException:item.diseaseItems[i].isException,
                diseaseName: item.diseaseItems[i].diseaseName,
                type: item.diseaseItems[i].type
            })
        }
    }
    return result
}

const handlerCancle = () => {
    emiter('cancel')
}
const handlerDownload = () => {
    emiter('download')
}
</script>
<style lang="scss" scoped>
.download-container {
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;

    .download-container {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
        gap: 10px;

        .title {
            font-size: 24px;
        }

        .desc {
            font-size: 16px;
        }

        .record {
            width: 100%;
            display: flex;
            flex-direction: row-reverse;
        }

        .table {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 5px;
            border-bottom: 1px solid black;

            .th {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                border-bottom: 1px solid black;
                border-top: 1px solid black;
                font-weight: bolder;
                gap: 10px;
            }

            .td {
                width: 100%;
                display: grid;
                gap: 10px;
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
    }

    .btn-group {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

}</style>