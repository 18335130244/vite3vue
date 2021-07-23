import { createApp } from 'vue'
import App from './App'
// 导入路由文件
import router from "@/router";

import Element from 'element-plus';
// 导入样式
import './assets/scss/globale.scss'
// import 'element-plus/packages/theme-chalk/src/index.scss'
// import './assets/scss/style.scss'

createApp(App).use(router).use(Element).mount('#app')
