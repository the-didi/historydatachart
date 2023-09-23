<template>
    <div class="user-info-container">
        <div class="title">
            德阳市中西医结合医院医康养云平台
        </div>
        <div class="right">
            <a-button style="margin-right:10px;color:#005fA3" @click="handlerConnection" type="text">链接血压计</a-button>
            <a-button style="margin-right:10px;color:#005fA3" @click="handlerDataScreen" type="text">健康大屏</a-button>
            <a-button style="margin-right:10px;color:red" @click="handlerLogout" type="text">退出登陆</a-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue';
import { UserStore } from '@/store/user.store'
import { BusStore } from '@/store/bus.store'
import { onMounted } from 'vue'
import router from '@/router/index'
const userStore = UserStore()
const busStore = BusStore()


let timer = null
let getData = []


onMounted(async () => {

})

//uint8array转String
function Uint8ArrayToString(serialData: any) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = serialData.length;
    i = 0;
    while (i < len) {
        c = serialData[i++];
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = serialData[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = serialData[i++];
                char3 = serialData[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }
    return out;
}

const handlerLogout = () => {
    window.localStorage.setItem("token", "")
    window.localStorage.setItem("userInfo", "")
    router.push("/login")
}

const handlerDataScreen = () => {
    router.push("/datascreen")
}

const handlerConnection = async () => {
    const port = await navigator["serial"].requestPort()
    await port.open({
        baudRate: 38400, // 波特率
        dataBits: 8, // 每帧的数据位数(7或8)
        stopBits: 1, // 停止位数(1或2)
        parity: 'none', // 校验模式，可以是none，偶数，奇数
        flowControl: 'none', // 流控模式(none或hardware)。
        path: 'COM3'
    })
    let id = await port.getInfo().usbVendorId || '蓝牙设备'
    if (port) {
        busStore.sport = port
        busStore.reader = port.readable.getReader()
        busStore.writer = port.writable.getWriter()
        while (true) {
            const { value, done } = await busStore.reader!.read()
            if (done) {
                busStore.reader.releaseLock()
            }
            let arr = Array.from(value)
            getData.push(...arr)
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                const str = uint8ArrayToHex(new Uint8Array(getData))+""
                console.log(str.length)
                console.log(str.substring(8,10))
                if(str.length>14){
                    initData(str)
                }
                
                // 记录血压
                getData = [];
                timer = null;
            }, 50)
        }
    }
}

const initData = (str)=>{
    // 获取血压、心率、舒张压

    
    busStore.d1 = Number.parseInt(str.substring(8,10),16)
    busStore.d2 = Number.parseInt(str.substring(10,12),16)
    busStore.d3 = Number.parseInt(str.substring(12,14),16)
    console.log(busStore.d1)
}

function uint8ArrayToHex(uint8Array) {
  let hexString = '';
  for (let i = 0; i < uint8Array.length; i++) {
    const hex = uint8Array[i].toString(16).padStart(2, '0');
    hexString += hex;
  }
  return hexString;
}
</script>

<style lang="scss" scoped>
.user-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px;
    align-items: center;
    border-bottom: 1px solid lightgrey;

    .title {
        font-size: 18px;
        line-height: 22px;
        color: #1A6FAC;
    }
}
</style>