import {defineComponent, h, reactive, VNodeArrayChildren} from 'vue'
import '@/assets/scss/App.scss'
import {checkbox} from "@/view/vantHome";

import {useRouter} from "vue-router";
export default defineComponent({
    name:'App',
    render(){
        const router = useRouter();
        const checkboxComponent:VNodeArrayChildren = [];
        const checkboxComponentS:VNodeArrayChildren = [];
        console.log(checkbox.list);
        checkbox.checked.forEach((item, index)=>{
            console.log(item);
            checkboxComponentS.push(
                <van-checkbox name={item}>{'复选框'+item}</van-checkbox>
            )
        })
        checkbox.list.forEach((item, index)=>{
            checkboxComponent.push(
                <van-checkbox name={index}>{'复选框'+index}</van-checkbox>
            )
        })
        const nextPage = () => {
            router.push({path:'/vantResultPage'}).then()
        }
        return (
            <div>
                <div style="height:100px">
                    <div style="width:50%;height:100%;float:left;overflow:hidden;overflow-y:scroll;">
                        <van-checkbox-group v-model={checkbox.checked} max={10}>
                            {checkboxComponentS}
                        </van-checkbox-group>
                    </div>
                    <div style="width:50%;height:100%;float:left;overflow:hidden;overflow-y:scroll;">
                        <van-checkbox-group v-model={checkbox.checked} max={10}>
                            {checkboxComponent}
                        </van-checkbox-group>
                    </div>
                </div>
                <div onClick={nextPage}>提交</div>
            </div>
        )
    }
})
