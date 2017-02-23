import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash/fp'

// 载入路由表配置
import { R } from './routes.toml'

Vue.use(VueRouter)

const routes = _.map(createRoute)(R)

/**
 * 生成路由
 */
function createRoute(route) {

  // 路由可能含有的属性
  const data = ['name', 'path', 'alias', 'redirect', 'meta']
  const result = _.pick(data)(route)
  
  result.component = require('../views/' + route.router)
  result.children = _.map(createRoute)(route.children)

  return result
}

export default new VueRouter({
  routes
})
