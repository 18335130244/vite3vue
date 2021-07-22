/**
 * 基础路由文件
 * */

import {createRouter, createWebHashHistory, RouterOptions} from 'vue-router'

const router = createRouter(<RouterOptions>{
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/view/home/index'),
        },
        {
            path: '/main',
            name: 'main111',
            component: () => import('@/view/main/index'),
        },
        {
            path: '/*',
            name: 'notFound',
            component: () => import('@/view/notFound/index')
        }
    ],
})

export default router;
