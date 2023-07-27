const jwt=require('jsonwebtoken')
const bcrypt = require('bcrypt')





const verifyAdmin =(req,res,next)=>{
    console.log("enterd user headers..", req.headers)

    console.log("enterd user verify..", req.headers.accesstoken)
    const token = req.headers.accesstoken;
    try{
        if(!token){
            res.status(403).json("verifivation failed")
        }
        else{
            jwt.verify(token,process.env.JWT_ADMIN_SECRET_KEY,(err,user)=>{
                if(err){
                    console.log("verify err verifivation failed time out.",err)
                    res.status(403).json("verifivation failed time out")

                }else{
                    console.log("user",user)
                    next()
                }
            })
        }
    }
    catch(err){
        console.log(err)
   }


   

}


module.exports={verifyAdmin}