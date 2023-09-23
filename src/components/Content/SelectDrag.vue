<template>
    <div class="select-content">
        <!-- 选择开始 -->
        <div class="handler-left">
            <!-- 搜索开始 -->
            <div class="select">
                <a-input v-model:value="searchStr" placeholder="请输入名称" style="width: 200px">
                    <template #suffix>
                        <SearchOutlined @click="onSearch" />
                    </template>
                </a-input>
                <a-button type="link">
                    <template #icon>
                        <ReloadOutlined />
                    </template>
                    刷新
                </a-button>
            </div>
            <a-checkbox-group v-model:value="userStore.currentDrag" style="width:100%">
                <div class="group-items">
                    <div class="item" v-for="item in dataSource">
                        <a-checkbox :value="item.medicineName">{{ item.medicineName }}</a-checkbox>
                    </div>
                </div>
            </a-checkbox-group>
            <div class="pagination">
                <!-- 分页开始 -->
                <a-pagination size="small" v-model:current="pageEntity.pageNum" v-model:pageSize="pageEntity.pageSize"
                    :show-size-changer="true" :show-quick-jumper="true" :total="pageEntity.total" @change=onChange />
                <!-- 分页结束 -->
            </div>
        </div>
        <!-- 选择结束 -->
        <!-- 按钮选择开始 -->
        <div class="handler-right">
            <div class="header">
                <span>已选慢病</span>
                <a-button type="link">清空</a-button>
            </div>
            <div class="body">
                <AddDisableBtn :title="item" :index="index" @handlerClose="handlerClose"
                    v-for="(item, index) in userStore.currentDrag" />
            </div>
        </div>
        <!-- 按钮选择结束 -->
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import AddDisableBtn from '@/components/Button/AddDisBtn.vue'
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { UserStore } from '@/store/user.store';
const userStore = UserStore()
const searchStr = ref("")
const dataSource = ref<any>([])
const pageEntity = ref({
    pageSize: 10,
    pageNum: 1,
    total: 0
})
const handlerClose = (index: any) => {
    userStore.currentDisable.splice(index, 1)
}
const onSearch = () => {

}
onMounted(() => {
    loadData()
})
const onChange = () => {
    loadData()
}
const loadData = () => {
    const token = window.localStorage.getItem("token")
    const schema = new URLSearchParams()
    schema.append("pageNum", pageEntity.value.pageNum + "")
    schema.append("pageSize", pageEntity.value.pageSize + "")
    schema.append("medicineName", searchStr.value)
    console.log("loadData")
    fetch("/api/medicine?" + schema, {
        headers: {
            'Content-type': "application/json",
            token: token + ""
        },
        method: "GET"
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            pageEntity.value.total = data.data.total
            dataSource.value = data.data.rows
            console.log(pageEntity.value)
        })
}
</script>
<style lang="scss" scoped>
.select-content {
    width: 100%;
    height: 560px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 30px;

    .handler-left {
        width: 60%;
        height: 100%;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;
        padding: 20px;
        position: relative;


        .select {
            width: 100%;
        }

        .pagination {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: center;
            position: absolute;
            left: 0;
            bottom: 10px;
        }
    }

    .handler-right {
        width: 40%;
        height: 100%;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;
        padding: 20px;

        .header {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .body {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
    }
}

.group-items {
    width: 100%;
    max-height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    overflow: scroll;
    gap: 20px;

    .item {
        width: 100%;
        height: 25px;
    }

    &:first-child {
        margin-left: 30px;
    }
}
</style>