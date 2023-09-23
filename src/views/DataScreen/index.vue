<template>
    <div class="block">
        <div class="datascreen-container">
        <div class="block-layer">
            <div class="layer-header">
                <span>智慧医疗数据可视化大屏</span>
            </div>
            <div class="layer-body">
                <div class="body-item">
                    <Left />
                </div>
                <div class="body-item">
                    <BodyCenter />
                </div>
                <div class="body-item">
                    <Right />
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script lang="ts" setup>
import BodyCenter from './center.vue'
import Left from './left.vue'
import Right from './right.vue'
</script>
<style lang="scss" scoped>
.block{
    width: 100%;
    height: 100%;
    background-color: blue;
}
.datascreen-container {
    width: 100%;
    height: 100%;
    background: rgb(14, 42, 67);
    position: relative;
    background-image: url(https://51qingtian.oss-cn-hangzhou.aliyuncs.com/online/mPic/20230512/db7fb9ea2eb14584bcaf1016cd03ed6d.png);
    background-color: black;
    background-size: 100% 100%;
    .block-layer{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        z-index: 9;
        .layer-header{
            height: 95px;
            width: 100%;
            background-image: url(https://51qingtian.oss-cn-hangzhou.aliyuncs.com/online/mPic/20230731/cf126c751f3342d1ab1ebcf127754a5c.png);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: rgb(0, 234, 255);
            span{
                
            }
        }
        .layer-body{
            min-height: calc(100% - 95px);
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            .body-item{
                width: 100%;
                min-height: 100%;
            }
        }
    }
    img{
        position: absolute;
        width: 100%;
        height: 100%;
    }
}
</style>