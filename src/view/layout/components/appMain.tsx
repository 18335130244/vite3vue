/**
 *  主要路由展示区域
 * */
import {defineComponent} from "vue";

export default defineComponent({
    setup(){
        return ()=>(
            <router-view />
        )
    }
})
