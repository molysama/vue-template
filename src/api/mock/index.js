
import Mock from 'mockjs'

function addToMock(list) {
  list.forEach(n => {
    Mock.mock(n.path, n.data)
  })
}

// addToMock(somethins)


export default Mock