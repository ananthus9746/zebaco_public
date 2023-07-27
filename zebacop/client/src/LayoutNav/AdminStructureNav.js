import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AdminSideBar from '../components/AdminSideBar/AdminSideBar'
import './AdminStructure.css'

function AdminNav() {
    return (
        <>
            <div className="admin_wrapper">
                <div className="admin_container">
                    <AdminSideBar />
                    <div className="admin_dashbaord_outlet">
                        <Outlet></Outlet>
                    </div>
                </div>


            </div>

        </>
    )
}

export default AdminNav