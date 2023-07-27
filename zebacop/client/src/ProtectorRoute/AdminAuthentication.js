
import React from 'react'
import { json, Navigate, Outlet } from 'react-router-dom'

const AdminAuthentication=()=>
{
const admin=localStorage.getItem('AdminToken');

console.log("token auth..",admin)

return admin?<Outlet/>:<Navigate to='/adminLogin'/>

}

export default AdminAuthentication


