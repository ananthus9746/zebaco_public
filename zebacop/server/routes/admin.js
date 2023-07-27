const express = require('express')
const multer = require("multer");
const router = express.Router()
const {adminLogin,otpLogin, Project, UpdateProject, getprojects, ProjectDateUpdate, DeleteProject,
  getAllprojects, getEndedprojects, getOngoingprojects, editproject,
   getSingleProjects,projectEditUpdate,addPartner,RemovePartner,
   getPartners } = require('../controller/adminController')

const {verifyAdmin} =require('../Authentication/AdminAuth')


router.get('/', (req, res) => {
  res.json("admin")
})


var storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage });


router.post('/login',adminLogin)

router.post('/otpLogin',otpLogin)


router.put('/project',verifyAdmin,  UpdateProject)//updating project status and other details

router.put('/projectdateupdate',verifyAdmin,  ProjectDateUpdate)

router.get('/getprojects/:status',verifyAdmin, getprojects)

router.get('/getsingleprojects/:id',verifyAdmin,  getSingleProjects)

router.delete('/deleteproject/:id',verifyAdmin,  DeleteProject)

router.get('/editproject',verifyAdmin,  editproject)

router.put('/projectEditUpdate',verifyAdmin,  upload.single("image"), projectEditUpdate)

router.post('/addPartner',verifyAdmin,  upload.single("PartnerImage"), addPartner)

router.get('/getPartners',  getPartners)

router.delete('/RemovePartner/:id',verifyAdmin,  RemovePartner)



//USER ROUTER END POINTS
router.post('/project',  upload.single("image"),Project)//this request came from user. submiting project application
router.get('/getAllprojects',  getAllprojects)
router.get('/Ongoingprojects',  getOngoingprojects)
router.get('/Ended',  getEndedprojects)














module.exports = router