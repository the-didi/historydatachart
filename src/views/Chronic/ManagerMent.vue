<template>
    <a-form>
        <div class="manager-container">
            <div class="card-top">
                <div class="tips">
                    <span>{{ chronicStore.managerUser.name }}</span>
                    <span>{{ chronicStore.managerUser.gender == 0 ? '男' : '女' }}</span>
                    <span>{{ chronicStore.managerUser.age }}</span>
                    <span>身份证号: {{ chronicStore.managerUser.idCard }}</span>
                    <span>手机号: {{ chronicStore.managerUser.phoneNumber }}</span>
                </div>
                <div class="title">身高指标</div>
                <div class="form">
                    <a-row :gutter="[55, 55]">
                        <a-col :span="5">
                            <a-form-item label="身高">
                                <a-input type="number" v-model:value="chronicStore.creatingChronic.height"
                                    suffix="CM"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="体重">
                                <a-input type="number" v-model:value="chronicStore.creatingChronic.weight"
                                    suffix="kg"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="腰围">
                                <a-input type="number" v-model:value="chronicStore.creatingChronic.waist"
                                    suffix="cm"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="体脂率">
                                <a-input type="number" v-model:value="chronicStore.creatingChronic.bfr"
                                    suffix="%"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="4">
                            <a-form-item label="BMI">
                                <a-input type="number" :disabled="true" v-model:value="chronicStore.creatingChronic.BMI"
                                    suffix="bfr"></a-input>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </div>
                <div class="title">中医体质</div>
                <div class="form">
                    <a-row :gutter="[55, 55]">
                        <a-col :span="5">
                            <a-form-item label="体质类型">
                                <a-input v-model:value="chronicStore.creatingChronic.tcm"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="10">
                            <a-form-item label="中医调理">
                                <a-textarea type="textarea"
                                    v-model:value="chronicStore.creatingChronic.tcmRecuperation"></a-textarea>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </div>
                <div class="title">运动干预</div>
                <div class="form">
                    <a-row :gutter="[55, 55]">
                        <a-col :span="5">
                            <a-form-item label="运动能力">
                                <a-radio-group v-model:value="chronicStore.creatingChronic.athleticAbility">
                                    <a-radio v-for="item in dictTypes.athleticAbility" :value="item.value">{{ item.label
                                    }}</a-radio>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="体育锻炼">
                                <a-radio-group v-model:value="chronicStore.creatingChronic.exercise">
                                    <a-radio v-for="item in dictTypes.exercise" :value="item.value">{{ item.label
                                    }}</a-radio>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="步数统计">
                                <a-radio-group v-model:value="chronicStore.creatingChronic.steps">
                                    <a-input suffix="步/天" type="number"
                                        v-model:value="chronicStore.creatingChronic.steps"></a-input>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </div>
                <div class="title">饮食干预</div>
                <div class="form">
                    <a-row :gutter="[55, 55]">
                        <a-col :span="5">
                            <a-form-item label="饮食干预">
                                <a-radio-group v-model:value="chronicStore.creatingChronic.dietaryInterventions">
                                    <a-radio v-for="item in dictTypes.dietaryInterventions" :value="item.value">{{
                                        item.label
                                    }}</a-radio>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="医学营养干预">
                                <a-radio-group v-model:value="chronicStore.creatingChronic.nutritionalInterventions">
                                    <a-input suffix="步/天"
                                        v-model:value="chronicStore.creatingChronic.nutritionalInterventions"></a-input>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </div>
                <div class="title">患者教育</div>
                <div class="form">
                    <a-row :gutter="[22, 22]">
                        <a-col :span="5">
                            <a-form-item label="患者参与教育意愿">
                                <a-radio-group v-model:value="chronicStore.creatingChronic.intend">
                                    <a-radio v-for="item in dictTypes.intend" :value="item.value">{{ item.label
                                    }}</a-radio>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                        <a-col :span="10">
                            <a-form-item label="患者参与教育记录">
                                <a-textarea v-model:value="chronicStore.creatingChronic.educationRecords"></a-textarea>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </div>
            </div>
            <div class="card-bottom">
                <div class="title-bar">
                    <div class="btn-group">
                        <div @click="handlerSelect(0)" v-if="chronicStore.currentShowTab.includes('高血压')" :class="{ active: currentIndex == 0 }">高血压</div>
                        <div @click="handlerSelect(1)" v-if="chronicStore.currentShowTab.includes('糖尿病')" :class="{ active: currentIndex == 1 }">糖尿病</div>
                        <div @click="handlerSelect(2)" v-if="chronicStore.currentShowTab.includes('骨质疏松')" :class="{ active: currentIndex == 2 }">骨质疏松</div>
                    </div>
                </div>
                <div class="bottom-body">
                    <component :is="compList[currentIndex]" />
                </div>
            </div>
            <div class="btn-group" style="margin: auto;">
                <a-button style="background-color: #1A6FAC;color: #fff;border-radius: 10px;"
                    @click="handlerSave">提交</a-button>
            </div>

        </div>
    </a-form>
</template>
<script lang="ts" setup>
import { ChronicStore } from '@/store/chronic.store'
import { onMounted, ref,watch } from 'vue'
import DiaBetes from './comp/diabetes.vue'
import Hypertension from './comp/hypertension.vue'
import Osteoporosis from './comp/Osteoporosis.vue'
import { message } from 'ant-design-vue';

const chronicStore = ChronicStore()

onMounted(() => {
    loadData()
})


const handlerSave = () => {
    const token = window.localStorage.getItem("token")
    const map1 = {}
    const map2 = {}
    for (const item of chronicStore.tmpArr2) {
        map1[item.key] = item.value
    }
    for (const item of chronicStore.tmpArr1) {
        map2[item.key] = item.value
    }
    fetch("/api/chronicDiseaseManagement", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        },
        body: JSON.stringify({
            recordsId: chronicStore.userId,
            osteoporosisDrugsList: map1,
            antihypertensiveDrugList: map2,
            ...chronicStore.creatingChronic
        })
    }).then(res => res.json())
        .then(data => {
            message.success("提交成功")
            chronicStore.creatingChronic = {}
            chronicStore.tmpArr1 = []
            chronicStore.tmpArr2 = []
        })
}

const compList = ref([
    DiaBetes,
    Hypertension,
    Osteoporosis
])

const currentIndex = ref<number>(0)

const handlerSelect = (currentSelectIndex: number) => {
    currentIndex.value = currentSelectIndex
}

const dictTypes = ref<any>({})

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
        getOptionByDictName('athleticAbility'),
        getOptionByDictName('exercise'),
        getOptionByDictName('dietaryInterventions'),
        getOptionByDictName('nutritionalInterventions'),
        getOptionByDictName('intend')
    ]).then(res => {
        const response: any = res
        dictTypes.value.athleticAbility = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.exercise = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.dietaryInterventions = response[2].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.nutritionalInterventions = response[3].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.intend = response[4].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
    })
}

</script>
<style lang="scss" scoped>
.manager-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .card-top {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 20px;
        background-color: #fff;
        border-radius: 15px;
        gap: 10px;

        .tips {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        .title {
            font-weight: bolder;
        }
    }

    .card-bottom {
        width: 100%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 10px;
        background-color: #fff;
        gap: 10px;

        .title-bar {
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #eee;
        }

        .bottom-body {
            width: 100%;
            height: auto;
        }
    }
}

.btn-group {
    display: flex;
    flex-direction: row;
    align-items: center;

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
</style>