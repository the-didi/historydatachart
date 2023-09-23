<template>
    <div class="info-container">
        <!-- 基本信息 -->
        <div class="basic-info">
            <BasicInfo />
        </div>
        <!-- 补充信息 -->
        <div class="additional-info">
            <AdditionalInfo />
        </div>
        <div class="bottom-block">
            <!-- 病例信息 -->
            <div class="dis-info">
                <DisInfo />
            </div>
            <div class="judge-info">
                <JudgeInfo />
            </div>
        </div>
        <div class="btn-group">
            <a-button style="margin-bottom: 30px;width: 100px;border-radius: 10px;" @click="handlerCancel">取消</a-button>
            <a-button style="border-radius: 10px;width: 100px;background-color: #1A6FAC;color:#fff;margin-bottom: 30px;"
                @click="handlerCancel">确定</a-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import BasicInfo from './Info/basicInfo.vue';
import AdditionalInfo from './Info/additionalInfo.vue';
import DisInfo from './Info/disInfo.vue';
import JudgeInfo from './Info/judgeInfo.vue'
import router from '@/router';
import { UserStore } from '@/store/user.store'

const userStore = UserStore()

const handlerCancel = () => {
    
    router.push("/main/user")
}
</script>
<style lang="scss" scoped>
.btn-group {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 45px;
}

.info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    align-items: center;
    gap: 15px;

    .basic-info {
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: 10px;
    }

    .additional-info {
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: 10px;
    }

    .bottom-block {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        gap: 10px;

        .dis-info {
            width: 60%;
            height: auto;
            background-color: #fff;
            border-radius: 10px;
        }

        .judge-info {
            width: 40%;
            height: auto;
            background-color: #fff;
            border-radius: 10px;
        }
    }


}
</style>