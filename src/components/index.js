
// 动态注册compontents内的所有组件，之后在全局无需注册即可使用


import Vue from 'vue'
const requireContext = require.context('components', true, /.*\.vue$/)

const components = requireContext.keys().map(key => {
  Vue.component(rename(key), requireContext(key))
})

function rename (key) {
  // 命名形式, 默认 m-文件名(小写)
  const name = 'm-'
  return name + key.match(/(\w*)\.vue/)[1].toLowerCase()
}

export default components
