<script lang="ts" setup>
import Sidebar from '@/components/Sidebar.vue';
import UserInfo from '@/components/UserInfo.vue';
import TabRouter from '@/components/TabRouter.vue'
</script>
<template>
    <div class="main-container">
        <!-- 侧边栏开始 -->
        <div class="main-sidebar">
            <Sidebar />
        </div>
        <!-- 侧边栏结束 -->
        <!-- 主干区域开始 -->
        <div class="main-body">
            <!-- 头部栏 -->
            <div class="main-header">
                <!-- 头部用户信息 -->
                <div class="user-info">
                    <UserInfo />
                </div>
            </div>
            <!-- 头部栏结束 -->
            <div class="main-body-container">
                <!-- 此处添加面包写 -->
                <router-view v-slot="{ Component,route }">
                    <transition name="route" mode="out-in">
                        <div :key="route.fullPath">
                            <component :is="Component"></component>
                        </div>
                    </transition>
                </router-view>
            </div>
        </div>
        <!-- 主干区域结束 -->
    </div>
</template>
<style lang="scss" scoped>
.main-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    .main-sidebar {
        width: 200px;
        height: 100%;
    }

    .main-body {
        width: calc(100% - 200px);
        height: 100%;
        display: flex;
        flex-direction: column;

        .main-header {
            width: 100%;
            height: 75px;
            background-color: #fff;

            .user-info {
                width: 100%;
                height: 100%;
            }
        }

        .main-body-container {
            width: 100%;
            height: calc(100% - 75px);
            background-color: #F7F7F7;
            box-sizing: border-box;
            padding-left: 34px;
            padding-right: 34px;
            padding-bottom: 25px;
            padding-top: 25px;
            overflow: scroll;

            &::-webkit-scrollbar {
                display: none;
            }
        }

    }
}
.route-enter-from{
    opacity: 0;
    transform: translateX(100px);
}
.route-enter-active{
    transition: all 0.3s ease-out;
}
.route-leave-to {
    opacity: 0;
    transform: translate(-100px);
}
.route-leave-active{
    transition: all 0.3s ease-in;
}
</style>