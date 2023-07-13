import React from 'react'
import './Homeach.css'
import { Link } from 'react-router-dom'

function Homeach(props) {
  return (
    <div className='card_rectangular'>
        <img src={props.img} alt="" className='img_of_card'/>
        <p>{props.description}</p>
        <Link to={`/achievements/:${props.id}`}><button className='btn_of_card'>Click to know more</button></Link>
    </div>
  )
}

export default Homeach