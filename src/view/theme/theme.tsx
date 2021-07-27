import {
    defineComponent,
    h,
    reactive,
    watch,
    VNodeArrayChildren,
} from 'vue'
import {version} from 'element-plus/package.json'
import style from "@/assets/scss/style.module.scss"
type colorThem = {
    theme:string
}
import { ElMessage, ElLoading } from 'element-plus'
export const color = reactive<colorThem>({
    theme:'#409eff',
})
let callTheme:string = '';
// 获取外部样式内容
function getCSSString(url:string):Promise<string> {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callTheme = getStyleTemplate(xhr.responseText.replace(/@font-face{[^}]+}/, ''))
                resolve(callTheme)
            }
        }
        xhr.open('GET', url)
        xhr.send()
    })
}
function getStyleTemplate (data:string):string {
    let colorMap = {
        '#3a8ee6': 'shade-1',
        '#409eff': 'primary',
        '#53a8ff': 'light-1',
        '#66b1ff': 'light-2',
        '#79bbff': 'light-3',
        '#8cc5ff': 'light-4',
        '#a0cfff': 'light-5',
        '#b3d8ff': 'light-6',
        '#c6e2ff': 'light-7',
        '#d9ecff': 'light-8',
        '#ecf5ff': 'light-9'
    }
    Object.keys(colorMap).forEach(key => {
        const value = (colorMap as any)[key]
        data = data.replace(new RegExp(key, 'ig'), value)
    })
    return data
}
import {generateColors} from "@/utils";

export default defineComponent({
    methods:{
        async changeTheme1(val:string,id = 'chalk-style'){
            let cssText:string = callTheme;
            let loading = ElLoading.service({text:'加载皮肤中'});
            if (!callTheme) {
                const url = `https://unpkg.com/element-plus@${version}/lib/theme-chalk/index.css`;
                cssText = await getCSSString(url);
            }
            let colors = {primary:color.theme,...generateColors(val)}
            Object.keys(colors).forEach(key => {
                cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + (colors as any)[key])
            })
            let styleTag = document.getElementById(id)
            if (!styleTag) {
                styleTag = document.createElement('style')
                styleTag.setAttribute('id', id)
                document.head.appendChild(styleTag)
            }
            styleTag.innerText = cssText
            loading.close();
        }
    },
    render(){
        let components:VNodeArrayChildren = [];
        components.push(<el-color-picker
            v-model={color.theme}
            predefine={['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]}
            popper-class="theme-picker-dropdown"
            onChange={this.changeTheme1}
        />)
        components.push(<div class={style.body_div}>asdfsdf</div>)
        components.push(<el-button type="primary">测试内哦给你</el-button>)
        components.push(<el-button type="success">测试内哦给11你</el-button>)
       return h('div',components)
    }
})
