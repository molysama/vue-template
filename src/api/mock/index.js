
import Mock from 'mockjs'

import { user } from './user'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

// addToMock(somethins)
addToMock(user)


export default Mock