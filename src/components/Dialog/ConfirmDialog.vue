<template>
    <div class="dialog-confirm">
        <!-- header -->
        <div class="header">
            <span>申请删除</span>
            <svg @click="onHandlerClose" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 4.5L4.5 13.5" stroke="#393E46" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M4.5 4.5L13.5 13.5" stroke="#393E46" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>  
        </div>
        <div class="body">
            <span>确定申请删除？</span>
            <div class="btns">
                <a-button size="large" @click="onHandlerClose">取消</a-button>
                <a-button size="large" @click="onHandlerConfirm" type="primary">确定</a-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

const emiter = defineEmits(['handlerClose','handlerConfirm'])

const onHandlerClose = ()=>{
    emiter('handlerClose')
}

const onHandlerConfirm = ()=>{
    emiter('handlerConfirm')
}

</script>
<style lang="scss" scoped>
.dialog-confirm {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;

    .header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 16px;
        text-align: center;
        color: #393E46;
        font-weight: 400;
    }

    .body {
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span{
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 19px;
            color: #393E46;
        }
        .btns{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

        }
    }
}</style>