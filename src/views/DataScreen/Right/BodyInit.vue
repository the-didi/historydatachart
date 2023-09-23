<template>
    <div class="body-init-container">
        <div class="title">中医体质</div>
        <div id="right-top"></div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
const option  = {
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '阴虚质', max: 6500 },
      { name: '阳虚质', max: 16000 },
      { name: '血淤质', max: 30000 },
      { name: '平和质', max: 38000 },
      { name: '气虚质', max: 52000 },
      { name: '痰湿质', max: 25000 }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
};
onMounted(() => {
    loadData()
})
const loadData = () => {
    var myChart = echarts.init(document.getElementById('right-top')!);
    option && myChart.setOption(option)
}
</script>
<style lang="scss" scoped>
.body-init-container {
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

    #right-top {
        width: 100%;
        height: 200px;
    }
}
</style>