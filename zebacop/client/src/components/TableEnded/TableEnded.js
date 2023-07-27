import React, { useState, useEffect } from 'react'
import { EndedProjects } from '../../APIs/UserApi';
import Card from '../Card/Card'
import './TableEnded.css'


// NAMEING MISTAKE ENDED PROJECT//
function TableEnded() {


  const [loading, setLoading] = useState(false);
  const [colData, setColData] = useState([])

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await EndedProjects().then((response) => {
      console.log("all project start ended projects..", response.data.projects);
      setColData(response.data.projects);
      setLoading(false);
    });
  };

// NAMEING MISTAKE  THIS COMPONET FOR USER SIDE CARD ENDED(ENDED PROJECTS) PAGE//

  return (
    <div className='TableEndedWrapper'>

      {
        colData.map((obj) => {
          console.log("obj..", obj)
          return (<Card obj={obj} />)
        })
      }


    </div>
  )
}

export default TableEnded

