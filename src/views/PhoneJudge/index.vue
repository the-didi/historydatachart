<template>
    <div class="phone-judge" style="overflow: scroll;">
        <div class="title">
            <img src="@/assets/images/title.png" alt="">
            <span>亚洲康养智慧医疗云平台</span>
        </div>
        <div class="title-desc">
            <span>照顾服务评价</span>
        </div>
        <div class="title-userinfo">
            <div class="user-name">
                <span>{{ judegeEntity.name }}</span>
                <div class="user-age">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path
                            d="M6.46424 8.44144C5.9716 8.44275 5.48261 8.357 5.01982 8.18814C4.96192 8.1672 4.90871 8.13506 4.86323 8.09356C4.81776 8.05206 4.7809 8.00201 4.75477 7.94626C4.72863 7.89051 4.71374 7.83016 4.71093 7.76866C4.70812 7.70716 4.71745 7.6457 4.73839 7.5878C4.78068 7.47088 4.86768 7.37554 4.98027 7.32276C5.03601 7.29662 5.09636 7.28173 5.15787 7.27891C5.21937 7.2761 5.28082 7.28544 5.33872 7.30638C5.99483 7.54599 6.71025 7.57016 7.38103 7.37537C8.05182 7.18058 8.64302 6.77699 9.06874 6.22322C9.49446 5.66946 9.73252 4.99437 9.74833 4.29606C9.76414 3.59774 9.55688 2.91258 9.15666 2.34011C8.75644 1.76765 8.18411 1.33771 7.52283 1.11276C6.86155 0.88781 6.14577 0.879574 5.47949 1.08925C4.81321 1.29892 4.23114 1.71558 3.81785 2.27869C3.40456 2.84179 3.18159 3.52201 3.18133 4.2205C3.18236 4.9379 3.41607 5.63562 3.84738 6.20889C3.88502 6.25811 3.91253 6.31429 3.92833 6.3742C3.94413 6.43411 3.94791 6.49656 3.93944 6.55794C3.93096 6.61932 3.91042 6.67841 3.87898 6.7318C3.84754 6.78519 3.80583 6.83182 3.75627 6.869C3.7067 6.90618 3.65026 6.93317 3.59021 6.94841C3.53015 6.96366 3.46767 6.96685 3.40638 6.95781C3.34508 6.94876 3.28618 6.92767 3.23309 6.89573C3.17999 6.8638 3.13375 6.82166 3.09703 6.77175C2.5226 6.01411 2.221 5.0846 2.24119 4.13402C2.26137 3.18345 2.60214 2.26758 3.20822 1.535C3.8143 0.802421 4.65012 0.296117 5.58009 0.0982277C6.51006 -0.0996613 7.47961 0.0224749 8.33145 0.444822C9.18328 0.867168 9.86742 1.56495 10.2729 2.42495C10.6783 3.28495 10.7813 4.25672 10.5651 5.18261C10.3489 6.10849 9.82623 6.93416 9.08184 7.52567C8.33744 8.11717 7.41503 8.43981 6.46424 8.44123V8.44144Z"
                            fill="white" />
                        <path
                            d="M8.62109 10.7583H4.31667C4.19228 10.7583 4.07299 10.7089 3.98503 10.621C3.89707 10.533 3.84766 10.4137 3.84766 10.2893C3.84766 10.1649 3.89707 10.0456 3.98503 9.95768C4.07299 9.86973 4.19228 9.82031 4.31667 9.82031H8.62109C8.74548 9.82031 8.86478 9.86973 8.95274 9.95768C9.0407 10.0456 9.09011 10.1649 9.09011 10.2893C9.09011 10.4137 9.0407 10.533 8.95274 10.621C8.86478 10.7089 8.74548 10.7583 8.62109 10.7583Z"
                            fill="white" />
                        <path
                            d="M6.47393 12.8782C6.41211 12.8788 6.35079 12.8671 6.29356 12.8437C6.23634 12.8203 6.18436 12.7858 6.14067 12.742C6.09699 12.6983 6.06248 12.6463 6.03916 12.589C6.01585 12.5317 6.00421 12.4704 6.00491 12.4086V8.34792C6.00491 8.22353 6.05433 8.10424 6.14228 8.01628C6.23024 7.92832 6.34954 7.87891 6.47393 7.87891C6.59832 7.87891 6.71762 7.92832 6.80557 8.01628C6.89353 8.10424 6.94294 8.22353 6.94294 8.34792V12.4086C6.94365 12.4704 6.93201 12.5317 6.90869 12.589C6.88538 12.6463 6.85087 12.6983 6.80719 12.742C6.7635 12.7858 6.71152 12.8203 6.65429 12.8437C6.59707 12.8671 6.53575 12.8788 6.47393 12.8782Z"
                            fill="white" />
                    </svg>
                    <span>{{ judegeEntity.age }}</span>
                </div>
            </div>
            <div class="user-idcard">
                <span>身份证: {{ judegeEntity.idCard }}</span>
            </div>
            <div class="user-phonenumber">
                <span>手机号: {{ judegeEntity.phoneNumber }}</span>
            </div>
        </div>
        <div class="judege-container" style="
                    width: 100%;
                height: auto;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        ">
            <div class="block-items" style="
                            width: 100%;
            height: auto;
            display: grid;
            border-bottom: 1px solid #EEE;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            background-color: #fff;
            box-sizing: border-box;
            padding: 26px 20px;
                
                ">
                <div class="bitem">已完成项目确认</div>
                <div class="bitem">
                    <a-button style="background-color: #fff;color:black;border-radius: 5px;">雾化吸入</a-button>
                </div>
                <div class="bitem">以上项目是否已完成</div>
                <div class="bitem">
                    <a-checkbox-group>
                        <a-checkbox>已完成</a-checkbox>
                        <a-checkbox>未完成</a-checkbox>
                    </a-checkbox-group>
                </div>
                <div class="bitem">服务人员确认</div>
                <div class="bitem" style="
                                    display: flex;
                flex-direction: row;
                gap: 5px;
                    ">
                    <span>{{ judegeEntity.operationName }}</span>
                </div>
                <div class="bitem">是否由此人完成</div>
                <div class="bitem">
                    <a-checkbox-group>
                        <a-checkbox>是</a-checkbox>
                        <a-checkbox>不是</a-checkbox>
                    </a-checkbox-group>
                </div>
            </div>
            <div class="judge-bottom">
                <div class="item">
                    <span>服务评价</span>
                </div>
                <div class="item">
                    <a-rate v-model:value="bindinValue1" />
                </div>
                <div class="item">
                    <span>服务态度</span>
                </div>
                <div class="item">
                    <a-rate />
                </div>
                <div class="item">
                    <span>服务质量</span>
                </div>
                <div class="item">
                    <a-rate />
                </div>
            </div>
            <div class="judge-content">
                <span>服务建议</span>
                <a-textarea placeholder="感谢您的宝贵意见" show-count :maxlength="200"></a-textarea>
                <span>您的评价将帮助我们提供更好的服务!<br/>
                    投诉电话：18435262541</span>
                <a-button style="padding: 5px 15px;border-radius: 5px;
background: #54B674;color:#fff;margin-top: 20px;">提交</a-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref,onMounted } from 'vue'

const bindinValue1 = ref<any>(0)

onMounted(()=>{
    loadData()
})

const judegeEntity = ref<any>({

})

const loadData=()=>{
    const urlParams = new URLSearchParams(window.location.search)
    judegeEntity.value.name = urlParams.get("name")
    judegeEntity.value.operationName = urlParams.get("operationName")
    judegeEntity.value.age = urlParams.get("age")
    judegeEntity.value.phoneNumber = urlParams.get("phoneNumber")
    judegeEntity.value.idCard = urlParams.get("idCard")
    judegeEntity.value.planContentId =urlParams.get("planContentId")
    console.log(judegeEntity.value)
}

</script>
<style lang="scss" scoped>
.judge-content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 20px;
    margin-bottom: 100px;

    span {
        color: #929AAB;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        margin-top: 20px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.214px;
    }
}

.judge-bottom {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    padding: 10px 20px;

}

.phone-judge {
    width: 100%;
    height: 100%;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    gap: 10px;


    .title {
        width: 100%;
        height: 44px;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #fff;
        gap: 10px;
        justify-content: center;

        img {
            width: 100px;
            height: 100px;
        }

        span {
            color: #1A6FAC;
            text-align: center;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            margin-left: -40px;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.214px;
        }
    }



    .title-desc {
        width: 100%;
        height: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #393E46;
        text-align: center;
        background-color: #fff;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.214px;
    }




    .title-userinfo {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 20px 14px;
        background-color: #fff;
        display: flex;
        flex-direction: column;

        gap: 8px;

        span {
            color: #393E46;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.214px;
        }

        .user-idcard {
            color: #929AAB;
            text-align: left;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.214px;

            span {
                color: #929AAB;
            }
        }

        .user-phonenumber {
            color: #929AAB;
            text-align: left;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.214px;

            span {
                color: #929AAB;
            }
        }

        .user-name {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            gap: 5px;

            .user-age {
                display: flex;
                padding: 0px 2px;
                align-items: center;
                border-radius: 5px;
                height: 22px;
                background: #4D8FBE;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                span {
                    color: #fff;
                    margin-bottom: 8px;
                }
            }

            span {
                font-size: 16px;
                height: 16px;
            }
        }

    }

    .judge-container {

        .block-items {


            .bitem {
                display: flex;
                flex-direction: row;
                gap: 5px;

                .user-age {
                    display: flex;
                    padding: 0px 2px;
                    align-items: center;
                    border-radius: 5px;
                    height: 22px;
                    background: #4D8FBE;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    span {
                        color: #fff;
                        margin-bottom: 1px;
                    }
                }
            }
        }
    }
}
</style>