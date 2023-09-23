<template>
    <div class="body-data-container">
        <!-- title -->
        <div class="title">
            身体数据
        </div>
        <!-- 身体数据 -->
        <div class="list">
            <div class="item">
                <div class="itemtitle">骨关节病</div>
                <div class="process"></div>
            </div>
            <div class="item">
                <div class="itemtitle">骨关节病</div>
                <div class="process"></div>
            </div>
            <div class="item">
                <div class="itemtitle">骨关节病</div>
                <div class="process"></div>
            </div>
            <div class="item">
                <div class="itemtitle">骨关节病</div>
                <div class="process"></div>
            </div>
            <div class="item">
                <div class="itemtitle">骨关节病</div>
                <div class="process"></div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.body-data-container{
    width: 98%;
    height: 98%;
    background-color: #000125;
    border: 1px solid #66d9e9;
    z-index: 9;
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    .title{
        color: #fff;
        font-size: 18px;
    }
    .list{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 3px;
        .item{
            width: 100%;
            display: flex;
            flex-direction: row;
            .itemtitle{
                width: 30%;
                text-align: center;
                color: #486696;
                padding-right: 3px;
            }
            .process{
                width: 70%;
                padding: 0 5px;
                background-color: #78f1f3;
            }
        }
    }
}
</style>