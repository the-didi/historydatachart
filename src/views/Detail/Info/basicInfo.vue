<template>
    <div class="basic-info">
        <div class="header">
            <div class="title">
                <!-- icon -->
                <svg width="50" height="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.8501 9.21245C6.8501 9.70655 6.94742 10.1958 7.1365 10.6523C7.32558 11.1088 7.60273 11.5236 7.95211 11.8729C8.30149 12.2223 8.71626 12.4995 9.17275 12.6885C9.62924 12.8776 10.1185 12.975 10.6126 12.975C11.1067 12.975 11.596 12.8776 12.0524 12.6885C12.5089 12.4995 12.9237 12.2223 13.2731 11.8729C13.6225 11.5236 13.8996 11.1088 14.0887 10.6523C14.2778 10.1958 14.3751 9.70655 14.3751 9.21245C14.3751 8.71835 14.2778 8.22909 14.0887 7.7726C13.8996 7.31612 13.6225 6.90134 13.2731 6.55196C12.9237 6.20258 12.5089 5.92544 12.0524 5.73635C11.596 5.54727 11.1067 5.44995 10.6126 5.44995C10.1185 5.44995 9.62924 5.54727 9.17275 5.73635C8.71626 5.92544 8.30149 6.20258 7.95211 6.55196C7.60273 6.90134 7.32558 7.31612 7.1365 7.7726C6.94742 8.22909 6.8501 8.71835 6.8501 9.21245Z"
                        fill="#B3CFE3" />
                    <path
                        d="M16.225 17.1C16.225 17.3875 16.175 17.675 15.9625 17.9375C15.175 18.8875 13.075 19.5625 10.6125 19.5625C8.15 19.5625 6.05 18.8875 5.2625 17.9375C5.05 17.675 5 17.4 5 17.1C5 16.8125 5.05 16.525 5.2625 16.2625C6.05 15.3125 8.15 14.6375 10.6125 14.6375C13.075 14.6375 15.175 15.3125 15.9625 16.2625C16.175 16.525 16.225 16.8 16.225 17.1ZM18.9 9.21252C18.9 11 17.275 12.45 15.25 12.475C15.1375 12.475 15.075 12.35 15.1375 12.275C16.2375 10.9 16.1375 7.30002 15.075 6.07502C15.025 6.02502 15.0625 5.95002 15.1375 5.95002C17.2 5.92502 18.9 7.40002 18.9 9.21252ZM20 15.9875C20 16.2375 19.9625 16.475 19.775 16.6875C19.3625 17.1875 18.7375 17.525 17.65 17.7875C17.275 17.875 18.7375 16.275 15.4125 14.0125C15.3625 13.975 15.3875 13.9 15.4375 13.9C17.4375 13.9375 19.125 14.5 19.7625 15.275C19.9625 15.5 20 15.7375 20 15.9875Z"
                        fill="#1A6FAC" />
                </svg>
                <!-- title -->
                <span>基本信息</span>
            </div>
            <a-button type="text" @click="handlerEditor" style="color:#1A6FAC">编辑</a-button>
        </div>

        <div class="container-body">
            <a-form name="info-basicinfo" v-model="userStore.creatingUsers">
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="姓名" name="name" :rules="[{ required: true }]">
                            {{ userStore.creatingUsers.basicInfo.name }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="性别" name="gender" :rules="[{ required: true }]">
                            {{ userStore.creatingUsers.basicInfo.gender == 0?'男':'女' }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="出生年月" name="birthday" :rules="[{ required: true }]">
                            {{ dateFormat(userStore.creatingUsers.basicInfo.birthday) }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="年龄" name="age" :rules="[{ required: true }]">
                            {{ userStore.creatingUsers.basicInfo.age }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="民族" name="ethnic" :rules="[{ required: true }]">
                            {{ dictsValue.ethnic }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="身份证号码" name="idCard" :rules="[{ required: true }]">
                            {{ userStore.creatingUsers.basicInfo.idCard }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="机构名称">
                            {{ userStore.creatingUsers.basicInfo.socialSecurity }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="婚姻状况">
                            {{ userStore.creatingUsers.basicInfo.maritalStatusName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="文化程度">
                            {{ dictsValue.education }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="职业">
                            {{ userStore.creatingUsers.basicInfo.career }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="电话">
                            {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="户籍所在地">
                            {{ userStore.creatingUsers.basicInfo.origin }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="现居住地址">
                            {{ userStore.creatingUsers.basicInfo.address }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="居住情况">
                            {{ dictsValue.residency }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="经济来源">
                            {{ dictsValue.economicSources }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="家庭电话">
                            {{ userStore.creatingUsers.basicInfo.homePhone }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="手机类型">
                            {{ dictsValue.phoneType }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="紧急联系人">
                            {{ userStore.creatingUsers.basicInfo.emergencyContacts }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="紧急联系人关系">
                            {{ dictsValue.emergencyContactsRelationship }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="紧急联系人电话">
                            {{ userStore.creatingUsers.basicInfo.emergencyContactsPhone }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="宗教信仰">
                            {{ dictsValue.religiousBeliefs }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="是否每年体检">
                            {{ userStore.creatingUsers.basicInfo.physicalExamination == 1?'是':'否' }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="医保类型">
                            {{ dictsValue.medicareType }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="特色贡献及补贴">
                            {{ dictsValue.subsidy }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="生育情况">
                            {{ userStore.creatingUsers.basicInfo.fertilityDetail }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="月收入水平">
                            {{ userStore.creatingUsers.basicInfo.incomeName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="常去医院">
                            {{ userStore.creatingUsers.basicInfo.hospitalOften }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item label="生育详情">
                            {{ userStore.creatingUsers.basicInfo.fertilityDetail }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item>
                            <div class="information-block">
                                <div class="button" @click="handlerShowImg(userStore.creatingUsers.basicInfo.information[0])">
                                    <InformationBtn />
                                </div>
                                <span>病例/体检报告拍照上传图片</span>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="6">
                        <a-form-item label="就医经历">
                            {{ userStore.creatingUsers.basicInfo.medicalExperience }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="18">
                        <a-form-item label="兴趣爱好">
                            {{ computedStr(userStore.creatingUsers.basicInfo.hobbyName) }}
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </div>
    </div>
    <!-- 弹窗开始 -->
    <a-modal v-model:visible="showInfomationDialog" :width="1100" title="信息弹窗">
        <InfoDialog :img="userStore.creatingUsers.basicInfo.information[0]" />
    </a-modal>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import {ref,onMounted, toRaw} from 'vue'
import InfoDialog from '@/components/Dialog/ImgDialog.vue'
import InformationBtn from '@/components/Button/InformationBtn.vue'
import router from '@/router/index'
const userStore = UserStore()
const showInfomationDialog = ref(false)
const handlerShowImg = (str:string)=>{
    showInfomationDialog.value = true
}

const computedStr = (arr:string[])=>{
    if(arr == undefined){
        return ""
    }
    return arr.join(",")
}

const handlerEditor = ()=>{
    router.push("/main/add")
}

const dictTypes = ref<any>({})

onMounted(()=>{
    loadDicts()
})


// const findByValue()

const loadDicts =async ()=>{
    await Promise.allSettled([
        getOptionByDictName('subsidy'),
        getOptionByDictName('emergencyContactsRelationship'),
        getOptionByDictName('religiousBeliefs'),
        getOptionByDictName('ethnic'),
        getOptionByDictName('maritalStatus'),
        getOptionByDictName('education'),
        getOptionByDictName('residency'),
        getOptionByDictName('economicSources'),
        getOptionByDictName('phoneType'),
        getOptionByDictName('medicareType')
    ]).then(res => {
        const response: any = res
        dictTypes.value.subsidy = response[0].value.data.map((ele:any)=>{return { label: ele.dictLabel, value: ele.dictId }})
        dictsValue.value.subsidy = dictTypes.value.subsidy.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.subsidy).label
        // dictTypes.value.emergencyContactsRelationship = response[1].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        // dictsValue.value.emergencyContactsRelationship = dictTypes.value.emergencyContactsRelationship.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.emergencyContactsRelationship).label
        dictTypes.value.religiousBeliefs = response[2].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.religiousBeliefs = dictTypes.value.religiousBeliefs.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.religiousBeliefs).label||""
        dictTypes.value.ethnic = response[3].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.ethnic = dictTypes.value.ethnic.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.ethnic).label||""
        dictTypes.value.maritalStatus = response[4].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.maritalStatus = dictTypes.value.maritalStatus.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.maritalStatus).label||""
        dictTypes.value.education = response[5].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.education = dictTypes.value.education.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.education).label||""
        dictTypes.value.residency = response[6].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.residency = dictTypes.value.residency.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.residency).label||""
        dictTypes.value.economicSources = response[7].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.economicSources = dictTypes.value.economicSources.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.economicSources).label||""
        dictTypes.value.phoneType = response[8].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.phoneType = dictTypes.value.phoneType.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.phoneType).label||""
        dictTypes.value.medicareType = response[9].value.data.map((ele:any)=>{ return {label: ele.dictLabel,value: ele.dictId} })
        dictsValue.value.medicareType = dictTypes.value.medicareType.find((ele:any)=>ele.value == userStore.creatingUsers.basicInfo.medicareType).label||""
    })
}

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
const dateFormat = (str:string)=>{
    return str.split(" ")[0]
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

.button {
    width: 100px;
    height: 34px;
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