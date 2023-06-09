//封装倒计时逻辑
import { ref } from 'vue'
import dayjs from 'dayjs'
export const useCountDown = () => {
    //1.响应式数据
    let timer = null
    const Time = ref(0)
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))

    //2.开启定时器的函数
    const start = (currentTime) => {
        //开始倒计时的逻辑
        Time.value = currentTime
        timer = setInterval(() => {
            Time.value--

        }, 1000);
    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}