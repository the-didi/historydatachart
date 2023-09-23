<template>
    <div class="user-async-container">
        <!-- 标题 -->
        <div class="title">用户分析</div>
        <div class="chart-pie">
            <div class="pie-title">301岁</div>
            <div class="pie-desc">平均年龄</div>
        </div>
        <div id="main"></div>
        <div class="foot">
            平均年龄: 75岁
        </div>
    </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'

const option = {
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['60%', '70%'],
            label: {
                color: 'rgba(255, 255, 255, 1.0)'
            },
            data: [
                { value: 1048, name: '80-89岁' },
                { value: 735, name: '50岁' },
                { value: 580, name: '50-59岁' },
                { value: 484, name: '60-69岁' },
                { value: 300, name: '70-79岁' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    color: function(params:any){
                        if(params.data.value == 1048){
                            return "#841bf1"
                        }
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

onMounted(() => {
    loadData()
})
const loadData = () => {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
}
</script>
<style lang="scss" scoped>
.user-async-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: relative;
    .title {
        font-size: 18px;
        color: #66d9e9;
    }
    .chart-pie{
        position: absolute;
        left: 50%;
        top: calc(100% - 28.28px - 240px);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        background-color: #0d1236;
        transform: translate(-50%,-3%);
        box-shadow: inset 0 0 10px rgba(255,255,255,0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .pie-title{
            font-size: 14px;
            color: #fff;
        }
        .pie-desc{
            font-size: 18px;
            color: #66d9e9;
        }
    }

    #main {
        width: 100%;
        height: 300px;
    }
    .foot{
        font-size: 18px;
        color: #66d9e9;
    }
}
</style>