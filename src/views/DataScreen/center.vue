<template>
    <div class="center-container">
        <div id="map-container"></div>
        <div class="cylin-data">
            <CylinData />
            <div class="footer-data">
                <div class="footer-txt">运动统计</div>
                <div class="footer-txt">平均步数:4775步</div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import CylinData from './Center/CylinData.vue'
import { onMounted } from 'vue'
import * as echarts from 'echarts'
import Map from '@/assets/map.json?raw'

onMounted(() => {
    loadData()
})

const loadData = () => {
    var mapChart = echarts.init(document.getElementById('map-container'));
    echarts.registerMap('map', Map);
    mapChart.setOption({
        series: [{
            type: 'map',
            map: 'map'
        }]
    });
}

</script>
<style lang="scss" scoped>
#map-container{
    width: 800px;
    height: 800px;
}
.center-container {
    width: 100%;
    height: 100%;
    position: relative;

    .cylin-data {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background-color: rgba(42, 88, 172, 0.5);
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;

        .footer-data {
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            display: flex;
            flex-direction: row;
            background-color: rgba(42, 88, 172, 0.5);
            justify-content: space-between;

            .footer-txt {
                color: #66d9e9;
                font-size: 18px;
            }
        }

    }

    .body-data {
        position: absolute;
        min-width: 300px;
        height: 170px;
        overflow: hidden;
        box-sizing: border-box;
        padding: 3px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &::before {
            content: "";
            background-image: conic-gradient(#66d9e9 20deg,
                    transparent 180deg);
            width: 150%;
            position: absolute;
            height: 150%;
            animation: rotate 2s linear infinite;
            left: -25%;
            top: -25%;
            z-index: 1;
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>