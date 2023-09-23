<template>
    <a-form>
        <div class="diabetes-container">
            <div class="form">
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="糖尿病类型">
                            <a-select v-model:value="chronicStore.creatingChronic.diabetesType">
                                <a-select-option v-for="item in dictTypes.diabetesType" :value="item.value">{{
                                    item.label }}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="确诊医院">
                            <a-input v-model:value="chronicStore.creatingChronic.diabetesHospital"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
            <div class="title">血糖检测</div>
            <div class="form">
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="时间">
                            <a-date-picker valueFormat="YYYY-MM-DD" v-model:value="chronicStore.creatingChronic.glycemiaTime"></a-date-picker>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="药物服用">
                            <a-select v-model:value="chronicStore.creatingChronic.glycemiaDrug">
                                <a-select-option v-for="item in dictTypes.glycemiaDrug" :value="item.value">{{ item.label }}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="空腹血糖">
                            <a-input type="number" v-model:value="chronicStore.creatingChronic.glycemiaFasting"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="餐后血糖">
                            <a-input type="number" v-model:value="chronicStore.creatingChronic.glycemiaDiet"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="收缩压">
                            <a-input type="number"
                                v-model:value="chronicStore.creatingChronic.systolicBloodPressure"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="舒张压">
                            <a-input type="number"
                                v-model:value="chronicStore.creatingChronic.diastolicBloodPressure"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="心率">
                            <a-input type="number" v-model:value="chronicStore.creatingChronic.heartRate"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="11">
                        <a-form-item label="血氧饱和度">
                            <div class="input-groups">
                                <a-input type="number"
                                    v-model:value="chronicStore.creatingChronic.oxygenSaturation"></a-input>
                                <span style="color: #4D8FBE;width:400px">前面如已经记录 则此处自动填入数据</span>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
        </div>
    </a-form>
</template>
<script lang="ts" setup>
import { ChronicStore } from '@/store/chronic.store'
import { onMounted, ref,watch } from 'vue'
import { BusStore } from '@/store/bus.store'
const chronicStore = ChronicStore()

const busStore = BusStore()
watch(()=>busStore.d1,()=>{
    chronicStore.creatingChronic.systolicBloodPressure = busStore.d2
    chronicStore.creatingChronic.diastolicBloodPressure = busStore.d3
    chronicStore.creatingChronic.heartRate = busStore.d3
})
onMounted(() => {
    loadData()
})

const dictTypes = ref<any>({})

const handlerAdd = () => {
    chronicStore.tmpArr1.push({})
}

const antihypertensiveDrugList = ref<any>([
    {},
    {}
])

const getOptionByDictName = async (name: string) => {
    const token = window.localStorage.getItem("token")
    return await fetch('/api/dictData/list/' + name, {
        method: 'GET',
        headers: {
            token: token + ""
        }
    }).then(res => res.json())
}

const loadData = () => {
    Promise.allSettled([
        getOptionByDictName('diabetesType'),
        getOptionByDictName('glycemiaDrug')
    ]).then(res => {
        const response: any = res
        dictTypes.value.diabetesType = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.glycemiaDrug = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
    })
}

</script>
<style lang="scss" scoped>
.diabetes-container {
    width: 100%;
    height: auto;

    .title {
        font-weight: bolder;
    }
}

.input-groups {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}
</style>