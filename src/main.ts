import { createApp } from 'vue'
import App from './App'

console.log(App);
import Element from 'element-plus';
// 导入 element-plus 样式内容
import 'element-plus/lib/theme-chalk/index.css';


createApp(App).use(Element).mount('#app')
