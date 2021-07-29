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
import qs from 'qs'
// 导入登录 接口类
import {LoginData, LoginReturnData} from "@/view/login/login.interface";
// form 表单类型
let formData = reactive<LoginData>({
    form: {
        password: "",
        account: "",
        reg:"886"
    }
})
function clearFormData() {
    formData.form.account = '';
    formData.form.password = '';
}
import { ElMessage } from 'element-plus'
import {AxiosResponse} from "axios";
// 获取外部样式内容
export default defineComponent({
    setup(){
        let route = useRouter();
        console.log(route);

        async function goLogin(){
            // 声明接受类型
            let res:AxiosResponse<LoginReturnData> = await request<LoginReturnData>({
                method:'post',
                url:'/edurp-saas-client/saas/login/api/v3/login',
                data:qs.stringify(formData.form)
            });
            if(!res.data.code){
                ElMessage.success('登录成功');
                // 清空登录名与密码
                clearFormData()
                // 存储 token 等信息
                localStorage.setItem('token',res.data.data);
                await route.push('/')
            }else{
                ElMessage.error(res.data.msg)
            }
        }
        // 整体表单内容
        let form:VNodeArrayChildren = [];
        form.push(
            <el-form-item label={"登录名"}>
                <el-input type={'text'} v-model={formData.form.account} />
            </el-form-item>,
            <el-form-item label={"密码"}>
                <el-input type={'password'} v-model={formData.form.password} showPassword/>
            </el-form-item>,
            <el-form-item label-width={0} class={loginStyle.login_center}>
                <el-button onClick={()=>goLogin()} type={'primary'}>登录</el-button>
            </el-form-item>
            )
        return ()=>  (<el-form class={loginStyle.login_view} model={formData.form} label-width={'80px'}>{form}</el-form>)
    }
})
