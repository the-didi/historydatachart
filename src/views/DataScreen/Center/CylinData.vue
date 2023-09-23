<template>
    <div class="cylin-data-container">
        <div class="cylin-item">
            <div class="title">56万</div>
            <div class="cylin-container">
                <div class="cylin-item-bg"></div>
                <div class="bottom-bg"></div>
                <div class="top-bg"></div>
            </div>
            <div class="desc">中活跃度</div>
        </div>
        <div class="cylin-item">
            <div class="title">56万</div>
            <div class="cylin-container">
                <div class="cylin-item-bg"></div>
                <div class="bottom-bg"></div>
                <div class="top-bg"></div>
            </div>
            <div class="desc">中活跃度</div>
        </div>
        <div class="cylin-item">
            <div class="title">56万</div>
            <div class="cylin-container">
                <div class="cylin-item-bg"></div>
                <div class="bottom-bg"></div>
                <div class="top-bg"></div>
            </div>
            <div class="desc">中活跃度</div>
        </div>
        <div class="cylin-item">
            <div class="title">56万</div>
            <div class="cylin-container">
                <div class="cylin-item-bg"></div>
                <div class="bottom-bg"></div>
                <div class="top-bg"></div>
            </div>
            <div class="desc">中活跃度</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cylin-data-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position: relative;

    .cylin-item {
        width: 130px;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;
        .title{
            width: 100%;
            text-align: center;
            top: 5px;
            font-size: 18px;
            color: #fff;
            position: absolute;
        }
        .desc{
            width: 100%;
            font-size: 18px;
            color: #fff;
            text-align: center;
            position: absolute;
            bottom: 30px;
        }
        .cylin-container {
            width: 130px;
            height: 200px;
            border: solid 1px black;
            background: #70dfdb;
            border-radius: 100px;
            transform: rotateX(70deg) scale(-1);
            z-index: 1;
            position: relative;
            .bottom-bg {
                width: 130px;
                height: 100px;
                border-radius: 100px;
                background: lightgreen;
                opacity: 0.5;
                bottom: 0;
                left: 0;
                position: absolute;
            }

            .top-bg {
                width: 130px;
                height: 100px;
                border-radius: 100px;
                background: lightgreen;
                opacity: 0.5;
                top: 5px;
                left: -0.5px;
                position: absolute;
            }

            .cylin-item-bg {
                display: inline-block;
                width: 130px;
                height: 200px;
                position: relative;
                z-index: -1;
                background: #70dfdb;
                opacity: 0.6;
                top: 50%;
                left: -0.5px;
                border-left: black 0.5px solid;
                border-right: black 0.5px solid;
                border-bottom: black 0.5px solid;
                border-bottom-left-radius: 100px;
                border-bottom-right-radius: 100px;
            }
        }

    }
}
</style>