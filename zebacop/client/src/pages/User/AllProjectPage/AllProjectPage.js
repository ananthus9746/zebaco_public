import React from 'react'
import './AllProject.css'
import AllprojectNav from '../../../components/TabProjects/TabProjects';
import { Outlet } from 'react-router-dom';

function AllProjectPage() {
  return (
    <div className='allProject'>
    
    <AllprojectNav/>

    </div>
  )
}

export default AllProjectPage