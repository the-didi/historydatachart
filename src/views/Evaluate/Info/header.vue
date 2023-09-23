<template>
    <div class="header-container">
        <div class="header-left">
            <span style="margin-right:8px">{{ userStore.creatingUsers.basicInfo.name }}</span>
            <div class="tag">
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.10927 4.80988C6.06195 4.81049 6.01503 4.80116 5.97154 4.78251C5.92804 4.76386 5.88895 4.7363 5.85677 4.7016C5.79018 4.63253 5.75357 4.53995 5.75492 4.44403C5.75626 4.3481 5.79545 4.25658 5.86396 4.18941L8.49021 1.64254C8.52432 1.60938 8.56463 1.58326 8.60883 1.56568C8.65304 1.5481 8.70027 1.5394 8.74784 1.54008C8.79541 1.54075 8.84238 1.55079 8.88607 1.56961C8.92976 1.58844 8.96931 1.61569 9.00247 1.6498C9.03563 1.68391 9.06174 1.72422 9.07932 1.76843C9.09691 1.81264 9.10561 1.85987 9.10493 1.90744C9.10426 1.95501 9.09422 2.00198 9.07539 2.04567C9.05657 2.08936 9.02932 2.12891 8.99521 2.16207L6.36896 4.70894C6.33558 4.7436 6.29507 4.77058 6.25023 4.78801C6.20538 4.80544 6.15728 4.8129 6.10927 4.80988Z"
                        fill="white" />
                    <path
                        d="M9.02348 4.7011C8.97579 4.70123 8.92856 4.69169 8.88466 4.67306C8.84075 4.65443 8.80108 4.62709 8.76803 4.5927C8.73498 4.55831 8.70925 4.51758 8.69238 4.47297C8.67551 4.42835 8.66786 4.38078 8.66989 4.33313L8.6988 2.03157L6.39004 2.00266C6.34235 2.00279 6.29512 1.99325 6.25122 1.97462C6.20731 1.95599 6.16764 1.92865 6.13459 1.89426C6.10155 1.85987 6.07581 1.81914 6.05894 1.77453C6.04208 1.72991 6.03442 1.68235 6.03645 1.63469C6.03695 1.5872 6.04692 1.54028 6.06577 1.49668C6.08462 1.45308 6.11198 1.41368 6.14624 1.38078C6.18051 1.34788 6.22099 1.32215 6.26532 1.30509C6.30965 1.28803 6.35694 1.27998 6.40442 1.28141L9.06676 1.31032C9.11446 1.31019 9.16168 1.31973 9.20559 1.33836C9.2495 1.35699 9.28917 1.38433 9.32222 1.41872C9.35526 1.45311 9.381 1.49384 9.39787 1.53846C9.41473 1.58307 9.42238 1.63064 9.42036 1.67829L9.39145 4.34063C9.38828 4.43652 9.34827 4.5275 9.27973 4.59464C9.2112 4.66177 9.11942 4.69991 9.02348 4.7011Z"
                        fill="white" />
                    <path
                        d="M3.8297 9.61486C3.44992 9.611 3.07379 9.54017 2.71861 9.40564C2.67455 9.38906 2.6342 9.36397 2.59984 9.33179C2.56548 9.29962 2.5378 9.26099 2.51837 9.21811C2.47914 9.13152 2.47591 9.0329 2.50939 8.94392C2.54287 8.85495 2.61033 8.78293 2.69692 8.74369C2.78351 8.70445 2.88214 8.70122 2.97111 8.7347C3.24853 8.83754 3.5411 8.89362 3.83689 8.90064C4.40567 8.90641 4.9597 8.71975 5.40902 8.37097C5.85835 8.02219 6.17659 7.53176 6.31207 6.97932C6.44755 6.42689 6.39231 5.84487 6.15533 5.32778C5.91835 4.81069 5.51354 4.38888 5.00663 4.13085C4.49972 3.87281 3.92047 3.7937 3.36293 3.90636C2.80539 4.01902 2.30229 4.31683 1.93534 4.75144C1.56838 5.18605 1.3591 5.73194 1.34149 6.30047C1.32387 6.86901 1.49895 7.4268 1.8383 7.8833C1.89465 7.9599 1.91849 8.05566 1.90461 8.14975C1.89073 8.24383 1.84026 8.32864 1.76418 8.3857C1.6881 8.44277 1.59257 8.46749 1.49836 8.45449C1.40415 8.44149 1.31888 8.39181 1.26111 8.31627C0.836126 7.74864 0.612811 7.05538 0.626577 6.34642C0.630876 5.70329 0.826067 5.07593 1.1874 4.54388C1.54873 4.01183 2.05992 3.59907 2.65616 3.35794C3.25239 3.11682 3.9068 3.05818 4.5364 3.18947C5.166 3.32077 5.74243 3.63608 6.19259 4.09542C6.64275 4.55475 6.94636 5.13743 7.06492 5.76955C7.18348 6.40167 7.11165 7.05477 6.85854 7.64601C6.60542 8.23725 6.18243 8.74001 5.6432 9.09053C5.10397 9.44105 4.47279 9.62354 3.8297 9.61486Z"
                        fill="white" />
                </svg>
                <span>{{ userStore.creatingUsers.basicInfo.age }}</span>
            </div>
        </div>
        <div class="header-right">
            <a-form>
                <div class="tiny-grid">
                    <a-form-item label="籍贯" style="margin-bottom:0px;">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.origin }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="出生日期">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.birthday }}
                            </span>
                        </div>

                    </a-form-item>
                    <a-form-item label="评估人">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="手机">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.phoneType }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="机构名称">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.socialSecurity }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="评估编号">
                        <div class="plain-text-group">
                            <span>
                                {{ evaluateStore.userId }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="家庭电话">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.homePhone }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="身份证号码">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.idCard }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="创建信息">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="现居住地址">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.address }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="户籍所在地">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.origin }}
                            </span>
                        </div>
                    </a-form-item>
                    <a-form-item label="提交信息">
                        <div class="plain-text-group">
                            <span>
                                {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                            </span>
                        </div>
                    </a-form-item>
                </div>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { EvaluateStore } from '@/store/evaluate.store'
import { UserStore } from '@/store/user.store'
import { onMounted } from 'vue'
const evaluateStore = EvaluateStore()
const userStore = UserStore()


onMounted(() => {
    loadData()
})
const loadData = () => {
    console.log(userStore.creatingUsers)
}

</script>
<style lang="scss" scoped>
.header-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 29px;

    .header-left {
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        span {
            color: #000;
            font-size: 20px;
            font-weight: 400;
        }

        .tag {
            min-width: 31px;
            height: 15px;
            box-sizing: border-box;
            padding: 2px;
            background-color: #F96574;
            border-radius: 5px;
            color: #fff;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            span {
                font-size: 12px;
                color: #fff;
                line-height: 15px;
            }
        }
    }

    .header-right {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
}
.ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    /* margin-bottom: 24px; */
    vertical-align: top;
}
</style>