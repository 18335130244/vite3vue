import { useRouter } from "vue-router";
import {defineComponent, h } from 'vue'
import './main.scss'
let useRoute = useRouter();
export default defineComponent({
    name:'notFound',
    setup(){
        function goBack(){
            useRoute.go(-1)
        }
        let goBackUpPage = h('div',<el-button onClick={goBack()}>返回上一页</el-button>)
        return goBackUpPage
    }
})
