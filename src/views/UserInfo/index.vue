<!-- 健康档案 -->
<script lang="ts" setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import ConfirmDialog from '@/components/Dialog/ConfirmDialog.vue';
import ProcessConfirm from '@/components/Dialog/ProcessConfirm.vue'
import router from '@/router';
import QRCode from '@/components/Dialog/QRCodeDialog.vue'
import { UserStore } from '@/store/user.store'
const token = window.localStorage.getItem("token")
const isUserLoading = ref(false)
const handlerAdd = () => {
    userStore.creatingUserAvatar = ""
    userStore.creatingUserAvatar1 = ""
    userStore.creatingUserAvatar2 = ""
    userStore.creatingUserAvatar3 = ""
    userStore.uploadFile = ""

    router.push("/main/add")
}
const showConfimDialog = ref(false)
const showProcessDialog = ref(false)
const userStore = UserStore()
const searchForm: any = reactive({
    name: "",
    gender: "",
    phone: "",
    phoneNumber: "",
    basicDisease: "",
    age: "",
    beginTime: "",
    endTime: "",
    pageSize: 5,
    pageNum: 1,
})

const handlerConfirm = () => {
    const token = window.localStorage.getItem("token")

    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token", token + "")

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify([currentRecord.recordsId]),
    };
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo") || "")
    if (userInfo.roleId != 1) {
        fetch("/api/basicInformation/requestDel", requestOptions)
            .then(response => response.text())
            .then(result => { loadData(), showConfimDialog.value = false })
            .catch(error => console.log('error', error));
    } else {
        fetch("/api/basicInformation", {
            method: 'DELETE',
            headers: {
                'Content-type': "application/json",
                "token": token + ""
            },
            body: JSON.stringify([currentRecord.recordsId])
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                showConfimDialog.value = false
                loadData()
            })
    }
}

const handleBatchDelete = () => {
    showConfimDialog.value = true
}

const handlerClose = () => {
    showConfimDialog.value = false
    showProcessDialog.value = false
}

const paginationForm = ref({
    allcount: 0,
})
const showDialog = ref(false)
const currentRecordId = ref("")
const handlerShowDialog = (record: any) => {
    currentRecordId.value = record.recordsId
    showDialog.value = true
}

const handlerQRCodeClose = () => {
    showDialog.value = false
}

const handlerQRCodeConfirm = () => {
    showDialog.value = false
}

const handlerDetail = (record: any) => {
    const token = window.localStorage.getItem("token")
    userStore.editorUserId = record.recordsId
    fetch("/api/record/" + record.recordsId, {
        method: "GET",
        headers: {
            token: token + "",
            'Content-type': "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            userStore.creatingUsers.basicInfo = data.data.basicInformation
            userStore.creatingUsers.healthFormat = data.data.healthIndicators
            userStore.creatingUsers.bodyData = data.data.postureAssessment
            userStore.creatingUsers.oralHealth = data.data.dietHealth
            userStore.creatingUsers.sleepData = data.data.sleepHealth
            userStore.creatingUsers.medicalConsultation = data.data.medicalConsultation
            console.log(userStore.creatingUsers)
            router.push("/main/info")
        })
}
const handlerEditor = (record: any) => {
    const token = window.localStorage.getItem("token")
    fetch(`/api/record/update/${record.recordsId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data.data)
            userStore.editorUserId = record.recordsId
            userStore.creatingUsers.basicInfo = data.data.basicInformation
            userStore.creatingUsers.healthFormat = data.data.healthIndicators
            userStore.creatingUsers.bodyData = data.data.postureAssessment
            userStore.creatingUsers.oralHealth = data.data.dietHealth
            userStore.creatingUsers.sleepData = data.data.sleepHealth
            userStore.creatingUsers.medicalConsultation = data.data.medicalConsultation
            userStore.creatingUserAvatar = "http://localhost:4090/api/image" + userStore.creatingUsers.basicInfo.avatar
            router.push("/main/add")
        })
}
let currentRecord: any = null
const handlerDelete = (record: any) => {

    currentRecord = record
    if (record.isTop == 0 || userStore.userRole != '2') {
        showConfimDialog.value = true
    } else {
        showProcessDialog.value = true
    }

}

const updateTimeRange = ref([])

onMounted(() => {
    loadData()
    window.addEventListener("keypress", onKeyPress)
})
let str = ""
const onKeyPress = (event: any) => {
    str += event.key
    if (str.length == 25) {
        if (str.startsWith("clock")) {
            fetch(`/api/record/clock/${str.substring(6)}`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                    token: token + ""
                }
            }).then(res => res.json())
                .then(data => {
                    console.log("用户打卡")
                })
        }
        str = ""
    }
}

onUnmounted(() => {
    window.removeEventListener("keypress", onKeyPress)
})

const handlerExport = () => {
    if (selectedKeys.value.length == 0) {
        return
    }
    const token = window.localStorage.getItem("token")
    fetch("/api/record/excel/report", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        },
        body: JSON.stringify(selectedKeys.value)
    }).then((res: any) => res.blob())
        .then(data => {
            console.log(typeof data)
            const url = window.URL.createObjectURL(new Blob([data], { type: 'application/zip' }));
            // 创建一个a标签并设置其属性  
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', new Date().getTime() + ".zip"); // 设置文件名
            // 将a标签添加到DOM中并模拟点击下载
            document.body.appendChild(link);
            link.click();
            // 清理临时URL对象
            window.URL.revokeObjectURL(url);
            // 从DOM中移除a标签
            document.body.removeChild(link);
        })
}

const dataSource = ref([])
const loadData = () => {
    userStore.creatingUsers = {
        basicInfo: {},
        bodyData: {},
        sleepData: {},
        oralHealth: {},
        healthFormat: {}
    }
    isUserLoading.value = false
    const token = window.localStorage.getItem("token")
    // 如果说没有token的话，那么就是没有登陆
    if (!token) {
        router.push("/login")
    }
    const params = new URLSearchParams(searchForm);
    fetch('/api/basicInformation/list', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "token": token + ""
        },
        body: JSON.stringify(searchForm)
    }).then(res => res.json())
        .then(data => {
            if (data.code == "401") {
                // 清空token，回到登陆页面
                clearData()
                router.push("/login")
            }
            isUserLoading.value = true
            paginationForm.value.allcount = data.data.total
            dataSource.value = data.data.rows.map((ele: any) => { return { key: ele.recordsId, ...ele } })
            console.log(dataSource.value)
        })
}

const clearData = () => {
    window.localStorage.setItem("userInfo", "")
    window.localStorage.setItem("token", "")
}

const columns = [
    {
        title: "档案ID",
        dataIndex: "recordsId",
        align: "center",
        key: "id"
    },
    {
        title: "姓名",
        dataIndex: "name",
        align: "center",
        key: "name"
    },
    {
        title: "性别",
        dataIndex: "gender",
        align: "center",
        key: "gender"
    },
    {
        title: "年龄",
        dataIndex: "age",
        align: "center",
        key: "age"
    },
    {
        title: "电话",
        dataIndex: "phoneNumber",
        align: "center",
        key: "phoneNumber"
    },
    {
        title: "职业",
        dataIndex: "career",
        align: "center",
        key: "career"
    },
    {
        title: "手机类型",
        dataIndex: "phoneTypeValue",
        align: "center",
        key: "phoneTypeValue"
    },
    {
        title: "更新时间",
        dataIndex: "updateTime",
        key: "updateTime",
        align: "center"
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: "center"
    },
];
const selectedKeys = ref<any[]>([])

const onSelectChange = (selectedRowKeys: any[]) => {
    selectedKeys.value = selectedRowKeys
}
const onShowSizeChange = (current: number, pageSize: number) => {
    searchForm.pageNum = current
    searchForm.pageSize = pageSize
    loadData()
}
</script>
<template>
    <div class="userinfo-container">
        <div class="userinfo-top">
            <!-- 用户查询表单开始 -->
            <div class="userinfo-forms">
                <span>健康档案管理</span>
                <a-form style="width:100%;padding: 20px;">
                    <a-row :gutter="10">
                        <a-col :span="5">
                            <a-form-item label="姓名">
                                <a-input v-model:value="searchForm.name" placeholder="请输入姓名"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="性别">
                                <a-input v-model:value="searchForm.sex" placeholder="请输入性别"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="手机类型">
                                <a-input v-model:value="searchForm.phoneType" placeholder="请输入手机类型"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="9">
                            <a-form-item label="更新时间">
                                <a-range-picker v-model:value="updateTimeRange" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row :gutter="10">
                        <a-col :span="5">
                            <a-form-item label="电话">
                                <a-input v-model:value="searchForm.phone" placeholder="请输入电话"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="年龄">
                                <a-input v-model:value="searchForm.age" placeholder="请输入年龄"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="基础病">
                                <a-input v-model:value="searchForm.basicDisease" placeholder="请输入基础病"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="9">
                            <a-button size="default" style="background:#1A6FAC;color: #fff;" href="https://www.google.com">
                                搜索
                            </a-button>
                            <a-button size="default" style="margin-left:10px" href="https://www.google.com">
                                重置
                            </a-button>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <!-- 用户查询表单结束 -->
        </div>

        <!-- 用户表格模块开始 -->
        <div class="userinfo-tables">
            <!-- 用户按钮组开始 -->
            <div class="userinfo-btns">
                <a-button type="primary" style="background-color: #1A6FAC;color:#fff" @click="handlerAdd"
                    size="large">添加</a-button>
                <a-button type="info" size="large" @click="handleBatchDelete">删除</a-button>
                <a-button type="info" size="large">导入</a-button>
                <a-button type="info" size="large" @click="handlerExport">导出</a-button>
            </div>
            <!-- 用户按钮组结束 -->
            <transition name="tableloading">
                <a-table :align="'center'" v-if="isUserLoading" style="margin-top:10px" :columns="columns"
                    :data-source="dataSource" :pagination="false"
                    :row-selection="{ selectedRowKeys: selectedKeys, onChange: onSelectChange }">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex == 'operation'">
                            <div class="editor-row">
                                <a-button type="text" style="color:#4D8FBE" @click="handlerDetail(record)">详情</a-button>
                                <a-button type="text" style="color:#4EA165" @click="handlerEditor(record)"
                                    success>编辑</a-button>
                                <a-button type="text" @click="handlerDelete(record)" danger>删除</a-button>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" @click="handlerShowDialog(record)">
                                    <rect width="20" height="20" fill="white" />
                                    <path d="M10.625 17.5H11.875V18.75H10.625V17.5Z" fill="#4D8FBE" />
                                    <path
                                        d="M8.125 8.125V1.25H1.25V8.125H2.5V9.375H3.75V8.125H8.125ZM2.5 6.875V2.5H6.875V6.875H2.5Z"
                                        fill="#4D8FBE" />
                                    <path d="M3.75 3.75H5.625V5.625H3.75V3.75Z" fill="#4D8FBE" />
                                    <path d="M11.875 1.25V8.125H18.75V1.25H11.875ZM17.5 6.875H13.125V2.5H17.5V6.875Z"
                                        fill="#4D8FBE" />
                                    <path d="M14.375 3.75H16.25V5.625H14.375V3.75Z" fill="#4D8FBE" />
                                    <path d="M3.75 14.375H5.625V16.25H3.75V14.375Z" fill="#4D8FBE" />
                                    <path d="M1.25 9.375H2.5V10.625H1.25V9.375Z" fill="#4D8FBE" />
                                    <path d="M3.75 9.375H5V10.625H3.75V9.375Z" fill="#4D8FBE" />
                                    <path
                                        d="M5 11.875H1.25V18.75H8.125V11.875H6.25V10.625H5V11.875ZM6.875 13.125V17.5H2.5V13.125H6.875Z"
                                        fill="#4D8FBE" />
                                    <path d="M9.375 1.875H10.625V3.75H9.375V1.875Z" fill="#4D8FBE" />
                                    <path d="M9.375 5H10.625V6.25H9.375V5Z" fill="#4D8FBE" />
                                    <path
                                        d="M13.125 9.375H11.875H10.625V7.5H9.375V9.375H6.25V10.625H9.375H10.625H11.875V11.875H13.125V10.625V9.375Z"
                                        fill="#4D8FBE" />
                                    <path d="M13.125 11.875H14.375V13.125H13.125V11.875Z" fill="#4D8FBE" />
                                    <path d="M9.375 11.875H10.625V13.75H9.375V11.875Z" fill="#4D8FBE" />
                                    <path d="M9.375 15H10.625V17.5H9.375V15Z" fill="#4D8FBE" />
                                    <path d="M11.875 13.75H13.125V17.5H11.875V13.75Z" fill="#4D8FBE" />
                                    <path d="M15.625 11.875H18.75V13.125H15.625V11.875Z" fill="#4D8FBE" />
                                    <path d="M17.5 9.375H18.75V10.625H17.5V9.375Z" fill="#4D8FBE" />
                                    <path d="M14.375 9.375H16.875V10.625H14.375V9.375Z" fill="#4D8FBE" />
                                    <path d="M14.375 13.75H15.625V15H14.375V13.75Z" fill="#4D8FBE" />
                                    <path d="M17.5 15H16.875V16.25H18.125V15H18.75V13.75H17.5V15Z" fill="#4D8FBE" />
                                    <path d="M14.375 16.25H15.625V17.5H14.375V16.25Z" fill="#4D8FBE" />
                                    <path d="M15.625 17.5H18.75V18.75H15.625V17.5Z" fill="#4D8FBE" />
                                </svg>
                            </div>
                        </template>
                    </template>
                </a-table>
                <a-skeleton v-else />
            </transition>
            <!-- 用户分页开始 -->
            <div class="userinfo-pagination">
                <a-pagination v-model:current="searchForm.pageNum" v-model:pageSize="searchForm.pageSize"
                    :show-size-changer="true" :show-quick-jumper="true" :total="paginationForm.allcount"
                    @change=onShowSizeChange />
            </div>
            <!-- 用户分页结束 -->
        </div>
        <!-- 用户表格模块结束 -->
    </div>
    <!-- 弹窗组件开始 -->
    <div class="dialog" v-if="showConfimDialog">
        <ConfirmDialog @handlerClose="handlerClose" @handlerConfirm="handlerConfirm" />
    </div>
    <div class="dialog" v-if="showProcessDialog">
        <ProcessConfirm @handler-confirm="handlerClose" />
    </div>
    <!-- 弹窗组件结束 -->
    <div class="dialog" v-if="showDialog">
        <QRCode @handlerQRCodeConfirm="handlerQRCodeConfirm" @handlerQRCodeClose="handlerQRCodeClose"
            :record-id="currentRecordId" />
    </div>
</template>
<style lang="scss" scoped>
.userinfo-container {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 10px;

    .userinfo-top {
        display: flex;
        flex-direction: column;
        width: 100%;

        background-color: #fff;
        box-sizing: border-box;
        padding: 10px;
        padding-left: 15px;
        padding-top: 14px;

        .userinfo-forms {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;

            span {
                font-size: 18px;
            }
        }
    }

    .userinfo-tables {
        margin-top: 10px;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;

        .userinfo-btns {
            margin-top: 5px;
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        .userinfo-pagination {
            margin-top: 56px;
            float: right;
            margin-bottom: 30px;
        }
    }

}

.editor-row {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
    align-items: center;
    justify-content: center;
}

:deep(.ant-form-item) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

:deep(.ant-table-thead) {
    background-color: #E6EFF5;
}
</style>