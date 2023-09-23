<template>
    <div class="info-collection">
        <div class="title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A6FAC" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <span>信息采集</span>
        </div>
        <div class="body">
            <a-collapse v-model:activeKey="activeKey">
                <template #expandIcon>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.375 7.4375C15.1875 7.25 14.9375 7.1875 14.6875 7.1875L5.3125 7.25C5.0625 7.25 4.8125 7.3125 4.625 7.5C4.25 7.875 4.25 8.4375 4.625 8.8125L9.3125 13.5C9.375 13.5625 9.5 13.625 9.5625 13.6875L9.625 13.75C9.9375 13.875 10.375 13.8125 10.625 13.5625L15.3125 8.8125C15.75 8.375 15.6875 7.8125 15.375 7.4375Z"
                            fill="#4D8FBE" />
                    </svg>
                </template>
                <a-collapse-panel v-for="(item,index) of mapList" :key="index" :header="item.diseaseType" :style="customStyle">
                    <div class="table">
                        <div class="item" v-for="child of item.diseaseItems">
                            <span>{{ child.type }}</span>
                            <span>{{ child.diseaseName }}</span>
                            <span>{{ child.diseaseContent }}</span>
                            <div :class="{btn:true}" :style="`background:${child.isException =='初筛异常'?'#F96574':'#7AC693'}`">{{ child.isException }}</div>
                        </div>
                    </div>
                </a-collapse-panel>
            </a-collapse>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue'
import {UserStore} from '@/store/user.store'
import {EvaluateStore} from '@/store/evaluate.store'
const activeKey = ref([1,2])
const evaluateStore = EvaluateStore()
const userStore = UserStore()
const customStyle = ref("border-radius: 15px;background: #E6EFF5;color:#4D8FBE;")

onMounted(()=>{
    loadData()
})
const mapList = ref<any>([])

const loadData=()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/assessment/report/${evaluateStore.userId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        activeKey.value = data.data.diseaseMenu.map((ele:any,index:number)=>index)
        evaluateStore.creatingName = data.data.createByName
        mapList.value = data.data.diseaseMenu
    })
}
</script>
<style lang="scss" scoped>
.info-collection {
    width: 100%;
    height: auto;

    .title {
        width: 100%;
        height: 41.5px;
        border-bottom: 1px solid #EEE;
        box-sizing: border-box;
        padding-top: 17.5px;
        padding-left: 35px;
        padding-bottom: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            margin-left: 10px;
        }
    }

    .body {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
        position: relative;
    }
}

.ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    border: 1px solid #fff;
    border-bottom: 0;
    border-radius: 2px;
}

.ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    /* margin-bottom: 24px; */
    vertical-align: top;
}
.table{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding-left: 33px;
    display: flex;
    flex-direction: column;
    .item{
        width: 100%;
        height: 63px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 2fr;
        justify-content: center;
        border-bottom: 1px solid #EEEEEE;
        align-items: center;
        .btn{
            width: auto;
            height: 21px;
            box-sizing: border-box;
            padding: 2px;
            color: #fff;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>
