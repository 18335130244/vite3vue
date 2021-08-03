import {defineComponent, h} from 'vue'
// 将 css 导出备用
import sassStyles from './main.module.scss'
export default defineComponent({
    name:'main',
    setup(){
        return  h('div',[
            <div class={sassStyles.mainaaa} >
                <div>主题文件</div>
            </div>,
        ])
    }
})
