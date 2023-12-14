const router=require('express').Router()
const {login,register,getChartData}=require('../controllers/controller')
router.post("/login",login)
router.post("/register",register)
router.get("/grafik",getChartData)
//post:veri gönderme get:veri alma put:veri güncelleme patch:veri güncelleme
//delete:veri silme
module.exports=router
