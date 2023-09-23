<template>
    <a-form>
        <div class="diabetes-container">
            <div class="form">
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="骨质疏松">
                            <a-input v-model="chronicStore.creatingChronic.osteoporosis"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="骨关节病">
                            <a-input v-model:value="chronicStore.creatingChronic.osteoarthrosis"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="确诊医院">
                            <a-input v-model:value="chronicStore.creatingChronic.osteoarthrosis"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="收缩压">
                            <a-input suffix="mmHg" type="number"
                                v-model:value="chronicStore.creatingChronic.systolicBloodPressure"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[55, 55]">
                    <a-col :span="5">
                        <a-form-item label="收缩压">
                            <a-input suffix="mmHg" type="number"
                                v-model:value="chronicStore.creatingChronic.diastolicBloodPressure"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="收缩压">
                            <a-input type="number" v-model:value="chronicStore.creatingChronic.heartRate"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="药物">
                            <a-radio-group v-model:value="chronicStore.creatingChronic.osteoporosisDrug">
                                <a-radio :value="0">未使用</a-radio>
                                <a-radio :value="1">使用</a-radio>
                            </a-radio-group>
                        </a-form-item>
                    </a-col>
                    <a-col :span="5">
                        <a-form-item label="血氧饱和度">
                            <a-input type="number" v-model:value="chronicStore.creatingChronic.oxygenSaturation"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[55, 55]">
                    <a-col :span="12">
                        <div class="title">指标详情</div>
                        <div class="form">
                            <a-row :gutter="[25, 25]" v-for="(item, index) in chronicStore.tmpArr2">
                                <a-col :span="24">
                                    <a-form-item :label="`药物${index + 1}`">
                                        <div class="input-groups">
                                            <a-input v-model:value="chronicStore.tmpArr2[index].key"></a-input>
                                            <a-input placeholder="请选择用法用量"
                                                v-model:value="chronicStore.tmpArr2[index].value"></a-input>
                                        </div>
                                    </a-form-item>
                                </a-col>
                            </a-row>
                            <a-row :gutter="[10, 10]">
                                <a-col :span="10">
                                    <span @click="handlerAdd"
                                        style="cursor:pointer;color:#1A6FAC;font-size: 18px;">+药物</span>
                                </a-col>
                            </a-row>
                        </div>
                    </a-col>
                    <a-col :span="12">
                        <div class="title">钙片</div>
                        <div class="form">
                            <a-row>
                                <a-col :span="12">
                                    <a-form-item label="钙片名">
                                        <a-input v-model:value="chronicStore.creatingChronic.calcium"></a-input>
                                    </a-form-item>
                                </a-col>
                                <a-col :span="12">
                                    <a-form-item label="钙片类型">
                                        <a-select v-model:value="chronicStore.creatingChronic.calciumType">
                                            <a-select-option v-for="item in dictTypes.calciumType" :value="item.value">{{
                                                item.label }}</a-select-option>
                                        </a-select>
                                    </a-form-item>
                                </a-col>
                            </a-row>
                            <a-row :gutter="[55, 55]">
                                <a-col :span="12">
                                    <a-form-item label="用法用量">
                                        <a-input v-model:value="chronicStore.creatingChronic.calciumUsage"></a-input>
                                    </a-form-item>
                                </a-col>
                            </a-row>
                        </div>
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

const handlerAdd = () => {
    chronicStore.tmpArr2.push({})
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
        getOptionByDictName('diabetesType'),
        getOptionByDictName('glycemiaDrug'),
        getOptionByDictName('calciumType')
    ]).then(res => {
        const response: any = res
        dictTypes.value.diabetesType = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.glycemiaDrug = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.calciumType = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
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