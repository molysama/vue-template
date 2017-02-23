import Vue from 'vue'
import VueRouter from 'vue-router'
import _ from 'lodash/object'

// 载入路由表配置
import { R } from './routes.toml'

Vue.use(VueRouter)

// const routes = R && R.map(route => createRoute(route))
const routes = R && R.map(createRoute)

// 编译路由
function createRoute(route) {

  const result = _.pick(route, ['name', 'path', 'alias', 'redirect', 'meta'])
  result.component = resolve => require(['../views/' + route.router], resolve)

  // 如果存在子路由
  if (route.child) {
    result.children = route.child.map(createRoute)
  }

  return result
}

const Router = new VueRouter({
  routes
})
export default Router
