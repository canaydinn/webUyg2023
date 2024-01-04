const dbConn=require("../../db/mysql_connect")
    const logger=async(req,res,next)=>{
        try{
            dbConn.query(`INSERT INTO logger(user_id,islem,tarih) VALUES ('Can Aydın','kayıt','2024-05-02')`,function(error,results){
                if(error){
                    console.log(error)
                    }
            })
            
        }catch(err){

        }
        next()
      
    }
module.exports={logger}