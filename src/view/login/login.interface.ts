/**
 * 登录界面需要用到的 接口类信息
 * */

// 登录接口返回参数类型
export interface LoginReturnData {
    "code":number,
    "currentPage":null,
    "pageSize":null,
    "total":number,
    "msg":string,
    "data":string,
    "msgData":string
}

// 登录接口类型
export interface LoginData {
    form:{
        account:string,
        password:string,
        reg:string
    }
}
