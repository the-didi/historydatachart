
<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
</template>
<script lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import { defineComponent,ref } from 'vue';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

export default defineComponent({
  setup(){
    dayjs.locale("zh-cn")
    const locale = ref(zhCN)
    return {
      locale
    }
  }
})
</script>
