<template>
    <div class="current-disable">
        <div class="btn-groups">
            <AddDisableBtn :title="item" :index="index" @handlerClose="handlerClose"
                v-for="(item, index) in userStore.currentDrag" />
            <CurrentAddBtn :title="'选择'" @click="handlerSelect" />
        </div>
    </div>
    <!-- 弹窗模块开始 -->
    <a-modal v-model:visible="showDialog" title="选择药品" :width="887" @ok="handleOk">
        <SelectDrag />
    </a-modal>
    <!-- 弹窗模块结束 -->
</template>
<script lang="ts" setup>
import AddDisableBtn from '@/components/Button/AddDisBtn.vue'
import CurrentAddBtn from '@/components/BasicComponent/CurrentAddDisable.vue'
import SelectDrag from '@/components/Content/SelectDrag.vue'
import {UserStore} from '@/store/user.store'
const userStore = UserStore()
import { ref,onMounted } from 'vue'

onMounted(()=>{
    loadData()
})

const loadData = ()=>{
    if(userStore.creatingUsers.basicInfo.currentMedications){
        userStore.currentDrag = userStore.creatingUsers.basicInfo.currentMedications
    }
}

const showDialog = ref(false)
const handleOk =()=>{
    showDialog.value = false
}
const handlerSelect = () => {
    showDialog.value = true
}

const handlerClose = (index: number) => {
    userStore.currentDrag.splice(index,1)
}
</script>
<style lang="scss" scoped>
.current-disable {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    .btn-groups {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3px;

    }
}
</style>