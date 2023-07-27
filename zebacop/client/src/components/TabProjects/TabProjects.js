import React, { useState, useEffect } from 'react'
import './TabProjects.css'
import { Link, Outlet, Routes, Route } from 'react-router-dom';
// import ViewAllprojects from '../../pages/User/ViewAllprojects/ViewAllprojects'
import Ongoing from '../TabOngoing/TabOngoing'
import TabAllproject from '../TabAllproject/TabAllproject'
import TableEnded from '../TableEnded/TableEnded'

import { getProjects, UpdateStatus } from "../../APIs/UserApi";


import { Tabs } from 'antd'


function AllprojectNav() {



    const items = [
        {
            key: '1',
            label: <div className='TabLabel'>All PROJECTS</div>,
            children: <TabAllproject/>,
        },
        {
            key: '2',
            label: <div className='TabLabel'>ONGOING</div>,
            children: <Ongoing />,
        },
        {
            key: '3',
            label:<div className='TabLabel'>ENDED</div>,
            children: <TableEnded />,
        },
    ];

    return (
        <div className='AllprojectNavWrapper'>

            <Tabs defaultActiveKey="1" items={items}  className='tab'/>

        </div>



    )
}

export default AllprojectNav