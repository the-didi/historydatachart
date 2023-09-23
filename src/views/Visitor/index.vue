<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import router from '@/router/index'
import { VisitorStore } from '@/store/visitor.store'
const visitorStore = VisitorStore()
const searchForm: any = reactive({
    visitorName: "",
    idCard: "",
    phoneNumber: "",
    pageNum: 1,
    pageSize: 5,
    allcount: 50,
})

onMounted(() => {
    loadData()
})

const isLoadingFinish = ref(false)

const loadData = () => {
    const token = window.localStorage.getItem("token")
    isLoadingFinish.value = false

    const params = new URLSearchParams(searchForm)
    fetch("/api/visitors/list?" + params, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        },
    }).then(res => res.json())
        .then(data => {
            isLoadingFinish.value = true
            dataSource.value = data.data.rows.map((ele: any, index: number) => { return { ...ele, index: index + 1 } })
            searchForm.allcount = data.data.total
        })
}

const handlerSearch = () => {
    loadData()
}

const handlerAddVisitor = () => {
    router.push("/visitoradd")
}

const updateTimeRange = ref([])

const columns = ref([
    {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        key: 'index'
    },
    {
        title: '信息ID',
        dataIndex: 'visitorId',
        align: 'center',
        key: 'visitorId'
    },
    {
        title: '姓名',
        dataIndex: 'visitorName',
        align: 'center',
        key: 'visitorName'
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
        title: '创建人',
        dataIndex: 'createByName',
        align: 'center',
        key: 'createByName'
    },
    {
        title: '更新时间',
        dataIndex: 'updateTime',
        align: 'center',
        key: 'updateTime'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: "center"
    }
])

const dataSource = ref<any[]>([])

const selectedKeys = ref<any[]>([])

const onSelectChange = (selectedRowKeys: any[]) => {
    selectedKeys.value = selectedRowKeys
}

const handlerAdd = (record: any) => {
    visitorStore.visitorID = record.visitorId
    router.push("/visitoreditor")
}
const handlerInfo = (record: any) => {
    visitorStore.visitorID = record.visitorId
    router.push("/visitorinfo")
}
const handlerDelete = (record: any) => {
    const token = window.localStorage.getItem("token")
    var myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://www.apifox.cn)");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token",token+"")

    var raw = [record.visitorId];

    var requestOptions:any = {
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

const handlerShowDialog = (record: any) => {

}
const onShowSizeChange = (current: number, pageSize: number) => {
    loadData()
}
</script>
<template>
    <div class="visitor-info-container">
        <div class="visitor-header">
            <span>来访信息管理</span>
            <div class="search-form">
                <a-form>
                    <a-row :gutter="[55, 55]">
                        <a-col :span="5">
                            <a-form-item label="姓名">
                                <a-input v-model:value="searchForm.visitorName" placeholder="请输入姓名"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="身份证号">
                                <a-input v-model:value="searchForm.idCard" placeholder="请输入身份证号"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="5">
                            <a-form-item label="电话号码">
                                <a-input v-model:value="searchForm.phoneNumber" placeholder="请输入电话号码"></a-input>
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
                                <a-button class="ui-button" @click="handlerSearch">搜索</a-button>
                            </div>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
        </div>
        <div class="visitor-body">
            <div class="btn-group">
                <a-button @click="handlerAddVisitor" class="ui-button">添加</a-button>
                <a-button>删除</a-button>
                <a-button>导入</a-button>
                <a-button>导出</a-button>
            </div>
            <transition name="tableloading">
                <a-table v-if="isLoadingFinish" :align="'center'" :pagination="false" style="min-height:400px"
                    :columns="columns" :data-source="dataSource"
                    :row-selection="{ selectedRowKeys: selectedKeys, onChange: onSelectChange }">
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex == 'gender'">
                            <span v-if="record.gender == 1">男</span>
                            <span v-else>女</span>
                        </template>
                        <template v-if="column.dataIndex == 'operation'">
                            <div class="editor-row">
                                <a-button type="text" style="color:#1A6FAC" @click="handlerAdd(record)">更新</a-button>
                                <a-button type="text" style="color:#54B674" @click="handlerInfo(record)">详情</a-button>
                                <a-button type="text" style="color:#ED0000" @click="handlerDelete(record)">删除</a-button>
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
            <div class="userinfo-pagination">
                <a-pagination v-model:current="searchForm.pageNum" v-model:pageSize="searchForm.pageSize"
                    :show-size-changer="true" :show-quick-jumper="true" :total="searchForm.allcount"
                    @change=onShowSizeChange />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.search-btngroup {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    gap: 8px;
}

.editor-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.visitor-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .visitor-header {
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

    .visitor-body {
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