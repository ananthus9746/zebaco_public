import React from 'react'
import './ViewProject.css'
import { useLocation } from "react-router-dom";
import ProjectDetailsContainer from './../ProjectDetailsContainer/ProjectDetailsContainer';


function ViewProject() {

    const location = useLocation();
    const { projectDetails } = location.state;

    console.log("viewmore project details...",projectDetails)

  return (
    <div className='viewProjectWrapper'>
        
        <ProjectDetailsContainer project={projectDetails}/>

        <div className="projectDetails"></div>
    </div>
  )
}

export default ViewProject