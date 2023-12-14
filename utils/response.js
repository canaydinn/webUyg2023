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
    
}
module.exports=Response