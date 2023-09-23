<template>
    <div class="basic-info-container">
        <a-row :gutter="[22, 22]" type="flex">
            <a-col :flex="3">
                <a-form-item label="体态评估">
                    <div class="pic-group">
                        <div class="pic-group-body">
                            <a-upload action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false" @change="handlerUploadImg1">
                                <div class="body-item">
                                    <div v-if="userStore.creatingUserAvatar1.length == 0">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M70.089 20.6758H8.54207C5.27247 20.6758 2.62207 23.3262 2.62207 26.5958V64.9958C2.62207 68.2654 5.27247 70.9158 8.54207 70.9158H70.089C73.3586 70.9158 76.0089 68.2654 76.0089 64.9958V26.5958C76.0089 23.3262 73.3584 20.6758 70.089 20.6758ZM39.3153 63.5026C29.5361 63.5026 21.6086 55.5749 21.6086 45.7958C21.6086 36.0166 29.5361 28.0891 39.3153 28.0891C49.0947 28.0891 57.0221 36.0166 57.0221 45.7958C57.0222 55.5749 49.0947 63.5026 39.3153 63.5026Z"
                                                fill="#929AAB" />
                                            <path
                                                d="M27.0103 45.7958C27.0103 47.4118 27.3285 49.0119 27.9469 50.5049C28.5653 51.9978 29.4717 53.3543 30.6144 54.497C31.757 55.6396 33.1136 56.546 34.6065 57.1644C36.0995 57.7828 37.6996 58.1011 39.3155 58.1011C40.9315 58.1011 42.5316 57.7828 44.0246 57.1644C45.5175 56.546 46.874 55.6396 48.0167 54.497C49.1593 53.3543 50.0657 51.9978 50.6841 50.5049C51.3025 49.0119 51.6208 47.4118 51.6208 45.7958C51.6208 42.5323 50.3244 39.4024 48.0167 37.0947C45.709 34.787 42.5791 33.4906 39.3155 33.4906C36.052 33.4906 32.9221 34.787 30.6144 37.0947C28.3067 39.4024 27.0103 42.5323 27.0103 45.7958Z"
                                                fill="#929AAB" />
                                            <path
                                                d="M49.5058 15.3605C49.1224 14.5683 48.089 13.9203 47.209 13.9203H31.4221C30.5421 13.9203 29.5085 14.5685 29.1253 15.3605L25.7189 22.4C25.3355 23.1922 25.7421 23.8402 26.6221 23.8402H52.009C52.889 23.8402 53.2954 23.192 52.9122 22.4L49.5058 15.3605ZM45.7155 17.387C45.7155 17.5923 44.9955 17.7603 44.1155 17.7603H34.5155C33.6355 17.7603 32.9155 17.5923 32.9155 17.387C32.9155 17.1816 33.6355 17.0138 34.5155 17.0138H44.1155C44.9955 17.0136 45.7155 17.1816 45.7155 17.387Z"
                                                fill="#929AAB" />
                                        </svg>
                                        <span>正面照</span>
                                    </div>
                                    <img v-else :src="userStore.creatingUserAvatar1" alt="">
                                </div>
                            </a-upload>
                            <a-upload action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false" @change="handlerUploadImg2">
                                <div class="body-item">
                                    <div v-if="userStore.creatingUserAvatar2.length == 0">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M70.089 20.6758H8.54207C5.27247 20.6758 2.62207 23.3262 2.62207 26.5958V64.9958C2.62207 68.2654 5.27247 70.9158 8.54207 70.9158H70.089C73.3586 70.9158 76.0089 68.2654 76.0089 64.9958V26.5958C76.0089 23.3262 73.3584 20.6758 70.089 20.6758ZM39.3153 63.5026C29.5361 63.5026 21.6086 55.5749 21.6086 45.7958C21.6086 36.0166 29.5361 28.0891 39.3153 28.0891C49.0947 28.0891 57.0221 36.0166 57.0221 45.7958C57.0222 55.5749 49.0947 63.5026 39.3153 63.5026Z"
                                                fill="#929AAB" />
                                            <path
                                                d="M27.0103 45.7958C27.0103 47.4118 27.3285 49.0119 27.9469 50.5049C28.5653 51.9978 29.4717 53.3543 30.6144 54.497C31.757 55.6396 33.1136 56.546 34.6065 57.1644C36.0995 57.7828 37.6996 58.1011 39.3155 58.1011C40.9315 58.1011 42.5316 57.7828 44.0246 57.1644C45.5175 56.546 46.874 55.6396 48.0167 54.497C49.1593 53.3543 50.0657 51.9978 50.6841 50.5049C51.3025 49.0119 51.6208 47.4118 51.6208 45.7958C51.6208 42.5323 50.3244 39.4024 48.0167 37.0947C45.709 34.787 42.5791 33.4906 39.3155 33.4906C36.052 33.4906 32.9221 34.787 30.6144 37.0947C28.3067 39.4024 27.0103 42.5323 27.0103 45.7958Z"
                                                fill="#929AAB" />
                                            <path
                                                d="M49.5058 15.3605C49.1224 14.5683 48.089 13.9203 47.209 13.9203H31.4221C30.5421 13.9203 29.5085 14.5685 29.1253 15.3605L25.7189 22.4C25.3355 23.1922 25.7421 23.8402 26.6221 23.8402H52.009C52.889 23.8402 53.2954 23.192 52.9122 22.4L49.5058 15.3605ZM45.7155 17.387C45.7155 17.5923 44.9955 17.7603 44.1155 17.7603H34.5155C33.6355 17.7603 32.9155 17.5923 32.9155 17.387C32.9155 17.1816 33.6355 17.0138 34.5155 17.0138H44.1155C44.9955 17.0136 45.7155 17.1816 45.7155 17.387Z"
                                                fill="#929AAB" />
                                        </svg>
                                        <span>侧面照</span>
                                    </div>
                                    <img v-else :src="userStore.creatingUserAvatar2" alt="">
                                </div>
                            </a-upload>
                            <a-upload action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false" @change="handlerUploadImg3">
                                <div class="body-item">
                                    <div v-if="userStore.creatingUserAvatar3.length ==0">
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M70.089 20.6758H8.54207C5.27247 20.6758 2.62207 23.3262 2.62207 26.5958V64.9958C2.62207 68.2654 5.27247 70.9158 8.54207 70.9158H70.089C73.3586 70.9158 76.0089 68.2654 76.0089 64.9958V26.5958C76.0089 23.3262 73.3584 20.6758 70.089 20.6758ZM39.3153 63.5026C29.5361 63.5026 21.6086 55.5749 21.6086 45.7958C21.6086 36.0166 29.5361 28.0891 39.3153 28.0891C49.0947 28.0891 57.0221 36.0166 57.0221 45.7958C57.0222 55.5749 49.0947 63.5026 39.3153 63.5026Z"
                                                fill="#929AAB" />
                                            <path
                                                d="M27.0103 45.7958C27.0103 47.4118 27.3285 49.0119 27.9469 50.5049C28.5653 51.9978 29.4717 53.3543 30.6144 54.497C31.757 55.6396 33.1136 56.546 34.6065 57.1644C36.0995 57.7828 37.6996 58.1011 39.3155 58.1011C40.9315 58.1011 42.5316 57.7828 44.0246 57.1644C45.5175 56.546 46.874 55.6396 48.0167 54.497C49.1593 53.3543 50.0657 51.9978 50.6841 50.5049C51.3025 49.0119 51.6208 47.4118 51.6208 45.7958C51.6208 42.5323 50.3244 39.4024 48.0167 37.0947C45.709 34.787 42.5791 33.4906 39.3155 33.4906C36.052 33.4906 32.9221 34.787 30.6144 37.0947C28.3067 39.4024 27.0103 42.5323 27.0103 45.7958Z"
                                                fill="#929AAB" />
                                            <path
                                                d="M49.5058 15.3605C49.1224 14.5683 48.089 13.9203 47.209 13.9203H31.4221C30.5421 13.9203 29.5085 14.5685 29.1253 15.3605L25.7189 22.4C25.3355 23.1922 25.7421 23.8402 26.6221 23.8402H52.009C52.889 23.8402 53.2954 23.192 52.9122 22.4L49.5058 15.3605ZM45.7155 17.387C45.7155 17.5923 44.9955 17.7603 44.1155 17.7603H34.5155C33.6355 17.7603 32.9155 17.5923 32.9155 17.387C32.9155 17.1816 33.6355 17.0138 34.5155 17.0138H44.1155C44.9955 17.0136 45.7155 17.1816 45.7155 17.387Z"
                                                fill="#929AAB" />
                                        </svg>
                                        <span>背面照</span>
                                    </div>
                                    <img v-else :src="userStore.creatingUserAvatar3" alt="">
                                </div>
                            </a-upload>

                            <div class="desc">(请拍摄/上传三种照片)</div>
                        </div>
                    </div>
                </a-form-item>
            </a-col>
        </a-row>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="颈椎健康:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.cervicalSpineHealth"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="腰椎健康:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.lumbarSpineHealth"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="膝关节健康:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.kneejoinHealth"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="踝关节健康:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.ankleHealth"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="肩关节健康:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.shoulderJointHealth"></a-input>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="area-item">
                <a-form-item label="体态评估">
                    <a-textarea v-model:value="userStore.creatingUsers.bodyData.postureAssessment"></a-textarea>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="运动时长:">
                    <a-input type="number" v-model:value="userStore.creatingUsers.bodyData.exerciseDuration"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="运动频次:">
                    <div class="input-group">
                        <a-input suffix="次/周" type="number" v-model:value="userStore.creatingUsers.bodyData.exerciseFrequency"></a-input>
                    </div>
                    
                </a-form-item>
            </div>

            <div class="item">
                <a-form-item label="运动类型:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.exerciseType"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="运动圈子:">
                    <a-select :options="dictTypes.exerciseScope"
                        v-model:value="userStore.creatingUsers.bodyData.exerciseScope"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="运动装备:">
                    <a-input v-model:value="userStore.creatingUsers.bodyData.exerciseEquip"></a-input>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="area-item">
                <a-form-item label="运动建议:">
                    <a-textarea v-model:value="userStore.creatingUsers.bodyData.exerciseAdvice"></a-textarea>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="睡眠质量">
                    <a-select :options="dictTypes.sleepQuality"
                        v-model:value="userStore.creatingUsers.sleepData.sleepQuality"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="睡觉时间">
                    <div class="input-group">
                        <a-input type="number" v-model:value="userStore.creatingUsers.sleepData.sleepTime" suffix="h/天"></a-input>
                    </div>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="入睡速度">
                    <a-select :options="dictTypes.asleepSpeed"
                        v-model:value="userStore.creatingUsers.sleepData.asleepSpeed"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="打鼾情况">
                    <a-select :options="dictTypes.snoringSituation"
                        v-model:value="userStore.creatingUsers.sleepData.snoringSituation"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="是否多梦">
                    <a-select :options="dictTypes.hasDream"
                        v-model:value="userStore.creatingUsers.sleepData.hasDream"></a-select>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="area-item">
                <a-form-item label="健康评估">
                    <a-textarea v-model:value="userStore.creatingUsers.healthFormat.healthAssessment"></a-textarea>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="起夜频次">
                    <div class="input-group">
                        <a-input type="number" v-model:value="userStore.creatingUsers.sleepData.nightFrequency" suffix="次/晚"></a-input> 
                    </div>
                    
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="口腔健康">
                    <a-select :options="dictTypes.oralHealth"
                        v-model:value="userStore.creatingUsers.oralHealth.oralHealth"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="口腔照片">
                    <a-upload action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false" @change="handlerUploadImg">
                        <a-button style="width:100%">上传照片</a-button>
                        <span v-if="!userStore.creatingUsers.oralHealth.oralImg">请上传口腔照片</span>
                        <span v-else>上传成功</span>
                    </a-upload>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="刷牙频次">
                    <a-select :options="dictTypes.brushingFrequency"
                        v-model:value="userStore.creatingUsers.oralHealth.brushingFrequency"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="刷牙时长">
                    <a-select :options="dictTypes.brushingTime"
                        v-model:value="userStore.creatingUsers.oralHealth.brushingTime"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="假牙清洁">
                    <a-select :options="dictTypes.denturesClean"
                        v-model:value="userStore.creatingUsers.oralHealth.denturesClean"></a-select>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="牙具">
                    <div class="select-group">
                        <a-select :options="dictTypes.dentalKits"
                            v-model:value="userStore.creatingUsers.oralHealth.dentalKits"></a-select>
                    </div>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="牙刷更换频次">
                    <div class="input-group">
                        <a-input type="number" v-model:value="userStore.creatingUsers.oralHealth.toothbrushReplaceFrequency"></a-input>
                    </div>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="牙膏品牌">
                    <a-input v-model:value="userStore.creatingUsers.oralHealth.toothpasteBrand"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="牙膏价格">
                    <a-input type="number" v-model:value="userStore.creatingUsers.oralHealth.toothpastePrice"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="水牙线">
                    <a-select :options="dictTypes.waterFlossing"
                        v-model:value="userStore.creatingUsers.oralHealth.waterFlossing"></a-select>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="肠胃功能">
                    <a-select :options="dictTypes.gastrointestinal"
                        v-model:value="userStore.creatingUsers.oralHealth.gastrointestinal"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="排便情况">
                    <a-select :options="dictTypes.bowelMovements"
                        v-model:value="userStore.creatingUsers.oralHealth.bowelMovements"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="痔疮">
                        <a-select
                            v-model:value="userStore.creatingUsers.oralHealth.hemorrhoids">
                            <a-select-option :value="0">无</a-select-option>
                            <a-select-option :value="1">有</a-select-option>
                        </a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="排尿情况">
                    <a-select :options="dictTypes.urination"
                        v-model:value="userStore.creatingUsers.oralHealth.urination"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="生活习惯">
                    <a-select :options="dictTypes.lifestyleHabits"
                        v-model:value="userStore.creatingUsers.oralHealth.lifestyleHabits"></a-select>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="area-item">
                <a-form-item label="辅食保健品">
                    <a-checkbox-group :options="dictTypes.supplements"
                        v-model:value="userStore.creatingUsers.oralHealth.supplements" />
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="辅食品牌">
                    <a-input v-model:value="userStore.creatingUsers.oralHealth.supplementsBrand"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="辅食价格">
                    <a-input type="number" v-model:value="userStore.creatingUsers.oralHealth.supplementsPrice" suffix="元"></a-input>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="item">
                <a-form-item label="做饭情况">
                    <a-select :options="dictTypes.cookingSituation"
                        v-model:value="userStore.creatingUsers.oralHealth.cookingSituation"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="用餐人员">
                    <a-input type="number" v-model:value="userStore.creatingUsers.oralHealth.diningStaff"></a-input>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="饮水情况">
                    <a-select :options="dictTypes.drinkingWater" v-model:value="userStore.creatingUsers.oralHealth.drinkingWater"></a-select>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="食用水果">
                    <div class="select-group">
                        <a-select :options="dictTypes.consumeFruit"
                        v-model:value="userStore.creatingUsers.oralHealth.consumeFruit"></a-select>
                    </div>
                </a-form-item>
            </div>
            <div class="item">
                <a-form-item label="买菜费用">
                    <div class="input-group">
                        <a-input type="number" v-model:value="userStore.creatingUsers.oralHealth.buyGroceriesExpenses" suffix="元/日"></a-input>
                    </div>
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="area-item">
                <a-form-item style="color:#393E46" label="饮食情况">
                    <a-checkbox-group :options="Diet" v-model:value="userStore.creatingUsers.oralHealth.diet" />
                </a-form-item>
            </div>
        </div>
        <div class="grid-row">
            <div class="area-item">
                <a-form-item label="饮食评估">
                    <a-textarea v-model:value="userStore.creatingUsers.oralHealth.dietaryAssessment"></a-textarea>
                </a-form-item>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import { ref, onMounted,computed } from 'vue'
const userStore = UserStore()

const dictTypes = ref<any>({})
onMounted(() => {
    loadData()
})

const loadData = async () => {
    Promise.allSettled([
        getOptionByDictName('exerciseScope'),
        getOptionByDictName('sleepQuality'),
        getOptionByDictName('snoringSituation'),
        getOptionByDictName("hasDream"),
        getOptionByDictName("oralHealth"),
        getOptionByDictName("brushingFrequency"),
        getOptionByDictName("brushingTime"),
        getOptionByDictName("denturesClean"),
        getOptionByDictName("dentalKits"),
        getOptionByDictName("waterFlossing"),
        getOptionByDictName("gastrointestinal"),
        getOptionByDictName("bowelMovements"),
        getOptionByDictName("hemorrhoids"),
        getOptionByDictName("urination"),
        getOptionByDictName("lifestyleHabits"),
        getOptionByDictName("cookingSituation"),
        getOptionByDictName("diningStaff"),
        getOptionByDictName("diet"),
        getOptionByDictName("consumeFruit"),
        getOptionByDictName('asleepSpeed'),
        getOptionByDictName('drinkingWater'),
        getOptionByDictName('supplements'),
        getOptionByDictName('diet')
    ]).then(res => {
        const response: any = res
        dictTypes.value.exerciseScope = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.sleepQuality = response[1].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.snoringSituation = response[2].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.hasDream = response[3].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.oralHealth = response[4].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.brushingFrequency = response[5].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.brushingTime = response[6].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.denturesClean = response[7].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.dentalKits = response[8].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.waterFlossing = response[9].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.gastrointestinal = response[10].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.bowelMovements = response[11].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.hemorrhoids = response[12].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.urination = response[13].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.lifestyleHabits = response[14].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.cookingSituation = response[15].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.diningStaff = response[16].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.diet = response[17].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.consumeFruit = response[18].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.asleepSpeed = response[19].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.drinkingWater = response[20].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictTypes.value.supplements = response[21].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictLabel } })
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
const handlerUploadImg1 = (info: any) => {
    if (!userStore.creatingUsers.bodyData.assessmentImg) {
        userStore.creatingUsers.bodyData.assessmentImg = []
    }
    if (info.file.response) {
        userStore.creatingUsers.bodyData.assessmentImg.push(info.file.response[0])
    }
    fileToBase64(info.file.originFileObj).then(res => {
        userStore.creatingUserAvatar1 = "data:image/png;base64," + res + ""
    })
}
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
const handlerUploadImg = (info:any)=>{
    if (info.file.response) {
        userStore.creatingUsers.oralHealth.oralImg = info.file.response
    }
}
const headers = computed(() => {
    const token = window.localStorage.getItem("token")
    return {
        token: token + ""
    }
})

const handlerUploadImg2 = (info: any) => {
    if (!userStore.creatingUsers.bodyData.assessmentImg) {
        userStore.creatingUsers.bodyData.assessmentImg = []
    }
    if (info.file.response) {
        userStore.creatingUsers.bodyData.assessmentImg.push(info.file.response[0])
    }
    fileToBase64(info.file.originFileObj).then(res => {
        userStore.creatingUserAvatar2 = "data:image/png;base64," + res + ""
    })
}
const handlerUploadImg3 = (info: any) => {
    if (!userStore.creatingUsers.bodyData.assessmentImg) {
        userStore.creatingUsers.bodyData.assessmentImg = []
    }
    if (info.file.response) {
        userStore.creatingUsers.bodyData.assessmentImg.push(info.file.response[0])
    }
    fileToBase64(info.file.originFileObj).then(res => {
        userStore.creatingUserAvatar3 = "data:image/png;base64," + res + ""
    })
}

const healthProduct = ref([
    "牛奶",
    "钙片",
    "蛋白粉",
    "蜂胶",
    "鱼油",
    "维生素",
    "坚果",
    "其他"
])
const Diet = ref([
    "偏清淡",
    "偏辛辣",
    "偏油腻",
    "重糖",
    "重盐",
    "重荤",
    "重素",
    "其他"
])
</script>
<style lang="scss" scoped>
.basic-info-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
}

.pic-group {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;

    .pic-group-body {
        width: auto;
        height: 150px;
        display: flex;
        flex-direction: row;
        gap: 8px;

        .body-item {
            width: 150px;
            height: 150px;
            background-color: #EEE;
            border: 1px dashed #929AAB;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            div{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            img{
                width: 100%;
                height: 100%;
            }

            span {
                font-size: 12px;
                color: #929AAB;
            }
        }

        .desc {
            color: #929AAB;
            width: auto;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }
    }

}
</style>