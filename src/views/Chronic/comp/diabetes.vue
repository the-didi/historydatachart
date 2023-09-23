<template>
    <a-form>
        <div class="diabetes-container">
            <div class="title">指标详情</div>
            <div class="form">
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="医学营养干预">
                            <a-select v-model:value="chronicStore.creatingChronic.hypertensionType">
                                <a-select-option v-for="item in dictTypes.hypertensionType" :value="item.value">{{
                                    item.label }}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="确诊医院">
                            <a-input v-model:value="chronicStore.creatingChronic.diabetesHospital"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="高血压管理级别">
                            <a-select v-model:value="chronicStore.creatingChronic.hypertensionManageLevel">
                                <a-select-option v-for="item in dictTypes.hypertensionManageLevel" :value="item.value">{{
                                    item.label }}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="血压监测时间">
                            <a-date-picker valueFormat="YYYY-MM-DD" v-model:value="chronicStore.creatingChronic.bpTime" style="width:200px"
                                placeholder="请选择时间" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="药物服用">
                            <a-radio-group v-model:value="chronicStore.creatingChronic.glycemiaDrug">
                                <a-radio :value="0">未使用</a-radio>
                                <a-radio :value="1">使用</a-radio>
                            </a-radio-group>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="收缩压">
                            <a-input suffix="mmHg" type="number" v-model:value="chronicStore.creatingChronic.systolicBloodPressure"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="舒张压">
                            <a-input suffix="mmHg" type="number" v-model:value="chronicStore.creatingChronic.diastolicBloodPressure"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="心率">
                            <a-input suffix="次/分钟" type="number" v-model:value="chronicStore.creatingChronic.heartRate"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
            </div>
            <div class="title">药物干预</div>
            <div class="form">
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="降压药">
                            <a-radio-group v-model:value="chronicStore.creatingChronic.antihypertensiveDrugs">
                                <a-radio :value="0">未使用</a-radio>
                                <a-radio :value="1">使用</a-radio>
                            </a-radio-group>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[25,25]" v-for="(item,index) in chronicStore.tmpArr1">
                    <a-col :span="10">
                        <a-form-item :label="`降压药物${index+1}`">
                            <div class="input-groups">
                                <a-input v-model:value="chronicStore.tmpArr1[index].key"></a-input>
                                <a-input placeholder="请选择用法用量" v-model:value="chronicStore.tmpArr1[index].value"></a-input>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[10,10]">
                    <a-col :span="10">
                        <span @click="handlerAdd" style="cursor:pointer;color:#1A6FAC;font-size: 18px;">+药物</span> 
                    </a-col>
                </a-row>
            </div>
        </div>
    </a-form>
</template>
<script lang="ts" setup>
import { ChronicStore } from '@/store/chronic.store'
import { onMounted, ref } from 'vue'
const chronicStore = ChronicStore()

onMounted(() => {
    loadData()
})

const dictTypes = ref<any>({})

const handlerAdd = ()=>{
    chronicStore.tmpArr1.push({})
}

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
        getOptionByDictName('hypertensionType'),
        getOptionByDictName('hypertensionManageLevel'),
        getOptionByDictName('glycemiaDrug'),
        getOptionByDictName('hypertensionDrug')
    ]).then(res => {
        const response: any = res
        dictTypes.value.hypertensionType = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.hypertensionManageLevel = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.glycemiaDrug = response[2].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.hypertensionDrug = response[3].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
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
.input-groups{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}
</style>