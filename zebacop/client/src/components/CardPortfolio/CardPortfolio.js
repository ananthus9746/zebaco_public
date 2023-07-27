import React from 'react'
import './CardPortfolio.css'

function CardPortfolio(props) {
  return (
    <div className='cardPortfolio'>
     <img src={props.img} className='protfolio_img' alt="projectImage" />
    </div>
  )
}

export default CardPortfolio