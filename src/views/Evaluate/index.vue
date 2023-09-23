<template>
    <div class="evaluate-container">
        <!-- 头部搜索栏开始 -->
        <div class="evaluate-header">
            <div class="title">评估报告管理</div>
            <div class="body">
                <a-form>
                    <a-row :gutter="[35, 15]">
                        <a-col :span="5">
                            <a-form-item label="姓名">
                                <a-input placeholder="请输入姓名"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="身份证号">
                                <a-input placeholder="请输入身份证号"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="基础病">
                                <a-select placeholder="请输入基础病"></a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="7">
                            <a-form-item label="更新时间">
                                <a-range-picker v-model:value="updateTimeRange" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="住址">
                                <a-select placeholder="请选择"></a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="年龄">
                                <a-select placeholder="请选择"></a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item>
                                <a-button style="background-color: #1A6FAC;color:#fff;margin-right:8px">搜索</a-button>
                                <a-button>重置</a-button>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>

            </div>
        </div>
        <!-- 头部搜索栏结束 -->
        <!-- 表格实体模块开始 -->
        <div class="evaluate-body">
            <!-- 按钮组开始 -->
            <div class="btn-group">
                <a-button style="background-color: #1A6FAC;color:#fff;">删除</a-button>
                <a-button style="border: 1px solid #4D8FBE">导入</a-button>
                <a-button style="border: 1px solid #4D8FBE">导出</a-button>
            </div>
            <!-- 表格开始 -->
            <transition name="tableloading">
                <a-table v-if="isLoadingFinish" :align="'center'" style="margin-top:10px" :data-source="dataSource"
                    :columns="columns" :pagination="false"
                    :row-selection="{ selectedRowKeys: selectedKeys, onChange: onSelectChange }">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex == 'gender'">
                            <span v-if="record.gender == 0">男</span>
                            <span v-else>女</span>
                        </template>
                        <template v-if="column.dataIndex == 'operation'">
                            <div class="editor-row">
                                <a-button type="text" style="color:#1A6FAC" @click="handlerAdd(record)">评估</a-button>
                                <a-button type="text" style="color:#54B674" @click="handlerInfo(record)">详情</a-button>
                                <svg width="20" height="20" @click="handlerDownload(record)" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white" />
                                    <path
                                        d="M11.0059 15.416H4.66992C3.04688 15.416 1.71875 14.0879 1.71875 12.4648V4.23633C1.71875 2.61328 3.04688 1.28516 4.66992 1.28516H11.0059C12.6289 1.28516 13.957 2.61328 13.957 4.23633V12.4648C13.957 14.0879 12.6289 15.416 11.0059 15.416Z"
                                        fill="#FFEDC9" />
                                    <path
                                        d="M13.1035 10.9805H5.76172C5.51953 10.9805 5.32227 10.7832 5.32227 10.541C5.32227 10.2988 5.51953 10.1016 5.76172 10.1016H13.1016C13.3438 10.1016 13.541 10.2988 13.541 10.541C13.543 10.7832 13.3457 10.9805 13.1035 10.9805ZM5.76172 12.7617C5.51953 12.7617 5.32227 12.959 5.32227 13.2012C5.32227 13.4434 5.51953 13.6406 5.76172 13.6406H9.33398C9.57617 13.6406 9.77344 13.4434 9.77344 13.2012C9.77344 12.959 9.57617 12.7617 9.33398 12.7617H5.76172ZM10.3613 16.9453H5.07617C4.26562 16.9453 3.60742 16.2871 3.60742 15.4766V4.61328C3.60742 3.80273 4.26562 3.14453 5.07617 3.14453H6.10352C6.34766 3.14453 6.54297 2.94727 6.54297 2.70312C6.54297 2.45898 6.3457 2.26367 6.10352 2.26367H5.07617C3.7793 2.26367 2.72656 3.31445 2.72656 4.61328V15.4766C2.72656 16.7734 3.77734 17.8262 5.07617 17.8262H10.3613C10.6055 17.8262 10.8008 17.6289 10.8008 17.3867C10.8027 17.1426 10.6055 16.9453 10.3613 16.9453ZM9.04102 3.14453H13.8848C14.6953 3.14453 15.3535 3.80273 15.3535 4.61328V9.85352C15.3535 10.0977 15.5508 10.293 15.793 10.293C16.0371 10.293 16.2324 10.0957 16.2324 9.85352V4.61328C16.2324 3.31641 15.1816 2.26367 13.8828 2.26367H9.03906C8.79492 2.26367 8.59961 2.46094 8.59961 2.70312C8.59961 2.94727 8.79688 3.14453 9.04102 3.14453ZM7.36719 3.14453H7.80859C8.05078 3.14453 8.24805 2.94727 8.24805 2.70312C8.24805 2.46094 8.05078 2.26367 7.80859 2.26367H7.36719C7.125 2.26367 6.92773 2.46094 6.92773 2.70312C6.92773 2.94727 7.125 3.14453 7.36719 3.14453ZM14.8555 14.1562C14.25 14.1562 13.7578 14.6484 13.7578 15.2539C13.7578 15.8594 14.25 16.3516 14.8555 16.3516C15.4609 16.3516 15.9531 15.8594 15.9531 15.2539C15.9531 14.6484 15.4609 14.1562 14.8555 14.1562ZM18.377 15.2539C18.377 17.2051 16.7949 18.7871 14.8438 18.7871C12.8926 18.7871 11.3105 17.2051 11.3105 15.2539C11.3105 13.3027 12.8926 11.7207 14.8438 11.7207C16.7949 11.7207 18.377 13.3027 18.377 15.2539ZM17.1152 14.9863C17.1152 14.9082 17.0508 14.8438 16.9727 14.8438H16.584C16.5742 14.8438 16.5664 14.8477 16.5586 14.8496C16.5156 14.6699 16.4453 14.5 16.3516 14.3477C16.3613 14.3418 16.3711 14.3379 16.3789 14.3281L16.6523 14.0547C16.707 14 16.707 13.9082 16.6523 13.8535L16.2598 13.4609C16.2051 13.4062 16.1133 13.4062 16.0586 13.4609L15.7852 13.7344C15.7773 13.7422 15.7734 13.752 15.7676 13.7617C15.6152 13.668 15.4473 13.5977 15.2676 13.5547C15.2715 13.543 15.2754 13.5293 15.2754 13.5156V13.125C15.2754 13.0469 15.2109 12.9824 15.1328 12.9824H14.5762C14.498 12.9824 14.4336 13.0469 14.4336 13.125V13.5137C14.4336 13.5273 14.4375 13.541 14.4414 13.5527C14.2637 13.5957 14.0957 13.666 13.9434 13.7598C13.9375 13.7461 13.9277 13.7305 13.916 13.7188L13.6426 13.4453C13.5879 13.3906 13.4961 13.3906 13.4414 13.4453L13.0488 13.8379C12.9941 13.8926 12.9941 13.9844 13.0488 14.0391L13.3223 14.3125C13.334 14.3242 13.3477 14.332 13.3613 14.3379C13.2676 14.4883 13.1973 14.6543 13.1543 14.832C13.1387 14.8262 13.1211 14.8223 13.1035 14.8223H12.7148C12.6367 14.8223 12.5723 14.8867 12.5723 14.9648V15.5215C12.5723 15.5996 12.6367 15.6641 12.7148 15.6641H13.1055C13.1211 15.6641 13.1367 15.6602 13.1523 15.6543C13.1934 15.832 13.2637 15.998 13.3535 16.1504C13.3379 16.1582 13.3223 16.166 13.3105 16.1797L13.0371 16.4531C12.9824 16.5078 12.9824 16.5996 13.0371 16.6543L13.4297 17.0469C13.4844 17.1016 13.5762 17.1016 13.6309 17.0469L13.9043 16.7734C13.9141 16.7637 13.9219 16.75 13.9277 16.7363C14.0781 16.832 14.2461 16.9023 14.4219 16.9473C14.418 16.9609 14.4121 16.9766 14.4121 16.9922V17.3809C14.4121 17.459 14.4766 17.5234 14.5547 17.5234H15.1113C15.1895 17.5234 15.2539 17.459 15.2539 17.3809V16.9922C15.2539 16.9805 15.25 16.9687 15.2461 16.959C15.4258 16.918 15.5938 16.8477 15.748 16.7559C15.7539 16.7676 15.7598 16.7773 15.7695 16.7871L16.043 17.0605C16.0977 17.1152 16.1895 17.1152 16.2441 17.0605L16.6367 16.668C16.6914 16.6133 16.6914 16.5215 16.6367 16.4668L16.3633 16.1934C16.3555 16.1855 16.3477 16.1836 16.3398 16.1777C16.4355 16.0254 16.5078 15.8574 16.5527 15.6777C16.5625 15.6797 16.5723 15.6836 16.584 15.6836H16.9727C17.0508 15.6836 17.1152 15.6191 17.1152 15.541V14.9863ZM11.0449 4.81836H13.1172C13.1289 4.81836 13.1387 4.82227 13.1465 4.83008C13.1543 4.83789 13.1582 4.84961 13.1582 4.86133V6.99414C13.1582 7.01172 13.1484 7.02734 13.1328 7.0332C13.1172 7.03906 13.1016 7.03516 13.0898 7.02539L12.5996 6.52148C12.4707 6.38867 12.2676 6.38281 12.1309 6.50586L9.76172 8.63672C9.63281 8.75391 9.44141 8.75391 9.31055 8.63867L8.16406 7.61719C8.03516 7.50391 7.84766 7.50195 7.71875 7.61328L5.98633 9.10742C5.75977 9.30273 5.41797 9.13477 5.41797 8.82812C5.41797 8.7207 5.46484 8.61719 5.54492 8.54883L7.71875 6.67383C7.84766 6.5625 8.03711 6.5625 8.16406 6.67773L9.31055 7.69922C9.44141 7.81445 9.63281 7.81445 9.76172 7.69727L11.5977 6.04297C11.752 5.9043 11.7598 5.6582 11.6152 5.50977L11.0156 4.89062C11.0039 4.87891 11.002 4.86133 11.0059 4.8457C11.0137 4.82813 11.0293 4.81836 11.0449 4.81836Z"
                                        fill="#F7BE4A" />
                                </svg>

                            </div>
                        </template>
                    </template>
                </a-table>
                <a-sketch v-else></a-sketch>
            </transition>

            <!-- 分页开始 -->
            <div class="userinfo-pagination">
                <a-pagination v-model:current="searchForm.pageNum" v-model:pageSize="searchForm.pageSize"
                    :show-size-changer="true" :show-quick-jumper="true" :total="searchForm.total"
                    @change=onShowSizeChange />
            </div>
        </div>
        <!-- 表格实体模块结束 -->
    </div>
    <div class="dialog" v-if="showDownloadDialog">
        <DownLoadDialog :record-id="currentRecordId" @cancel="downloadCancel" @download="download" />
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import router from '@/router'
import DownLoadDialog from '@/components/DownLoadDialog.vue'
import { EvaluateStore } from '@/store/evaluate.store'
import { UserStore } from '@/store/user.store'
import html2canvas from 'html2canvas'
const evaluateStore = EvaluateStore()
const userStore = UserStore()
const updateTimeRange = ref([])
const isLoadingFinish = ref(false)
const dataSource = ref([])
const showDownloadDialog = ref(false)
const searchForm = ref({
    pageNum: 1,
    pageSize: 5,
    total: 0
})

const currentRecordId = ref<string>("")
const onShowSizeChange = (current: number, pageSize: number) => {
    searchForm.value.pageNum = current
    searchForm.value.pageSize = pageSize
    loadData()
}

function dataURItoBlob(dataURI:any) {
  // 分离出base64数据和文件类型
  var arr = dataURI.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

const download =async ()=>{
    const downloadElement:any = document.getElementById("downloadElement")
    const canvas = await html2canvas(downloadElement)
    var blob = dataURItoBlob(canvas.toDataURL("image/png"));
    saveBlobAsFile(blob, new Date().getTime());
}

function saveBlobAsFile(blob:any, fileName:any) {
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

const downloadCancel = ()=>{
    showDownloadDialog.value = false
}

const pagination = ref({})
const columns = ref([
    {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        key: 'index'
    },
    {
        title: '报告ID',
        dataIndex: 'recordsId',
        align: 'center',
        key: 'recordsId'
    },
    {
        title: '姓名',
        dataIndex: 'name',
        align: 'center',
        key: 'name'
    },
    {
        title: '性别',
        dataIndex: 'gender',
        align: 'center',
        key: 'gender'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        align: 'center',
        key: 'age'
    },
    {
        title: '电话号码',
        dataIndex: 'phoneNumber',
        align: 'center',
        key: 'phoneNumber'
    },
    {
        title: '评估项目数',
        dataIndex: 'clockInCount',
        align: 'center',
        key: 'clockInCount'
    },
    {
        title: '手机类型',
        dataIndex: 'phoneTypeValue',
        align: 'center',
        key: 'phoneTypeValue'
    },
    {
        title: '评估人',
        dataIndex: 'createByName',
        align: 'center',
        key: 'createByName'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: 'center'
    }
])
const selectedKeys = ref<any[]>([])


onMounted(() => {
    loadData()
})

const handlerDelete = (records: any) => {
    console.log(records)
}

const handlerInfo = (records: any) => {

    const token = window.localStorage.getItem("token")
    // 记录recordsID
    evaluateStore.userId = records.recordsId
    
    fetch("/api/record/" + records.recordsId, {
        method: "GET",
        headers: {
            token: token + "",
            'Content-type': "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            userStore.creatingUsers.basicInfo = data.data.basicInformation
            userStore.creatingUsers.healthFormat = data.data.healthIndicators
            userStore.creatingUsers.bodyData = data.data.postureAssessment
            userStore.creatingUsers.oralHealth = data.data.dietHealth
            userStore.creatingUsers.sleepData = data.data.sleepHealth
            userStore.creatingUsers.medicalConsultation = data.data.medicalConsultation
            userStore.editorUserId = data.data.basicInformation.recordsId
            router.push("/evaluateinfo")
        })
    // 获取用户信息

}
const handlerDownload = (records: any) => {
    console.log(records)
    currentRecordId.value = records.recordsId
    showDownloadDialog.value = true
}


const handlerAdd = (records: any) => {
    const token = window.localStorage.getItem("token")
    // 向后台获取一个新的评估ID
    fetch(`/api/assessment/new/${records.recordsId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            evaluateStore.currentRecordsId = data.data
            evaluateStore.userId = records.recordsId
            router.push("/evalueateadd")
        })
}

const loadData = () => {
    isLoadingFinish.value = false
    const token = window.localStorage.getItem("token")
    fetch("/api/basicInformation/list", {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        body: JSON.stringify(searchForm.value)
    }).then(res => res.json())
        .then(data => {
            isLoadingFinish.value = true
            dataSource.value = data.data.rows.map((ele: any, index: number) => { return { ...ele, index: index + 1 } })
            searchForm.value.total = data.data.total
        })

}

const onSelectChange = (selectedRowKeys: any[]) => {
    selectedKeys.value = selectedRowKeys
}
</script>
<style lang="scss" scoped>
.evaluate-container {
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .evaluate-body {
        width: 100%;
        height: 100%;
        padding-top: 15px;
        padding-left: 14px;
        display: flex;
        flex-direction: column;
        background-color: #fff;

        .btn-group {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 8px;
        }
    }

    .evaluate-header {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 14px;
        display: flex;
        flex-direction: column;
        background-color: #fff;

        .title {
            width: 100%;
            font-size: 18px;
            font-weight: 400;
            color: #393E46;
        }

        .body {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 10px;
            margin-bottom: 17px;
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

.userinfo-pagination {
    margin-bottom: 30px;
    margin-top: 56px;
    display: flex;
    flex-direction: row-reverse;
    margin-right: 32.5px;
}
</style>