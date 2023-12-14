const dbConn=require("../db/mysql_connect")
const bcrypt=require("bcrypt")
const Response=require("../utils/response")
const login=async(req,res)=>{
    const kullanici_adi=req.body.kullanici_adi
    const sifre=req.body.sifre
    dbConn.query("SELECT * FROM kullanicilar WHERE kullanici_adi=?",
    [kullanici_adi],(error,results)=>{
        if(results.length>0){
            const comparePassword=bcrypt.compare(sifre,results[0].sifre)
            if(comparePassword){
               return new Response(results).basarili_giris(res)
            }else{
                return res.status(203).json({
                    success:false,
                    message:"Kullanıcı veya Şifre Uyumsuz"
                })
            }
        }else{
            return res.status(203).json({
                success:false,
                message:"Kullanıcı Girişi Başarısız"
            })
        }
    })
}

const register=async(req,res)=>{
   const kullanici_adi=req.body.kullanici_adi
   const sifre=await bcrypt.hash(req.body.sifre,10)
   const eposta=req.body.eposta
   const adi=req.body.adi
   const soyadi=req.body.soyadi
   const tel_no=req.body.tel_no
   const cinsiyet=req.body.cinsiyet
   const dogum_tarihi=req.body.dogum_tarihi
   dbConn.query("select * from kullanicilar where kullanici_adi=?",kullanici_adi,(err,result)=>{
    if(result.length>0){
        return new Response(result,"Böyle bir kayıt var").duplicated(res)
    }else{
        dbConn.query("INSERT INTO kullanicilar (kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi) VALUES (?,?,?,?,?,?,?,?)"
        ,[kullanici_adi,sifre,eposta,adi,soyadi,tel_no,cinsiyet,dogum_tarihi],(err,result)=>{
            if(!err){
                return new Response(result,"Succesful").created(res)
            }else{
                console.log(err)
            }
              

        })    
    }
   })
}

const  getChartData=(req,res)=>{
        const data={
            labels:["Ocak","Şubat","Mart","Nisan","Mayıs"],
            datasets:[{
                label:"Aylık Satışlar",
                data:[65,59,22,45,38],
                backgroundColor:'rgbd(75,192,192,0.2)',
                borderColor:'rgba(75,192,192,1)',
                borderWidth:1
            }]
        }
        res.json(data)
    }

module.exports={login,register,getChartData}
