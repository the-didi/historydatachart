<template>
    <div class="careplan-container">
        <!-- 头部搜索栏开始 -->
        <div class="careplan-header">
            <span>照顾计划管理</span>
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
                            <a-form-item label="支付状态">
                                <a-input v-model:value="searchForm.payStatus" placeholder="请输入电话号码"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="9">
                            <a-form-item label="更新时间">
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
                <a-table :align="'center'" :pagination="false" style="min-height:400px" :columns="columns"
                    :data-source="dataSource" :row-selection="{ selectedRowKeys: selectedKeys, onChange: onSelectChange }">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex == 'gender'">
                            <span v-if="record.gender == 0">男</span>
                            <span v-else>女</span>
                        </template>
                        <template v-if="column.dataIndex == 'hasPlan'">
                            <span v-if="record.hasPlan == 0">无照顾计划</span>
                            <span v-else-if="record.hasPlan == 1">有照顾计划</span>
                            <span v-else>-</span>
                        </template>
                        <template v-if="column.dataIndex == 'payStatus'">
                            <span v-if="record.payStatus == 0">未支付</span>
                            <span v-else-if="record.payStatus == 1">已支付</span>
                            <span v-else>-</span>
                        </template>
                        <template v-if="column.dataIndex == 'status'">
                            <span>服务中</span>
                        </template>
                        <template v-if="column.dataIndex == 'operation'">
                            <div class="editor-row">
                                <a-button type="text" style="color:#9747FF" @click="handlerAdd(record)">新增</a-button>
                                <a-button type="text" style="color:#1A6FAC" @click="handlerManager(record)">管理</a-button>
                                <a-button type="text" style="color:#ED0000" @click="handlerDelete(record)">删除</a-button>
                            </div>
                        </template>
                    </template>
                </a-table>
                <!-- <a-skeleton v-else /> -->
            </transition>
            <div class="userinfo-pagination">
                <a-pagination v-model:current="searchForm.pageNum" v-model:pageSize="searchForm.pageSize"
                    :show-size-changer="true" :show-quick-jumper="true" :total="searchForm.allcount" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import router from '@/router/index'
import { CarePlanStore } from '@/store/careplan.store'
const handlerAdd = (record) => {
    carePlanStore.userId = record.recordsId
    router.push("/careplanadd")
}

const handlerDelete = (record: any) => {
    const token = window.localStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token", token + "")

    var raw = [record.visitorId];

    var requestOptions: any = {
        method: 'DELETE',
        headers: myHeaders,
        body: JSON.stringify(raw),
        redirect: 'follow'
    };

    fetch("/api/visitors", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            loadData()
        })
        .catch(error => console.log('error', error));
}

const carePlanStore = CarePlanStore()

const updateTimeRange = ref([])

const isLoadingFinish = ref(true)

const selectedKeys = ref<any[]>([])

const searchForm = reactive({
    name: "",
    idCard: "",
    payStatus: "",
    allcount: 50,
    pageNum: 1,
    pageSize: 10
})


const handlerManager = (record) => {
    carePlanStore.userId = record.recordsId
    router.push("/careplanmanager")
}

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
        title: '计划ID',
        dataIndex: 'recordsId',
        align: 'center',
        key: 'recordsId'
    },
    {
        title: '姓名',
        dataIndex: 'name',
        align: 'center',
        key: 'visitorName'
    },
    {
        title: '年龄',
        dataIndex: 'age',
        align: 'center',
        key: 'age'
    },
    {
        title: '照顾计划',
        dataIndex: 'hasPlan',
        align: 'center',
        key: 'hasPlan'
    },
    {
        title: '支付状态',
        dataIndex: 'payStatus',
        align: 'center',
        key: 'payStatus'
    },
    {
        title: '服务状态',
        dataIndex: 'status',
        align: 'center',
        key: 'status'
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

onMounted(() => {
    loadData()
})

const dataSource = ref<any[]>([
    {
        index: 1,
        name: "郭明",
        careplanId: "23232323",
        age: 18,
        careplan: "111",
        payStatus: "111",
        serveStatus: "111",
        createTime: "2023-03-23 11:11:11"
    }
])

const loadData = () => {
    const token = window.localStorage.getItem("token")
    isLoadingFinish.value = false
    const entity = {
        startTime: updateTimeRange.value[0],
        endTime: updateTimeRange.value[1],
        ...searchForm
    }
    fetch("/api/care/list", {
        method: 'POST',
        headers: {
            token: token + "",
            'Content-type': 'application/json'
        },
        body: JSON.stringify(entity)
    }).then(res => res.json())
        .then(data => {
            dataSource.value = data.data.rows.map((ele,index)=>{
                return {
                    index,
                    ...ele
                }
            })
            searchForm.allcount = data.data.total

        })

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