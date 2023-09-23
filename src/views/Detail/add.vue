<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AdditionalInfo from './Add/additionalInfo.vue'
import BasicInfo from './Add/basicInfo.vue'
import DisInfo from './Add/disInfo.vue'
import { UserStore } from '@/store/user.store'
import dayjs from 'dayjs'
import router from '@/router'
const userStore = UserStore()
const currentStep = ref(0)
const formComponent = ref([
    AdditionalInfo,
    BasicInfo,
    DisInfo
])
let timer: any = null

let socket: any = null

onMounted(() => {
    socket = new WebSocket('ws://localhost:7846/ws');
    socket.addEventListener('open', function (event: any) {
        socket.send('Hello Server!');
    });
    socket.addEventListener('message', function (event: any) {
        const res: any = JSON.parse(event.data)
        const year = new Date().getFullYear()
        userStore.creatingUsers.basicInfo.avatar = "data:image/jpg;base64," + res.data.photo
        userStore.creatingUsers.basicInfo.name = res.data.name
        userStore.creatingUsers.basicInfo.gender =Number.parseInt(res.data.gender) 
        userStore.creatingUsers.basicInfo.idCard = res.data.number
        userStore.creatingUsers.basicInfo.age = (year - Number.parseInt(res.data.birthday.substring(0,4)))+""
        userStore.creatingUsers.basicInfo.ethnic = res.data.nation
        userStore.creatingUsers.basicInfo.address = res.data.address
        userStore.creatingUsers.basicInfo.birthday = dayjs(res.data.birthday)
    });
    timer = setInterval(() => {
        socket.send(JSON.stringify({
            "module": "idcard",
            "msgid": new Date().getTime(),
            "function": "readcard"
        }))
    }, 1000)
    // 判断是否是修改
    judgeEditor()
})

const judgeEditor = () => {
    if (userStore.editorUserId) {
        if (userStore.creatingUsers.basicInfo.avatar) {
            userStore.creatingUserAvatar = userStore.creatingUsers.basicInfo.avatar
        }
        if (userStore.creatingUsers.bodyData.assessmentImg && userStore.creatingUsers.bodyData.assessmentImg.length != 0) {
            userStore.creatingUserAvatar1 = "http://81.68.76.155:8090/image" + userStore.creatingUsers.bodyData.assessmentImg[0]
            userStore.creatingUserAvatar2 = "http://81.68.76.155:8090/image" + userStore.creatingUsers.bodyData.assessmentImg[1]
            userStore.creatingUserAvatar3 = "http://81.68.76.155:8090/image" + userStore.creatingUsers.bodyData.assessmentImg[2]
        }
        userStore.infectiousDiseasesHistory = [{}]
        userStore.allergiesHistory = [{}]
        userStore.vaccinationHistory = [{}]
        userStore.illnessHistory = [{}]
        userStore.currentDrag = []
        userStore.currentDisable = []
    }

}

onUnmounted(() => {
    socket.close()
    clearInterval(timer)
})

const handlerCancel = () => {
    userStore.creatingUsers = {
        basicInfo: {},
        bodyData: {},
        sleepData: {},
        oralHealth: {},
        healthFormat: {}
    }
    router.push("/main/user")
}

const saveBasicInfo = async () => {
    const token = window.localStorage.getItem("token")
    return await fetch("/api//basicInformation", {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify(userStore.creatingUsers.basicInfo)
    }).then(res => res.json())
}

const saveBodyData = async () => {
    const token = window.localStorage.getItem("token")
    return await fetch("/api/postureAssessment", {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify(userStore.creatingUsers.bodyData)
    }).then(res => res.json())
}
const saveSleepData = async () => {
    const token = window.localStorage.getItem("token")
    return await fetch("/api/sleepHealth", {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify(userStore.creatingUsers.sleepData)
    }).then(res => res.json())
}

const saveOralHealth = async () => {
    const token = window.localStorage.getItem("token")
    return await fetch("/api/dietHealth", {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify(userStore.creatingUsers.oralHealth)
    }).then(res => res.json())
}

const saveDiseasesHistory = async (recordsId: string) => {
    console.log(recordsId)
    for (const item of userStore.allergiesHistory) {
        console.log(item)
        if (item.recordsId) {
            await editDisease(item, 202)
        } else {
            item.recordsId = recordsId
            await saveDisease(item, 202)
        }
    }
    for (const item of userStore.illnessHistory) {
        console.log(item)
        if (item.recordsId) {
            await editDisease(item, 206)
        } else {
            item.recordsId = recordsId
            await saveDisease(item, 206)
        }
    }
    for (const item of userStore.infectiousDiseasesHistory) {
        if (item.recordsId) {
            await editDisease(item, 201)
        } else {
            item.recordsId = recordsId
            await saveDisease(item, 201)
        }
    }
    for (const item of userStore.vaccinationHistory) {
        console.log(item)
        if (item.recordsId) {
            item.historyType = 203
            await editDisease(item, 203)
        } else {
            item.recordsId = recordsId
            await saveDisease(item, 203)
        }
    }
}
const editDisease = async (data: any, code: number) => {
    console.log("--下方打印新增疾病信息--")
    const token = window.localStorage.getItem("token")
    data.time + " 00:00:00"
    fetch(`/api/diseasesHistory`, {
        method: "PUT",
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify({
            historyType: code,
            ...data
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
}


const saveDisease = async (data: any, code: number) => {
    console.log("--下方打印新增疾病信息--")
    const token = window.localStorage.getItem("token")
    data.time + " 00:00:00"
    fetch(`/api/diseasesHistory`, {
        method: "POST",
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify({
            historyType: code,
            ...data
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
}


const handlerSave = async () => {
    // 1. 保存基本信息
    // 2. 保存体态数据
    // 3. 保存睡眠健康的数据
    // 4. 保存口腔健康数据
    // 5. 保存病历数据
    delete userStore.creatingUsers.basicInfo.recordsId
    const token = window.localStorage.getItem("token")
    const result = {
        basicInformation: userStore.creatingUsers.basicInfo,
        healthIndicators: userStore.creatingUsers.healthFormat,
        postureAssessment: userStore.creatingUsers.bodyData,
        dietHealth: userStore.creatingUsers.oralHealth,
        sleepHealth: userStore.creatingUsers.sleepData,
        medicalConsultation: {}
    }
    result.basicInformation.diseasesType = userStore.currentDisable
    result.basicInformation.currentMedications = userStore.currentDrag
    if (result.basicInformation.tmpacuteChronicDiseases && result.basicInformation.tmpacuteChronicDiseases.length >= 2) {
        result.basicInformation.acuteChronicDiseases = 2
    } else if (result.basicInformation.tmpacuteChronicDiseases) {
        result.basicInformation.acuteChronicDiseases = result.basicInformation.tmpacuteChronicDiseases[0]
    }
    if (userStore.editorUserId) {
        result.basicInformation.recordsId = userStore.editorUserId
        fetch("/api/record", {
            headers: {
                'Content-type': "application/json",
                token: token + ""
            },
            method: 'PUT',
            body: JSON.stringify({

                ...result
            })
        }).then(res => res.json())
            .then(async data => {
                console.log(data)
                userStore.creatingUsers = {
                    basicInfo: {},
                    bodyData: {},
                    sleepData: {},
                    oralHealth: {},
                    healthFormat: {}
                }
                await saveDiseasesHistory(userStore.editorUserId)
                handlerPressure(userStore.editorUserId,userStore.creatingUsers.healthFormat.systolicBloodPressure,userStore.creatingUsers.healthFormat.heartRate,userStore.creatingUsers.healthFormat.diastolicBloodPressure)
                userStore.editorUserId = ""
                handlerCancel()
                
            })
    } else {
        console.log(result)
        fetch("/api/record", {
            headers: {
                'Content-type': "application/json",
                token: token + ""
            },
            method: 'POST',
            body: JSON.stringify(result)
        }).then(res => res.json())
            .then(async data => {
                userStore.creatingUsers = {
                    basicInfo: {},
                    bodyData: {},
                    sleepData: {},
                    oralHealth: {},
                    healthFormat: {}
                }
                await saveDiseasesHistory(data.data)
                userStore.editorUserId = ""
                router.push("/main/user")
                handlerPressure(data.data,userStore.creatingUsers.healthFormat.systolicBloodPressure,userStore.creatingUsers.healthFormat.heartRate,userStore.creatingUsers.healthFormat.diastolicBloodPressure)
        })
    }
    
}

const handlerPressure = (recordsId,systolicBloodPressure,diastolicBloodPressure,heartRate)=>{
    const token = window.localStorage.getItem("token")
    fetch("/api/healthMassage/bloodPressure",{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        },
        body: JSON.stringify({
            recordsId,systolicBloodPressure,diastolicBloodPressure,heartRate
        })
    }).then(res=>res.json())
    .then(data=>{

    })
}
</script>
<template>
    <a-breadcrumb style="margin-bottom:10px">
        <a-breadcrumb-item>健康档案管理</a-breadcrumb-item>
        <a-breadcrumb-item>添加健康档案</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="add-form-container">
        <!-- 进度条开始 -->
        <div class="step-bar">
            <a-steps :current="currentStep">
                <a-step>
                    <template #title>基本信息</template>
                </a-step>
                <a-step>
                    <template #title>补充信息</template>
                </a-step>
                <a-step>
                    <template #title>病理信息</template>
                </a-step>
            </a-steps>
        </div>
        <!-- 进度条结束 -->
        <a-divider style="height:2px;background-color:#eee;" />
        <!-- 实际填写表单部分开始 -->
        <KeepAlive class="form-container">
            <div v-for="(item, index) in formComponent" :key="index" style="width:100%;height: auto;">
                <component :is="item" v-if="currentStep == index" />
            </div>
        </KeepAlive>
        <!-- 实际填写表单部分结束 -->
        <!-- 按钮组开始 -->
        <div class="btn-groups">
            <a-button v-if="currentStep != 0" 
            style="background-color: #1A6FAC;color: #fff;border-radius: 10px;"
                @click="currentStep--">上一页</a-button>
            <a-button style="border-radius:10px" @click="handlerCancel">取消</a-button>
            <a-button style="border-radius: 10px;" v-if="currentStep == 2" @click="handlerSave">保存</a-button>
            <a-button :disable="currentStep == 2" style="background-color: #1A6FAC;color: #fff;border-radius: 10px;"
                @click="currentStep++" v-if="currentStep != 2">下一步</a-button>
        </div>
        <!-- 按钮组结束 -->
    </div>
</template>
<style lang="scss" scoped>
.add-form-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-sizing: border-box;
    padding: 25px;
    align-items: center;

    .step-bar {
        width: 1400px;
        margin-top: 20px;
    }

    .form-container {
        width: 100%;
        height: auto;
    }

    .btn-groups {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
    }
}
</style>