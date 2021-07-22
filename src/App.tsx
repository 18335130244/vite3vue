import {defineComponent, h, VNodeArrayChildren} from 'vue'
import '@/assets/scss/App.scss'

export default defineComponent({
    name:'App',
    render(){
        // 填充组件内容
        let appView: VNodeArrayChildren = [];
        appView.push(<router-link to="/">home</router-link>)
        appView.push(<router-link to="/main">main</router-link>)
        appView.push(<router-view />)
        // button.push(<div></div>)
        return  h('div', appView)
    }
})
