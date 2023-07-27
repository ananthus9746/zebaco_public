import React from 'react'
import { Outlet} from 'react-router-dom'
import './UserStructure.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from './../components/Footer/Footer';

function UserStructure() {
  return (
    <>

      <div className="wrapper">
        <div className="user_parent_wrapper">
          <Navbar />
          <Outlet></Outlet>
          <Footer/>
        </div>
      </div>
    </>
  )

}

export default UserStructure