import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入自定义的弹窗插件
// import toast from 'components/common/toast'

Vue.config.productionTip = false
// 添加事件总成对象
Vue.prototype.$bus = new Vue()

// 安装自定义toast弹窗插件
// Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
