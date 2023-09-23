<template>
    <div class="careplan-manager">
        <a-breadcrumb style="margin-bottom:10px">
            <a-breadcrumb-item>慢病患者管理</a-breadcrumb-item>
            <a-breadcrumb-item>管理慢病患者</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="btn-group">
            <div @click="handlerSelect(0)" :class="{ active: currentIndex == 0 }">管理患者</div>
            <div @click="handlerSelect(1)" :class="{ active: currentIndex == 1 }">查看记录</div>
        </div>
        <component :is="compList[currentIndex]" />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ManagerMent from './ManagerMent.vue'
import ManagerRecord from './ManagerRecord.vue'
import {CarePlanStore} from '@/store/careplan.store'

const carePlanStore = CarePlanStore()
const currentIndex = ref(0)

const compList = ref([
    ManagerRecord,
    ManagerMent
])

const handlerSelect = (index) => {
    currentIndex.value = index
}
</script>
<style lang="scss" scoped>
.careplan-manager {
    width: 100%;
    height: 100%;

    .btn-group {
        display: flex;
        flex-direction: row;

        div {
            display: inline-flex;
            box-sizing: border-box;
            padding: 5px 10px;
            border: 1px solid #54B674;
            cursor: pointer;
        }

        .active {
            color: #fff;
            background: #54B674;
        }
    }


}
</style>