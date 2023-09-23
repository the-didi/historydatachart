<template>
    <div class="dis-info-container">
        <a-form name="disinfo" :model="userStore.creatingUsers">
            <a-row :gutter="[23, 23]">
                <a-col :span="24">
                    <a-form-item style="color:#393E46" label="基础病">
                        <a-checkbox-group v-model:value="userStore.creatingUsers.healthFormat.underlyingDisease" style="width:100%">
                            <a-row>
                                <a-col :key="index" v-for="(item,index) in dictTypes.underlyingDisease" :span="3">
                                    <a-checkbox :value="item.value">
                                        {{ item.label }}
                                    </a-checkbox>
                                </a-col>
                            </a-row>
                        </a-checkbox-group>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="6">
                    <a-form-item label="腰围">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.waist" suffix="cm"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="血型">
                        <a-select :options="dictTypes.bloodType" v-model:value="userStore.creatingUsers.healthFormat.bloodType"></a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="心率">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.heartRate" suffix="次/min"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="体温">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.weight" suffix="C°"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="6">
                    <a-form-item label="身高">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.height" suffix="cm"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="体重">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.temperature" suffix="kg"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="眼部健康">
                        <a-select :options="dictTypes.eyeHealth" v-model:value="userStore.creatingUsers.healthFormat.eyeHealth"></a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="听力健康">
                        <a-select :options="dictTypes.hearingHealth" v-model:value="userStore.creatingUsers.healthFormat.hearingHealth"></a-select>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="6">
                    <a-form-item label="舒张压">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.diastolicBloodPressure"
                            suffix="mmHq"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="收缩压">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.systolicBloodPressure"
                            suffix="mmHq"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="6">
                    <a-form-item label="理财情况">
                        <div class="radio-group">
                            <a-radio-group v-model:value="userStore.creatingUsers.healthFormat.physiotherapyConditions">
                                <a-radio value="1">有</a-radio>
                                <a-radio value="0">无</a-radio>
                            </a-radio-group>
                        </div>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="理疗项目">
                        <a-select :options="dictTypes.physiotherapyPrograms" v-model:value="userStore.creatingUsers.healthFormat.physiotherapyPrograms"></a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="理疗支出">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.physiotherapyExpenses"
                            suffix="元/次"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="理疗频率">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.physiotherapyFrequency"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="6">
                    <a-form-item label="助听器">
                        <a-select :options="dictTypes.hearingAid"
                            v-model:value="userStore.creatingUsers.healthFormat.hearingAid"></a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="购买时间">
                        <a-date-picker valueFormat="YYYY-MM-DD"
                            v-model:value="userStore.creatingUsers.healthFormat.purchaseTime" placeholder="请选择时间" />
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="品牌">
                        <a-input v-model:value="userStore.creatingUsers.healthFormat.brand"></a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="6">
                    <a-form-item label="价格">
                        <a-input type="number" v-model:value="userStore.creatingUsers.healthFormat.price" suffix="元"></a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="24">
                    <a-form-item label="健康评估">
                        <a-textarea v-model:value="userStore.creatingUsers.healthFormat.healthAssessment"></a-textarea>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="6">
                    <a-form-item :rules="[{ required: true }]" label="健康评估">
                    </a-form-item>
                    <div class="verticel-block">
                        <div class="desc">(多选)</div>
                        <div class="body">
                            <a-checkbox-group style="display: flex;flex-direction: column;" v-model:value="userStore.creatingUsers.basicInfo.acuteChronicDiseases">
                                <a-checkbox :value="0" style="margin-left:8px">慢性疾病</a-checkbox>
                                <a-checkbox :value="1">急性疾病</a-checkbox>
                                <a-checkbox :value="2">无</a-checkbox>
                            </a-checkbox-group>
                        </div>
                    </div>
                </a-col>
                <a-col :span="6">
                    <a-form-item layout="vertical" :rules="[{ required: true }]" label="目前患病">
                    </a-form-item>
                    <CurrentDisable />
                </a-col>
                <a-col :span="6">
                    <a-form-item layout="vertical" :rules="[{ required: true }]" label="多重用药">
                    </a-form-item>
                    <div class="verticel-block">
                        <div class="desc">(单选)</div>
                        <div class=desc>每日用种类是否大于或者等于5种</div>
                        <div class="body">
                            <a-radio-group v-model:value="userStore.creatingUsers.basicInfo.isMultimedication">
                                <a-radio :value="1">是</a-radio>
                                <a-radio :value="0">否</a-radio>
                            </a-radio-group>
                        </div>
                    </div>
                </a-col>
                <a-col :span="6">
                    <a-form-item layout="vertical" label="目前用药">
                    </a-form-item>
                    <CurrentDrag />
                </a-col>

            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="12">
                    <a-form-item label="外伤史"></a-form-item>
                    <div class="verticel-block">
                        <div class="body-date">
                            <div class="item" v-for="(item, index) in userStore.infectiousDiseasesHistory">
                                <a-date-picker format="YYYY-MM-DD" v-model:value="item.time" style="width:200px" placeholder="请选择时间" />
                                <a-input v-model:value="item.content" placeholder="请输入" />
                                <a-button type="text" @click="handlerInfectiousDelete(index)" danger>删除</a-button>
                            </div>
                        </div>
                        <div class="body-add">
                            <a-button type="text" @click="handlerInfectiousAdd()" style="color:#4D8FBE">新增</a-button>
                        </div>
                    </div>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="手术史"></a-form-item>
                    <div class="verticel-block">
                        <div class="body-date">
                            <div class="item" v-for="(item, index) in userStore.allergiesHistory">
                                <a-date-picker v-model:value="item.time" valueFormat="YYYY-MM-DD" style="width:200px"
                                    placeholder="请选择时间" />
                                <a-input v-model:value="item.content" placeholder="请输入" />
                                <a-button type="text" @click="handlerAllerigiesDelete(index)" danger>删除</a-button>
                            </div>
                        </div>
                        <div class="body-add">
                            <a-button type="text" @click="handlerAllerigiesAdd()" style="color:#4D8FBE">新增</a-button>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="12">
                    <a-form-item label="疫苗接种史"></a-form-item>
                    <div class="verticel-block">
                        <div class="body-date">
                            <div class="item" v-for="(item, index) in userStore.vaccinationHistory">
                                <a-date-picker v-model:value="item.time" valueFormat="YYYY-MM-DD" style="width:200px"
                                    placeholder="请选择时间" />
                                <a-input v-model:value="item.content" placeholder="请输入" />
                                <a-button type="text" @click="handlerVaccinationDelete(index)" danger>删除</a-button>
                            </div>
                        </div>
                        <div class="body-add">
                            <a-button type="text" @click="handlerVaccinationAdd" style="color:#4D8FBE">新增</a-button>
                        </div>
                    </div>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="疾病史"></a-form-item>
                    <div class="verticel-block">
                        <div class="body-date">
                            <div class="item" v-for="(item, index) in userStore.illnessHistory">
                                <a-date-picker format="YYYY-MM-DD" v-model:value="item.time" valueFormat="YYYY-MM-DD" style="width:200px"
                                    placeholder="请选择时间" />
                                <a-input v-model:value="item.content" placeholder="请输入" />
                                <a-button type="text" @click="handlerIllnessDelete(index)" danger>删除</a-button>
                            </div>
                        </div>
                        <div class="body-add">
                            <a-button type="text" style="color:#4D8FBE" @click="handlerIllnessAdd()">新增</a-button>
                        </div>
                    </div>
                </a-col>
            </a-row>
            <a-row :gutter="[23, 23]">
                <a-col :span="24">
                    <a-form-item label="药物情况:">
                        <a-textarea v-model:value="userStore.creatingUsers.healthFormat.drugUse"></a-textarea>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import { ref, onMounted,watch } from 'vue'
import CurrentDisable from '@/components/BasicComponent/CurrentDisable.vue'
import CurrentDrag from '@/components/BasicComponent/CurrentDrag.vue'
import { BusStore } from '@/store/bus.store'
const busStore = BusStore()
import dayjs from 'dayjs'
const userStore = UserStore()
const dictTypes = ref<any>({})
onMounted(() => {
    loadDicts()
    loadAcuteChronicDiseases()
    loadHistory()
})

watch(()=>busStore.d1,()=>{
    userStore.creatingUsers.healthFormat.systolicBloodPressure = busStore.d1
    userStore.creatingUsers.healthFormat.heartRate = busStore.d2
    userStore.creatingUsers.healthFormat.diastolicBloodPressure = busStore.d3
})

const loadHistory = ()=>{
    userStore.illnessHistory=[]
    userStore.infectiousDiseasesHistory = []
    userStore.vaccinationHistory = []
    userStore.allergiesHistory = []
    if(userStore.editorUserId ==""){
        return
    }
    const token = window.localStorage.getItem("token")
    // 外伤历史
    fetch(`/api/diseasesHistory/${201}/${userStore.editorUserId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    })
    .then(res=>res.json())
    .then(data=>{
        userStore.infectiousDiseasesHistory = data.data.map(ele=>{
            return {
                time: dayjs(ele.time),
                content: ele.content,
                recordsId: ele.recordsId,
                diseasesHistoryId: ele.diseasesHistoryId
            }
        })
        console.log(userStore.infectiousDiseasesHistory)
    })
    // 手术历史
    fetch(`/api/diseasesHistory/${202}/${userStore.editorUserId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    })
    .then(res=>res.json())
    .then(data=>{
        userStore.allergiesHistory = data.data.map(ele=>{
            return {
                time: dayjs(ele.time),
                content: ele.content,
                recordsId: ele.recordsId,
                diseasesHistoryId: ele.diseasesHistoryId
            }
        })
        console.log(userStore.allergiesHistory)
    })  
    // 疫苗接种史
    fetch(`/api/diseasesHistory/${203}/${userStore.editorUserId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    })
    .then(res=>res.json())
    .then(data=>{
        userStore.vaccinationHistory = data.data.map(ele=>{
            return {
                time: dayjs(ele.time),
                content: ele.content,
                recordsId: ele.recordsId,
                diseasesHistoryId: ele.diseasesHistoryId
            }
        })
    })  
    // 疾病历史
    fetch(`/api/diseasesHistory/${206}/${userStore.editorUserId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    })
    .then(res=>res.json())
    .then(data=>{
        userStore.illnessHistory = data.data.map(ele=>{
            return {
                time: dayjs(ele.time),
                content: ele.content,
                recordsId: ele.recordsId,
                diseasesHistoryId: ele.diseasesHistoryId
            }
        })
    })  
}

const loadAcuteChronicDiseases = ()=>{
    if(userStore.creatingUsers.basicInfo.acuteChronicDiseases){
        userStore.creatingUsers.basicInfo.tmpacuteChronicDiseases = userStore.creatingUsers.basicInfo.acuteChronicDiseases
    }
}

const handlerIllnessDelete = (index: number) => {
    userStore.illnessHistory.splice(index, 1)
}

const handlerInfectiousDelete = (index: number) => {
    userStore.infectiousDiseasesHistory.splice(index, 1)
}

const handlerAllerigiesDelete = (index: number) => {
    userStore.allergiesHistory.splice(index, 1)
}

const handlerVaccinationDelete = (index: number) => {
    userStore.vaccinationHistory.splice(index, 1)
}
const handlerIllnessAdd = () => {
    userStore.illnessHistory.push({
        datetime: '',
        title: '',
        type: 204
    })
}

const handlerInfectiousAdd = () => {
    userStore.infectiousDiseasesHistory.push({
        datetime: '',
        title: '',
        type: 201
    })
}
const handlerAllerigiesAdd = () => {
    userStore.allergiesHistory.push({
        datetime: '',
        title: '',
        type: 202
    })
}
const handlerVaccinationAdd = () => {
    userStore.vaccinationHistory.push({
        datetime: '',
        title: '',
        type: 203
    })
}


const userDragList = ref([

])

const loadDicts = () => {
    Promise.allSettled([
        getOptionByDictName('hearingAid'),
        getOptionByDictName('bloodType'),
        getOptionByDictName("eyeHealth"),
        getOptionByDictName('hearingHealth'),
        getOptionByDictName('physiotherapyPrograms'),
        getOptionByDictName('underlyingDisease')
    ]).then(res => {
        const response: any = res
        dictTypes.value.hearingAid = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.bloodType = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.eyeHealth = response[2].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.hearingHealth = response[3].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.physiotherapyPrograms = response[4].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.underlyingDisease = response[5].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
    })
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

</script>
<style lang="scss" scoped>
.dis-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .verticel-block {
        display: flex;
        flex-direction: column;
        margin-top: -20px;

        .desc {
            font-size: 12px;
            color: #929AAB;
        }

        .body {
            display: flex;
            flex-direction: column;
            justify-content: center;

        }

        .bodyicon {
            display: flex;
            flex-direction: row;
            gap: 5px;
        }

        .body-date {
            display: flex;
            flex-direction: column;
            gap: 5px;

            .item {
                width: 50%;
                display: flex;
                flex-direction: row;
                gap: 3px;
            }
        }
    }
}
</style>