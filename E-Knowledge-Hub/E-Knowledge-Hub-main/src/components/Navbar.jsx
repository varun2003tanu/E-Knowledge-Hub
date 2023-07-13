import React from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'
import logo from './logo.png'
import project from './projects.png'
import contact from './contact.png'
import patents from './book.png'
import ach from './ach.png'
import hack from './hack.png'
import abt from './about.png'
import sett from './sett.png'
import col from './coll.jpeg'

function Navbar() {
  return (
    <div>
        <div className='navbar'>
        <Link to='/home' className='logo'>
            <img src={col} alt="logo" className='logo_image'/>
        </Link>
        <Link to='/projects' className='li_element'>
            <img src={project} alt="logo1" className='logo_of_side_comps'/>
                <p className='li_p'>Projects</p></Link>
        <Link to='/Contact' className='li_element'>
            <img src={contact} alt="cont_logo" className='logo_of_side_comps'/>
            <p className='li_p'></p>Contact Faculty</Link>
        <Link to='/patents' className='li_element'>
            <img src={patents} alt="pat" className='logo_of_side_comps'/>
            <p className='li_p'>Patents</p></Link>
        <Link to='/achievements' className='li_element'>
            <img src={ach} alt="" className='logo_of_side_comps'/>
            <p className='li_p'>Achievements</p></Link>
        <Link to='/upcoming' className='li_element'>
            <img src={hack} alt="" className='logo_of_side_comps'/>
            <p className='li_p'>Upcoming Hack-a-Thons</p></Link>
        <Link to='/about' className='li_element'>
            <img src={abt} alt="" className='logo_of_side_comps'/>
            <p className='li_p'></p>About CEER</Link>
        <Link to='/account' className='li_element'>
            <img src={sett} alt="" className='logo_of_side_comps'/>
            <p className='li_p'>Account settings</p></Link>
        <Link to=''></Link>    
    </div>
    </div>
  )
}

export default Navbar