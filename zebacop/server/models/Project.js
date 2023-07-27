const mongoose = require('mongoose')

const ProjectSchema=new mongoose.Schema({
    projectName:{
        type:String
    },
    ProjectType:{
        type:String
    }, 
    ProjectTypeother:{
        type:String
    },
    introduction:{
        type:String
    },
    discription:{
        type:String
    },
    tokeynSymbol:{
        type:String
    },
    fund:{
        type:String
    },
    yesHowMuch:{
        type:String
    }, 
    publicOrAnonymous:{
        type:String
    }, 
    publicOrAnonymous:{
        type:String
    },
    currentStatus:{
        type:String
    },
    blockchain:{
        type:String
    },
    otherBlockchain:{
        type:String
    },
    projectImage:{
        type:String
    },
    status:{
        type:String,
    },
    finalStatus:{
        type:String,
    },
    telegram:{
        type:String,
    },
    twitter:{
        type:String,
    },
     email:{
        type:String,
    },

    created : {
        type:String,
    },
    startDate : {
        type:String,
    },
    endDate :{
        type:String,
    }
    ,
    contractid :{
        type : String
    }
},{timestamps:true }
)

module.exports= mongoose.model('Project',ProjectSchema)