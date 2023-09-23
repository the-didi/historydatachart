<template>
    <div class="live-container">
        <div class="title">
            <span>居住分布</span>
            <span>覆盖小区总数: 3245次</span>
        </div>
        <div class="list-container" :style="`top:${topOffset}px`">
            <div class="item" v-for="item of dataList">
                <div class="header">
                    <div class="header-left">
                        <span>No.1</span>
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="header-right">
                        <span>38个</span>
                    </div>
                </div>
                <div class="body">
                    <div class="process"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref,onMounted} from 'vue'

const topOffset = ref(0)
const dataList = ref([
    {
        name: '萧山区'
    },
    {
        name: '雨花区'
    },
    {
        name: '上城区'
    },
    {
        name: '萧山区'
    }
])

onMounted(()=>{
    registerEventListener()
})
const registerEventListener = ()=>{
    setInterval(()=>{
        // 将当前渲染列表的第一个元素提取出来，并且将它放到最后去
        const tmp = dataList.value[0]
        // 将dataList往上面移动
        topOffset.value+=28
        dataList.value.splice(0,1)
        dataList.value.push(tmp)
        if(topOffset.value == 28*dataList.value.length){
            topOffset.value = 0
        }
    },1000)
}
</script>
<style lang="scss" scoped>
.live-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: relative;
    .title{
        font-size: 18px;
        color: #66d9e9;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .list-container{
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        overflow: hidden;
        transition: top 1s linear;
        .item{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            .header{
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-size: 14px;
                .header-left{
                    display: flex;
                    flex-direction: row;
                    color: #66d9e9;
                }
                .header-right{
                    color: yellow;
                }
            }
            .body{
                box-sizing: border-box;
                padding: 2px;
                .process {
                    width: 50%;
                    height: 10px;
                    background-color: #66d9e9;
                }
                width: 100%;
                border-bottom: 1px solid #66d9e9;
            }
        }
    }

}
</style>