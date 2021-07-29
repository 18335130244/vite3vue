/**
 * 公共模板文件
 * */
import {
    defineComponent,
    reactive,
    watch
} from 'vue'
import {
    configurationInterface,
    directoryDataInterface,
    resourceDataInterface
} from "@/view/layout/components/Sidebar.interface";
import request from "@/serve/request";
import SidebarItem from "@/view/layout/components/SidebarItem";
// 皮肤内容
import { themeColorConfig } from "@/view/theme/theme";
// 动态数据区间
export let configData = reactive<configurationInterface>({
    collapse: false,
    collapseTransition: true,
    defaultActive: "white",
    activeTextColor:"red",
    textColor:"white",
    menuTrigger: "",
    mode: "vertical",
    backgroundColor:themeColorConfig.theme,
    router: false,
    uniqueOpened: true,
    onOpen(key:string|number, keyPath:string) {
        console.log(key);
        console.log(keyPath);
    },
    onClose(key:string|number, keyPath:string) {
        console.log(key);
        console.log(keyPath);
    },
    onSelect(key:string|number, keyPath:string) {
        console.log(key);
        console.log(keyPath);
    },
})

// 基础目录数据
interface directoryDataInterfaceProxy {
    resource:directoryDataInterface[]
    scrollStyle: string
}
let directoryData:directoryDataInterfaceProxy = reactive<directoryDataInterfaceProxy>({
    resource:[],
    scrollStyle:`background-color:${configData.backgroundColor};width:'100%';`
})
export default defineComponent({
    created() {
        // 监听 皮肤属性变化
        watch(()=> themeColorConfig.theme,(item)=>{
            configData.backgroundColor = themeColorConfig.theme;
            directoryData.scrollStyle = `background-color:${configData.backgroundColor};width:'100%';`
        })
        // 声明接受类型
        request<resourceDataInterface>({
            method: 'get',
            url: '/rbac/admin/v2/getResource',
        }).then(res=>{
            if (!res.data.code) {
                directoryData.resource = res.data.data;
            }
        })
    },
    render(){
        return (
            <el-scrollbar height="100%" wrapStyle={directoryData.scrollStyle} viewStyle={directoryData.scrollStyle}>
                <el-menu
                    {...configData}
                    style="border:none"
                >
                    {directoryData.resource.map((item)=>{
                        return <SidebarItem item={item} />
                    })}
                </el-menu>
            </el-scrollbar>
        )
    }
})
