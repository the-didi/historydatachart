<template>
    <div class="evaluate-container">
        <!-- 头部搜索栏开始 -->
        <div class="evaluate-header">
            <div class="title">健康数据分析</div>
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
                            <a-form-item label="电话号码">
                                <a-select placeholder="请输入电话号码"></a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="7">
                            <a-form-item label="更新时间">
                                <a-range-picker v-model:value="updateTimeRange" />
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
                                <a-button type="text" style="color:#1A6FAC" @click="handlerAdd(record)">管理</a-button>
                                <a-button type="text" style="color:#ED0000" @click="handlerDelete(record)">删除</a-button>
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
        title: '数据ID',
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
        title: '身份证号',
        dataIndex: 'clockInCount',
        align: 'center',
        key: 'clockInCount'
    },
    {
        title: '更新时间',
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
    router.push("/analyzeManage")
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