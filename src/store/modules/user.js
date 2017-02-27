
import * as types from '../types'

const state = {
    userInfo: {}
}
  
const getters = {
    [types.getUserInfo] (state) {
      return state.userInfo
    }
}
  
const actions = {
    [types.setUserInfo] ({ commit }, user) {
      commit(types.setUserInfo, user)
    }
  }
 
const mutations = {
    [types.setUserInfo] (state, userInfo) {
      state.userInfo = userInfo
    }
}

export default {
  state,
  getters,
  actions,
  mutations
}
  