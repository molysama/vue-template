// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* components */
import components from './components/'

/* mock */
import mock from './api/mock'

/* vuex */
import store from './store'


// 验证登录
router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if ( store.state.user.userInfo.name ){
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
    
  } else {
    next()
  }
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
