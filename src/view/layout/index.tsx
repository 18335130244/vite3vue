/**
 * 公共模板文件
 * */
import {
    defineComponent,
} from 'vue'
import Sidebar from "@/view/layout/components/Sidebar";
import layoutStyle from './index.module.scss';

export default defineComponent({
    setup: function () {
        return () => (
            <div class={layoutStyle.content}>
                <Sidebar class={layoutStyle.sidebar_box}/>
                <div class={layoutStyle.contentRight}>
                    <el-scrollbar height="100%">
                        <router-view />
                    </el-scrollbar>
                </div>
            </div>
        )
    }
})
