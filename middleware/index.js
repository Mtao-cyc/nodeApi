// 中间件
let { verifyJwt }=require("../utils/jwt")
let {errobj} =require("../controller/returnObject")
module.exports = {
    examine(req, res, next){
        let token=req.headers["authorization"]
        if(token){
            let payload=verifyJwt(token)
            console.log(payload);
            if(payload){
                next()
            }else{
                errobj.code=-1,
                errobj.msg="token过期"
                res.status(401).send(errobj)
            }
        }else{
            next()
        }
        // 前端要拼接 `Bearer sdad1`
        // console.log(req.headers["authorization"]);
    },
}



