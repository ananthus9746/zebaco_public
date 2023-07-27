import React,{useEffect, useState} from 'react'
import { Link, NavLink ,useNavigate} from 'react-router-dom'
import './AdminSideBar.css'
import Swal from "sweetalert2";

import {
    FaBars,
    FaCommentAlt,
    FaRegChartBar,
    FaTh
} from 'react-icons/fa'


function AdminSideBar() {

    const Navigate = useNavigate();


    const handleLogout = async (e) => {
        e.preventDefault();
        try {
          Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#912099",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, continue!",
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("AdminToken");
              localStorage.removeItem("user");
              Navigate("/adminlogin");
            }
          });
        } catch (error) {
          console.log(error);
        }
      };

    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>setIsOpen(!isOpen)

    const [isMobile, setIsMobile] = useState(0)

    const [width, setWidth] = useState(window.innerWidth);
  
  
    const updateDimensions = () => {
      setWidth(window.innerWidth);
  
    }
    useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);
  
    console.log("width..", width)
  
    useEffect(() => {
        
      if (width < 700) {
        console.log("mobile")

        toggle(true)
        setIsOpen(isOpen)
      }
      else{
        console.log("desktop")
        toggle()

      

      }
     
    }, [width])



  

    const menuItems=[
        {
            path:"/admin",
            name:"Applications",
            icon:<FaTh/>
        },
        {
            path:"/admin/approved",
            name:"Approved",
            icon:<FaCommentAlt/>
        }, 
        {
            path:"/admin/pending",
            name:"Cued",
            icon:<FaTh/>
        },
         {
            path:"/admin/progrssing",
            name:"progrssing",
            icon:<FaTh/>
        },
       
        {
            path:"/admin/ended",
            name:"ended",
            icon:<FaTh/>
        },

        {
            path:"/admin/rejected",
            name:"rejected",
            icon:<FaTh/>
        },
        {
            path:"/admin/editProject",
            name:"Edit/Update project",
            icon:<FaTh/>
        },
        {
            path:"/admin/addPartner",
            name:"Add-partners",
            icon:<FaTh/>
        },

    ]


    return (

                <div style={{width:isOpen?`300px`:`50px`}} className="sidebar">
                    <div className="top_section">
                        <h1 style={{display:isOpen?"block":"none"}}  className='logo'>logo</h1>
                        <div style={{marginLeft:isOpen?"140px":"0px"}}  className="bars">
                            <FaBars onClick={toggle}/>
                        </div>
                    </div>
                   {
                    menuItems.map((item,index)=>
                        <NavLink to={item.path} key={index} className='link' >
                            <div className="icon">{item.icon}</div>
                            <div  style={{display:isOpen?"block":"none"}}  className="link_text">{item.name}</div>
                        </NavLink>
                    )
                   }
                   <button className='logout_btn' onClick={handleLogout}>logout</button>
                </div>

    )
}

export default AdminSideBar

