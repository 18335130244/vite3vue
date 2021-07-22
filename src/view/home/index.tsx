import {defineComponent, h, reactive, VNodeArrayChildren} from 'vue'
import './home.scss'
// 创建组件相关类型内容
const state = reactive<{
    buttonName:string
    msg2:string
}>({
    buttonName: 'home 文件内容',
    msg2:'hello',
})

export default defineComponent({
    name:'home',
    render(){
        let divContent: VNodeArrayChildren = [];
        divContent.push(<div>{state.buttonName}</div>);
        divContent.push(<div>{state.msg2}</div>);
        // button.push(<div></div>)
        return  h('div', divContent)
    }
})
