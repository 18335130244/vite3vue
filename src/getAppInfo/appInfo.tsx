import {defineComponent, h, reactive, toRefs, VNodeArrayChildren} from 'vue'

export interface AppInfoProps {
    buttonName: string;
}

export default defineComponent({
    props: {
        buttonName: String
    },
    setup(props,ctx) {
        const {buttonName} = toRefs(props);
        const {emit} = ctx
        console.log(buttonName);

        function thisS() {
            console.log(111);
            emit('updateName',{buttonName:'测试哈哈哈哈'})
        }

        let button: VNodeArrayChildren = [];
        button.push(<el-button onClick={()=>{thisS()}}>{buttonName.value}</el-button>)
        // h 的函数下可以动态渲染函数
        return () => h('div', button)
    },
})
