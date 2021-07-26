/**
 * 登录页面总成
 * */
import {
    defineComponent,
    h,
    reactive,
    VNodeArrayChildren,
} from 'vue'
import loginStyle from './login.module.scss'
import { useRouter} from "vue-router";
import request from "@/serve/request";

// 登录接口类型
interface LoginData {
    form:{
        userName:string,
        passWord:string
    }
}
// form 表单类型
let formData = reactive<LoginData>({
    form: {
        passWord: "",
        userName: ""
    }
})
import { ElMessage } from 'element-plus'
// 获取外部样式内容
export default defineComponent({
    setup(){
        let route = useRouter();
        console.log(route);

        async function goLogin(){
            let res = await request<any>({
                url:'/edurp-saas-client/saas/login/api/v3/login',
            });
            console.log(res);
            return false
            await route.push('/')
        }
        // 整体表单内容
        let form:VNodeArrayChildren = [];
        form.push(
            <el-form-item label={"登录名"}>
                <el-input type={'text'} v-model={formData.form.userName} />
            </el-form-item>,
            <el-form-item label={"密码"}>
                <el-input type={'password'} v-model={formData.form.passWord} />
            </el-form-item>,
            <el-form-item label-width={0} class={loginStyle.login_center}>
                <el-button onClick={goLogin} type={'primary'}>登录</el-button>
            </el-form-item>
            )
        return ()=>  (<el-form class={loginStyle.login_view} model={formData.form} label-width={'80px'}>{form}</el-form>)
    }
})
