import React from 'react'
import SupportService from '../../../components/SupportService/SupportService'
import './SupportServicePage.css'

function SupportServicePage() {
  return (
    <div className='SupportServicePage_Wrapper'>
        <p className='SupportServicePage_Wrapper_heading'>INCUBATION SUPPORT <br/> <span className='services_txt'>SERVICES</span> </p>
        <SupportService/>
    </div>
  )
}

export default SupportServicePage