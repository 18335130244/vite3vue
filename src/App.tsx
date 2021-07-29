import {defineComponent, h, VNodeArrayChildren} from 'vue'
import '@/assets/scss/App.scss'

export default defineComponent({
    name:'App',
    setup(){
        // 填充组件内容
        // appView.push(<router-link to="/">home</router-link>)
        // appView.push(<router-link to="/main">main</router-link>)
        // appView.push(<router-link to="/login">登录</router-link>)
        // appView.push(<router-link to="/111">other</router-link>)
        // button.push(<div></div>)
        return ()=> (<router-view />)
    }
})
