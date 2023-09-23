<template>
    <div class="tab-router-container">
        <div class="dot"></div>
        <span :style="`margin-left:10px;font-size:14px`">{{ appStore.currentRouter }}</span>
    </div>
</template>
<script lang="ts" setup>
import {AppStore} from '@/store/app.store'

const appStore = AppStore()

</script>
<style lang="scss" scoped>
.tab-router-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    margin-left: 30px;
    border-left: 5px solid #00C0FF;
    .dot{
        width: 7px;
        height: 7px;
        background-color: lightgreen;
        border-radius: 50%;
        margin-left: 10px;
    }
}
</style>