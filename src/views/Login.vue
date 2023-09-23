<script lang="ts" setup>
import loginForm from '@/components/loginForm.vue';
</script>
<template>
    <div class="login-container">
        <!-- 图片开始 -->
        <div class="login-banner">
            <img src="@/assets/images/loginBanner.png" />
        </div>
        <div class="login-form">
            <loginForm />
        </div>
        <!-- 图片结束 -->
    </div>
</template>
<style lang="scss" scoped>
.login-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .login-banner{
        width: 60%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .login-form{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
}
</style>