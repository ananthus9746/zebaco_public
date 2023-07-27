const { ProjectHelper,UpdateProjectHelper,getProjectHelper,ProjectDateUpdateHelper,
    DeleteHelper,getAllprojectsHelper,getOngoingprojectsHelper,getEndedprojectsHelper,
    editprojectProjectHelper,getSingleProjectHelper,projectEditUpdateHelper,
    addPartnerHelper,getPartnersHelper,RemovePartnersHelper} = require("../helpers/adminHelper")

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const admin =require('../models/Admin')

//user name:"ananthu"
//password:"123"


const adminLogin=async(req,res)=>{
    console.log("login credentials...",req.body)
    try{
      let userName=await admin.findOne({username:req.body.username})
            if(userName){
                console.log("finded..", userName)
                    const checkPassword=await bcrypt.compare(req.body.password,userName.password)
                    if (checkPassword) {

                        const id = userName._id
                        const AdminToken = jwt.sign({ id },
                            process.env.JWT_ADMIN_SECRET_KEY, {
                            expiresIn: "30d",
                        })
           
                console.log("ress jwt..",userName,AdminToken)
                        res.status(200).json({ AdminToken: AdminToken, user: userName })
                    } else {
                        
                        console.log("wrong password")
                        res.status(401). json({ error: "wrong password" })
                    }
            }
            else{
                console.log("wrong user name")
                res.status(401). json({ error: "wrong user name" })
            }
    }
    catch(err){
        console.log("Err",err)
    }
}

const otpLogin=async(req,res)=>{
    console.log("login credentials...",req.body.Mynumber)

    try{
        let CheckNumber=await admin.findOne({phone :req.body.Mynumber})

            if (CheckNumber) {
                const id = CheckNumber._id
                const AdminToken = jwt.sign({ id },
                process.env.JWT_ADMIN_SECRET_KEY, {
                expiresIn: "1d",
                 })
             
                console.log("ress data jwt token and phone..",CheckNumber,AdminToken,CheckNumber.phone)
                res.status(200).json({ AdminToken: AdminToken, number:CheckNumber.phone})
             }
            else{
                console.log("no number...",CheckNumber)
                res.status(401). json({ error: "Entered wrong number please enter registred number" })
            }
      }
      catch(err){
          console.log("Err",err)
      }
}









const Project = async (req, res) => {
    // console.log( req.body); 

   console.log("filee..",req.file)

    const file = req.file;

     if(req.file===undefined){
        console.log("no image..")
        res.json({ message: "ImageRequired",})
    }
    else{

        let projectData={
            Img:file.filename,
            data: req.body
         }
    
         
    
        try {
    
            ProjectHelper(projectData).then((response) => {
                res.status(200).json({ message: "data inserted", response })
                console.log("data inserted")
            }).catch((err) => {
                res.status(500).json({ mess: "server err...", err });
            })
        } catch (err) {
            console.log(err)
        }
    }


}






const UpdateProject = async (req, res) => {
    console.log("upadte project..", req.body)
    
    
    try {
        UpdateProjectHelper(req.body).then((updatedProject) => {
            console.log("upadted ctrl date for response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}


const getprojects =async(req,res)=>{
    console.log("get projects..",req.params.status)

    getProjectHelper(req.params.status).then((projects)=>{
        res.status(200).json({ message: "projects..", projects })

    })
}

// ----------------DATE AND CONTRACT ID UPDATE------------------
const ProjectDateUpdate = async (req, res) => {
    console.log("upadte project..", req.body)
    try {
        ProjectDateUpdateHelper(req.body).then((updatedProject) => {
            console.log("upadted ctrl date for response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}
// ----------------------------------------------------------------


// ---------------------------DELETE---------------------------------
const DeleteProject=async (req,res)=>{
    console.log("delete..id",req.params.id)
    try{
        DeleteHelper(req.params.id).then((deleted) => {
            console.log("upadted ctrl date for response",deleted)
            
            res.status(200).json({deleted })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    }catch(err){
        console.log(err)
    }
}
// -----------------------GET ALL PROEJECTS USER-----------------------//

const getAllprojects=async (req,res)=>{
    console.log("allproject ctrl user..",req.body)
    const PAGE_SIZE=6;
    const page=parseInt(req.query.page) || "0";
    console.log("page..",page)

    try{

        getAllprojectsHelper(PAGE_SIZE,page).then((projects,total)=>{
            res.status(200).json({ message: "projects..", projects,total })
    
        }) 

    }catch(err){
        console.log("err",err)
    }
}

































const getOngoingprojects=async (req,res)=>{
    console.log("Ongoing ctrl user..",req.body)

    try{

        
        getOngoingprojectsHelper(req.params.status).then((projects)=>{
            res.status(200).json({ message: "ongoing project..", projects })
    
        }) 


    }catch(err){
        console.log("err",err)
    }
}

const getEndedprojects=async (req,res)=>{
    console.log("Ended ctrl user..",req.body)

    try{



        getEndedprojectsHelper(req.params.status).then((projects)=>{
            res.status(200).json({ message: "Ende projects..", projects })
    
        }) 


    }catch(err){
        console.log("err",err)
    }
}



const editproject =async(req,res)=>{
    console.log("get projects..",req.body)

    editprojectProjectHelper().then((projects)=>{
        res.status(200).json({ message: "edit projects..", projects })

    })
}





const getSingleProjects= (req,res)=>{
    console.log("single id ctrl user..",req.params.id)

    try{

        getSingleProjectHelper(req.params.id).then((projects)=>{
            res.status(200).json({ message: " single projects..", projects })
    
        }) 

    }catch(err){
        console.log("err",err)
    }
}



const projectEditUpdate = async (req, res) => {
    console.log("upadte project ctr..", req.body)

    const file = req.file;
    console.log( req.body); 
    console.log("file img..",file);



    try {
        projectEditUpdateHelper(req.body,file).then((updatedProject) => {
            console.log("edit upadted ctrl date for response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}

const addPartner=async (req,res)=>{
    console.log("add partner ctrl ...",req.body)
    const partnerImage = req.file.filename;
    const PartnerName= req.body.PartnerName
    console.log( "partner name..",PartnerName); 
    console.log("file partner ctr img..",partnerImage)
    try {
        addPartnerHelper(PartnerName,partnerImage).then((updatedProject) => {
            console.log("add patner hrlp response",updatedProject)
            res.status(200).json({updatedProject })
        }).catch((err) => {
            // res.status(500).json({ mess: "server err...", err });
        })
    } catch (err) {
        console.log(err)
    }
}


const getPartners=async (req,res)=>{


    try{

        getPartnersHelper().then((getedPartners)=>{
            res.status(200).json({ message: " getedPartners..", getedPartners })
    
        }) 

    }catch(err){
        console.log("err",err)
    }
    
}



const RemovePartner=async (req,res)=>{
    console.log("RemovePartner id...ctrl..",req.params.id)
    const PartnerId=req.params.id

    

    try{

        RemovePartnersHelper(PartnerId).then((removedPartner)=>{
            console.log("RemovePartner ctr response then..",req.params.id)

            res.status(200).json({ message: " removedPartner..ctr..", removedPartner })
    
        }) 

    }catch(err){
        console.log("err",err)
    }
}





module.exports = { adminLogin,otpLogin,Project,UpdateProject,getprojects,ProjectDateUpdate,DeleteProject,
    getAllprojects,getOngoingprojects,getEndedprojects,editproject ,getSingleProjects,projectEditUpdate,addPartner,getPartners,RemovePartner}






















// const { ProjectHelper,UpdateProjectHelper,getProjectHelper,ProjectDateUpdateHelper } = require("../helpers/adminHelper")


// const multer = require("multer");



// var storage = multer.diskStorage({

//     destination: "./public/images",
//     filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' +file.originalname )
//     }
//     })
// var upload = multer({ storage: storage }).array('file');


// const Project = async (req, res) => {

    
//     console.log("admin croller", req.body)
//     console.log("image..", req.file)

    
// }






// const UpdateProject = async (req, res) => {
//     console.log("upadte project..", req.body)

//     upload(req, res, function (err) {
        
//         return res.status(200).send(req.file)
      
//       })
    
    
//     // try {
//     //     UpdateProjectHelper(req.body).then((updatedProject) => {
//     //         console.log("upadted ctrl date for response",updatedProject)
//     //         res.status(200).json({updatedProject })
//     //     }).catch((err) => {
//     //         // res.status(500).json({ mess: "server err...", err });
//     //     })
//     // } catch (err) {
//     //     console.log(err)
//     // }
// }


// const getprojects =async(req,res)=>{
//     console.log("get projects..",req.params.status)

//     getProjectHelper(req.params.status).then((projects)=>{
//         res.status(200).json({ message: "projects..", projects })

//     })
// }

// const ProjectDateUpdate = async (req, res) => {
//     console.log("upadte project..", req.body)
    
    
//     try {
//         ProjectDateUpdateHelper(req.body).then((updatedProject) => {
//             console.log("upadted ctrl date for response",updatedProject)
//             res.status(200).json({updatedProject })
//         }).catch((err) => {
//             // res.status(500).json({ mess: "server err...", err });
//         })
//     } catch (err) {
//         console.log(err)
//     }
// }

// module.exports = { Project,UpdateProject,getprojects,ProjectDateUpdate }