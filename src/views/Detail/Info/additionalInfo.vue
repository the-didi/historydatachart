<template>
    <div class="basic-info">
        <div class="header">
            <div class="title">
                <!-- icon -->
                <svg width="50" height="50" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.1751 8.75H16.6626C15.9751 8.75 15.4126 8.1875 15.4126 7.5V4.9875C15.4126 4.625 15.8501 4.45 16.1001 4.7L19.4501 8.05C19.7251 8.3125 19.5376 8.75 19.1751 8.75Z"
                        fill="#1A6FAC" />
                    <path
                        d="M19.5875 9.99999H16.675C15.3 9.99999 14.175 8.87499 14.175 7.49999V4.58749C14.175 4.36249 13.9875 4.17499 13.7625 4.17499H9.1625C6.875 4.16249 5 6.03749 5 8.33749V16.675C5 18.9625 6.875 20.8375 9.1625 20.8375H15.825C18.1125 20.8375 19.9875 18.9625 19.9875 16.675V10.425C20 10.1875 19.8125 9.99999 19.5875 9.99999Z"
                        fill="#B3CFE3" />
                    <path
                        d="M14.375 13.9625H13.125V15.2125C13.125 15.55 12.85 15.8375 12.5 15.8375C12.1625 15.8375 11.875 15.55 11.875 15.2125V13.9625H10.625C10.2875 13.9625 10 13.675 10 13.3375C10 13 10.2875 12.7125 10.625 12.7125H11.875V11.4625C11.875 11.125 12.1625 10.8375 12.5 10.8375C12.85 10.8375 13.125 11.125 13.125 11.4625V12.7125H14.375C14.725 12.7125 15 13 15 13.3375C15 13.675 14.725 13.9625 14.375 13.9625Z"
                        fill="#1A6FAC" />
                </svg>
                <!-- title -->
                <span>附加信息</span>
            </div>
            <a-button type="text" @click="handlerEditor" style="color:#1A6FAC">编辑</a-button>
        </div>
        <div class="container-body">
            <a-form name="info-additionalinfo" v-model="userStore.creatingUsers">
                <a-row :gutter="[30, 30]">
                    <a-col :span="24">
                        <a-form-item label="体态评估">
                            <div class="piclist">
                                <svg @click="showImage(userStore.creatingUsers.bodyData.assessmentImg[0])" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.5 16.2281V22.5C27.5 24.3984 25.9609 25.9375 24.0625 25.9375H5.9375C4.03906 25.9375 2.5 24.3984 2.5 22.5V7.5C2.5 5.60156 4.03906 4.0625 5.9375 4.0625H24.0625C25.9609 4.0625 27.5 5.60156 27.5 7.5V16.2281ZM25.625 14.0419V7.5C25.625 7.29481 25.5846 7.09163 25.5061 6.90206C25.4275 6.71249 25.3124 6.54024 25.1674 6.39515C25.0223 6.25005 24.85 6.13496 24.6604 6.05644C24.4709 5.97792 24.2677 5.9375 24.0625 5.9375H5.9375C5.73231 5.9375 5.52913 5.97792 5.33956 6.05644C5.14999 6.13496 4.97774 6.25005 4.83265 6.39515C4.68755 6.54024 4.57246 6.71249 4.49394 6.90206C4.41542 7.09163 4.375 7.29481 4.375 7.5V17.5922C4.78883 17.5307 5.20663 17.4999 5.625 17.5C7.58519 17.4971 9.48472 18.1795 10.995 19.4291C12.5106 15.48 16.3156 12.8125 20.625 12.8125C22.55 12.8125 24.3456 13.3041 25.625 14.0419ZM25.625 16.4512C25.4688 16.2075 25.0059 15.8169 24.3463 15.4869C23.3428 14.985 22.0619 14.6875 20.625 14.6875C17.0575 14.6875 13.9122 16.9219 12.7022 20.2156C12.6222 20.4337 12.4853 20.8109 12.2922 21.3459C12.0672 21.97 11.2828 22.1694 10.7872 21.7284C10.3056 21.2997 9.95062 20.9941 9.72844 20.8159C8.56545 19.8809 7.11728 19.3723 5.625 19.375C5.20125 19.375 4.78344 19.415 4.375 19.4937V22.5C4.375 22.7052 4.41542 22.9084 4.49394 23.0979C4.57246 23.2875 4.68755 23.4598 4.83265 23.6049C4.97774 23.7499 5.14999 23.865 5.33956 23.9436C5.52913 24.0221 5.73231 24.0625 5.9375 24.0625H24.0625C24.2677 24.0625 24.4709 24.0221 24.6604 23.9436C24.85 23.865 25.0223 23.7499 25.1674 23.6049C25.3124 23.4598 25.4275 23.2875 25.5061 23.0979C25.5846 22.9084 25.625 22.7052 25.625 22.5V16.4509V16.4512ZM9.375 14.0625C8.62908 14.0625 7.91371 13.7662 7.38626 13.2387C6.85882 12.7113 6.5625 11.9959 6.5625 11.25C6.5625 10.5041 6.85882 9.78871 7.38626 9.26126C7.91371 8.73382 8.62908 8.4375 9.375 8.4375C10.1209 8.4375 10.8363 8.73382 11.3637 9.26126C11.8912 9.78871 12.1875 10.5041 12.1875 11.25C12.1875 11.9959 11.8912 12.7113 11.3637 13.2387C10.8363 13.7662 10.1209 14.0625 9.375 14.0625ZM9.375 12.1875C9.62364 12.1875 9.8621 12.0887 10.0379 11.9129C10.2137 11.7371 10.3125 11.4986 10.3125 11.25C10.3125 11.0014 10.2137 10.7629 10.0379 10.5871C9.8621 10.4113 9.62364 10.3125 9.375 10.3125C9.12636 10.3125 8.8879 10.4113 8.71209 10.5871C8.53627 10.7629 8.4375 11.0014 8.4375 11.25C8.4375 11.4986 8.53627 11.7371 8.71209 11.9129C8.8879 12.0887 9.12636 12.1875 9.375 12.1875Z"
                                        fill="#1A6FAC" />
                                </svg>
                                <svg @click="showImage(userStore.creatingUsers.bodyData.assessmentImg[1])" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.5 16.2281V22.5C27.5 24.3984 25.9609 25.9375 24.0625 25.9375H5.9375C4.03906 25.9375 2.5 24.3984 2.5 22.5V7.5C2.5 5.60156 4.03906 4.0625 5.9375 4.0625H24.0625C25.9609 4.0625 27.5 5.60156 27.5 7.5V16.2281ZM25.625 14.0419V7.5C25.625 7.29481 25.5846 7.09163 25.5061 6.90206C25.4275 6.71249 25.3124 6.54024 25.1674 6.39515C25.0223 6.25005 24.85 6.13496 24.6604 6.05644C24.4709 5.97792 24.2677 5.9375 24.0625 5.9375H5.9375C5.73231 5.9375 5.52913 5.97792 5.33956 6.05644C5.14999 6.13496 4.97774 6.25005 4.83265 6.39515C4.68755 6.54024 4.57246 6.71249 4.49394 6.90206C4.41542 7.09163 4.375 7.29481 4.375 7.5V17.5922C4.78883 17.5307 5.20663 17.4999 5.625 17.5C7.58519 17.4971 9.48472 18.1795 10.995 19.4291C12.5106 15.48 16.3156 12.8125 20.625 12.8125C22.55 12.8125 24.3456 13.3041 25.625 14.0419ZM25.625 16.4512C25.4688 16.2075 25.0059 15.8169 24.3463 15.4869C23.3428 14.985 22.0619 14.6875 20.625 14.6875C17.0575 14.6875 13.9122 16.9219 12.7022 20.2156C12.6222 20.4337 12.4853 20.8109 12.2922 21.3459C12.0672 21.97 11.2828 22.1694 10.7872 21.7284C10.3056 21.2997 9.95062 20.9941 9.72844 20.8159C8.56545 19.8809 7.11728 19.3723 5.625 19.375C5.20125 19.375 4.78344 19.415 4.375 19.4937V22.5C4.375 22.7052 4.41542 22.9084 4.49394 23.0979C4.57246 23.2875 4.68755 23.4598 4.83265 23.6049C4.97774 23.7499 5.14999 23.865 5.33956 23.9436C5.52913 24.0221 5.73231 24.0625 5.9375 24.0625H24.0625C24.2677 24.0625 24.4709 24.0221 24.6604 23.9436C24.85 23.865 25.0223 23.7499 25.1674 23.6049C25.3124 23.4598 25.4275 23.2875 25.5061 23.0979C25.5846 22.9084 25.625 22.7052 25.625 22.5V16.4509V16.4512ZM9.375 14.0625C8.62908 14.0625 7.91371 13.7662 7.38626 13.2387C6.85882 12.7113 6.5625 11.9959 6.5625 11.25C6.5625 10.5041 6.85882 9.78871 7.38626 9.26126C7.91371 8.73382 8.62908 8.4375 9.375 8.4375C10.1209 8.4375 10.8363 8.73382 11.3637 9.26126C11.8912 9.78871 12.1875 10.5041 12.1875 11.25C12.1875 11.9959 11.8912 12.7113 11.3637 13.2387C10.8363 13.7662 10.1209 14.0625 9.375 14.0625ZM9.375 12.1875C9.62364 12.1875 9.8621 12.0887 10.0379 11.9129C10.2137 11.7371 10.3125 11.4986 10.3125 11.25C10.3125 11.0014 10.2137 10.7629 10.0379 10.5871C9.8621 10.4113 9.62364 10.3125 9.375 10.3125C9.12636 10.3125 8.8879 10.4113 8.71209 10.5871C8.53627 10.7629 8.4375 11.0014 8.4375 11.25C8.4375 11.4986 8.53627 11.7371 8.71209 11.9129C8.8879 12.0887 9.12636 12.1875 9.375 12.1875Z"
                                        fill="#1A6FAC" />
                                </svg>
                                <svg @click="showImage(userStore.creatingUsers.bodyData.assessmentImg[2])" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.5 16.2281V22.5C27.5 24.3984 25.9609 25.9375 24.0625 25.9375H5.9375C4.03906 25.9375 2.5 24.3984 2.5 22.5V7.5C2.5 5.60156 4.03906 4.0625 5.9375 4.0625H24.0625C25.9609 4.0625 27.5 5.60156 27.5 7.5V16.2281ZM25.625 14.0419V7.5C25.625 7.29481 25.5846 7.09163 25.5061 6.90206C25.4275 6.71249 25.3124 6.54024 25.1674 6.39515C25.0223 6.25005 24.85 6.13496 24.6604 6.05644C24.4709 5.97792 24.2677 5.9375 24.0625 5.9375H5.9375C5.73231 5.9375 5.52913 5.97792 5.33956 6.05644C5.14999 6.13496 4.97774 6.25005 4.83265 6.39515C4.68755 6.54024 4.57246 6.71249 4.49394 6.90206C4.41542 7.09163 4.375 7.29481 4.375 7.5V17.5922C4.78883 17.5307 5.20663 17.4999 5.625 17.5C7.58519 17.4971 9.48472 18.1795 10.995 19.4291C12.5106 15.48 16.3156 12.8125 20.625 12.8125C22.55 12.8125 24.3456 13.3041 25.625 14.0419ZM25.625 16.4512C25.4688 16.2075 25.0059 15.8169 24.3463 15.4869C23.3428 14.985 22.0619 14.6875 20.625 14.6875C17.0575 14.6875 13.9122 16.9219 12.7022 20.2156C12.6222 20.4337 12.4853 20.8109 12.2922 21.3459C12.0672 21.97 11.2828 22.1694 10.7872 21.7284C10.3056 21.2997 9.95062 20.9941 9.72844 20.8159C8.56545 19.8809 7.11728 19.3723 5.625 19.375C5.20125 19.375 4.78344 19.415 4.375 19.4937V22.5C4.375 22.7052 4.41542 22.9084 4.49394 23.0979C4.57246 23.2875 4.68755 23.4598 4.83265 23.6049C4.97774 23.7499 5.14999 23.865 5.33956 23.9436C5.52913 24.0221 5.73231 24.0625 5.9375 24.0625H24.0625C24.2677 24.0625 24.4709 24.0221 24.6604 23.9436C24.85 23.865 25.0223 23.7499 25.1674 23.6049C25.3124 23.4598 25.4275 23.2875 25.5061 23.0979C25.5846 22.9084 25.625 22.7052 25.625 22.5V16.4509V16.4512ZM9.375 14.0625C8.62908 14.0625 7.91371 13.7662 7.38626 13.2387C6.85882 12.7113 6.5625 11.9959 6.5625 11.25C6.5625 10.5041 6.85882 9.78871 7.38626 9.26126C7.91371 8.73382 8.62908 8.4375 9.375 8.4375C10.1209 8.4375 10.8363 8.73382 11.3637 9.26126C11.8912 9.78871 12.1875 10.5041 12.1875 11.25C12.1875 11.9959 11.8912 12.7113 11.3637 13.2387C10.8363 13.7662 10.1209 14.0625 9.375 14.0625ZM9.375 12.1875C9.62364 12.1875 9.8621 12.0887 10.0379 11.9129C10.2137 11.7371 10.3125 11.4986 10.3125 11.25C10.3125 11.0014 10.2137 10.7629 10.0379 10.5871C9.8621 10.4113 9.62364 10.3125 9.375 10.3125C9.12636 10.3125 8.8879 10.4113 8.71209 10.5871C8.53627 10.7629 8.4375 11.0014 8.4375 11.25C8.4375 11.4986 8.53627 11.7371 8.71209 11.9129C8.8879 12.0887 9.12636 12.1875 9.375 12.1875Z"
                                        fill="#1A6FAC" />
                                </svg>
                            </div>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="颈椎健康">
                            {{ userStore.creatingUsers.bodyData.cervicalSpineHealth }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="腰椎健康">
                            {{ userStore.creatingUsers.bodyData.lumbarSpineHealth }}
                        </a-form-item>
                    </a-col>
                    <!-- <a-col :span="4">
                        <a-form-item label="膝关节健康">
                            {{ userStore.creatingUsers.bodyData.kneeJointHealth }}
                        </a-form-item>
                    </a-col> -->
                    <a-col :span="4">
                        <a-form-item label="踝关节健康">
                            {{ userStore.creatingUsers.bodyData.ankleHealth }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="肩关节健康">
                            {{ userStore.creatingUsers.bodyData.shoulderJointHealth }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="体态评估">
                            {{ userStore.creatingUsers.bodyData.postureAssessment }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="运动时长">
                            {{ userStore.creatingUsers.bodyData.exerciseDuration }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="运动频次">
                            {{ userStore.creatingUsers.bodyData.exerciseFrequency }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="运动类型">
                            {{ userStore.creatingUsers.bodyData.exerciseType }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="运动圈子">
                            {{ userStore.creatingUsers.bodyData.exerciseScopeName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="运动装备">
                            {{ userStore.creatingUsers.basicInfo.homePhone }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="运动建议">
                            {{ userStore.creatingUsers.basicInfo.origin }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="睡眠质量">
                            {{ dictsValue.sleepQuality }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="睡觉时间">
                            {{ dictsValue.sleepTime }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="入睡速度">
                            {{ dictsValue.asleepSpeed }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="打鼾情况">
                            {{ userStore.creatingUsers.sleepData.snoringSituation == 1?'有':'无' }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="是否多梦">
                            {{ dictsValue.hasDream }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="起夜频次">
                            {{ userStore.creatingUsers.sleepData.nightFrequency }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="8">
                        <a-form-item label="健康评估">
                            {{ userStore.creatingUsers.healthFormat.healthAssessment }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="口腔健康">
                            {{ userStore.creatingUsers.healthFormat.oralHealthName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="口腔图片">
                            <div class="button" @click="handlerShowImg()">
                                <InformationBtn />
                            </div>
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="刷牙频次">
                            {{ userStore.creatingUsers.oralHealth.brushingFrequencyName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="刷牙时长">
                            {{ userStore.creatingUsers.oralHealth.brushingTimeName }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="假牙清洁">
                            {{ userStore.creatingUsers.oralHealth.denturesCleanName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="牙具">
                            {{ userStore.creatingUsers.oralHealth.dentalKitsName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="牙刷更换频次">
                            {{ userStore.creatingUsers.oralHealth.toothbrushReplaceFrequency }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="牙膏品牌">
                            {{ userStore.creatingUsers.oralHealth.toothpasteBrand }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="牙膏价格">
                            {{ userStore.creatingUsers.oralHealth.toothpastePrice }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="水牙线">
                            {{ userStore.creatingUsers.oralHealth.waterFlossing ==1?'有':'无' }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="肠胃功能">
                            {{ userStore.creatingUsers.oralHealth.gastrointestinalName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="排便情况">
                            {{ userStore.creatingUsers.oralHealth.bowelMovementsName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="痔疮">
                            {{ userStore.creatingUsers.oralHealth.hemorrhoids ==0?'有':'无' }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="排尿情况">
                            {{ userStore.creatingUsers.oralHealth.urinationName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="生活习惯">
                            {{ userStore.creatingUsers.oralHealth.lifestyleHabitsName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="辅食保健品">
                            {{ compArr(userStore.creatingUsers.oralHealth.supplements) }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="辅食品牌">
                            {{ userStore.creatingUsers.oralHealth.supplementsPrice }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="辅食价格">
                            {{ userStore.creatingUsers.oralHealth.supplementsPrice }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="做饭情况">
                            {{ userStore.creatingUsers.oralHealth.cookingSituationName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="用餐人员">
                            {{ userStore.creatingUsers.oralHealth.diningStaff }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="饮水情况">
                            {{ userStore.creatingUsers.oralHealth.drinkingWaterName }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="4">
                        <a-form-item label="食用水果">
                            {{ userStore.creatingUsers.oralHealth.consumeFruitName }}
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="[30, 30]">
                    <a-col :span="4">
                        <a-form-item label="买菜费用">
                            {{ userStore.creatingUsers.oralHealth.buyGroceriesExpenses }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="饮食情况">
                            {{ compArr(userStore.creatingUsers.oralHealth.diet) }}
                        </a-form-item>
                    </a-col>
                    <a-col :span="8">
                        <a-form-item label="饮食评估">
                            {{ userStore.creatingUsers.oralHealth.dietaryAssessment }}
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </div>
    </div>
    <!-- 弹窗模块开始 -->
    <a-modal :width="1100" v-model:visible="showImg" title="查看口腔图片">
        <ImgDialog :img="imageStr" />
    </a-modal>
    <a-modal :width="1100" v-model:visible="showCurrentImage" title="查看体态评估图片">
        <ImgDialog :img="currentShowImageUrl" />
    </a-modal>
</template>
<script lang="ts" setup>
import { UserStore } from '@/store/user.store'
import {ref,onMounted, computed } from 'vue'
import ImgDialog from '@/components/Dialog/ImgDialog.vue'
import InformationBtn from '@/components/Button/InformationBtn.vue'
import router from '@/router/index'
const userStore = UserStore()
const showImg = ref(false)
const compArr = (arr: any) => {
    return arr.join(" ")
}

const imageStr = ref("")


const handlerEditor = ()=>{
    userStore.creatingUserAvatar = userStore.creatingUsers.basicInfo.avatar
    
    router.push("/main/add")
}

const handlerShowImg = ()=>{
    showImg.value = true
}

const currentShowImageUrl = ref("")
const showCurrentImage = ref(false)

const showImage = (imgUrl:string)=>{
    currentShowImageUrl.value = imgUrl
    showCurrentImage.value = true
}

onMounted(()=>{
    if(userStore.creatingUsers.oralHealth.oralImg){
        imageStr.value = userStore.creatingUsers.oralHealth.oralImg[0]
    }
    loadDicts()
    
})
const getOptionByDictName = async (name: string) => {
    const token = window.localStorage.getItem("token")
    return await fetch('/api/dictData/list/' + name, {
        method: 'GET',
        headers: {
            token: token + ""
        }
    }).then(res => res.json())
}
const dictsValue = ref<any>({
    sleepQuality: "",
    asleepSpeed: "",
    snoringSituation: "",
    hasDream: "",
    dentalKits: ""
})
const dictTypes = ref<any>({})

const loadDicts =async ()=>{
    await Promise.allSettled([
        getOptionByDictName('sleepQuality'),
        getOptionByDictName('asleepSpeed'),
        getOptionByDictName('hasDream'),
        getOptionByDictName('dentalKits'),
        getOptionByDictName('exerciseType'),
        getOptionByDictName('sleepTime'),
        getOptionByDictName('oralHealth'),
        getOptionByDictName('waterFlossing'),
        getOptionByDictName('cookingSituation'),    
        getOptionByDictName('drinkingWater'),
        getOptionByDictName('consumeFruit'),
        getOptionByDictName('gastrointestinal'),
        getOptionByDictName('denturesClean')
        // getOptionByDictName('subsidy')
    ]).then(res => {
        const response: any = res   
        dictTypes.value.sleepQuality = response[0].value.data.map((ele: any) => { return { label: ele.dictLabel, value: ele.dictId } })
        dictsValue.value.sleepQuality = dictTypes.value.sleepQuality.find((ele:any)=>ele.value == userStore.creatingUsers.sleepData.sleepQuality).label
        dictTypes.value.asleepSpeed = response[1].value.data.map((ele:any)=>{ return { label: ele.dictLabel,value:ele.dictId } })
        dictsValue.value.asleepSpeed = dictTypes.value.asleepSpeed.find((ele:any)=>ele.value == userStore.creatingUsers.sleepData.asleepSpeed).label
        dictTypes.value.hasDream = response[2].value.data.map((ele:any)=>{ return { label: ele.dictLabel,value:ele.dictId } })
        dictsValue.value.hasDream = dictTypes.value.hasDream.find((ele:any)=>ele.value == userStore.creatingUsers.sleepData.hasDream).label
        dictTypes.value.dentalKits = response[3].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.dentalKits = dictTypes.value.dentalKits.find((ele:any)=>ele.value == userStore.creatingUsers.sleepData.dentalKits).label
        dictTypes.value.exerciseType = response[4].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.exerciseType = dictTypes.value.exerciseType.find((ele:any)=>ele.value == userStore.creatingUsers.bodyData.exerciseType).label
        dictTypes.value.sleepTime = response[5].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.sleepTime = dictTypes.value.sleepTime.find((ele:any)=>ele.value == userStore.creatingUsers.sleepData.sleepTime).label
        dictTypes.value.oralHealth = response[6].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.oralHealth = dictTypes.value.oralHealth.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.oralHealth).label
        dictTypes.value.waterFlossing = response[6].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.waterFlossing = dictTypes.value.waterFlossing.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.waterFlossing).label
        dictTypes.value.cookingSituation = response[7].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.cookingSituation = dictTypes.value.cookingSituation.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.cookingSituation).label
        dictTypes.value.drinkingWater = response[8].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.drinkingWater = dictTypes.value.drinkingWater.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.drinkingWater).label
        dictTypes.value.consumeFruit = response[9].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.consumeFruit = dictTypes.value.consumeFruit.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.consumeFruit).label
        dictTypes.value.gastrointestinal = response[10].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.gastrointestinal = dictTypes.value.gastrointestinal.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.gastrointestinal).label
        dictTypes.value.denturesClean = response[11].value.data.map((ele:any)=> { return {label: ele.dictLabel,value:ele.dictId} })
        dictsValue.value.denturesClean = dictTypes.value.denturesClean.find((ele:any)=>ele.value == userStore.creatingUsers.oralHealth.denturesClean).label
    })
}

</script>
<style lang="scss" scoped>
.basic-info {
    width: 100%;
    height: 100%;
    padding: 10px;

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .title {
            width: auto;
            display: flex;
            flex-direction: row;
            align-items: center;

            span {
                font-size: 16px;
            }
        }
    }


    .container-body {
        width: 100%;
        padding: 10px;
        display: flex;
        flex-direction: column;

    }
}

.piclist {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.button {
    width: 100px;
    height: 34px;
}

.information-block {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        margin-left: 10px;
    }
}
</style>