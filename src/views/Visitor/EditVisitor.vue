<template>
    <div class="add-visitor-container">
        <!-- 面包屑开始 -->
        <a-breadcrumb style="margin-bottom:10px">
            <a-breadcrumb-item>来访信息管理</a-breadcrumb-item>
            <a-breadcrumb-item>更新来访信息</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="content">
            <div class="content-header">
                <a-form>
                    <a-row :gutter="[58, 58]">
                        <a-col :span="5">
                            <a-form-item label="姓名">
                                <a-input v-model:value="addVisitorEntity.visitorName"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="性别">
                                <a-select v-model:value="addVisitorEntity.gender">
                                    <a-select-option :value="1" label="男">男</a-select-option>
                                    <a-select-option :value="2" label="女">女</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="年龄">
                                <a-input type="number" v-model:value="addVisitorEntity.age"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="身份证号">
                                <a-input v-model:value="addVisitorEntity.idCard"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="4">
                            <a-form-item label="电话号码">
                                <a-input v-model:value="addVisitorEntity.phoneNumber"></a-input>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <div class="content-body">
                <div class="body-form">
                    <a-form>
                        <a-row :gutter="[30,30]">
                            <a-col :span="12">
                                <a-form-item label="养老咨询">
                                    <a-textarea v-model:value="addVisitorEntity.pension" placeholder="请输入咨询内容" :auto-size="{ minRows: 3, maxRows: 5 }" />
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="康复治疗">
                                    <a-textarea v-model:value="addVisitorEntity.rehabilitation" placeholder="请输入理疗内容" :auto-size="{ minRows: 3, maxRows: 5 }" />
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="[30,30]">
                            <a-col :span="12">
                                <a-form-item label="健康咨询">
                                    <a-textarea v-model:value="addVisitorEntity.health" placeholder="请输入咨询内容" :auto-size="{ minRows: 3, maxRows: 5 }" />
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="用餐服务">
                                    <a-textarea v-model:value="addVisitorEntity.dines" placeholder="请输入咨询内容" :auto-size="{ minRows: 3, maxRows: 5 }" />
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="[30,30]">
                            <a-col :span="12">
                                <a-form-item label="娱乐休闲">
                                    <a-textarea  v-model:value="addVisitorEntity.amusement" placeholder="请输入咨询内容" :auto-size="{ minRows: 3, maxRows: 5 }" />
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="长者学堂">
                                    <a-textarea v-model:value="addVisitorEntity.elderlySchool" placeholder="请输入咨询内容" :auto-size="{ minRows: 3, maxRows: 5 }" />
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </div>
                <div class="body-btngroup">
                    <a-button @click="handlerCancel">取消</a-button>
                    <a-button style="background-color: #1A6FAC;color: #fff;border-radius: 10px;" @click="handlerSave">保存</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import router from '@/router/index'
import {ref,onMounted} from 'vue'
import { VisitorStore } from '@/store/visitor.store'
const visitorStore = VisitorStore()
onMounted(()=>{
    loadData()
})
const loadData = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/visitors/${visitorStore.visitorID}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token: token+"" 
        }
    }).then(res=>res.json())
    .then(data=>{
        addVisitorEntity.value = {
            ...data.data
        }
    })
}

const addVisitorEntity = ref<any>({
    visitorName: '',
    idCard: '',
    gender: '',
    age: '',
    phoneNumber: '',
    pension: '',
    rehabilitation: '',
    health: '',
    dines: '',
    amusement: '',
    elderlySchool: '',
    visitorId: ''
})

const handlerCancel = ()=>{
    router.push("/visitor")
}
const handlerSave = ()=>{
    const token = window.localStorage.getItem("token")
    fetch("/api/visitors",{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        },
        body: JSON.stringify(addVisitorEntity.value)
    }).then(res=>res.json())
    .then(data=>{
        console.log(data)
        router.push("/visitor")
    })
}
</script>
<style lang="scss" scoped>.add-visitor-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 13px;

    .content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 23px;

        .content-header {
            width: 100%;
            background-color: #fff;
            min-height: 77px;
            box-sizing: border-box;
            padding: 27px 95px;
            border-radius: 5px;
        }

        .content-body {
            border-radius: 5px;
            width: 100%;
            min-height: 600px;
            background-color: #fff;
            position: relative;
            box-sizing: border-box;
            padding: 45px 90px;
            svg{
                position: absolute;
                bottom: 0;
                right: 0;
            }
            .body-form{
                width: 100%;
                height: auto;
            }
            .body-btngroup{
                width: 100%;
                height: auto;
                margin-top: 45px;
                display: flex;
                flex-direction: row;
                z-index: 9;
                justify-content: center;
                align-items: center;
                gap: 45px;
            }
        }
    }
}
:deep(.ant-col .ant-form-item-label){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>