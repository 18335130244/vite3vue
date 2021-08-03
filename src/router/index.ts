/**
 * 基础路由文件
 * */

import {createRouter, createWebHashHistory, RouterOptions} from 'vue-router'

const router = createRouter(<RouterOptions>{
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('@/view/layout/index'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/view/home/index'),
                },
                {
                    path: '/main',
                    name: 'main',
                    component: () => import('@/view/main/index'),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/view/login/index')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('@/view/notFound/index')
        }
    ],
})

// 进入前拦截
router.beforeEach((to, form,next)=>{
    if(!localStorage.getItem('token')){
        if(to.name === 'login'){
            next();
        }else{
            next({
                path:"/login"
            })
        }
        return false
    }
    next();
})

export default router;
