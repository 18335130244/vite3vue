import { useRouter } from "vue-router";
import {defineComponent, h } from 'vue'
export default defineComponent({
    name:'notFound',
    setup(){
        let route = useRouter();
        async function goBacks(){
            await route.go(-1)
        }
        return () => (<el-button onClick={()=>goBacks()}>返回上一页</el-button>)
    }
})
