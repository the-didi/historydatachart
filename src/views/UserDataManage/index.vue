<template>
    <div class="user-data-manage">
        <a-breadcrumb style="margin-bottom:10px">
            <a-breadcrumb-item>用户数据统计</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="container">
            <div class="header">
                <div class="item" v-for="item in dataBlock" :style="`background: ${item.color}`">
                    <div class="icon">
                        <SVGComponent :svg="item.svg" />
                    </div>
                    <div class="item-content">
                        <div class="title">{{ item.title }}</div>
                        <span>{{ item.count }}次</span>
                    </div>
                </div>
            </div>
            <div class="chart">
                <div clas="title">用户来访数据分析</div>
                <div id="charts"></div>
            </div>
            <div class="bottom-userdata">
                <BottomBar :color="compList[0].color" :title="compList[0].title" :list="compList[0].list" />
                <BottomBar :color="compList[1].color" :title="compList[1].title" :list="compList[1].list" />
                <BottomBar :color="compList[2].color" :title="compList[2].title" :list="compList[2].list" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Item1 from '@/assets/svg/item1.svg?raw'
import Item2 from '@/assets/svg/item2.svg?raw'
import Item3 from '@/assets/svg/item3.svg?raw'
import Item4 from '@/assets/svg/item4.svg?raw'
import Item5 from '@/assets/svg/item5.svg?raw'
import Item6 from '@/assets/svg/item6.svg?raw'
import SVGComponent from '@/components/SVGComponent.vue';
import * as echarts from 'echarts'
import BottomBar from './BottomBar.vue'
onMounted(() => {
    loadData()
})

const compList = ref([
    {
        title: '小区打卡前10排名',
        color: 'linear-gradient(180deg, #A2CFD9 0%, rgba(237, 250, 255, 0.16) 100%);',
        list: [
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            }
        ]
    },
    {
        title: '小区消费金额前10排名',
        color: 'linear-gradient(180deg, #A0D6B2 0%, rgba(179, 207, 227, 0.00) 100%);',
        list: [
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            }
        ]
    },
    {
        title: '小区消费次数前10排名',
        color: 'linear-gradient(180deg, #B3CFE3 0%, rgba(179, 207, 227, 0.00) 100%);',
        list: [
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            },
            {
                name: "xxx小区",
                number: 12,
                count: 50
            }
        ]
    }
])

const loadData = () => {
    const token = window.localStorage.getItem("token")
    fetch("/api/healthMassage/userDate", {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            compList.value[0].list = data.data.clockCommunityTimes
            compList.value[1].list = data.data.clockCommunityConsumeCounts
            compList.value[2].list = data.data.clockCommunityMoneys
            var chartDom = document.getElementById('charts');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                xAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value',
                    data: [0, 10, 20, 30, 40, 50, 60],
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        barWidth: 30,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: [20, 20, 0, 0], // 设置柱子头部为圆形，圆角半径为10
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: 'green'  // 底部颜色为红色
                                    }, {
                                        offset: 1, color: 'blue'  // 头部颜色为蓝色
                                    }]
                                }
                            }
                        }
                    }
                ]
            };
            option && myChart.setOption(option);
        })


}

const dataBlock = ref<any>([
    {
        title: '本日访问量',
        count: '56577',
        color: '#F0F5FF',
        svg: Item1
    },
    {
        title: '本日访问量',
        count: '56577',
        color: '#EDFAFF',
        svg: Item2
    },
    {
        title: '本日访问量',
        count: '56577',
        color: '#FFF6EE',
        svg: Item3
    },
    {
        title: '本日访问量',
        count: '56577',
        color: '#FDEFED',
        svg: Item4
    },
    {
        title: '本日访问量',
        count: '56577',
        color: '#E6FAFD',
        svg: Item5
    },
    {
        title: '本日访问量',
        count: '56577',
        color: '#ECF7EF',
        svg: Item6
    }
])

</script>
<style lang="scss" scoped>
#charts {
    width: 800px;
    height: 500px;
}

.bottom-userdata {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 28px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    justify-content: space-between;
}

.user-data-manage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .container {
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: auto;

        .header {
            width: 100%;
            height: 150px;
            box-sizing: border-box;
            padding: 48px;
            border-radius: 15px;
            background-color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 63px;

            .item {
                width: auto;
                border-radius: 5px;
                display: flex;
                flex-direction: row;
                box-sizing: border-box;
                align-items: center;
                justify-content: space-between;
                .icon {
                    height: 100%;
                }

                .item-content {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    min-width: 80px;
                    gap: 5px;
                    padding: 4px;

                    .title {
                        width: 100%;
                        font-size: 14px;
                        font-weight: bold;
                    }

                    span {
                        color: red;
                    }
                }
            }
        }

        .chart {
            width: 100%;
            height: auto;
            border-radius: 15px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;

            .title {
                position: absolute;
                left: 50%;
                top: 20px;
                transform: translateX(50%);
                font-size: 18px;
            }
        }
    }
}
</style>