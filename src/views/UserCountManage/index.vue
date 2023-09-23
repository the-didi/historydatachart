<template>
    <div class="user-manage-container">
        <!-- 头部搜索栏开始 -->
        <div class="usermanage-header">
            <div class="title">系统账号设置</div>
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
                                <a-input placeholder="请输入电话号码"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :span="9">
                            <a-form-item label="更新时间">
                                <a-range-picker style="width:100%" v-model:value="updateTimeRange" />
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
        <div class="usermanage-body">
            <!-- 按钮组开始 -->
            <div class="btn-group">
                <a-button style="background-color: #1A6FAC;color:#fff;">新增</a-button>
                <a-button style="border: 1px solid #4D8FBE">删除</a-button>
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
                                <a-button type="text" style="color:#1A6FAC" @click="handlerManage(record)">管理</a-button>
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
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const isLoadingFinish = ref(true)

onMounted(() => {
    loadData()
})

const loadData = () => {
    const token = window.localStorage.getItem("token")
    isLoadingFinish.value = false
    const searchEntity = {
        ...searchForm.value,
        startTime: updateTimeRange[0],
        endTime: updateTimeRange[1]
    }
    fetch("/api/user/list", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        },
        body: JSON.stringify(searchEntity)
    }).then(res => res.json())
        .then(data => {
            dataSource.value = data.data.rows.map((ele, index) => {
                return {
                    index: index,
                    ...ele
                }
            })
            isLoadingFinish.value = true
        })
}

const handlerManage = (record: any) => {

}

const handlerDelete = (record: any) => {
    const token = window.localStorage.getItem("token")
    fetch("/api/basicInformation", {
        method: 'DELETE',
        headers: {
            'Content-type': "application/json",
            "token": token + ""
        },
        body: JSON.stringify([record.userId])
    }).then(res => res.json())
        .then(data => {
            loadData()
        })
}

const columns = ref([
    {
        title: '序号',
        dataIndex: 'index',
        align: 'center',
        key: 'index'
    },
    {
        title: '账户ID',
        dataIndex: 'userId',
        align: 'center',
        key: 'userId'
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
        dataIndex: 'phone',
        align: 'center',
        key: 'phone'
    },
    {
        title: '身份证号码',
        dataIndex: 'idCard',
        align: 'center',
        key: 'idCard'
    },
    {
        title: '更新时间',
        dataIndex: 'updatedTime',
        align: 'center',
        key: 'updatedTime'
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: 'center'
    }
])

const dataSource = ref([])

const selectedKeys = ref<any[]>([])

const onShowSizeChange = (current: number, pageSize: number) => {
    searchForm.value.pageNum = current
    searchForm.value.pageSize = pageSize
    loadData()
}

const updateTimeRange = ref([])

const searchForm = ref({
    pageNum: 1,
    pageSize: 5,
    total: 0
})

const onSelectChange = (selectedRowKeys: any[]) => {
    selectedKeys.value = selectedRowKeys
}

</script>
<style scoped lang="scss">
.user-manage-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .usermanage-body {
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

    .usermanage-header {
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