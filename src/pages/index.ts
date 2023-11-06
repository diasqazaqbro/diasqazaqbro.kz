import Routing from './index.vue'

export const routes = [
    { path: '/', component: () => import('./Main') },
    { path: '/projects', component: () => import('./Projects') },
    { path: '/about', component: () => import('./AboutMe') },
    { path: '/articles', component: () => import('./Articles') },
    { path: '/articles/neomorphism', component: () => import('./Neomorphism') },
]

export { Routing }
