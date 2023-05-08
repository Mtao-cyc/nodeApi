const {Router}=require('express')
const router=Router()
const {middleware} =require("../../middleware")

router.get('/',middleware,(req,res)=>{
    res.render('')
})
module.exports=router