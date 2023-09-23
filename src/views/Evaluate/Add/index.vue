<template>
    <div class="evaluate-add-container">
        <!-- 面包屑开始 -->
        <a-breadcrumb style="margin-bottom:10px">
            <a-breadcrumb-item>评估报告管理</a-breadcrumb-item>
            <a-breadcrumb-item>新增或编辑评估量表</a-breadcrumb-item>
        </a-breadcrumb>
        <!-- 面包屑结束 -->
        <div class="evaluate-add-body">
            <!-- sidebar -->
            <div class="sidebar" style="margin-right:10px">
                <a-menu style="width: 100%;" v-for="top in menus" mode="inline">
                    <a-sub-menu :key="top" style="overflow: hidden;">
                        <template #icon>
                            <SVGComponent :svg="top.icon" />
                        </template>
                        <template #title>{{ top.diseaseType }}</template>
                        <a-sub-menu :key="middle.diseaseName" v-for="middle in top.subMenus" style="margin-left:-24px">
                            <template #title>{{ middle.diseaseName }}</template>
                            <template #icon>
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.98772 7.346C2.13361 7.346 0.625244 5.83653 0.625244 3.98119C0.625244 2.12571 2.13361 0.616211 3.98772 0.616211C5.84165 0.616211 7.35027 2.12587 7.35027 3.98119C7.35027 5.83652 5.842 7.346 3.98772 7.346ZM3.98772 0.971778C2.3298 0.971778 0.980987 2.32164 0.980987 3.98102C0.980987 5.64042 2.32979 6.99009 3.98772 6.99009C5.64572 6.99009 6.99452 5.64023 6.99452 3.98102C6.99453 2.32164 5.64572 0.971778 3.98772 0.971778Z"
                                        fill="#929AAB" />
                                </svg>
                            </template>
                            <a-menu-item :key="bottom.name" @click="handlerItemClick(bottom)"
                                style="margin-left:10px"
                                v-for="bottom in middle.subSubMenus">{{ bottom.name }}</a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu>
                </a-menu>
            </div>
            <!-- body -->
            <div class="body">
                <Question :id="currentID" v-if="currentID != null" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { EvaluateStore } from '@/store/evaluate.store'
import { onMounted, ref } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import SVGComponent from '@/components/SVGComponent.vue'
import Question from './question.vue'
const evaluateStore = EvaluateStore()

const currentSelect = ref(0)

const currentID = ref("")


onMounted(() => {
    loadData()
})

const disMap = ref<any>({})

const handlerSelect = (index: number) => {
    currentSelect.value = index
}

const handlerItemClick = (item: any) => {
    currentID.value = item.id
}

const menus = ref<any>([])

const loadData = () => {
    const token = window.localStorage.getItem("token")
    fetch(`/api/assessment/list/${evaluateStore.currentRecordsId}`, {
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        },
        method: 'GET'
    }).then(res => res.json())
        .then(data => {
            menus.value = data.data
            currentID.value = ''
        })
}


</script>
<style lang="scss" scoped>
.evaluate-add-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    .evaluate-add-body {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        background-color: #fff;

        .sidebar {
            width: 175px;
            height: 100%;
            display: flex;
            flex-direction: column;
            
            overflow-y: scroll;
            &::-webkit-scrollbar{
                display: hidden;
            }
            .active {}

            .menuItem {
                width: 100%;
                height: auto;

                .item-head {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    box-sizing: border-box;
                    padding: 0 17px;
                    justify-content: space-between;
                    align-items: center;
                    height: 50px;
                    width: 100%;
                    font-size: 14px;

                    .head-left {
                        width: auto;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        overflow: hidden;
                        font-size: 12px;
                    }
                }

                .item-body {
                    width: 100%;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    transition: .4s all linear ease-in-out;

                    .body-item {
                        width: 100%;
                        height: 50px;
                        box-sizing: border-box;
                        padding-left: 20px;
                        display: flex;
                        font-size: 8px;
                        flex-direction: row;
                        align-items: center;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;

                        &:hover {
                            background-color: #eee;
                        }
                    }
                }
            }

        }

        .body {
            width: calc(100% - 175px);
            height: auto;
            border-left: 1px solid #EEEEEE;
        }
    }
}

:deep(.ant-menu-sub.ant-menu-inline) {
    background-color: #fff;
}

:deep(.ant-menu-submenu .ant-menu-submenu-inline) {
    background-color: #fff;
}
:deep(.ant-menu-submenu-title){
    margin-left: 10px;
}
:deep(.ant-menu){
    border-right: 1px solid #fff;
}
</style>