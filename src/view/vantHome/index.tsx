import {defineComponent, h, reactive, VNodeArrayChildren} from 'vue'
import '@/assets/scss/App.scss'

export const checkbox = reactive<{list:any[],checked:string[]}>({
    checked: [],
    list:Array(60).join(',').split(',')
})

import {useRouter} from "vue-router";
export default defineComponent({
    name:'App',
    setup(){
        const router = useRouter();
        const checkboxComponent:VNodeArrayChildren = [];
        console.log(checkbox.list);
        checkbox.list.forEach((item, index)=>{
            checkboxComponent.push(
                <van-checkbox name={index}>{'复选框'+index}</van-checkbox>
            )
        })
        const nextPage = () => {
            if(checkbox.checked.length >= 10){
                router.push({path:'/vantPage'}).then()
            }
        }
        return ()=> (
            <div>
                <van-checkbox-group v-model={checkbox.checked} max={10}>
                    {checkboxComponent}
                </van-checkbox-group>
                <div onClick={nextPage}>下一个</div>
            </div>
        )
    }
})
