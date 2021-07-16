import {defineComponent, Prop, watchEffect, h, reactive, Ref, RendererElement, RendererNode, VNode, VNodeArrayChildren, ref} from 'vue'
import appInfo, {AppInfoProps} from "./getAppInfo/appInfo";
import {request } from "./serve/request";

// 传入 请求接口后拿到 data 数据 model 类型
type DataModel = {
    appCode?: string
    appId?: string
    appName?: string
    appStatus?: string
    appType?: string
    browserIcon?: string
    browserTitle?: string
    createTime?: string
    createUserId?: string
    currentPage?: string
    domain?: string
    englishAppName?: string
    englishBrowserIcon?: string
    englishBrowserTitle?: string
    englishLogoUrl?: string
    id?: string
    ids?: string
    loginName?: string
    logoUrl?: string
    needCheckIn?: string
    parentId?: string
    remark?: string
    signName?: string
    splitKey?: string
    taiwanAppName?: string
    taiwanBrowserIcon?: string
    taiwanBrowserTitle?: string
    taiwanLogoUrl?: string
    updateTime?: string
    updateUserId?: string
}
// 创建组件相关类型内容
const state = reactive<{
    buttonName:string
    msg2:string
    appInfo:DataModel
}>({
    buttonName: '你好',
    msg2:'hello',
    appInfo:{},
})
export default defineComponent({
    created: function () {
        request<DataModel[]>({
            method: 'get',
            url: 'https://open-api.ambow.com/saas-client/application/v2/getAppIdByDomain?domain=admin.huanyujun.com'
        }).then((res) => {
            if(!res.data.code){
                state.appInfo = res.data.data[0];
            }
        })
    },
    name:'App',
    components:{
        appInfo,
    },
    render(){
        function show(){
            state.buttonName = '1111'
        }

        // 填充组件内容
        let button: VNodeArrayChildren = [];
        button.push(<el-button onClick={
            ()=>{
                show()
            }
        }>成功按钮</el-button>);
        // 具体操作方法
        let data = {
            onUpdateName($event:AppInfoProps){
                state.buttonName = $event.buttonName
            }
        }
        button.push(<appInfo buttonName={state.buttonName} {...data}>成功按钮222</appInfo>);
        button.push(<el-button >弹出提示</el-button>);
        console.log(1);
        let key: (keyof DataModel);
        for(key in state.appInfo){
            console.log(state.appInfo[key]);
            button.push(<div>{state.appInfo[key]}</div>)
        }
        // button.push(<div></div>)
        return  h('div', button)
    }
})
