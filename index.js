const express=require('express')
const fs=require('fs')
const morgan=require('morgan')
const path=require('path')
const { send } = require('process')
const app =express() 
const favicon=require("serve-favicon")
const router=require('./router/index')
app.use(morgan('dev'));//日志模块
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});
app.use(express.static(__dirname+'/public'))
app.use(favicon(__dirname+'/public/images/01.png'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(3000,(err)=>{
    if(err) return console.log('服务器连接失败');
    console.log('连接成功,点击访问: http://localhost:3000');
})