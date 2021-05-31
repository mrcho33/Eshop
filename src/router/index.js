import Vue from 'vue'
import Router from 'vue-router'
// import VueRouter from 'vue-router'
import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Welcome from '@/components/welcome.vue'
import Users from '@/components/users.vue'
import Rights from '@/components/power/rights.vue'
import Roles from '@/components/power/roles.vue'

// token修改
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: '',
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { name: 'welcome', path: '/welcome', component: Welcome },
        { name: 'users', path: '/users', component: Users },
        { name: 'rights', path: '/rights', component: Rights },
        { name: 'roles', path: '/roles', component: Roles }
      ]
    }
  ]
})
// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
// to 将要访问的路径
// from 从哪个路径跳转而来
// next 是一个函数，表示放行
// next() 放行 next('/login')强制跳转
// if (to.path === '/login') return next()
// 获得token
// const tokenStr = window.sessionStorage.getItem('token')
// if (!tokenStr) return next('/login')
// next()
// })

export default router

/*
Vue.use(VueRouter)

const routes = [
  {
    name: '',
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
*/
