import { createApp } from 'vue'
// 导入路由文件
import router from "@/router";

import Element from 'element-plus';
// 导入样式
import '@/assets/element-pluss/index.css';

import store from '@/store'
import App from './App'
import { Checkbox, CheckboxGroup } from 'vant';
createApp(App).use(router).use(Element).use(store).use(Checkbox).use(CheckboxGroup).mount('#app')
