<template>
    <div class="right-container">
        <!-- 用户分析 -->
        <div class="datascreen-border">
            <BodyInit />
        </div>
        <!-- 数据服务 -->
        <div class="datascreen-border">
            <OlderInit />
        </div>
        <!-- 慢病管理 -->
        <div class="datascreen-border">
            <CityData />
        </div>
    </div>
</template>
<script lang="ts" setup>
import BodyInit from './Right/BodyInit.vue';
import OlderInit from './Right/OlderInit.vue';
import CityData from './Right/CityData.vue'
</script>
<style lang="scss" scoped>
.right-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    .datascreen-border {
        width: 100%;
        min-height: 200px;
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
        position: relative;
        background-repeat: no-repeat;

        border: solid 1px #2b61b4;
    }
}
</style>