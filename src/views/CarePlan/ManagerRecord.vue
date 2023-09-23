<template>
    <div class="careplan-background" v-for="(dataBlock,dindex) of dataBlocks">
        <div class="selected-user-header">
            <div class="header-left">
                <div class="user">
                    <span>{{ tmpLoadingValue.name }}</span>
                    <div class="age">
                        {{ tmpLoadingValue.age }}
                    </div>
                    <div class="status">
                        <span>{{
                            tmpLoadingValue.payStatus == 0 ? '未支付' : '已支付'
                        }}</span>
                    </div>
                    <button @click="handlerPay" v-if="tmpLoadingValue.payStatus == 0">支付</button>
                </div>
                <span>身份证: {{ tmpLoadingValue.idCard }}</span>
                <span>手机号: {{ tmpLoadingValue.phoneNumber }}</span>
            </div>
            <div class="header-middle">
                <span>总支付金额</span>
                <button>{{ computedPrice(dataBlock) }}元</button>
            </div>
        </div>
        <div>照顾计划</div>
        <div class="block" v-for="(item, index) in dataBlock.manageCarePlanContentVos">
            <div class="title">{{ item.projectName }}</div>
            <div class="images">
                <!-- 照顾前 -->
                <div class="item">
                    <a-upload v-if="item.beforeImg == null" @click="handlerChangeIndex(dindex,index)" @change="handlerBeforeClick"
                        action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false">
                        <div class="item-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126"
                                fill="none">
                                <path
                                    d="M63.5497 104.909C89.1702 104.909 109.94 99.6332 109.94 93.125C109.94 86.6168 89.1702 81.3408 63.5497 81.3408C37.9292 81.3408 17.1597 86.6168 17.1597 93.125C17.1597 99.6332 37.9292 104.909 63.5497 104.909Z"
                                    fill="url(#paint0_linear_305_34267)" />
                                <path
                                    d="M90.2146 42.1485V23.3635L86.4456 20.6514L69.9758 27.2002V46.3821H66.2053V41.0901H58.9949V46.0514H55.5567V36.7904H49.3386V53.194H47.6187V24.2896H32.935V50.8126H25.46V60.6375H21.1619V70.1615H103.445V69.3992V60.6375V42.1485H90.2146Z"
                                    fill="url(#paint1_linear_305_34267)" />
                                <path
                                    d="M23.9149 58.3415C25.2362 58.3415 26.3073 57.2704 26.3073 55.9491C26.3073 54.6278 25.2362 53.5566 23.9149 53.5566C22.5936 53.5566 21.5225 54.6278 21.5225 55.9491C21.5225 57.2704 22.5936 58.3415 23.9149 58.3415Z"
                                    fill="url(#paint2_linear_305_34267)" />
                                <path
                                    d="M95.0434 44.7172C96.9188 44.7172 98.4391 43.1969 98.4391 41.3215C98.4391 39.4461 96.9188 37.9258 95.0434 37.9258C93.168 37.9258 91.6477 39.4461 91.6477 41.3215C91.6477 43.1969 93.168 44.7172 95.0434 44.7172Z"
                                    fill="url(#paint3_linear_305_34267)" />
                                <path
                                    d="M91.6462 91.5707C92.7117 91.5707 93.5755 90.7069 93.5755 89.6413C93.5755 88.5757 92.7117 87.7119 91.6462 87.7119C90.5806 87.7119 89.7168 88.5757 89.7168 89.6413C89.7168 90.7069 90.5806 91.5707 91.6462 91.5707Z"
                                    fill="url(#paint4_linear_305_34267)" />
                                <path
                                    d="M86.5952 83.1477H46.8847C43.5489 83.1477 40.843 80.4434 40.843 77.106V47.8913C40.843 44.5555 43.5473 41.8496 46.8847 41.8496H86.5936C89.9295 41.8496 92.6353 44.5539 92.6353 47.8913V77.106C92.6353 80.4434 89.931 83.1477 86.5952 83.1477Z"
                                    fill="url(#paint5_linear_305_34267)" />
                                <path
                                    d="M88.3685 84.7506H47.5855C44.8765 84.7506 42.6809 82.555 42.6809 79.8461V48.3587C42.6809 45.6497 44.8765 43.4541 47.5855 43.4541H88.3669C91.0759 43.4541 93.2715 45.6497 93.2715 48.3587V79.8461C93.2731 82.555 91.0759 84.7506 88.3685 84.7506Z"
                                    fill="url(#paint6_linear_305_34267)" />
                                <path
                                    d="M79.6179 91.598H40.2524C36.8945 91.598 34.1729 88.8764 34.1729 85.5185V54.7445C34.1729 51.3866 36.8945 48.665 40.2524 48.665H79.6179C82.9758 48.665 85.6974 51.3866 85.6974 54.7445V85.5185C85.6974 88.8764 82.9758 91.598 79.6179 91.598Z"
                                    fill="url(#paint7_linear_305_34267)" />
                                <path
                                    d="M81.6339 91.5973H40.8508C38.1418 91.5973 35.9463 89.4017 35.9463 86.6927V55.2053C35.9463 52.4963 38.1418 50.3008 40.8508 50.3008H81.6323C84.3413 50.3008 86.5369 52.4963 86.5369 55.2053V86.6927C86.5384 89.4017 84.3429 91.5973 81.6339 91.5973Z"
                                    fill="url(#paint8_linear_305_34267)" />
                                <path
                                    d="M39.5057 89.887H82.2496C84.4168 89.887 86.173 88.1309 86.173 85.9637V85.8755L74.4109 72.4407C73.9273 71.8879 73.102 71.795 72.5083 72.2265L66.3043 76.7247C65.7374 77.1358 64.9562 77.0728 64.4632 76.5767L52.9625 65.013C52.342 64.3893 51.3103 64.4728 50.8 65.1879L35.9053 86.3732C35.9289 89.7579 37.4929 89.887 39.5057 89.887Z"
                                    fill="url(#paint9_linear_305_34267)" />
                                <path
                                    d="M39.8697 91.5979H82.6136C84.7808 91.5979 86.5369 89.8418 86.5369 87.6746V87.5864L74.7748 74.1517C74.2913 73.5988 73.466 73.5059 72.8722 73.9375L66.6699 78.4357C66.1029 78.8467 65.3217 78.7837 64.8287 78.2876L53.3281 66.724C52.7075 66.1003 51.6759 66.1837 51.1656 66.8988L36.1511 88.1235C36.3748 90.0765 37.8568 91.5979 39.8697 91.5979Z"
                                    fill="url(#paint10_linear_305_34267)" />
                                <path
                                    d="M70.3491 68.4385C72.8899 68.4385 74.9497 66.3787 74.9497 63.8379C74.9497 61.2971 72.8899 59.2373 70.3491 59.2373C67.8083 59.2373 65.7485 61.2971 65.7485 63.8379C65.7485 66.3787 67.8083 68.4385 70.3491 68.4385Z"
                                    fill="url(#paint11_linear_305_34267)" />
                                <defs>
                                    <linearGradient id="paint0_linear_305_34267" x1="63.5504" y1="81.341" x2="63.5504"
                                        y2="104.909" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D4DBE5" />
                                        <stop offset="1" stop-color="white" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_305_34267" x1="62.3026" y1="70.162" x2="62.3026"
                                        y2="20.6517" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="white" />
                                        <stop offset="0.9205" stop-color="#E2E6ED" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_305_34267" x1="23.9144" y1="58.3415" x2="23.9144"
                                        y2="53.5558" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_305_34267" x1="95.0432" y1="44.7172" x2="95.0432"
                                        y2="37.9247" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_305_34267" x1="93.5766" y1="89.6411" x2="89.7173"
                                        y2="89.6411" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_305_34267" x1="66.7399" y1="83.1477" x2="66.7399"
                                        y2="41.8506" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B2C5D6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_305_34267" x1="67.9766" y1="84.7513" x2="67.9766"
                                        y2="43.4542" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#C9D5E2" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_305_34267" x1="81.7689" y1="91.9652" x2="38.1025"
                                        y2="48.2987" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B6C7D8" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_305_34267" x1="46.8744" y1="46.0628" x2="75.6101"
                                        y2="95.8345" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0884" stop-color="#EBEEF2" />
                                        <stop offset="1" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_305_34267" x1="49.0134" y1="66.072" x2="67.8979"
                                        y2="98.781" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#C9D5E2" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_305_34267" x1="49.5078" y1="67.7078" x2="68.3923"
                                        y2="100.417" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="white" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_305_34267" x1="65.7489" y1="63.8376" x2="74.9507"
                                        y2="63.8376" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B2C5D6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>照顾前</span>
                        </div>
                    </a-upload>
                    <img :src="'http://81.68.76.155:8090/image' + item.beforeImg" v-else>
                </div>
                <!-- 照顾中 -->
                <div class="item">
                    <a-upload v-if="item.careingImg == null" @click="handlerChangeIndex(dindex,index)" @change="handlerIngClick"
                        action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false">
                        <div class="item-content" v-if="item.careingImg == null">

                            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126"
                                fill="none">
                                <path
                                    d="M63.5497 104.909C89.1702 104.909 109.94 99.6332 109.94 93.125C109.94 86.6168 89.1702 81.3408 63.5497 81.3408C37.9292 81.3408 17.1597 86.6168 17.1597 93.125C17.1597 99.6332 37.9292 104.909 63.5497 104.909Z"
                                    fill="url(#paint0_linear_305_34267)" />
                                <path
                                    d="M90.2146 42.1485V23.3635L86.4456 20.6514L69.9758 27.2002V46.3821H66.2053V41.0901H58.9949V46.0514H55.5567V36.7904H49.3386V53.194H47.6187V24.2896H32.935V50.8126H25.46V60.6375H21.1619V70.1615H103.445V69.3992V60.6375V42.1485H90.2146Z"
                                    fill="url(#paint1_linear_305_34267)" />
                                <path
                                    d="M23.9149 58.3415C25.2362 58.3415 26.3073 57.2704 26.3073 55.9491C26.3073 54.6278 25.2362 53.5566 23.9149 53.5566C22.5936 53.5566 21.5225 54.6278 21.5225 55.9491C21.5225 57.2704 22.5936 58.3415 23.9149 58.3415Z"
                                    fill="url(#paint2_linear_305_34267)" />
                                <path
                                    d="M95.0434 44.7172C96.9188 44.7172 98.4391 43.1969 98.4391 41.3215C98.4391 39.4461 96.9188 37.9258 95.0434 37.9258C93.168 37.9258 91.6477 39.4461 91.6477 41.3215C91.6477 43.1969 93.168 44.7172 95.0434 44.7172Z"
                                    fill="url(#paint3_linear_305_34267)" />
                                <path
                                    d="M91.6462 91.5707C92.7117 91.5707 93.5755 90.7069 93.5755 89.6413C93.5755 88.5757 92.7117 87.7119 91.6462 87.7119C90.5806 87.7119 89.7168 88.5757 89.7168 89.6413C89.7168 90.7069 90.5806 91.5707 91.6462 91.5707Z"
                                    fill="url(#paint4_linear_305_34267)" />
                                <path
                                    d="M86.5952 83.1477H46.8847C43.5489 83.1477 40.843 80.4434 40.843 77.106V47.8913C40.843 44.5555 43.5473 41.8496 46.8847 41.8496H86.5936C89.9295 41.8496 92.6353 44.5539 92.6353 47.8913V77.106C92.6353 80.4434 89.931 83.1477 86.5952 83.1477Z"
                                    fill="url(#paint5_linear_305_34267)" />
                                <path
                                    d="M88.3685 84.7506H47.5855C44.8765 84.7506 42.6809 82.555 42.6809 79.8461V48.3587C42.6809 45.6497 44.8765 43.4541 47.5855 43.4541H88.3669C91.0759 43.4541 93.2715 45.6497 93.2715 48.3587V79.8461C93.2731 82.555 91.0759 84.7506 88.3685 84.7506Z"
                                    fill="url(#paint6_linear_305_34267)" />
                                <path
                                    d="M79.6179 91.598H40.2524C36.8945 91.598 34.1729 88.8764 34.1729 85.5185V54.7445C34.1729 51.3866 36.8945 48.665 40.2524 48.665H79.6179C82.9758 48.665 85.6974 51.3866 85.6974 54.7445V85.5185C85.6974 88.8764 82.9758 91.598 79.6179 91.598Z"
                                    fill="url(#paint7_linear_305_34267)" />
                                <path
                                    d="M81.6339 91.5973H40.8508C38.1418 91.5973 35.9463 89.4017 35.9463 86.6927V55.2053C35.9463 52.4963 38.1418 50.3008 40.8508 50.3008H81.6323C84.3413 50.3008 86.5369 52.4963 86.5369 55.2053V86.6927C86.5384 89.4017 84.3429 91.5973 81.6339 91.5973Z"
                                    fill="url(#paint8_linear_305_34267)" />
                                <path
                                    d="M39.5057 89.887H82.2496C84.4168 89.887 86.173 88.1309 86.173 85.9637V85.8755L74.4109 72.4407C73.9273 71.8879 73.102 71.795 72.5083 72.2265L66.3043 76.7247C65.7374 77.1358 64.9562 77.0728 64.4632 76.5767L52.9625 65.013C52.342 64.3893 51.3103 64.4728 50.8 65.1879L35.9053 86.3732C35.9289 89.7579 37.4929 89.887 39.5057 89.887Z"
                                    fill="url(#paint9_linear_305_34267)" />
                                <path
                                    d="M39.8697 91.5979H82.6136C84.7808 91.5979 86.5369 89.8418 86.5369 87.6746V87.5864L74.7748 74.1517C74.2913 73.5988 73.466 73.5059 72.8722 73.9375L66.6699 78.4357C66.1029 78.8467 65.3217 78.7837 64.8287 78.2876L53.3281 66.724C52.7075 66.1003 51.6759 66.1837 51.1656 66.8988L36.1511 88.1235C36.3748 90.0765 37.8568 91.5979 39.8697 91.5979Z"
                                    fill="url(#paint10_linear_305_34267)" />
                                <path
                                    d="M70.3491 68.4385C72.8899 68.4385 74.9497 66.3787 74.9497 63.8379C74.9497 61.2971 72.8899 59.2373 70.3491 59.2373C67.8083 59.2373 65.7485 61.2971 65.7485 63.8379C65.7485 66.3787 67.8083 68.4385 70.3491 68.4385Z"
                                    fill="url(#paint11_linear_305_34267)" />
                                <defs>
                                    <linearGradient id="paint0_linear_305_34267" x1="63.5504" y1="81.341" x2="63.5504"
                                        y2="104.909" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D4DBE5" />
                                        <stop offset="1" stop-color="white" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_305_34267" x1="62.3026" y1="70.162" x2="62.3026"
                                        y2="20.6517" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="white" />
                                        <stop offset="0.9205" stop-color="#E2E6ED" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_305_34267" x1="23.9144" y1="58.3415" x2="23.9144"
                                        y2="53.5558" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_305_34267" x1="95.0432" y1="44.7172" x2="95.0432"
                                        y2="37.9247" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_305_34267" x1="93.5766" y1="89.6411" x2="89.7173"
                                        y2="89.6411" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_305_34267" x1="66.7399" y1="83.1477" x2="66.7399"
                                        y2="41.8506" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B2C5D6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_305_34267" x1="67.9766" y1="84.7513" x2="67.9766"
                                        y2="43.4542" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#C9D5E2" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_305_34267" x1="81.7689" y1="91.9652" x2="38.1025"
                                        y2="48.2987" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B6C7D8" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_305_34267" x1="46.8744" y1="46.0628" x2="75.6101"
                                        y2="95.8345" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0884" stop-color="#EBEEF2" />
                                        <stop offset="1" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_305_34267" x1="49.0134" y1="66.072" x2="67.8979"
                                        y2="98.781" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#C9D5E2" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_305_34267" x1="49.5078" y1="67.7078" x2="68.3923"
                                        y2="100.417" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="white" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_305_34267" x1="65.7489" y1="63.8376" x2="74.9507"
                                        y2="63.8376" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B2C5D6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>照顾中</span>
                        </div>
                    </a-upload>
                    <img v-else :src="'http://81.68.76.155:8090/image' + item.careingImg" />
                </div>
                <!-- 照顾后 -->
                <div class="item">
                    <a-upload v-if="item.afterImg == null" @click="handlerChangeIndex(dindex,index)" @change="handlerAfterImport"
                        action="/api/upload/img/avatar" :headers="headers" :show-upload-list="false">
                        <div class="item-content" v-if="item.afterImg == null">
                            <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126"
                                fill="none">
                                <path
                                    d="M63.5497 104.909C89.1702 104.909 109.94 99.6332 109.94 93.125C109.94 86.6168 89.1702 81.3408 63.5497 81.3408C37.9292 81.3408 17.1597 86.6168 17.1597 93.125C17.1597 99.6332 37.9292 104.909 63.5497 104.909Z"
                                    fill="url(#paint0_linear_305_34267)" />
                                <path
                                    d="M90.2146 42.1485V23.3635L86.4456 20.6514L69.9758 27.2002V46.3821H66.2053V41.0901H58.9949V46.0514H55.5567V36.7904H49.3386V53.194H47.6187V24.2896H32.935V50.8126H25.46V60.6375H21.1619V70.1615H103.445V69.3992V60.6375V42.1485H90.2146Z"
                                    fill="url(#paint1_linear_305_34267)" />
                                <path
                                    d="M23.9149 58.3415C25.2362 58.3415 26.3073 57.2704 26.3073 55.9491C26.3073 54.6278 25.2362 53.5566 23.9149 53.5566C22.5936 53.5566 21.5225 54.6278 21.5225 55.9491C21.5225 57.2704 22.5936 58.3415 23.9149 58.3415Z"
                                    fill="url(#paint2_linear_305_34267)" />
                                <path
                                    d="M95.0434 44.7172C96.9188 44.7172 98.4391 43.1969 98.4391 41.3215C98.4391 39.4461 96.9188 37.9258 95.0434 37.9258C93.168 37.9258 91.6477 39.4461 91.6477 41.3215C91.6477 43.1969 93.168 44.7172 95.0434 44.7172Z"
                                    fill="url(#paint3_linear_305_34267)" />
                                <path
                                    d="M91.6462 91.5707C92.7117 91.5707 93.5755 90.7069 93.5755 89.6413C93.5755 88.5757 92.7117 87.7119 91.6462 87.7119C90.5806 87.7119 89.7168 88.5757 89.7168 89.6413C89.7168 90.7069 90.5806 91.5707 91.6462 91.5707Z"
                                    fill="url(#paint4_linear_305_34267)" />
                                <path
                                    d="M86.5952 83.1477H46.8847C43.5489 83.1477 40.843 80.4434 40.843 77.106V47.8913C40.843 44.5555 43.5473 41.8496 46.8847 41.8496H86.5936C89.9295 41.8496 92.6353 44.5539 92.6353 47.8913V77.106C92.6353 80.4434 89.931 83.1477 86.5952 83.1477Z"
                                    fill="url(#paint5_linear_305_34267)" />
                                <path
                                    d="M88.3685 84.7506H47.5855C44.8765 84.7506 42.6809 82.555 42.6809 79.8461V48.3587C42.6809 45.6497 44.8765 43.4541 47.5855 43.4541H88.3669C91.0759 43.4541 93.2715 45.6497 93.2715 48.3587V79.8461C93.2731 82.555 91.0759 84.7506 88.3685 84.7506Z"
                                    fill="url(#paint6_linear_305_34267)" />
                                <path
                                    d="M79.6179 91.598H40.2524C36.8945 91.598 34.1729 88.8764 34.1729 85.5185V54.7445C34.1729 51.3866 36.8945 48.665 40.2524 48.665H79.6179C82.9758 48.665 85.6974 51.3866 85.6974 54.7445V85.5185C85.6974 88.8764 82.9758 91.598 79.6179 91.598Z"
                                    fill="url(#paint7_linear_305_34267)" />
                                <path
                                    d="M81.6339 91.5973H40.8508C38.1418 91.5973 35.9463 89.4017 35.9463 86.6927V55.2053C35.9463 52.4963 38.1418 50.3008 40.8508 50.3008H81.6323C84.3413 50.3008 86.5369 52.4963 86.5369 55.2053V86.6927C86.5384 89.4017 84.3429 91.5973 81.6339 91.5973Z"
                                    fill="url(#paint8_linear_305_34267)" />
                                <path
                                    d="M39.5057 89.887H82.2496C84.4168 89.887 86.173 88.1309 86.173 85.9637V85.8755L74.4109 72.4407C73.9273 71.8879 73.102 71.795 72.5083 72.2265L66.3043 76.7247C65.7374 77.1358 64.9562 77.0728 64.4632 76.5767L52.9625 65.013C52.342 64.3893 51.3103 64.4728 50.8 65.1879L35.9053 86.3732C35.9289 89.7579 37.4929 89.887 39.5057 89.887Z"
                                    fill="url(#paint9_linear_305_34267)" />
                                <path
                                    d="M39.8697 91.5979H82.6136C84.7808 91.5979 86.5369 89.8418 86.5369 87.6746V87.5864L74.7748 74.1517C74.2913 73.5988 73.466 73.5059 72.8722 73.9375L66.6699 78.4357C66.1029 78.8467 65.3217 78.7837 64.8287 78.2876L53.3281 66.724C52.7075 66.1003 51.6759 66.1837 51.1656 66.8988L36.1511 88.1235C36.3748 90.0765 37.8568 91.5979 39.8697 91.5979Z"
                                    fill="url(#paint10_linear_305_34267)" />
                                <path
                                    d="M70.3491 68.4385C72.8899 68.4385 74.9497 66.3787 74.9497 63.8379C74.9497 61.2971 72.8899 59.2373 70.3491 59.2373C67.8083 59.2373 65.7485 61.2971 65.7485 63.8379C65.7485 66.3787 67.8083 68.4385 70.3491 68.4385Z"
                                    fill="url(#paint11_linear_305_34267)" />
                                <defs>
                                    <linearGradient id="paint0_linear_305_34267" x1="63.5504" y1="81.341" x2="63.5504"
                                        y2="104.909" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#D4DBE5" />
                                        <stop offset="1" stop-color="white" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_305_34267" x1="62.3026" y1="70.162" x2="62.3026"
                                        y2="20.6517" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="white" />
                                        <stop offset="0.9205" stop-color="#E2E6ED" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_305_34267" x1="23.9144" y1="58.3415" x2="23.9144"
                                        y2="53.5558" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_305_34267" x1="95.0432" y1="44.7172" x2="95.0432"
                                        y2="37.9247" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_305_34267" x1="93.5766" y1="89.6411" x2="89.7173"
                                        y2="89.6411" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#F1F3F6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_305_34267" x1="66.7399" y1="83.1477" x2="66.7399"
                                        y2="41.8506" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B2C5D6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_305_34267" x1="67.9766" y1="84.7513" x2="67.9766"
                                        y2="43.4542" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#C9D5E2" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_305_34267" x1="81.7689" y1="91.9652" x2="38.1025"
                                        y2="48.2987" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B6C7D8" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_305_34267" x1="46.8744" y1="46.0628" x2="75.6101"
                                        y2="95.8345" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0884" stop-color="#EBEEF2" />
                                        <stop offset="1" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_305_34267" x1="49.0134" y1="66.072" x2="67.8979"
                                        y2="98.781" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#C9D5E2" />
                                        <stop offset="0.9205" stop-color="#DAE0E8" />
                                    </linearGradient>
                                    <linearGradient id="paint10_linear_305_34267" x1="49.5078" y1="67.7078" x2="68.3923"
                                        y2="100.417" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="white" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                    <linearGradient id="paint11_linear_305_34267" x1="65.7489" y1="63.8376" x2="74.9507"
                                        y2="63.8376" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.1119" stop-color="#B2C5D6" />
                                        <stop offset="0.9205" stop-color="#D2D9E3" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>照顾后</span>
                        </div>
                    </a-upload>

                    <img v-else :src="'http://81.68.76.155:8090/image' + item.afterImg" />
                </div>
            </div>
            <div class="block-bottom">
                <div class="block-bottom-title">
                    <span>操作人员姓名:</span>
                    <a-input v-model:value="item.operationName"></a-input>
                </div>
                <a-button @click="handlerSubmit(index)"
                    style="background-color: #1aac26;color:#fff;border-radius: 15px;margin-bottom: 5px;">提交</a-button>
            </div>
        </div>
    </div>
    <a-drawer v-model:visible="showDrawer" :width="720" title="照护合同" placement="right">
        <div class="grid-container">
            <div class="contract-content">
                <div>德阳市中西医结合医院（德阳市中医医院</div>
                <div>医养服务协议书</div>
                <div>甲方：德阳市中西医结合医院（德阳市中医医院）</div>
                <div>地址：德阳市天山南路二段159号</div>
                <div>法定代表人： 委托代理人：</div>
                <div>联系方式：</div>
                <div>乙方（送养人）：</div>
                <div>联 系 方式： 身份证号：</div>
                <div>丙方（入住老人）姓名： 性别：</div>
                <div>出生日期： 身份证号：</div>
                <div>地址：</div>
                <div>丁方（担保人）：</div>
                上述各方本着平等、自愿、公平、诚实信用的原则，就丙方入院事宜，在协商一致、愿意共同遵守的基础上，达成如下协议：
                <div>第一条 本协议自 年 月 日起，至丙方出院之日起自动终止或本协议终止之日止。 丙方住院期间死亡的，本协议自然终止。</div>
                <div>第二条 丙方入院试住期为 天，试住期间甲方将对丙方进一步深入评估，并将评估结果告知乙方，如乙方或丙方对评估结果有异议，而各方又不能达成一致意见的，甲方有权单方面解除入院协议，且无须承担任何责任。</div>
                <div>第三条 乙方自愿申请将丙方送入甲方德阳市中西医结合医院康养入住。在此期间，甲方有权根据医院实际情况和丙方实际需要有调换丙方床位，乙方、丙方应当给予支持和理解。</div>
                <div>第四条 根据丙方的身体状况，经甲方评估，在入住期间，乙方每月应缴费用为：基本生活护理费 元，伙食费 元，床位费 合计 元。</div>
                后续如丙方身体状况发生变化，经甲方评估需要调整费用标准的，由甲方另行通知乙方、丙方并以通知书载明金额为准。
                <div>第五条 费用结算方式：在入住期间，乙方、丙方按预缴费方式于每月15日前，提前向甲方支付丙方次月的应缴费用。</div>
                第六条 若丙方出院，甲方按实际天数结合收费标准结算总金额后收取相关费用。丙方已预交费的，费用结付执行多退少补。
                第七条 丙方入院时，须自备服装及其他日常生活用品（详见甲方入住清单）。丙方在入住期间发生损坏甲方财物、造成他人伤害、紧急救治时的临时支付等情况，由乙方、丙方全部承担或支付。
                第八条
                乙方、丙方办理入院时，应向甲方提供乙方和丙方的身份证复印件各一份、丙方近3个月内二甲及以上医院出具的健康体检报告或住院报告；同时，乙方、丙方应如实向甲方提供或陈述丙方其他相关的真实状况，如病史、生理、情感、思维、心理特征、行为特征等；若无相关报告，需按照甲方要求做基本体检（具体收费按体检标准）。
                乙方、丙方应当毫无隐瞒、如实、完整地陈述、提供丙方上述个人真实状况，否则由此产生的不利后果均由乙方、丙方自行承担。
                第九条
                乙方须真实、准确地提供自己和相关人员的信息资料，并保证通讯畅通，以便丙方出现意外等情况时，甲方能够及时通知。如乙方的联系电话或住址发生变化，须及时通知甲方。丙方所涉及的私人性质的所有家庭关系、社会关系等相关事项及纠纷及责任均与甲方无关，应由乙方、丙方自行负责处理。
                第十条
                丙方在入住期间需就医的，乙方、丙方可自由选择就医地点；但丙方突发疾病等紧急情况时，甲方可采取必要的急救、治疗措施，乙方、丙方须积极支持和配合甲方的工作。，在接受甲方通知后，乙方应及时赶到抢救现场，接手丙方的后续处置事宜，所产生的一切费用由乙方、丙方全部承担。
                第十一条 丙方服用自带药品和自备食品引起的一切后果，由乙方和丙方自行负责。
                第十二条 丙方请假外出连续或每月累计超过5天（含5天）及以上的，伙食费按天实退，但护理管理费不退还；连续或每月累计外出不足5天的，甲方不退还乙方任何费用。
                第十三条
                丙方在入住期间，因年龄、身体状况、物价波动等原因发生变化，甲方经评估后需调整护理等级、收费标准或护理区域等的，甲方将通知乙方，乙方如有异议应当在接甲方通知后3日内提出，否则视为同意，乙方则须按新标准向甲方支付费用，并及时来院完善各项手续。
                第十四条 丙方在入住期间自伤自残、伤害侮辱他人，或、损坏、偷盗、侵占公家或他人财物的，均由乙方、丙方自行负责处理并承担全部责任（如赔偿金）。
                第十五条甲方将按照护理等级向丙方提供在院内相应的护理服务，不承担乙方依法应当承担的其他法律范畴的监护责任和义务。
                第十六条 丙方在入住期间，乙方或丙方有下列情况之一者，甲方有权单方面解除本协议，且无须承担任何责任：
                1、乙方、丙方隐瞒丙方的真实病史或其他重要情况者；
                2、丙方有传染性疾病者；
                3、丙方有自伤、自残、自杀倾向，或有伤害其他人员的行为或意愿者；
                4、丙方在院期间，因身体、病情等发生了变化，需调整护理等级、收费标准或护理区域，而甲、乙丙双方又不能达成一致协议者；
                5、丙方不适应甲方的生活环境和管理要求者；
                6、乙方、丙方丧失了履约能力或不能履行义务或拖欠应缴纳费用15天及以上者；
                7、乙方、丙方行为给甲方造成较大经济损失或不良社会影响的；
                8、其他原因不宜继续入住的。
                第十七条 有下列情况者，甲方不承担责任：
                1、丙方在入住期间发生的自伤、自残、自杀、出走、猝死、突发疾病（如心脑血管意外、猝死等），以及坠地、滑倒、摔伤、烫伤、噎食、突发流行性传染病等突发意外事故者。
                2、丙方因突发疾病在紧急处置或转院过程中出现伤残或死亡者。
                3、乙方、丙方要求或本协议书约定行动不受限制的丙方外出而发生的意外情况者。
                丙方在入住期间需离院外出，乙方或丙方应当向甲方办理请假手续。若私自离院，由此而引起的一切后果，由乙方和丙方自行承担。
                乙方同意丙方外出，乙方承诺对此自行承担责任。
                4、其他非甲方原因导致乙方、丙方发生人身伤害或财产损失的。
                5、因其他不可抗拒的原因而发生的意外者。
                第十八条 入住老人因疾病发生医疗费用的结算方式：
                1、入住老人因慢性疾病或发生其他仅需门诊治疗所产生的费用按月累计，并按月提供处方、费用清单，双方核实后，门诊支付。
                2、老年患者慢性疾病加重需入院治疗时，由家属及医院双方确认后，患者转入住院医疗模式。所发生的医疗费用，按住院患者医疗支付方式进行结算。
                第十九条 担保
                1、丁方完全明了本协议书全部内容及意义，自愿为乙方、丙方的行为及后果向甲方承担连带责任保证担保。
                2、乙方、丙方因违约或违法须向甲方承担赔偿责任或支付拖欠费用的，丁方承诺：其自愿无条件代为乙方、丙方向甲方承担全部赔偿责任或给付款责任。
                3、丁方的担保期限：自本合同生效之日起至本协议解除或终止之日起3年。
                4、丁方的担保系无条件，不可撤销。
                第二十条、违约责任
                1、任何一方的违约行为或违法行为给对方造成经济损失的，向对方承担全部赔偿责任。
                2、守约方依法维权发生的律师费、公证费、保函保费由违约方负责赔偿。
                第二十一条、争议解决
                发生争议应当友好协商，协商不成的，诉交甲方所在地法院裁判。
                第二十二条、文本和效力
                本合同由上述甲乙丙丁各方签字或盖章后即生效，如丙方为完全民事行为能力人，应签字或捺印。
                第二十三条 附件及其他
                1、丙方在甲方入住期间死亡的，甲方通知乙方后，乙方应当及时处理。否则，甲方有权报告主管公安部门并依法对尸体进行处理，发生费用均由乙方承担，且甲方无需向乙方承担任何责任。
                2、本协议未尽事宜，由甲乙丙丁各方另行协商，订补充条款。
                3、以下附件同正本具有同等法律效力：
                1、甲方入住老人管理规定；
                2、物品清单：
                3、其他：
            </div>
            <div class="contract-bottom">
                <Sign :key="timeStamp" />
                <div class="btns">
                    <a-button @click="handlerReSign">重新签名</a-button>
                    <a-button @click="handlerDialog" style="background-color: #54B674;color: #fff">提交签名</a-button>
                </div>
            </div>
        </div>
    </a-drawer>
    <div class="dialog" v-if="showDialog">
        <JudgeQRCode 
        @cancel="handlerJudgeCodeCancel"
        :qr-code-str="qrCodeStr" 
        :project-name="projectName" 
        :operation-name="operationName" />
    </div>
</template>
<script lang="ts" setup>

import { CarePlanStore } from '@/store/careplan.store'
import { onMounted, ref, computed } from 'vue'
import Sign from './Sign.vue'
import JudgeQRCode from '@/components/Dialog/JudgeQRCode.vue'

const showDialog = ref(false)
const showDrawer = ref(false)
const qrCodeStr = ref("")
const projectName = ref("")
const operationName = ref("")
const timeStamp = ref(new Date().getTime())
const carePlanStore = CarePlanStore()

const handlerReSign = ()=>{

}

const handlerDialog = ()=>{

}

const cancel = ()=>{

}

const dinsertingIndex = ref<number>(0)
const insertingIndex = ref<number>(0)

const computedPrice = (block) => {
    if (block.manageCarePlanContentVos.length == 0) {
        return 0
    } else {
        let sum = 0
        for (let i = 0; i < block.manageCarePlanContentVos.length; i++) {
            sum += block.manageCarePlanContentVos[i].price
        }
        return sum
    }
}

const handlerPay = ()=>{
    showDrawer.value = true
}

const handlerBeforeClick = (info) => {
    if (info.file.response) {
        dataBlocks.value[dinsertingIndex.value].manageCarePlanContentVos[insertingIndex.value].beforeImg = info.file.response[0]
    }
}

const handlerIngClick = (info) => {
    if (info.file.response) {
        dataBlocks.value[dinsertingIndex.value].manageCarePlanContentVos[insertingIndex.value].careingImg = info.file.response[0]
    }
}

const handlerAfterImport = (info) => {
    if (info.file.response) {
        dataBlocks.value[dinsertingIndex.value].manageCarePlanContentVos[insertingIndex.value].afterImg = info.file.response[0]
    }
}

const handlerChangeIndex = (dindex,index) => {
    insertingIndex.value = index
    dinsertingIndex.value = dindex
}

let tmpLoadingValue: any = ref<any>({})

const handlerJudgeCodeCancel = ()=>{
    showDialog.value = false
}


const handlerSubmit = (index) => {
    const token = window.localStorage.getItem("token")
    const userInfo = JSON.parse(window.localStorage.getItem("userInfo"))
    const submitEntity = {
        recordsId: carePlanStore.userId,
        operatorAccount: userInfo.id,
        institution: userInfo.institution,
        payStatus: tmpLoadingValue.value.payStatus,
        ...dataBlocks.value[insertingIndex.value]
    }
    fetch("/api/care", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        },
        body: JSON.stringify({
            ...submitEntity
        })
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(dataBlocks.value[insertingIndex.value])
            operationName.value = dataBlocks.value[insertingIndex.value].operationName
            projectName.value = dataBlocks.value[insertingIndex.value].projectName

            qrCodeStr.value = JSON.stringify({
                planContentId: dataBlocks.value[dinsertingIndex.value].manageCarePlanContentVos[insertingIndex.value].planContentId,
                name: dataBlocks.value[insertingIndex.value].name,
                age: dataBlocks.value[insertingIndex.value].age,
                phoneNumber: dataBlocks.value[insertingIndex.value].phoneNumber,
                idCard: dataBlocks.value[insertingIndex.value].idCard,
                operationName: dataBlocks.value[dinsertingIndex.value].manageCarePlanContentVos[insertingIndex.value].operationName
            })
            console.log(qrCodeStr.value)
            showDialog.value = true  
        })
}

const payStr = ref("")

onMounted(() => {
    loadData()
})

const dataBlocks = ref([])

const headers = computed(() => {
    const token = window.localStorage.getItem("token")
    return {
        token: token + ""
    }
})



const loadData = () => {
    const token = window.localStorage.getItem("token")
    fetch(`/api/care/managePlan/${carePlanStore.userId}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            tmpLoadingValue.value = data.data[0]
            dataBlocks.value = data.data
        })
}
</script>
<style lang="scss" scoped>
.careplan-background {
    width: 100%;
    display: flex;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    flex-direction: column;
    gap: 10px;

    .block {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #eee;
        gap: 10px;
        margin-bottom: 5px;

        .images {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;

            .item {
                width: 200px;
                height: 200px;
                border-radius: 5px;
                background-color: #F7F7F7;
                display: flex;
                flex-direction: column;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

.selected-user-header {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    gap: 30px;
    border-bottom: 1px solid #eee;
    align-items: center;

    .header-left {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 8px;

        .user {
            display: flex;
            flex-direction: row;
            gap: 5px;
            align-items: center;

            .status {
                width: 40px;
                height: 20px;
                border-radius: 1px;
                background: #A0D6B2;
                text-align: center;

            }
        }
    }

    .header-middle {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }

    .header-right {
        width: 98px;
        height: 35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        color: #fff;
        background-color: #54B674;
    }
}

.age {
    box-sizing: border-box;
    padding: 1px 10px;
    background-color: lightblue;
    color: #fff;
}

.block-bottom-title {
    width: 500px;
    display: flex;

    span {
        width: 180px;
    }

    flex-direction: row;
    align-items: center;
}

.item-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}</style>