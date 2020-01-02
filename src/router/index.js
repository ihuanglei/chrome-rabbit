import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.login && store.state.user.isLogin === false) {
    next({
      path: '/login',
      query: {
        referer: to.path
      }
    })
  }
  next()
})

export default router
