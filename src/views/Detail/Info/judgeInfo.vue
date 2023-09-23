<template>
    <div class="basic-info">
        <div class="header">
            <div class="title">
                <!-- icon -->
                <svg width="50" height="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.1751 8.75H16.6626C15.9751 8.75 15.4126 8.1875 15.4126 7.5V4.9875C15.4126 4.625 15.8501 4.45 16.1001 4.7L19.4501 8.05C19.7251 8.3125 19.5376 8.75 19.1751 8.75Z"
                        fill="#1A6FAC" />
                    <path
                        d="M19.5875 10.0001H16.675C15.3 10.0001 14.175 8.87511 14.175 7.50011V4.58761C14.175 4.36261 13.9875 4.17511 13.7625 4.17511H9.1625C6.875 4.16261 5 6.03761 5 8.33761V16.6751C5 18.9626 6.875 20.8376 9.1625 20.8376H15.825C18.1125 20.8376 19.9875 18.9626 19.9875 16.6751V10.4251C20 10.1876 19.8125 10.0001 19.5875 10.0001Z"
                        fill="#B3CFE3" />
                    <path
                        d="M10.2124 10.5H13.1249C13.4624 10.5 13.7499 10.7875 13.7499 11.125C13.7499 11.475 13.4624 11.75 13.1249 11.75H10.2124C9.8624 11.75 9.5874 11.475 9.5874 11.125C9.5874 10.7875 9.8624 10.5 10.2124 10.5ZM14.7874 15.8375H10.2124C9.8624 15.8375 9.5874 15.5625 9.5874 15.2125C9.5874 14.875 9.8624 14.5875 10.2124 14.5875H14.7999C15.1374 14.5875 15.4249 14.875 15.4249 15.2125C15.4124 15.55 15.1374 15.8375 14.7874 15.8375Z"
                        fill="#1A6FAC" />
                </svg>
                <!-- title -->
                <span>评估记录</span>
            </div>
            <a-button type="text" @click="handlerJudge" style="color:#1A6FAC">新增评估</a-button>
        </div>
        <div class="container-body">
            <div class="title">老年综合评估</div>
            <div class="body" v-if="judgeMentList.length != 0">
                <div class="item" v-for="item in judgeMentList">
                    <span>评估编号</span>
                    <span>{{ item.assessmentRecordsId }}</span>
                    <span>创建人</span>
                    <span>{{ item.createName }}</span>
                    <span>创建时间</span>
                    <span>{{ item.createTime }}</span>
                </div>
            </div>
            <div class="empty-status" v-else>
                <svg width="140" height="140" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.7">
                        <path opacity="0.2"
                            d="M203 67.2H77C69.3 67.2 63 73.5 63 81.2V207.2C63 214.9 69.3 221.2 77 221.2H149.52C146.16 214.48 144.2 206.78 144.2 198.8C144.2 170.94 166.74 148.4 194.6 148.4C202.72 148.4 210.28 150.22 217 153.72V81.2C217 73.5 210.7 67.2 203 67.2ZM151.9 130.48L120.68 168.56L114.8 162.82L108.92 168.56V157.08L145.32 133.7L105 153.3L94.5 143.5V142.24L151.9 129.08V130.48ZM191.8 105H88.2C85.82 105 84 103.18 84 100.8C84 98.42 85.82 96.6 88.2 96.6H191.8C194.18 96.6 196 98.42 196 100.8C196 103.18 194.18 105 191.8 105Z"
                            fill="#1A6FAC" />
                        <path opacity="0.1"
                            d="M28 245C28 248.713 39.8 252.274 60.8041 254.899C81.8082 257.525 110.296 259 140 259C169.704 259 198.192 257.525 219.196 254.899C240.2 252.274 252 248.713 252 245C252 241.287 240.2 237.726 219.196 235.1C198.192 232.475 169.704 231 140 231C110.296 231 81.8082 232.475 60.8041 235.1C39.8 237.726 28 241.287 28 245Z"
                            fill="#1A6FAC" />
                        <path opacity="0.5"
                            d="M241.92 209.44C241.92 211.82 243.74 213.64 246.12 213.64C248.5 213.64 250.32 211.82 250.32 209.44C250.32 207.06 248.5 205.24 246.12 205.24C243.74 205.24 241.92 207.2 241.92 209.44ZM253.4 227.5C248.08 228.9 246.96 230.02 245.7 235.2C244.3 229.88 243.18 228.76 238 227.5C243.18 226.1 244.44 224.98 245.7 219.8C246.96 224.98 248.08 226.24 253.4 227.5ZM44.1 56.1399C37.24 57.9599 35.84 59.3599 34.02 66.2199C32.2 59.3599 30.7999 57.9599 23.9399 56.1399C30.7999 54.3199 32.2 52.7799 34.02 46.0599C35.7 52.9199 37.24 54.3199 44.1 56.1399ZM248.5 55.8599C244.3 56.9799 243.46 57.8199 242.34 62.0199C241.22 57.8199 240.38 56.9799 236.18 55.8599C240.38 54.7399 241.22 53.8999 242.34 49.6999C243.32 53.8999 244.3 54.7399 248.5 55.8599ZM245.56 38.4999C234.64 41.2999 232.4 43.6799 229.46 54.5999C226.66 43.6799 224.28 41.4399 213.36 38.4999C224.28 35.6999 226.52 33.3199 229.46 22.3999C232.26 33.1799 234.64 35.5599 245.56 38.4999ZM194.6 239.4C172.2 239.4 154 221.2 154 198.8C154 176.4 172.2 158.2 194.6 158.2C217 158.2 235.2 176.4 235.2 198.8C235.2 221.2 217 239.4 194.6 239.4ZM194.6 166.6C176.82 166.6 162.4 181.02 162.4 198.8C162.4 216.58 176.82 231 194.6 231C212.38 231 226.8 216.58 226.8 198.8C226.8 181.02 212.38 166.6 194.6 166.6Z"
                            fill="#1A6FAC" />
                        <path opacity="0.5"
                            d="M214.2 203H194.6C192.22 203 190.4 201.18 190.4 198.8V179.2C190.4 176.82 192.22 175 194.6 175C196.98 175 198.8 176.82 198.8 179.2V194.6H214.2C216.58 194.6 218.4 196.42 218.4 198.8C218.4 201.18 216.58 203 214.2 203Z"
                            fill="#1A6FAC" />
                        <path opacity="0.5"
                            d="M144.9 239.4H76.9998C59.2198 239.4 44.7998 224.98 44.7998 207.2V81.2C44.7998 63.42 59.2198 49 76.9998 49H203C220.78 49 235.2 63.42 235.2 81.2V149.1C235.2 151.48 233.38 153.3 231 153.3C228.62 153.3 226.8 151.48 226.8 149.1V81.2C226.8 68.04 216.16 57.4 203 57.4H76.9998C63.8398 57.4 53.1998 68.04 53.1998 81.2V207.2C53.1998 220.36 63.8398 231 76.9998 231H144.9C147.28 231 149.1 232.82 149.1 235.2C149.1 237.58 147.28 239.4 144.9 239.4Z"
                            fill="#1A6FAC" />
                    </g>
                </svg>
                <span>缺省页.暂无评估记录</span>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import { EvaluateStore } from '@/store/evaluate.store'
import { onMounted, ref } from 'vue'
import InformationBtn from '@/components/Button/InformationBtn.vue'
import router from '@/router/index'
const userStore = UserStore()
const evaluateStore = EvaluateStore()
onMounted(() => {
    loadData()
})

const handlerJudge = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/assessment/new/${userStore.editorUserId}`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        evaluateStore.currentRecordsId = data.data
        router.push("/evalueateadd")
    })
    
}

const judgeMentList = ref<any>([])

const loadData = () => {
    const token = window.localStorage.getItem("token")
    fetch(`/api/assessment/report/list/${userStore.editorUserId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            judgeMentList.value = data.data.rows
        })
}

</script>
<style lang="scss" scoped>
.basic-info {
    width: 100%;
    height: 100%;
    padding: 10px;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .title {
            width: auto;
            display: flex;
            flex-direction: row;
            align-items: center;

            span {
                font-size: 16px;
            }
        }
    }


    .container-body {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;

        .title {
            font-size: 20px;
            color: #000;
            font-weight: 400;
        }

        .body {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            align-items: center;
            justify-content: center;

            .item {
                width: 100%;
                height: 105px;
                display: grid;
                grid-template-columns: 1fr 2fr;
                border: 1px solid #eee;
                padding: 10px;
                border-radius: 15px;
                gap: 5px;
                align-items: center;
                justify-content: center;
            }
        }
    }
}

.piclist {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.button {
    width: 100px;
    height: 34px;
}

.empty-status {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.information-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        margin-left: 10px;
    }
}</style>