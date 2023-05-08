const {Router}=require('express')
const  router=Router() //实例化
const user =require("./web/user")
const userCtrl=require("../controller/user/userCtrl")
const {examine} =require("../middleware")

router.post('/login',userCtrl.userLogin)

// router.use(examine,user)
router.use(user)
router.use("*",function(req,res){
    res.status(404)
    // res.sendFile(__dirname+'/public/page/404.html')
    res.redirect("/page/404.html") 
})

module.exports = router;
