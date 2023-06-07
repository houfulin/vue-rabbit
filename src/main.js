import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/common.scss'


//引用懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
import { componentPlugin } from '@/components'


const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedState)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

