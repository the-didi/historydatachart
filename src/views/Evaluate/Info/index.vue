<template>
    <div class="evaluate-info-container">
        <!-- btn group -->
        <div class="evaluate-btns">
            <div @click="handlerRecordList" class="btn">评估记录</div>
            <div @click="handlerJump" class="btn">查看健康档案</div>
            <div @click="handlerDownload" class="btn">生成报告</div>
        </div>
        <!-- 头部信息栏目 -->
        <div class="evaluate-header-containter">
            <Header />
        </div>
        <!-- info-container -->
        <div class="evaluate-info-container">
            <InfoCollection />
        </div>
        <!-- all-container -->
        <div class="evaluate-info-container">
            <AllCollection />
        </div>
    </div>
    <div class="dialog" v-if="showDownloadDialog">
        <DownLoadDialog :record-id="evaluateStore.userId" @cancel="downloadCancel" @download="download" />
    </div>
    <div class="dialog" v-if="showEvaluateDialog">
        <EvaluateList :record-id="evaluateStore.userId" @cancel="handlerCancel" />
    </div>
</template>
<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import Header from './header.vue'
import InfoCollection from './infoCollection.vue'
import AllCollection from './allCollection.vue'
import router from '@/router/index'
import { UserStore } from '@/store/user.store'
import {EvaluateStore} from '@/store/evaluate.store'
import html2canvas from 'html2canvas'
import DownLoadDialog from '@/components/DownLoadDialog.vue'
import EvaluateList from '@/components/Dialog/EvaluateList.vue'
onMounted(() => {
    loadData()
})
const userStore = UserStore()
const evaluateStore = EvaluateStore()
const showEvaluateDialog = ref(false)

const handlerCancel = ()=>{
    showEvaluateDialog.value = false
}

function dataURItoBlob(dataURI:any) {
  // 分离出base64数据和文件类型
  var arr = dataURI.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
function saveBlobAsFile(blob:any, fileName:any) {
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}

const handlerRecordList = ()=>{
    showEvaluateDialog.value = true
}

const download =async ()=>{
    const downloadElement:any = document.getElementById("downloadElement")
    const canvas = await html2canvas(downloadElement)
    var blob = dataURItoBlob(canvas.toDataURL("image/png"));
    saveBlobAsFile(blob, new Date().getTime());
}

const showDownloadDialog = ref(false)

const handlerDownload = ()=>{
    showDownloadDialog.value = true
}

const downloadCancel = ()=>{
    showDownloadDialog.value = false
}

const handlerJump = () => {
    const token = window.localStorage.getItem("token")
    fetch(`/api/record/${evaluateStore.userId}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            token: token + ""
        }
    }).then(res => res.json())
        .then(data => {
            userStore.editorUserId = evaluateStore.userId
            userStore.creatingUsers.basicInfo = data.data.basicInformation
            userStore.creatingUsers.healthFormat = data.data.healthIndicators
            userStore.creatingUsers.bodyData = data.data.postureAssessment
            userStore.creatingUsers.oralHealth = data.data.dietHealth
            userStore.creatingUsers.sleepData = data.data.sleepHealth
            userStore.creatingUsers.medicalConsultation = data.data.medicalConsultation
            router.push("/main/info")
        })
}
const loadData = () => {


}

</script>
<style lang="scss" scoped>
.evaluate-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .evaluate-btns {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 21px;
        margin-bottom: 14px;

        .btn {
            box-sizing: border-box;
            padding: 3px;
            min-width: 58px;
            height: 25px;
            cursor: pointer;
            border: 1px solid #EEEEEE;
            background-color: #fff;
            color: #1A6FAC;
            text-align: center;
            font-size: 12px;
            line-height: 15px;
            font-style: normal;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }

    .evaluate-header-containter {
        width: 100%;
        height: 164px;
        border-radius: 15px;
        background-color: #fff;
    }

    .evaluate-info-container {
        margin-top: 25px;
        width: 100%;
        height: auto;
        background-color: #fff;
        border-radius: 15px;
    }
}
</style>