<template>
    <div class="info-collection">
        <div class="title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A6FAC" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <span>信息采集</span>
        </div>
        <div class="body">
            <a-collapse v-model:activeKey="activeKey">
                <template #expandIcon>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.375 7.4375C15.1875 7.25 14.9375 7.1875 14.6875 7.1875L5.3125 7.25C5.0625 7.25 4.8125 7.3125 4.625 7.5C4.25 7.875 4.25 8.4375 4.625 8.8125L9.3125 13.5C9.375 13.5625 9.5 13.625 9.5625 13.6875L9.625 13.75C9.9375 13.875 10.375 13.8125 10.625 13.5625L15.3125 8.8125C15.75 8.375 15.6875 7.8125 15.375 7.4375Z"
                            fill="#4D8FBE" />
                    </svg>
                </template>
                <a-collapse-panel :key="1" header="补充信息" :style="customStyle">
                    <a-form>
                        <div class="tiny-grid-4">
                            <a-form-item label="紧急联系人姓名" style="margin-bottom:0px;">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.emergencyContacts }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="紧急联系人电话">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.emergencyContactsPhone }}
                                    </span>
                                </div>

                            </a-form-item>
                            <a-form-item label="紧急联系人关系">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.emergencyContactsRelationship }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="民族">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.ethnicName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="宗教信仰">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.religiousBeliefsName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="文化程度">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.educationName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="婚姻状况">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.maritalStatusName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="居住方式">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="月收入水平">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.incomeName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="经济来源">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.economicSourcesName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="特殊贡献及津贴">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="休闲娱乐">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.hobbyName.join(",") }}
                                    </span>
                                </div>
                            </a-form-item>
                        </div>
                    </a-form>
                </a-collapse-panel>
                <a-collapse-panel :key="2" header="病理信息" :style="customStyle">
                    <a-form>
                        <div class="tiny-grid-4">
                            <a-form-item label="急慢性病" style="margin-bottom:0px;">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.acuteChronicDiseases }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="目前患病">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.diseasesType.join(",") }}
                                    </span>
                                </div>

                            </a-form-item>
                            <a-form-item label="多重用药">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.isMultimedicationName }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="目前用药">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.currentMedications.join(",") }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="身高/体重">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.healthFormat.height }} / {{ userStore.creatingUsers.healthFormat.weight }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="血型">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.healthFormat.bloodType }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="收缩压">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.healthFormat.systolicBloodPressure }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="舒张压">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.healthFormat.diastolicBloodPressure }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="外伤史">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="传染病史">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="药物或食物过敏">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="疫苗接种史:">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="疫苗接种史:">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="疾病史:">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="饮酒:">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                            <a-form-item label="吸烟:">
                                <div class="plain-text-group">
                                    <span>
                                        {{ userStore.creatingUsers.basicInfo.phoneNumber }}
                                    </span>
                                </div>
                            </a-form-item>
                        </div>
                    </a-form>
                </a-collapse-panel>
            </a-collapse>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {UserStore} from '@/store/user.store'
const activeKey = ref([1,2])
const userStore = UserStore()

const customStyle = ref("border-radius: 15px;background: #E6EFF5;color:#4D8FBE;")
</script>
<style lang="scss" scoped>
.info-collection {
    width: 100%;
    height: auto;

    .title {
        width: 100%;
        height: 41.5px;
        border-bottom: 1px solid #EEE;
        box-sizing: border-box;
        padding-top: 17.5px;
        padding-left: 35px;
        padding-bottom: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            margin-left: 10px;
        }
    }

    .body {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 25px;
        position: relative;
    }
}

.ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum';
    border: 1px solid #fff;
    border-bottom: 0;
    border-radius: 2px;
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
