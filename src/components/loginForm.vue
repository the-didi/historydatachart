<script lang="ts" setup>
import VertifyCodeComponent from './VertifyCodeComponent.vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { reactive,ref } from 'vue'
import {AppStore} from '@/store/app.store'
import router from '@/router';
import { message } from 'ant-design-vue';
const appStore = AppStore()
const loginForm = reactive({
    phone: "",
    password: "",
    code: "",
    id: ""
})

const rememberMe = ref(false)

const key = 'updatable'
const handlerLogin =async ()=>{
    message.loading({content: '用户正在登录',key})
    const loginEntity = {
        loginName: loginForm.phone,
        password: loginForm.password,
        code: loginForm.code,
        token: appStore.currentVertifyCodeId
    }
    // 目前接口有问题 先忽略TOKEN
    const res = await fetch("/api/user/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginEntity)
    }).then(res=>res.json())
    if(res.code != 200){
        message.error({content:res.msg,key,duration:2})
        return
    }
    // 登陆成功之后将UserInfo保存下来
    else if(res.data["token"]){
        window.localStorage.setItem("token",res.data.token)
        window.localStorage.setItem("userInfo",JSON.stringify(res.data.userInfo))
        router.push("/")
        message.success({content:'登录成功',key,duration:2})
    }
}
</script>
<template>
    <div class="loginform-container">
        <!-- LOGO -->
        <div class="loginform-logo">
            <img src="@/assets/images/loginTitle.png">
            <span>智慧医康养云平台</span>
        </div>
        <!-- 输入框 -->
        <div class="login-inputs">
            <a-input v-model:value="loginForm.phone" size="large" placeholder="用户名">
                <template #prefix>
                    <user-outlined />
                </template>
            </a-input>
            <a-input v-model:value="loginForm.password" size="large" type="password" placeholder="密码">
                <template #prefix>
                    <lock-outlined />
                </template>
            </a-input>
            <!-- 验证码 -->
            <div class="login-registerCode">
                <a-input v-model:value="loginForm.code" placeholder="请输入验证码" size="large"></a-input>
                <div class="vertify-code">
                    <VertifyCodeComponent />
                </div>
            </div>
            <!-- 是否记住我 -->
            <a-checkbox size="large" v-model:checked="rememberMe">记住我</a-checkbox>
        </div>

        <!-- 登陆按钮 -->
        <div class="login-button">
            <a-button type="primary" @click="handlerLogin" style="width:100%;height:50px" block>立即登陆</a-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.loginform-container {
    width: 330px;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    .loginform-logo {
        width: 100%;

        span {
            margin-left: 10px;
            font-size: 20px;
            color: rgba(0, 95, 163, 100);
        }
    }

    .login-inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .login-registerCode {
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 5px;

            .vertify-code {
                width: 50%;
                height: 100%;
            }
        }
    }


    .login-button {
        width: 100%;
    }
}
</style>