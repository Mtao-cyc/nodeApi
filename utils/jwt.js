var jwt = require('jsonwebtoken');
let secret_key=`MIIBOwIBAAJBALx9nhxXvcamVNqudbUo/Hj5KCWa0fEVqL7dQzRgFoRLGC+qtjTf
XKTvXlSkC09W5v3TaVlLElsvetCBGjjOl2UCAwEAAQJAWfba8EwwmA/rkDSUmdLm
Lhc9wjUS3y6nS/HvkaALHzimfMMK6cUZOWiR6hKqUo5KtTb58LhUtho622vCml4G
QQIhAOWeal9D4ggKzyBu3YpwnEbvaXNE2cxEQ296ztZ/STu7AiEA0iWJFTt/d3Is
MjjCA+eQFw7K/9Z8fZ+jff9ZPLwA918CIQCvkWcIHGFxgMJKrDpcpin32wsoBdb6
Zp+hV6dbPswCDQIhAI404mAg5DAzbd8Kc5hq0iIYW5znS1VDe0KfUob7/ndnAiBB
2XU2FEWeuvnWuj9/7WcP3UbWJou4s4ynIXuRC9tXUA==`
module.exports={
    createJwt(options,time){
        return jwt.sign(options,secret_key,{expiresIn:time})
    },
    verifyJwt(token){
        try {
            return jwt.verify(token, secret_key);
        } catch (error) {
            return false
        }
    }
}