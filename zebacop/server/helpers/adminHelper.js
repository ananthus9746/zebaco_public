const Project = require('../models/Project')
const Partner = require('../models/Partner')
const fs = require('fs');



// let projectData={
//     Img:file.filename,
//     data: req.body
//  }

// projectName: formData.projectName,
// ProjectType: formData.ProjectType,
// introduction: formData.introduction,
// discription: formData.discription,
// tokeynSymbol: formData.tokeynSymbol,
// // fund: formData.fund,
// // currentStatus: formData.currentStatus,
// blockchain: formData.blockchain,
// otherBlockchain: formData.otherBlockchain,
// projectImage: Img,
// status: "pending",
// telegram: formData.telegram,
// twitter: formData.twitter,
// email: formData.email,


const ProjectHelper = async (projectData) => {

    console.log("data..", projectData.data)
    let Img = projectData.Img
    let formData = projectData.data;

    try {
        return new Promise(async (resolve, reject) => {
            console.log("promis adminhelper...", formData)
            console.log("promise",)

            const project = new Project({
                projectName: formData.projectName,
                ProjectType: formData.ProjectType,
                introduction: formData.introduction,
                discription: formData.discription,
                tokeynSymbol: formData.tokeynSymbol,
                // fund: formData.fund,
                // currentStatus: formData.currentStatus,
                blockchain: formData.blockchain,
                otherBlockchain: formData.otherBlockchain,
                projectImage: Img,
                status: "pending",
                telegram: formData.telegram,
                twitter: formData.twitter,
                email: formData.email,


            })

            await project.save().then((project) => {
                console.log("saved project..", project)
                resolve({ message: "Project saved sucessfully.." })
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const UpdateProjectHelper = async (projectUpdate) => {
    console.log("update adminhelper project id...", projectUpdate.projectId)
    // console.log("start date 1..", projectUpdate.date[0])
    // console.log("end date 2..", projectUpdate.date[1])
    // console.log("contract id..", projectUpdate.contactId)
    // startDate:projectUpdate.date[0],
    // endDate:projectUpdate.date[1],
    // contractid: projectUpdate.contactId



    try {
        return new Promise(async (resolve, reject) => {
            await Project.findByIdAndUpdate({ _id: projectUpdate.projectId },
                {
                    $set: {
                        status: projectUpdate.status,
                    }
                }, { new: true }).then((updatedProject) => {
                    console.log("updated status project..", updatedProject)
                    resolve(updatedProject)
                })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const getProjectHelper = async (status) => {
    console.log("getproject helper")
    try {
        return new Promise(async (resolve, reject) => {

            await Project.find({ status: status }).then((projects) => {
                console.log("geted projects..", projects)
                resolve(projects)
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}


const ProjectDateUpdateHelper = async (projectUpdate) => {
    console.log("update adminhelper project id...", projectUpdate.projectId)
    console.log("start date 1..", projectUpdate.date[0])
    console.log("end date 2..", projectUpdate.date[1])
    console.log("contract id..", projectUpdate.contactId)

    try {
        return new Promise(async (resolve, reject) => {

            await Project.findByIdAndUpdate({ _id: projectUpdate.projectId },
                {
                    $set: {
                        // finalStatus: projectUpdate.finalStatus,
                        status: projectUpdate.finalStatus,
                        startDate: projectUpdate.date[0],
                        endDate: projectUpdate.date[1],
                        contractid: projectUpdate.contactId
                    }

                }, { new: true }).then((updatedProject) => {

                    console.log("updated status project..", updatedProject)
                    resolve(updatedProject)
                })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const DeleteHelper = async (projectId) => {
    console.log("doc id for delete..", projectId)
    try {

        return new Promise(async (resolve, reject) => {

            await Project.findOneAndDelete({ _id: projectId }, { new: true }).then((deleted) => {
                console.log("deleted doc..", deleted)
                resolve(deleted)
            })
        })

    }
    catch (err) {
        console.log(err)
    }
}




const getAllprojectsHelper = async ( PAGE_SIZE,page) => {
    console.log(" PAGE_SIZE..",  PAGE_SIZE)//default 3 items for displaying how much item in page
    console.log(" page we passed in..", page)//default 0 th page (page number)

    try {


        return new Promise(async (resolve, reject) => {
            const total=await  Project.count({ status: ["started", "ended"] })
            await Project.find({ status: ["started", "ended"] })
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE*page)
            .then((projects) => {
                // console.log("geted started and ended projects..", projects)
                console.log("total..",total)
                let totalPages=Math.ceil(total/PAGE_SIZE)
                let project={
                    total:totalPages,
                    projects
                }
                resolve(project)
            })
        })


    } catch (err) {
        console.log("err", er)
    }
}













const getOngoingprojectsHelper = async () => {
    console.log("STARTED.. hlp")
    try {


        return new Promise(async (resolve, reject) => {
            await Project.find({ status: ["started"] }).then((projects) => {
                console.log("geted started projects..", projects)
                resolve(projects)
            })
        })


    } catch (err) {
        console.log("err", er)
    }
}

const getEndedprojectsHelper = async () => {
    console.log("ended.. hlp")
    try {


        return new Promise(async (resolve, reject) => {
            await Project.find({ status: ["ended"] }).then((projects) => {
                console.log("geted ended projects..", projects)
                resolve(projects)
            })
        })


    } catch (err) {
        console.log("err", er)
    }
}


const editprojectProjectHelper = async () => {
    console.log("editprojectProjectHelper project.. hlp",)
    try {

        return new Promise(async (resolve, reject) => {
            await Project.find({ status: ["approved", "cued", "started"] }).then((projects) => {
                console.log("geted started and ended projects..", projects)
                resolve(projects)
            })
        })

    } catch (err) {
        console.log("err", er)
    }
}



const getSingleProjectHelper = async (id) => {
    console.log("ended.. hlp")
    try {


        return new Promise(async (resolve, reject) => {
            await Project.findOne({ _id: id }).then((projects) => {
                console.log("hel one projects..", projects)
                resolve(projects)
            })
        })


    } catch (err) {
        console.log("err", er)
    }
}



const projectEditUpdateHelper = async (data, file) => {
    var oldImage
    // console.log("Edit product update helper...", data)
    // console.log("Edit product update helper file...", file)

    if (file) {

        await Project.findOne({ _id: data.proId }).then((res) => {
            console.log("ress for image old..",)
            oldImage = res.projectImage
        })





        proObj = {
            projectName: data.projectName,
            ProjectType: data.projectAbout,
            // ProjectTypeother:data.projectAbout,
            introduction: data.introduction,
            discription: data.discription,
            tokeynSymbol: data.tokenOrSymbol,
            blockchain: data.blockchain,
            // otherBlockchain:data.projectAbout,
            projectImage: file.filename,

            telegramdata: data.telegram,
            twitter: data.twitter,
            email: data.email,

        }



    } else {
        console.log("else data..", data)
        proObj = {
            projectName: data.projectName,
            ProjectType: data.projectAbout,
            // ProjectTypeother:data.projectAbout,
            introduction: data.introduction,
            discription: data.discription,
            tokeynSymbol: data.tokenOrSymbol,
            blockchain: data.blockchain,
            // otherBlockchain:data.projectAbout,

            telegram: data.telegram,
            twitter: data.twitter,
            email: data.email,

        }

    }
    console.log("old global.", oldImage)



    try {
        return new Promise(async (resolve, reject) => {

            await Project.findByIdAndUpdate({ _id: data.proId }, proObj, { new: true })
                .then((updatedProject) => {

                    console.log("old proise..", oldImage)
                    // destination: "./public/images",


                    fs.unlink('./public/images/' + oldImage, (err) => {
                        if (err) {
                            // handle error
                            //   return res.status(500).send(err);
                            console.log("fs erorr..", err)
                        }

                        // Return the updated record to the client
                        // return res.send(updatedRecord);

                        resolve(updatedProject)

                        console.log("updated pro..", updatedProject)



                    });



                    // console.log("updated efit project..", updatedProject)
                })
        })
    }
    catch (err) {
        console.log(err)
    }
}



const addPartnerHelper = async (PartnerName, partnerImage) => {

    try {
        return new Promise(async (resolve, reject) => {
            console.log(" PartnerName promis ...", PartnerName)
            console.log("partnerImage promise", partnerImage)

            const partner = new Partner({
                PartnerName: PartnerName,
                PartnerImage: partnerImage,



            })

            await partner.save().then((partner) => {
                console.log("saved partner..", partner)
                resolve({ partner: "partner added sucessfully.." })
            })
        })
    }
    catch (err) {
        console.log(err)
    }

}


const getPartnersHelper = async () => {
    console.log("getPartners getPartners")
    try {
        return new Promise(async (resolve, reject) => {

            await Partner.find({}).then((getedPartners) => {
                console.log("getedPartners..", getedPartners)
                resolve(getedPartners)
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}

const RemovePartnersHelper = async (PartnerId) => {
    console.log("RemovePartnersHelper PartnerId ", PartnerId)
    var Image
    await Partner.findOne({ _id: PartnerId }).then((res) => {
        console.log("ress for image ..", res)
        Image = res.PartnerImage
    })
    try {
        return new Promise(async (resolve, reject) => {
            await Partner.findOneAndDelete({ _id: PartnerId }, { new: true }).then((removedPartner) => {
                console.log("removedPartner..", removedPartner)
                fs.unlink('./public/images/' + Image, (err) => {
                    if (err) {
                        console.log("fs erorr..", err)
                        // return res.status(500).send(err);
                    }
                    resolve(removedPartner)
                    console.log("removedPartner ..", removedPartner)

                });
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}




module.exports = {
    ProjectHelper, UpdateProjectHelper, getProjectHelper, ProjectDateUpdateHelper,
    DeleteHelper, getAllprojectsHelper, getOngoingprojectsHelper, getEndedprojectsHelper,
    editprojectProjectHelper, getSingleProjectHelper, projectEditUpdateHelper, addPartnerHelper,
    getPartnersHelper, RemovePartnersHelper
}