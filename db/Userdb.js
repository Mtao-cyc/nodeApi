const dbPool = require('../config/mysqlpool')
// 这个文件是对数据库进行操作
module.exports = {
  queryList(sql, arr, callback) {
    dbPool.connect(sql, arr, function (err, data) {
      callback(err, data)
    })
  },
  addUser(sql, arr, callback) {
    dbPool.connect(sql, arr, function (err, data) {
      callback(err, data)
    })
  },
  removeUser(sql, arr, callback) {
    dbPool.connect(sql, arr, function (err, data) {
      callback(err, data)
    })
  }
}