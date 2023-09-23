<template>
    <div class="careplan-container">
        <!-- 头部搜索栏开始 -->
        <div class="careplan-header">
            <span>慢病患者管理</span>
            <div class="search-form">
                <a-form>
                    <a-row :gutter="[55, 55]">
                        <a-col :span="5">
                            <a-form-item label="姓名">
                                <a-input v-model:value="searchForm.name" placeholder="请输入姓名"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="身份证号">
                                <a-input v-model:value="searchForm.idCard" placeholder="请输入身份证号"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="慢病种类">
                                <a-input v-model:value="searchForm.payStatus" placeholder="请输入电话号码"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="9">
                            <a-form-item label="创建时间">
                                <a-range-picker style="width:100%" v-model:value="updateTimeRange" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="4" :offset="20">
                            <div class="search-btngroup">
                                <a-button>重置</a-button>
                                <a-button class="ui-button">搜索</a-button>
                            </div>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
        </div>
        <!-- 表格部分 -->
        <div class="careplan-body">
            <div class="btn-group">
                <a-button class="ui-button">删除</a-button>
                <a-button>导出</a-button>
            </div>
            <transition name="tableloading">
                <a-table  :align="'center'" :pagination="false" style="min-height:400px"
                    :columns="columns" :data-source="dataSource"
                    :row-selection="{ selectedRowKeys: selectedKeys, onChange: onSelectChange }">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex == 'gender'">
                            <span v-if="record.gender == 0">男</span>
                            <span v-else>女</span>
                        </template>
                        <template v-if="column.dataIndex == 'operation'">
                            <div class="editor-row">
                                <a-button type="text" @click="handlerManager(record)" style="color:#1A6FAC">管理</a-button>
                                <a-button type="text" style="color:#ED0000">删除</a-button>
                            </div>
                        </template>
                    </template>
                </a-table>
                <!-- <a-skeleton v-else /> -->
            </transition>
            <div class="userinfo-pagination">
                <a-pagination v-model:current="searchForm.pageNum" v-model:pageSize="searchForm.pageSize"
                    :show-size-changer="true" :show-quick-jumper="true" :total="searchForm.allcount"
                     />
            </div>
        </div>
        
        
    </div>
</template>
<script lang="ts" setup>
import {reactive,ref,onMounted} from 'vue'
import router from '@/router/index'
import { ChronicStore } from '@/store/chronic.store'

const chronicStore = ChronicStore()

const handlerAdd = ()=>{
    router.push("/careplanadd")
}


const updateTimeRange = ref([])

const isLoadingFinish = ref(true)

const selectedKeys = ref<any[]>([])

const searchForm = reactive({
    name: "",
    idCard: "",
    payStatus: "",
    allcount:50,
    pageNum: 1,
    pageSize: 10
})

const onSelectChange = (selectedRowKeys: any[]) => {
    selectedKeys.value = selectedRowKeys
}

const columns = ref([
    {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        key: 'index'
    },
    {
        title: '患者ID',
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
        title: '慢病种类',
        dataIndex: 'chronicDisease',
        align: 'center',
        key: 'chronicDisease'
    },
    {
        title: '负责人',
        dataIndex: 'createByName',
        align: 'center',
        key: 'createByName'
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        align: 'center',
        key: 'createTime'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: "center"
    }
])

const handlerManager = (record:any)=>{
    chronicStore.currentShowTab = record.chronicDisease.split(",")
    chronicStore.userId = record.recordsId
    chronicStore.managerUser = record
    router.push('/chronicmanager')
}

onMounted(()=>{
    chronicStore.creatingChronic = {}
    chronicStore.tmpArr1 = [{},{}]
    chronicStore.tmpArr2 = [{},{}]
    loadData()
})

const dataSource = ref<any[]>([
    {
        index: 1,
        name: "郭明",
        careplanId: "23232323",
        age: 18,
        gender: "男",
        phone: "17812027244",
        diseaseType: "高血压、唐尿病、固执输送",
        careman: "郭明",
        createTime: "2023-03-23 11:11:11"
    }
])

const loadData = () => {
    const token = window.localStorage.getItem("token")
    const entity = {
        startTime: updateTimeRange.value[0],
        endTime: updateTimeRange.value[1],
        ...searchForm
    }
    fetch("/api/chronicDiseaseManagement/list",{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        },
        body: JSON.stringify(entity)
    }).then(res=>res.json())
    .then(data=>{
        dataSource.value = data.data.rows
        searchForm.allcount = data.data.total
    })
    isLoadingFinish.value = false

}
</script>
<style lang="scss" scoped>
.search-btngroup {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
}
.careplan-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .careplan-header {
        width: 100%;
        min-height: 137px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 5px;

        span {
            padding-top: 8px;
            padding-left: 14px;
            font-size: 16px;
            color: #393E46;
            cursor: pointer;
        }

        .search-form {
            width: 100%;
            box-sizing: border-box;
            padding: 28px 55px;
        }
    }

    .careplan-body {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 15px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        gap: 23px;

        .btn-group {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 15px;

        }
    }
}
</style>