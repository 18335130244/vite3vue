import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

const service = axios.create({
    baseURL: 'https://dev-open-api.ambow.com/',  // url = base url + request url
    timeout: 40 * 1000, // 默认用40s超时时间
    headers: { // 配置OAuth 2.0的认证头
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    // withCredentials: true // 是否携带 cookie 默认携带 cookie
})

// 请求前置拦截器
service.interceptors.request.use((config) => {
    // 添加自定义请求头
    config.headers.apparea = 'China'
    config.headers.appId = '090909'
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应前置拦截器
service.interceptors.response.use((res) => {
    // 返回头正常返回请求
        return Promise.resolve(res)
}, (error) => {
    let errMsg = ''
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                errMsg = '错误的请求'
                break
            case 500:
                errMsg = '服务器端出错'
                break
            case 401:
                errMsg = '权限校验错误'
                break
            default:
                errMsg = '网络错误'
        }
    }
    return Promise.reject(errMsg)
})

// 传递回归类型
type AxiosResponseData<T> = {
    code:number
    data:T
    message:string
};
// 发起请求
export function request<T>(config: AxiosRequestConfig) {
    return new Promise<AxiosResponse<AxiosResponseData<T>>>(async (resolve, reject) => {
        try {
            const result = await axios({
                ...config
            })
            resolve(result)
        } catch (err) {
            reject(err)
        }
    })
}

export default request
