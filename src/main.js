// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

/* svg icon */
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon.vue'
// Vue.component('icon', Icon)

/* filters */
import * as filters from './filters'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* components */
import components from './components/'

/* mock */
import mock from './api/mock'

/* vuex */
import * as types from './store/types'
import store from './store'


FastClick.attach(document.body)

// 避免刷新清空vuex数据
if (window.sessionStorage.userInfo) {
  store.dispatch(types.setUserInfo, JSON.parse(window.sessionStorage.userInfo))
}

// 验证登录
router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if ( store.state.user.userInfo.name ){
      next()
    } else {
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
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
