<template>
    <div class="current-disable">
        <div class="btn-groups">
            <AddDisableBtn :title="item" :index="index" @handlerClose="handlerClose"
                v-for="(item, index) in userStore.currentDisable" />
            <CurrentAddBtn :title="'选择'" @click="handlerSelect" />
        </div>
        <a-divider style="background-color:#eee;height: 1px;"></a-divider>
        <div class="add-btn">
            <CurrentAddBtn :title="'新增'" @click="handlerFouce()" v-if="!showInput" />
            <input class="input"  v-model="currentValue" id="blurinput" v-show="showInput" />
        </div>
    </div>
    <!-- 弹窗模块开始 -->
    <a-modal v-model:visible="showDialog" title="选择慢病" :width="887" @ok="handleOk">
        <SelectDis />
    </a-modal>
    <!-- 弹窗模块结束 -->
</template>
<script lang="ts" setup>
import AddDisableBtn from '@/components/Button/AddDisBtn.vue'
import CurrentAddBtn from '@/components/BasicComponent/CurrentAddDisable.vue'
import SelectDis from '@/components/Content/SelectDis.vue'
import { UserStore } from '@/store/user.store'
const showInput = ref(false)
const userStore = UserStore()
import { ref, onMounted } from 'vue'
const currentValue = ref("")
const showDialog = ref(false)
onMounted(() => {
    registerEventListener()
    loadCurrentDisable()
})

const loadCurrentDisable = ()=>{
    if(userStore.creatingUsers.basicInfo.diseasesType){
        userStore.currentDisable = userStore.creatingUsers.basicInfo.diseasesType
    }
}
const handlerFouce = ()=>{
    showInput.value = true;
    const blurinput = document.getElementById("blurinput")
    blurinput?.focus()
}

const registerEventListener = () => {
    const blurinput = document.getElementById("blurinput")
    blurinput?.addEventListener("blur", () => {
        showInput.value = false
    })
    blurinput?.addEventListener("keydown", (event: any) => {
        if (event.key === 'Enter') {
            
            userStore.currentDisable.push(currentValue.value)
        }
    })
}
const handleOk = () => {
    showDialog.value = false
}
const handlerSelect = () => {
    showDialog.value = true
}

const handlerClose = (index: number) => {
    userStore.currentDisable.splice(index, 1)
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

    .add-btn {
        .input {
            height: 19px;
            box-sizing: border-box;
            padding: 1px;
            max-width: 50px;
        }
    }
}
</style>