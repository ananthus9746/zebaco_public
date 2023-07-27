import React from 'react'
import './TotalCapitalProject.css'

function TotalProjectAndCapital() {
  return (
    <div className='TotalCapitalProjectWrapper'>
      {/* <p className='txt_totalproject_and_capital'>Total projects & Capital Raised by Zebaco.finance</p> */}

      <div className="totals_wrapper">
        <div className="totals_container">
          <p className='text_total'>13+</p>
          <p>Total Projects</p>
        </div>

        <div className="totals_container">
          <p className='text_total'>$0.935 M+</p>
          <p>Total Raised</p>
        </div>
      </div>
      
    </div>
  )
}

export default TotalProjectAndCapital;