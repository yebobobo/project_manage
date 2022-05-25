import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    redirect: '/main/home',
    component: () => import('@/views/Main.vue')
  }
]

const router = new VueRouter({
  routes
})

// 解决 避免重复跳转当前页面问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
