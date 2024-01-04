const router=require('express').Router()
const {login,register,getChartData,musteri_getir,musteri_sil,musteri_guncelle}=require('../controllers/controller')
const Log=require("../middlewares/loggers/log")
router.post("/login",login)
/* const register_log={
    "user_id":"Can Aydın",
    "islem":"Register",
    "tarih":"2024-01-04"
} */
router.post("/register",Log.logger,register)
router.get("/grafik",getChartData)
router.get("/musteri_getir",musteri_getir)
router.delete("/musteri_sil/:eposta",musteri_sil)
router.put("/musteri_guncelle/:eposta",musteri_guncelle)
//post:veri gönderme get:veri alma put:veri güncelleme patch:veri güncelleme
//delete:veri silme
module.exports=router
