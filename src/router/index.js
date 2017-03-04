import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash/fp'

// 载入路由表配置
import { R } from './routes.toml'

Vue.use(VueRouter)

const routes = _.map(createRoute)(R)

/**
 * 生成路由
 * @param route 单个路由信息
 */
function createRoute(route) {

  // 路由可能含有的属性
  const data = ['name', 'path', 'alias', 'redirect', 'meta', 'query']
  const result = _.pick(data)(route)
  
  result.component = require('../views/' + route.router)
  result.children = _.map(createRoute)(route.children)

  return result
}

export default new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { x: 0, y: 0}
    }
  }
})
