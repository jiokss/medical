const Mock = require('mockjs')
Mock.mock(RegExp('/login' + ".*"), (req, res) => {
  return {
    data:'成功'

  }
})
