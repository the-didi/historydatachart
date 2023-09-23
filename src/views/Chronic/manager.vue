<template>
    <div class="chronic-manager-container">
        <a-breadcrumb style="margin-bottom:10px">
            <a-breadcrumb-item>慢病患者管理</a-breadcrumb-item>
            <a-breadcrumb-item>管理慢病患者</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="records-container">
            <div class="btn-group">
                <div @click="handlerSelect(0)" :class="{ active: currentIndex == 0 }">管理患者</div>
                <div @click="handlerSelect(1)" :class="{ active: currentIndex == 1 }">查看记录</div>
            </div>
            <div class="disease-container">
                <KeepAlive>
                    <component :is="compList[currentIndex]" />
                </KeepAlive>
            </div>
            
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Record from './Record.vue'
import ManagerMent from './ManagerMent.vue'
import { ChronicStore } from '@/store/chronic.store'
const currentIndex = ref(0)

const chronicStore = ChronicStore()

const compList = ref([
    ManagerMent,
    Record
])



const handlerSelect = (index: number) => {
    currentIndex.value = index
}

</script>
<style lang="scss" scoped>
.chronic-manager-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;

    .records-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .btn-group {
            display: flex;
            flex-direction: row;

            div {
                display: inline-flex;
                box-sizing: border-box;
                padding: 5px 10px;
                border: 1px solid #1A6FAC;
                cursor: pointer;
            }

            .active {
                color: #fff;
                background: #1A6FAC;
            }
        }
    }

    .disease-container {
        width: 100%;
        height: auto;
        margin-top: 10px;
    }
}
</style>