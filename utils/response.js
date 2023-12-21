class Response{
    constructor(data=null,message=null,status){
        this.data=data
        this.message=message
        this.status=status
    }
    created(res){
        return res.status(201).json({
            success:true,
            data:null,
            message:this.message??"Kayıt Başarılı"
        })
    }
    duplicated(res){
        return res.status(200).json({
            success:true,
            data:null,
            message:this.message??"Kayıt Mevcut"
        })
    }
    basarili_giris(res){
        return res.status(200).json({
            success:true,
            message:"Kullanıcı Girişi Başarılı"
        })
    }
    error500(res){
        return res.status(500).json({
            success:false,
            message:"Sunucuya ulaşılamıyor"
        })
    }
    kayit_silme(res){
        return res.status(200).json({
            success:true,
            message:"Silme İşlemi Başarılı"
        })
    }   
    kayit_guncelle(res){
        return res.status(200).json({
            success:true,
            message:"Güncelleme İşlemi Başarılı"
        })
    }   
}
module.exports=Response