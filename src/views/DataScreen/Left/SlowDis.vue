<template>
    <div class="slow-dis">
        <div class="title">慢病管理</div>
        <div id="left-bottom"></div>
    </div>
</template>
<script setup lang="ts">
import {onMounted} from 'vue'
import * as echarts from 'echarts'
const data:any = []

const option = {
  yAxis: {
    type: 'category',
    data: ['老年痴呆', '骨关节病', '糖尿病', '高尿酸', '高血压'],

  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLine: { onZero: true },
    splitLine: { show: false },
    splitArea: { show: false }
  },
  series: [
    {
      data: [120, 200, 150, 80, 70],
      type: 'bar',
      name: 'X',
      showBackground: true,
      backgroundStyle: {
        color: '#142764'
      }
    }
  ]
};

onMounted(()=>{
    loadData()
})
const loadData = ()=>{
    const chartDom = document.getElementById('left-bottom')!;
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
}
</script>
<style lang="scss" scoped>
.slow-dis{
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
    #left-bottom{
        width: 100%;
        height: 250px;
    }
}
</style>