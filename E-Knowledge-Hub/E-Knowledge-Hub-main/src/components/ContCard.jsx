import React from 'react'
import './ContCard.css'

function ContCard(props) {
  return (
    <div className='card_rectangular'>
        <img src={props.img} alt="" className='img_of_card'/>
        <p>{props.description}</p>
    </div>
  )
}

export default ContCard