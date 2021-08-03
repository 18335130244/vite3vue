import { createApp } from 'vue'
// 导入路由文件
import router from "@/router";

import Element from 'element-plus';
// 导入样式
import '@/assets/element-pluss/index.css';

import store from '@/store'
import App from './App'

createApp(App).use(router).use(Element).use(store).mount('#app')
