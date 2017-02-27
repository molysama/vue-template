
import axios from 'axios'
import * as url from './url'

export const getUserInfo = function () {
  return axios({
    method: 'get',
    url: url.getUserInfo
  })
}
