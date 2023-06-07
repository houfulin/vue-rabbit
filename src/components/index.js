//通过插件方式把components中的所有组件进行全局注册
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        //app.component('组件名字',组件配置对象)
        app.component('XtuImageView', ImageView)
        app.component('XtuSku', Sku)
    }
}