const mysql= require('mysql')
module.exports = {
    dbConfigFun
}
function dbConfigFun(sql,arr,fun){
    let db = mysql.createConnection({
        host: 'localhost', //地址
        port: '3306', //端口号
        user: 'root',
        password: '123456',
        database: 'kecan', //数据库
    })
    db.connect()
    db.query(sql,arr,fun);
    db.end()
}
