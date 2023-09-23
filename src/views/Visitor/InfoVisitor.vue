<template>
    <div class="add-visitor-container">
        <!-- 面包屑开始 -->
        <a-breadcrumb style="margin-bottom:10px">
            <a-breadcrumb-item>来访信息管理</a-breadcrumb-item>
            <a-breadcrumb-item>查看来访信息</a-breadcrumb-item>
        </a-breadcrumb>
        <div class="content">
            <div class="content-header">
                <a-form >
                    <a-row :gutter="[58, 58]">
                        <a-col :span="6">
                            <a-form-item label="姓名">
                                {{ infouser.visitorName }}
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label="性别">
                                {{ infouser.gender == 1 ? '男' : '女' }}
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label="年龄">
                                {{ infouser.age }}
                            </a-form-item>
                        </a-col>
                        <a-col :span="6">
                            <a-form-item label="电话号码">
                                {{ infouser.phoneNumber }}
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <div class="content-body">
                <div class="body-form">
                    <a-form labelAlign="left" :layout="'vertical'">
                        <a-row style="margin-top:93px" :gutter="[93, 93]">
                            <a-col :span="12">
                                <a-form-item label="养老咨询:">
                                    <div class="info-block">
                                        <span>
                                            {{ infouser.pension }}
                                        </span>
                                    </div>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="康复治疗:">
                                    <div class="info-block">
                                        <span>
                                        {{ infouser.rehabilitation }}
                                    </span>
                                    </div>
                                    
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row style="margin-top:93px" :gutter="[93, 93]">
                            <a-col :span="12">
                                <a-form-item label="健康咨询:">
                                    <div class="info-block">
                                        <span>
                                        {{ infouser.health }}
                                    </span>
                                    </div>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="用餐服务:">
                                    <div class="info-block">
                                        <span>
                                        {{ infouser.dines }}
                                    </span>
                                    </div>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row style="margin-top:93px" :gutter="[93, 93]">
                            <a-col :span="12">
                                <a-form-item  label="娱乐休闲:">
                                    <div class="info-block">
                                        <span>
                                        {{ infouser.amusement }}
                                    </span>
                                    </div>
                                    
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="长者学堂:">
                                    <div class="info-block">
                                        <span>{{ infouser.elderlySchool }}</span>
                                    </div> 
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-form>
                </div>
                <div class="body-btngroup">
                    <a-button @click="handlerCancel">取消</a-button>
                    <a-button class="ui-button" @click="handlerSave">保存</a-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import router from '@/router/index'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { VisitorStore } from '@/store/visitor.store'
const visitorStore = VisitorStore()

onMounted(() => {
    loadData()
})

const infouser = ref<any>({})

const loadData = () => {
    const token = window.localStorage.getItem("token")
    fetch(`/api/visitors/${visitorStore.visitorID}`, {
        method: 'get',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            infouser.value = {
                ...data.data
            }
        })
}

const handlerCancel = () => {
    router.push("/visitor")
}
const handlerSave = () => {
    router.push("/visitor")
}
</script>
<style lang="scss" scoped>
.add-visitor-container {
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
            min-height: 400px;
            background-color: #fff;
            position: relative;
            box-sizing: border-box;
            padding: 45px 90px;

            svg {
                position: absolute;
                bottom: 0;
                right: 0;
            }

            .body-form {
                width: 100%;
                height: auto;
            }

            .body-btngroup {
                width: 100%;
                height: auto;
                margin-top: 45px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 45px;
            }
        }
    }
}
.info-block{
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    background-color: #eee;
    border: 1px solid #ccc;
}

:deep(.ant-col .ant-form-item-label) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
:deep(.ant-col .ant-form-item-label){
    display: flex;
    flex-direction: column;
}
</style>