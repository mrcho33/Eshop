import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式
import './style/index.less'
// 导入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// 配置请求路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006' // 请求的基础路径
// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios // 请求的基础路径

Vue.use(ElementUI)
// 可能需要 Vue.prototype.$message = Message
// 可能需要 Vue.prototype.$confirm = MessageBox.confirm

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
