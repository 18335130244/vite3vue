/**
 *  layout 接口文件
 * */

export interface configurationInterface {
    // 展现模式
    mode: 'horizontal' | 'vertical';
    // 触发方式
    menuTrigger: 'hover' | 'click' | '';
    // 当前激活的 index
    defaultActive: string;
    // 激活菜单的颜色
    activeTextColor: string;
    // 菜单文字颜色
    textColor:string;
    // 是否保持一个菜单展开
    uniqueOpened: boolean;
    // 是否使用路由模式
    router: boolean;
    // 是否折叠 收起菜单
    collapse: boolean;
    // 菜单背景颜色
    backgroundColor:string;
    // 折叠动画
    collapseTransition: boolean;
    onOpen(key:string|number, keyPath:string):void
    onClose(key:string|number, keyPath:string):void
    onSelect(key:string|number, keyPath:string):void
}


export interface directoryDataInterface {
    children?:directoryDataInterface[]
    name?:string
    id?:string
    icon?:string
    state?:number
    type?:number
    url?:string
}

export interface resourceDataInterface {
    code:number
    msg:string
    data:directoryDataInterface[]
}
