<template>
    <div class="addtional-container">
        <!-- 照片组件开始 -->
        <div class="pic-container">
            <div class="pic">
                <!-- 照片显示框 -->
                <div class="pic-center" v-if="userStore.creatingUsers.basicInfo.avatar && userStore.creatingUsers.basicInfo.avatar.length != 0">
                    <img :src="userStore.creatingUsers.basicInfo.avatar" alt="">
                </div>
                <div class="pic-center" v-else>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M56.1412 56.2499C54.9412 45.8624 43.7737 37.5 30 37.5C16.2263 37.5 5.06253 45.8624 3.85879 56.2499H56.1375H56.1412ZM30 33.75C46.0275 33.75 59.1187 43.9612 59.9587 56.8124C59.8248 57.7005 59.3762 58.5109 58.6948 59.096C58.0133 59.6811 57.1444 60.0019 56.2462 59.9999H3.75379C2.85514 60.0059 1.98457 59.687 1.3024 59.102C0.620221 58.517 0.172364 57.7052 0.0412903 56.8162C0.877539 43.9612 13.9725 33.75 30 33.75ZM30 26.25C32.9837 26.25 35.8452 25.0647 37.9549 22.9549C40.0647 20.8451 41.25 17.9837 41.25 15C41.25 12.0163 40.0647 9.15482 37.9549 7.04504C35.8452 4.93526 32.9837 3.74999 30 3.74999C27.0163 3.74999 24.1548 4.93526 22.0451 7.04504C19.9353 9.15482 18.75 12.0163 18.75 15C18.75 17.9837 19.9353 20.8451 22.0451 22.9549C24.1548 25.0647 27.0163 26.25 30 26.25ZM30 30C26.0218 30 22.2065 28.4196 19.3934 25.6066C16.5804 22.7935 15 18.9782 15 15C15 11.0217 16.5804 7.20643 19.3934 4.39339C22.2065 1.58035 26.0218 0 30 0C33.9782 0 37.7935 1.58035 40.6066 4.39339C43.4196 7.20643 45 11.0217 45 15C45 18.9782 43.4196 22.7935 40.6066 25.6066C37.7935 28.4196 33.9782 30 30 30Z"
                            fill="white" />
                    </svg>
                </div>
                <!-- 点击按钮 -->
                <a-upload :show-upload-list="false" action="/api/upload/img/avatar" :headers="headers"
                    @change="handlerUploadImg">
                    <div style="width:100px" class="pic-button">
                        点击上传图像
                    </div>
                </a-upload>
            </div>
        </div>
        <!-- 照片组件结束 -->
        <div class="body-container">
            <a-form name="additionalForm" :model="userStore.creatingUsers.basicInfo">
                <!-- 第一行开始 -->
                <a-row :gutter="[42, 42]">
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="姓名" name="name" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.name"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="性别" name="gender" :rules="[{ required: true }]">
                            <div class="radio-group">
                                <a-radio-group v-model:value="userStore.creatingUsers.basicInfo.gender">
                                    <a-radio :value="1">男</a-radio>
                                    <a-radio :value="0">女</a-radio>
                                </a-radio-group>
                            </div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="出生年月" name="birthday" :rules="[{ required: true }]">
                            <div class="select-group">
                                <a-date-picker v-model:value="userStore.creatingUsers.basicInfo.birthday"
                                    @change="handlerBirthDayChange" picker="month" valueFormat="YYYY-MM-DD"
                                    style="width:100%" />
                            </div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="年龄" :rule="[{ required: true }]">
                            <div class="input-group"><a-input :disabled="true" v-model:value="currentUserAge"></a-input>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <!-- 第一行结束 -->
                <a-row :gutter="[42, 42]">
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="民族" :rules="[{ required: true }]">
                            <div class="select-group"><a-select :options="dictTypes.ethnic"
                                    v-model:value="userStore.creatingUsers.basicInfo.ethnic"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="身份证号码" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.idCard"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="机构名称" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.socialSecurity"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="婚姻情况"
                            :rules="[{ required: true }]">
                            <div class="select-group"><a-select :options="dictTypes.maritalStatus"
                                    v-model:value="userStore.creatingUsers.basicInfo.maritalStatus"></a-select></div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[42, 42]">
                    <a-col :span="6">
                        <a-form-item v-if="userStore.userRole != '2'" style="color:#393E46" label="文化程度">
                            <div class="select-group"><a-select :options="dictTypes.education"
                                    v-model:value="userStore.creatingUsers.basicInfo.education"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item v-if="userStore.userRole != '2'" style="color:#393E46" label="职业">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.career"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="电话" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.phoneNumber"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="户籍所在地" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.origin"></a-input></div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[46, 46]">
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="现居住地址" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.address"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="居住情况">
                            <div class="select-group"><a-select :options="dictTypes.residency"
                                    v-model:value="userStore.creatingUsers.basicInfo.residency"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="经济情况">
                            <div class="select-group"><a-select :options="dictTypes.economicSources"
                                    v-model:value="userStore.creatingUsers.basicInfo.economicSources"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="家庭电话">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.homePhone"></a-input></div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[42, 42]">
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="手机类型">
                            <div class="select-group"><a-select :options="dictTypes.phoneType"
                                    v-model:value="userStore.creatingUsers.basicInfo.phoneType"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="紧急联系人姓名">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.emergencyContacts"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="紧急联系人关系">
                            <div class="select-group"><a-select :options="dictTypes.emergencyContactsRelationship"
                                    v-model:value="userStore.creatingUsers.basicInfo.emergencyContactsRelationship"></a-select>
                            </div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="紧急联系人电话" :rules="[{ required: true }]">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.emergencyContactsPhone"></a-input>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[42, 42]">
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="宗教信仰">
                            <div class="select-group"><a-select :options="dictTypes.religiousBeliefs"
                                    v-model:value="userStore.creatingUsers.basicInfo.religiousBeliefs"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="是否每年体检">
                            <div class="radio-group">
                                <a-radio-group v-model:value="userStore.creatingUsers.basicInfo.physicalExamination">
                                    <a-radio :value="1">是</a-radio>
                                    <a-radio :value="0">否</a-radio>
                                </a-radio-group>
                            </div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="医保类型">
                            <div class="select-group"><a-select :options="dictTypes.medicareType"
                                    v-model:value="userStore.creatingUsers.basicInfo.medicareType"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="月收入水平">
                            <div class="select-group"><a-select :options="dictTypes.income"
                                    v-model:value="userStore.creatingUsers.basicInfo.income"></a-select></div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[42, 42]">
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="生育情况">
                            <div class="select-group"><a-select :options="dictTypes.fertility"
                                    v-model:value="userStore.creatingUsers.basicInfo.fertility"></a-select></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" label="特色贡献及补贴">
                            <div class="select-group">
                                <a-select :options="dictTypes.subsidy" placeholder="请选择"
                                    v-model:value="userStore.creatingUsers.basicInfo.subsidy"></a-select>
                            </div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="常去医院">
                            <div class="input-group"><a-input
                                    v-model:value="userStore.creatingUsers.basicInfo.hospitalOften"></a-input></div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="6">
                        <a-upload :show-upload-list="false" action="/api/upload/img/information" :headers="headers"
                            class="pic-button" @change="handlerUploadInfomation">
                            <a-button>
                                <UploadOutlined />
                                资料上传
                            </a-button>
                        </a-upload>
                        <span v-if="!userStore.creatingUsers.basicInfo.information"
                            style="margin-left:5px">病例/体检报告拍照上传图片</span>
                        <span style="margin-left:5px" v-else>上传文件成功</span>

                    </a-col>
                </a-row>
                <a-row :gutter="[42, 42]">
                    <a-col :span="12">
                        <a-form-item style="color:#393E46" label="生育详情">
                            <a-input v-model:value="userStore.creatingUsers.basicInfo.fertilityDetail"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item style="color:#393E46" v-if="userStore.userRole != '2'" label="就医经历">
                            <a-textarea v-model:value="userStore.creatingUsers.basicInfo.medicalExperience"></a-textarea>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[42, 42]">
                    <a-col :span="10">
                        <a-form-item style="color:#393E46" label="兴趣爱好">
                            <a-checkbox-group v-model:value="userStore.creatingUsers.basicInfo.hobby"
                                :options="dictTypes.hobby" />
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import { UploadOutlined } from '@ant-design/icons-vue';
import { ref, computed, onMounted } from 'vue'

const dictTypes = ref<any>({})

onMounted(() => {
    loadDicts()
})

const loadDicts = async () => {
    await Promise.allSettled([
        getOptionByDictName('maritalStatus'),
        getOptionByDictName('education'),
        getOptionByDictName('residency'),
        getOptionByDictName('economicSources'),
        getOptionByDictName('emergencyContactsRelationship'),
        getOptionByDictName('medicareType'),
        getOptionByDictName('income'),
        getOptionByDictName('phoneType'),
        getOptionByDictName('religiousBeliefs'),
        getOptionByDictName('fertility'),
        getOptionByDictName('subsidy'),
        getOptionByDictName('hobby'),
        getOptionByDictName('ethnic')
    ]).then(res => {
        const response: any = res
        dictTypes.value.maritalStatus = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.education = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.residency = response[2].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.economicSources = response[3].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.emergencyContactsRelationship = response[4].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.medicareType = response[5].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.income = response[6].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.phoneType = response[7].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.religiousBeliefs = response[8].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.fertility = response[9].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.subsidy = response[10].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.hobby = response[11].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.ethnic = response[12].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
    })
}

const getOptionByDictName = async (name: string) => {
    const token = window.localStorage.getItem("token")
    return await fetch('/api/dictData/list/' + name, {
        method: 'GET',
        headers: {
            token: token + ""
        }
    }).then(res => res.json())
}



const userStore = UserStore()
const hobby = ref(['读书看报', '麻将娱乐', '书法绘画', '阅读写作', '手机电视', '象棋围棋', '手工制作', '摄影绘画', '舞蹈武术', '旅游散步', '乐器声乐', '其他'])

const imgURL = ref("")

const birthDay = ref("")

const currentUserAge = ref(0)

const handlerUploadInfomation = (info: any) => {
    if (info.file.response) {
        userStore.creatingUsers.basicInfo.information = info.file.response
    }
}

const handlerBirthDayChange = (info: any) => {
    const year = new Date().getFullYear()
    currentUserAge.value = year - info.split("-")[0]

}

const handlerUploadImg = (info: any) => {
    if (info.file.response) {
        fileToBase64(info.file.originFileObj).then(res => {
            userStore.creatingUsers.basicInfo.avatar = "data:image/png;base64," + res + ""
        })
    }
}
const headers = computed(() => {
    const token = window.localStorage.getItem("token")
    return {
        token: token + ""
    }
})

function fileToBase64(file: any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result: any = reader.result
            resolve(result.split(',')[1]);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
}

</script>
<style lang="scss" scoped>
.addtional-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .pic-container {
        width: 202px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .pic {
            width: 100px;
            height: 123px;

            .pic-center {
                width: 100%;
                height: calc(100% - 22px);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: #EEE;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .pic-button {
                width: 100%;
                height: 22px;
                text-align: center;
                font-size: 12px;
                background-color: #E6EFF5;
                align-items: center;
                cursor: pointer;

            }
        }
    }

    .body-container {
        width: calc(100% - 87px);
        height: 100%;
    }
}

:deep(.ant-form-item-label > label) {
    color: #393E46;
}
</style>