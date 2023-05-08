// 连接池
const mysql=require('mysql')
const poolCig = {
    host: 'localhost', //地址
    port: '3306', //端口号
    user: 'root',
    password: '123456',
    database: 'kecan', //数据库
    // connectionLimit: "指定连接池中最大的链接数，默认是10",
    // queueLimit: "指定允许挂起的最大连接数，如果挂起的连接数超过该数值，就会立刻抛出错误，默认属性值为0，代表不允许被挂起的最大连接数",
    // multipleStatements: "是否运行执行多条sql语句，默认值为false"
}
const dbPool={
     pool:{},
     create(){
        // 专门创建连接池
        this.pool=mysql.createPool(poolCig)
     },
     connect(sql,arr,fun){ 
        this.pool.getConnection((err,connection)=>{
          if (err) {
            console.log('和mysql数据库建立连接失败');
          }else{
            console.log('和mysql数据库连接成功');
            if(arr === ""){
              connection.query(sql,fun)
            }else{
              connection.query(sql,arr,fun)
            }
            connection.release()//该连接清空
            // this.pool.end();
          }
        })
     }
}
dbPool.create()
module.exports = dbPool