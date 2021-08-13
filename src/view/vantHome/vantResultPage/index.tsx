import {defineComponent, h, reactive, VNodeArrayChildren} from 'vue'
import '@/assets/scss/App.scss'

import {useRouter} from "vue-router";
export default defineComponent({
    name:'App',
    setup(){
        const router = useRouter();
        const checkboxComponent:VNodeArrayChildren = [];
        const checkboxComponentS:VNodeArrayChildren = [];
        const nextPage = () => {
            // TODO 提交接口
        }
        return ()=> (
            <div>
                <div style="height:100px;margin-top:10px;">
                    <div style="width:30%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin-left:2%;">
                       色块
                    </div>
                    <div style="width:30%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin-left:2%;">
                        色块
                    </div>
                    <div style="width:30%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin-left:2%;">
                        色块
                    </div>
                </div>
                <div style="height:100px;margin-top:10px;">
                    <div style="width:30%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin-left:2%;">
                       色块
                    </div>
                    <div style="width:30%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin-left:2%;">
                        色块
                    </div>
                    <div style="width:30%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin-left:2%;">
                        色块
                    </div>
                </div>
                <div style="height:100px;margin-top:10px;">
                    <div style="width:23%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin:0 1%;">
                       色块
                    </div>
                    <div style="width:23%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin:0 1%;">
                        色块
                    </div>
                    <div style="width:23%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin:0 1%;">
                        色块
                    </div>
                    <div style="width:23%;height:100%;float:left;overflow:hidden;overflow-y:scroll;background:blue;margin:0 1%;">
                        色块
                    </div>
                </div>
                <div onClick={nextPage}>提交</div>
            </div>
        )
    }
})
