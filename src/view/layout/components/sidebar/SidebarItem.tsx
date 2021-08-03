/**
 * 公共模板文件
 * */
import {
    defineComponent,
    PropType,
    defineProps,
} from 'vue'
import {directoryDataInterface} from "@/view/layout/components/sidebar/Sidebar.interface";

export default defineComponent({
    name: 'sidebarItem',
    props:{
        item: {
            type: Object as PropType<directoryDataInterface>,
            required: true
        },
    },
    render(){
        let item:directoryDataInterface = this.$props.item
        function slotsTitle(item:directoryDataInterface){
            return {
                title:()=>{
                    return (<div>
                        <i class={item.icon}/>
                        <span>{item.name}</span>
                    </div>)
                }
            }
        }
        if(!item.children){
            return (<el-menu-item index={item.id} v-slots={slotsTitle(item)}/>)
        }else{
            return (<el-submenu index={item.id} v-slots={slotsTitle(item)}>
                {
                    item.children.map((item1)=>{
                        return (<sidebarItem item={item1}/>)
                    })
                }
            </el-submenu>)
        }
    }
})
