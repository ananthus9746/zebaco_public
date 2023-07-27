const mongoose = require('mongoose')

const PartnerSchema=new mongoose.Schema({
    PartnerName:{
        type:String
    },
    PartnerImage:{
        type:String
    },
    telegram:{
        type:String,
    },
    website:{
        type:String,
    },
    twitter:{
        type:String,
    },
     email:{
        type:String,
    },
},{timestamps:true }
)

module.exports= mongoose.model('Partner',PartnerSchema)