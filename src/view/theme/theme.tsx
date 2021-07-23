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
import { ElMessage } from 'element-plus'
export const color = reactive<colorThem>({
    theme:'#409EFF',
})
let callTheme:string = ''
function getCSSString(url:string) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callTheme = xhr.responseText.replace(/@font-face{[^}]+}/, '')
                resolve(callTheme)
            }
        }
        xhr.open('GET', url)
        xhr.send()
    })
}
function getThemeCluster(theme:string):string[] {
    const tintColor = (color:string, tint:number):string => {
        let red:number = parseInt(color.slice(0, 2), 16)
        let green:number = parseInt(color.slice(2, 4), 16)
        let blue:number = parseInt(color.slice(4, 6), 16)

        if (tint === 0) { // when primary color is in its rgb space
            return [red, green, blue].join(',')
        } else {
            red += Math.round(tint * (255 - red))
            green += Math.round(tint * (255 - green))
            blue += Math.round(tint * (255 - blue))

            let reds = red.toString(16)
            let greens = green.toString(16)
            let blues = blue.toString(16)

            return `#${reds}${greens}${blues}`
        }
    }

    const shadeColor = (color:string, shade:number):string => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)

        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)

        let reds = red.toString(16)
        let greens = green.toString(16)
        let blues = blue.toString(16)

        return `#${reds}${greens}${blues}`
    }

    const clusters = [theme]
    for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
    }
    clusters.push(shadeColor(theme, 0.1))
    return clusters
}
function updateStyle(style:string, oldCluster:string[], newCluster:string[]):string {
    let newStyle = style
    oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
        console.log(newStyle.indexOf(color));
    })
    return newStyle
}
export default defineComponent({
    methods:{
        async changeTheme(val:string){
            console.log(val);
            let ORIGINAL_THEME = color.theme
            const oldVal = callTheme ? callTheme : ORIGINAL_THEME
            const themeCluster = getThemeCluster(val.replace('#', ''))
            const originalCluster = getThemeCluster(oldVal.replace('#', ''))
            console.log(themeCluster);
            console.log(originalCluster);
            const $message = ElMessage({
                message: '  Compiling the theme',
                customClass: 'theme-message',
                type: 'success',
                duration: 0,
                iconClass: 'el-icon-loading'
            })

            const getHandler = (variable:string, id:string) => {
                return () => {
                    const originalCluster = getThemeCluster(ORIGINAL_THEME.replace('#', ''))
                    const newStyle = updateStyle(callTheme, originalCluster, themeCluster)
                    console.log(newStyle);
                    let styleTag = document.getElementById(id)
                    if (!styleTag) {
                        styleTag = document.createElement('style')
                        styleTag.setAttribute('id', id)
                        document.head.appendChild(styleTag)
                    }
                    styleTag.innerText = newStyle
                }
            }

            if (!callTheme) {
                const url = `https://unpkg.com/element-plus@${version}/lib/theme-chalk/index.css`;
                await getCSSString(url)
            }

            const chalkHandler = getHandler('chalk', 'chalk-style')

            chalkHandler()

            const styles = [].slice.call(document.querySelectorAll('style'))
                .filter((style:{innerText:string}) => {
                    const text = style.innerText
                    return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
                })
            console.log(styles);
            styles.forEach((style:{innerText:string}) => {
                const { innerText } = style
                style.innerText = updateStyle(innerText, originalCluster, themeCluster)
            })

            this.$emit('change', val)

            $message.close()
        }
    },
    render(){
        let components:VNodeArrayChildren = [];
        components.push(<el-color-picker
            v-model={color.theme}
            predefine={['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]}
            popper-class="theme-picker-dropdown"
            onChange={this.changeTheme}
        />)
        components.push(<div class={style.body_div}>asdfsdf</div>)
        components.push(<el-button type="primary">测试内哦给你</el-button>)
       return h('div',components)
    }
})
