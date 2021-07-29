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
                    name: 'main111',
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
//
// router.beforeEach(async (to, form)=>{
//     return await canUserAccess(to)
// })

export default router;
