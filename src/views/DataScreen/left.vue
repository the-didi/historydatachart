<template>
    <div class="left-container">
        <!-- 用户分析 -->
        <div class="datascreen-border">
            <UserAsync />
        </div>
        <!-- 数据服务 -->
        <div class="datascreen-border">
            <ServiceData />
        </div>
        <!-- 慢病管理 -->
        <div class="datascreen-border">
            <SlowDis />
        </div>
    </div>
</template>
<script lang="ts" setup>
import UserAsync from './Left/UserAsync.vue'
import SlowDis from './Left/SlowDis.vue'
import ServiceData from './Left/ServiceData.vue'

</script>
<style lang="scss" scoped>
.left-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    .datascreen-border {
        width: 100%;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        clip-path: polygon(10px 0, calc(100% - 10px) 0,

                100% 10px, 100% calc(100% - 10px),

                calc(100% - 10px) 100%, 10px 100%,

                0 calc(100% - 10px), 0 10px);

        background: linear-gradient(-45deg, #2b61b4 8px, #000125 0) bottom right,

            linear-gradient(45deg, #2b61b4 8px, #000125 0) bottom left,

            linear-gradient(135deg, #2b61b4 8px, #000125 0) top left,

            linear-gradient(-135deg, #2b61b4 8px, #000125 0) top right;

        background-size: 50% 51%;

        background-repeat: no-repeat;

        border: solid 1px #2b61b4;

    }
}
</style>