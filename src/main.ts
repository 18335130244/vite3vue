import { createApp } from 'vue'
import App from './App'
// 导入路由文件
import router from "@/router";

import Element from 'element-plus';
// 导入 element-plus 样式内容
import 'element-plus/lib/theme-chalk/index.css';
// import './assets/scss/style.scss'


createApp(App).use(router).use(Element).mount('#app')
