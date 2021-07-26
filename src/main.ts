import { createApp } from 'vue'
import App from './App'
// 导入路由文件
import router from "@/router";

import Element from 'element-plus';
// 导入样式
// import './assets/scss/global.scss'
import 'element-plus/lib/theme-chalk/index.css';
// import './assets/scss/style.scss'

import store from '@/store'

createApp(App).use(router).use(Element).use(store).mount('#app')
