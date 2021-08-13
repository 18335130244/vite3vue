import {defineComponent, h, reactive, VNodeArrayChildren} from 'vue'
import './home.scss'
import theme, {themeColorConfig} from "@/view/theme/theme";
import {useRouter} from "vue-router";
// 创建组件相关类型内容
export const stateHome = reactive<{
    buttonName:string
    msg2:string
}>({
    buttonName: 'home 文件内容',
    msg2:'hello',
})

export default defineComponent({
    name:'home',
    components:{theme},
    setup(){
        return {
            router:useRouter()
        }
    },
    render(){

        let divContent: VNodeArrayChildren = [];
        divContent.push(<div>{stateHome.buttonName}</div>);
        divContent.push(<div>{stateHome.msg2}</div>);
        divContent.push(<div onClick={
            async ()=>{await this.router.push('/main')}
        } >去主业</div>);
        divContent.push(<div onClick={
            async ()=>{await this.router.push('/vantHome')}
        } >去vantHome</div>);
        divContent.push(<theme content={stateHome.msg2} />);
        divContent.push(<el-input v-model={stateHome.msg2} />);
        divContent.push(<el-input v-model={themeColorConfig.theme} />);
        // button.push(<div></div>)
        return  h('div', divContent)
    }
})
