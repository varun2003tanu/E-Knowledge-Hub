import React from 'react'
import './CardOfProj.css'
import { Link } from 'react-router-dom'

function CardOfProj(props) {
  return (
    <div className='horizontal_card'>
        <img src={props.img} alt="img" className='image_of_pro'/>
        <h2 className='ele_of_card'>{props.title}</h2>
        <p className='ele_of_card'>{props.theme}</p>
        <Link to={`/projects/${props.id}`}><button className='btn_of_h'>Get Details</button></Link>
    </div>
  )
}

export default CardOfProj