<template>
    <div class="basic-info">
        <div class="header">
            <div class="title">
                <!-- icon -->
                <svg width="50" height="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.2249 9.81262C18.2749 8.92512 18.1249 7.97512 17.6499 6.98762C16.7999 5.22512 15.1249 3.93762 13.1999 3.71262C9.72488 3.30012 6.76238 6.03762 6.76238 9.47512C6.76238 9.60012 6.76238 9.71262 6.77488 9.82512C6.82488 10.5126 6.52488 11.1501 6.03738 11.6251C5.29988 12.3626 4.88738 13.4251 5.01238 14.5876C5.22488 16.4376 6.88738 17.7876 8.72488 17.7876H16.2499C18.0874 17.7876 19.7499 16.4501 19.9624 14.5876C20.0999 13.4251 19.6749 12.3751 18.9374 11.6251C18.4749 11.1501 18.1874 10.5126 18.2249 9.81262Z"
                        fill="#B3CFE3" />
                    <path
                        d="M14.5376 18.7749H10.4626C10.1751 18.7749 9.8501 19.0499 9.8501 19.3874C9.8501 20.4624 11.0376 21.3249 12.5001 21.3249C13.9626 21.3249 15.1501 20.4624 15.1501 19.3874C15.1501 19.0499 14.8251 18.7749 14.5376 18.7749Z"
                        fill="#1A6FAC" />
                </svg>
                <!-- title -->
                <span>病理信息</span>
            </div>
            <a-button type="text" @click="handlerEditor" style="color:#1A6FAC">编辑</a-button>
        </div>
        <div class="container-body">
            <a-form name="info-additionalinfo" v-model="userStore.creatingUsers">
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="腰围">
                            {{ userStore.creatingUsers.healthFormat.waist }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="血型:">
                            {{ userStore.creatingUsers.healthFormat.bloodType }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="心率:">
                            {{ userStore.creatingUsers.healthFormat.heartRate }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="体温:">
                            {{ userStore.creatingUsers.healthFormat.temperature }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="身高">
                            {{ userStore.creatingUsers.healthFormat.height }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="体重:">
                            {{ userStore.creatingUsers.healthFormat.weight }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="眼部健康:">
                            {{ dictsValue.eyeHealth }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="听力健康:">
                            {{ dictsValue.hearingHealth }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="舒张压:">
                            {{ userStore.creatingUsers.healthFormat.diastolicBloodPressure }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="收缩压:">
                            {{ userStore.creatingUsers.healthFormat.systolicBloodPressure }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="理疗情况:">
                            {{ userStore.creatingUsers.healthFormat.physiotherapyConditions == 1?'有':'无' }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="理疗项目:">
                            {{ userStore.creatingUsers.healthFormat.physiotherapyProgramsName }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="理疗支出:">
                            {{ userStore.creatingUsers.healthFormat.physiotherapyExpenses }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="理疗频率:">
                            {{ userStore.creatingUsers.healthFormat.physiotherapyFrequency }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="助听器:">
                            {{ userStore.creatingUsers.healthFormat.hearingAidName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="购买时间:">
                            {{ userStore.creatingUsers.healthFormat.purchaseTime }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="品牌:">
                            {{ userStore.creatingUsers.healthFormat.brand }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="价格:">
                            {{ userStore.creatingUsers.healthFormat.price }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="健康评估">
                            {{ userStore.creatingUsers.healthFormat.healthAssessment }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="急性慢病">
                            {{ userStore.creatingUsers.basicInfo.acuteChronicDiseases ==0?'慢性病':userStore.creatingUsers.basicInfo.acuteChronicDiseases ==1?'急性病':userStore.creatingUsers.basicInfo.acuteChronicDiseases ==2?'两者都有':'无' }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="目前患病">
                            {{ compArr(userStore.creatingUsers.basicInfo.diseasesType)  }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="多重用药">
                            {{ userStore.creatingUsers.basicInfo.isMultimedication == 1?'有':'无' }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="12">
                        <a-form-item label="目前用药">
                            {{ compArr(userStore.creatingUsers.basicInfo.currentMedications)  }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="手术史">
                            <div class="disease-item" v-for="item in diseaseList">
                                <div>{{ item.time }}</div>
                                <div>{{ item.content }}</div>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30,30]">
                    <a-col :span="12">
                        <a-form-item label="药物情况">
                            {{ userStore.creatingUsers.healthFormat.dragUse }}
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import InformationBtn from '@/components/Button/InformationBtn.vue'
import {onMounted,ref} from 'vue'
import router from '@/router/index'
const userStore = UserStore()

onMounted(()=>{
    loadData()
    loadDicts()
    loadHistory()
})

const diseaseList = ref<any>([])

const loadHistory = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/diseasesHistory/202/${userStore.editorUserId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            "token": token+""
        },
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        diseaseList.value = data.data
    })
}

const loadDicts =async ()=>{
    await Promise.allSettled([
        getOptionByDictName('eyeHealth'),
        getOptionByDictName('hearingHealth'),
        getOptionByDictName('physiotherapyConditions'),
        getOptionByDictName('hearingAid')
    ]).then(res => {
        const response: any = res
        dictTypes.value.eyeHealth = response[0].value.data.map((ele:any)=>{return { label: ele.dictLabel, value: ele.dictId }})
        dictsValue.value.eyeHealth = dictTypes.value.eyeHealth.find((ele:any)=>ele.value == userStore.creatingUsers.healthFormat.eyeHealth).label
        dictTypes.value.hearingHealth = response[1].value.data.map((ele:any)=>{return { label: ele.dictLabel, value: ele.dictId }})
        dictsValue.value.hearingHealth = dictTypes.value.hearingHealth.find((ele:any)=>ele.value == userStore.creatingUsers.healthFormat.hearingHealth).label
        dictTypes.value.physiotherapyConditions = response[2].value.data.map((ele:any)=>{return { label: ele.dictLabel, value: ele.dictId }})
        dictsValue.value.physiotherapyConditions = dictTypes.value.physiotherapyConditions.find((ele:any)=>ele.value == userStore.creatingUsers.healthFormat.physiotherapyConditions).label
        dictTypes.value.hearingAid = response[3].value.data.map((ele:any)=>{return { label: ele.dictLabel, value: ele.dictId }})
        dictsValue.value.hearingAid =  dictTypes.value.hearingAid.find((ele:any)=>ele.value == userStore.creatingUsers.healthFormat.hearingAid).label
    })
}

const handlerEditor = ()=>{
    
    router.push("/main/add")

}

const dictTypes = ref<any>({})

const dictsValue = ref<any>({subsidy: ""})

const getOptionByDictName = async (name: string) => {
    const token = window.localStorage.getItem("token")
    return await fetch('/api/dictData/list/' + name, {
        method: 'GET',
        headers: {
            token: token + ""
        }
    }).then(res => res.json())
}
const loadData = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/diseasesHistory/202/${userStore.editorUserId}`,{
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
}
const compArr = (arr: any) => {
    if(arr.length==0){
        return ""
    }
    return arr.join(" ")
}
</script>
<style lang="scss" scoped>
.basic-info {
    width: 100%;
    height: 100%;
    padding: 10px;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .title {
            width: auto;
            display: flex;
            flex-direction: row;
            align-items: center;

            span {
                font-size: 16px;
            }
        }
    }


    .container-body {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;

    }
}

.piclist {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.button {
    width: 100px;
    height: 34px;
}
.disease-item{
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
}

.information-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        margin-left: 10px;
    }
}
</style>