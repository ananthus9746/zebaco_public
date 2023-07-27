import axios from "axios";
import userInstance from "../Instances/UserAxiosInstance";
import AdminInstance from "../Instances/AdminInstance"


//ADMIN END POINTS
export const Adminlogin=(values)=>AdminInstance.post(`admin/login`,values)

export const AdminOtpLogin=(values)=>AdminInstance.post(`admin/otpLogin`,values)


export const getProjects=(project)=>AdminInstance.get(`admin/getprojects/${project}`)

export const UpdateStatus=(status)=>AdminInstance.put(`admin/project`,status)

export const ProjectDateUpdate=(data)=>AdminInstance.put(`admin/projectdateupdate`,data)

export const DeleteProject=(projectId)=>AdminInstance.delete(`admin/deleteproject/${projectId}`)

export const getEditproject=(project)=>AdminInstance.get(`admin/editproject`)

export const getSingleProjects=(id)=>AdminInstance.get(`admin/getsingleprojects/${id}`)

export const ProjectEditUpdate=(data)=>AdminInstance.put(`admin/projectEditUpdate`,data)

export const getPartners=()=>AdminInstance.get(`admin/getPartners`)

export const RemovePartner=(partnerId)=>AdminInstance.delete(`admin/RemovePartner/${partnerId}`)



//USER END POINTS
export const submitForm=(data)=>userInstance.post(`admin/project`,data)
export const geAlltProjects=(page)=>userInstance.get(`admin/getAllprojects?page=${page}`)
export const OngoingtProjects=(project)=>userInstance.get(`admin/Ongoingprojects`)
export const EndedProjects=(project)=>userInstance.get(`admin/Ended`)













