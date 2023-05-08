const Userdb = require('../../db/Userdb')
const { succeedobj,errobj } = require("../returnObject")
const {createJwt} =require("../../utils/jwt")
module.exports = {
    userLogin(req, res) {
        let name = req.body.name;
        let password = req.body.password;
        let userArr = [name,password]
        let time='24h'
        Userdb.queryList(`select * from user where name = ? and password = ?`,userArr, function (err, data) {
            console.log(data);
            // 数据库操作完成执行的方法
            if (!err) {
                succeedobj.code=200,
                succeedobj.msg="登录成功"
                succeedobj.data.list=data[0]
                succeedobj.data.list.endtime=time
                let token=createJwt({name:name,id:data[0].id},time)
                res.header("Authorization",token)
                res.send(succeedobj);
            }else{
                errobj.code=400,
                errobj.msg=err
                res.send(errobj);
            }
        })
    },
    getUserList(req, res) {
        Userdb.queryList(`select * from user`, "", function (err, data) {
            // 数据库操作完成执行的方法
            if (!err) {
                succeedobj.code=200,
                succeedobj.msg="获取成功"
                succeedobj.data.list=data
                res.send(succeedobj);
            }else{
                errobj.code=400,
                errobj.msg=err
                res.send(errobj);
            }


        })
    },
    userRegister(req, res) {
        let userName = req.body.userName;
        let age = req.body.age;
        let hobby = req.body.hobby;
        let userArr = [userName, age, hobby]
        console.log(req.body);
        res.send(JSON.stringify(userArr));
        // insert into `tp_admin`(`name`,`age`,`hobby`) value("陈铠",66,"js,node.js,vue");
        // insert into tp_admin (userName,age,hobby)value(?,?,?)
        Userdb.addUser(`select * from admin`, userArr, function (err, data) {
            // 数据库操作完成执行的方法
            console.log(data);
            console.log('UserdbUserdb');
            if (data) {
                res.send("添加成功");
            } else {
                console.log('添加失败');
            }

        })

    },
}