const {Router}=require('express')
const router=Router()
const userCtrl=require("../../controller/user/userCtrl")

router.get('/user/list',userCtrl.getUserList)
module.exports=router