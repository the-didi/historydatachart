<template>
    <div class="careplan-background" v-for="datablock in dataBlocks">
        <div>照顾计划</div>
        <div class="block" v-for="item in datablock.carePlanContents">
            <div class="title">{{ item.projectName }}</div>
            <div class="images">
                <!-- 照顾前 -->
                <div class="item">
                    <div class="item-content" v-if="item.beforeImg == null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
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
                            <linearGradient id="paint0_linear_305_34267" x1="63.5504" y1="81.341" x2="63.5504" y2="104.909"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D4DBE5" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_305_34267" x1="62.3026" y1="70.162" x2="62.3026" y2="20.6517"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="white" />
                                <stop offset="0.9205" stop-color="#E2E6ED" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_305_34267" x1="23.9144" y1="58.3415" x2="23.9144" y2="53.5558"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_305_34267" x1="95.0432" y1="44.7172" x2="95.0432" y2="37.9247"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_305_34267" x1="93.5766" y1="89.6411" x2="89.7173" y2="89.6411"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_305_34267" x1="66.7399" y1="83.1477" x2="66.7399" y2="41.8506"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#B2C5D6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_305_34267" x1="67.9766" y1="84.7513" x2="67.9766" y2="43.4542"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#C9D5E2" />
                                <stop offset="0.9205" stop-color="#DAE0E8" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_305_34267" x1="81.7689" y1="91.9652" x2="38.1025" y2="48.2987"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#B6C7D8" />
                                <stop offset="0.9205" stop-color="#DAE0E8" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_305_34267" x1="46.8744" y1="46.0628" x2="75.6101" y2="95.8345"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.0884" stop-color="#EBEEF2" />
                                <stop offset="1" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_305_34267" x1="49.0134" y1="66.072" x2="67.8979" y2="98.781"
                                gradientUnits="userSpaceOnUse">
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
                    <img :src="'http://81.68.76.155:8090/image'+item.beforeImg" v-else>
                </div>
                <!-- 照顾中 -->
                <div class="item">
                    <div class="item-content" v-if="item.careingImg == null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
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
                            <linearGradient id="paint0_linear_305_34267" x1="63.5504" y1="81.341" x2="63.5504" y2="104.909"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D4DBE5" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_305_34267" x1="62.3026" y1="70.162" x2="62.3026" y2="20.6517"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="white" />
                                <stop offset="0.9205" stop-color="#E2E6ED" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_305_34267" x1="23.9144" y1="58.3415" x2="23.9144" y2="53.5558"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_305_34267" x1="95.0432" y1="44.7172" x2="95.0432" y2="37.9247"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_305_34267" x1="93.5766" y1="89.6411" x2="89.7173" y2="89.6411"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_305_34267" x1="66.7399" y1="83.1477" x2="66.7399" y2="41.8506"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#B2C5D6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_305_34267" x1="67.9766" y1="84.7513" x2="67.9766" y2="43.4542"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#C9D5E2" />
                                <stop offset="0.9205" stop-color="#DAE0E8" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_305_34267" x1="81.7689" y1="91.9652" x2="38.1025" y2="48.2987"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#B6C7D8" />
                                <stop offset="0.9205" stop-color="#DAE0E8" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_305_34267" x1="46.8744" y1="46.0628" x2="75.6101" y2="95.8345"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.0884" stop-color="#EBEEF2" />
                                <stop offset="1" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_305_34267" x1="49.0134" y1="66.072" x2="67.8979" y2="98.781"
                                gradientUnits="userSpaceOnUse">
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
                    <img v-else :src="'http://81.68.76.155:8090/image'+item.careingImg" />
                </div>
                <!-- 照顾后 -->
                <div class="item">
                    <div class="item-content" v-if="item.afterImg == null">
                        <svg xmlns="http://www.w3.org/2000/svg" width="126" height="126" viewBox="0 0 126 126" fill="none">
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
                            <linearGradient id="paint0_linear_305_34267" x1="63.5504" y1="81.341" x2="63.5504" y2="104.909"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#D4DBE5" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_305_34267" x1="62.3026" y1="70.162" x2="62.3026" y2="20.6517"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="white" />
                                <stop offset="0.9205" stop-color="#E2E6ED" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_305_34267" x1="23.9144" y1="58.3415" x2="23.9144" y2="53.5558"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_305_34267" x1="95.0432" y1="44.7172" x2="95.0432" y2="37.9247"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_305_34267" x1="93.5766" y1="89.6411" x2="89.7173" y2="89.6411"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#F1F3F6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_305_34267" x1="66.7399" y1="83.1477" x2="66.7399" y2="41.8506"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#B2C5D6" />
                                <stop offset="0.9205" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_305_34267" x1="67.9766" y1="84.7513" x2="67.9766" y2="43.4542"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#C9D5E2" />
                                <stop offset="0.9205" stop-color="#DAE0E8" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_305_34267" x1="81.7689" y1="91.9652" x2="38.1025" y2="48.2987"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.1119" stop-color="#B6C7D8" />
                                <stop offset="0.9205" stop-color="#DAE0E8" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_305_34267" x1="46.8744" y1="46.0628" x2="75.6101" y2="95.8345"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0.0884" stop-color="#EBEEF2" />
                                <stop offset="1" stop-color="#D2D9E3" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_305_34267" x1="49.0134" y1="66.072" x2="67.8979" y2="98.781"
                                gradientUnits="userSpaceOnUse">
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
                    <img v-else :src="'http://81.68.76.155:8090/image'+item.afterImg" />
                </div>
            </div>
            <div class="operation-name" v-if="item.operatorName">
                操作人员姓名: {{ item.operatorName }}
            </div>
            <div class="operation-account" v-if="item.operatorAccount">
                操作账户: {{ item.operatorAccount }}
            </div>
            <div class="operation-finish-time" v-if="item.finishTime">
                操作完成时间: {{ item.finishTime }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {CarePlanStore} from '@/store/careplan.store'
import {onMounted,ref} from 'vue'
const carePlanStore = CarePlanStore()

onMounted(()=>{
    loadData()
})

const dataBlocks = ref([])

const loadData = ()=>{
    const token = window.localStorage.getItem("token")
    fetch(`/api/care/recording/${carePlanStore.userId}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token+""
        }
    }).then(res=>res.json())
    .then(data=>{
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
                img{
                    width: 100%;
                    border: 1px solid black;
                    height: 100%;
                }
            }
        }
    }
}
.item-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>