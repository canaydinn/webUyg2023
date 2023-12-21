const router=require('express').Router()
const {login,register,getChartData,musteri_getir,musteri_sil,musteri_guncelle}=require('../controllers/controller')
router.post("/login",login)
router.post("/register",register)
router.get("/grafik",getChartData)
router.get("/musteri_getir",musteri_getir)
router.delete("/musteri_sil/:eposta",musteri_sil)
router.put("/musteri_guncelle",musteri_guncelle)
//post:veri gönderme get:veri alma put:veri güncelleme patch:veri güncelleme
//delete:veri silme
module.exports=router
