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
    methods:{
        logPrint(){
            console.log(222222);
        }
    },
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
        let _this = this;
        function show(){
            state.buttonName = '1111';
            _this.logPrint();
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
        function sendNotification(){
            // Notification.requestPermission( function(status) {
            //     console.log(status); // 仅当值为 "granted" 时显示通知
            //     if(status == 'granted'){
            //         location.href
            //         let n = new Notification(location.href,
            //             {
            //                 body: new Date().toDateString(),
            //             }); // 显示通知
            //         console.log(n);
            //     }
            // });
        }
        console.log(window.Notification.permission);
        if (window.Notification.permission == "granted") { // 判断是否有权限
            sendNotification();
        } else if (window.Notification.permission != "denied") {
            window.Notification.requestPermission(function (permission) { // 没有权限发起请求
                sendNotification();
            });
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
