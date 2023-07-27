import React,{useState,useEffect} from 'react'
import Card from '../Card/Card'
import './TabOngoing.css'
import { OngoingtProjects } from './../../APIs/UserApi';

function TabOngoing() {


  const [loading, setLoading] = useState(false);
const [colData,setColData]=useState([])

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    await OngoingtProjects().then((response) => {
      console.log("all project start ended projects..", response.data.projects);
      setColData(response.data.projects);
      setLoading(false);
    });
  };





  return (
    <div className='TabOngoingWrapper'>



      {
        colData.map((obj) => {
          console.log("obj..", obj)
          return (<Card obj={obj} />)
        })
      }






    </div>
  )
}

export default TabOngoing

