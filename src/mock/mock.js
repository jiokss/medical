const Mock = require('mockjs')
Mock.mock(RegExp('/login' + ".*"), (req, res) => {
  return {
    data:'成功'

  }
})


Mock.mock(RegExp('/dataList' + ".*"), (req, res) => {
  return {
    data:"2,4,5"

  }
})
