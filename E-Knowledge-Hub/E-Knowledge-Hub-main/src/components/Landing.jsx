import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'
import logo from './logo.png';
import col from './coll.jpeg'
import Slideshow from './Slideshow';

function Landing() {
  return (
    <div className='landing'>
        <div className="nav">
            <Link to='/' className='nav_ele'><img className='logo1' src={col} alt="logo" /></Link>
            <Link to='/home' className='nav_ele'>Home</Link>
            <Link to='/about' className='nav_ele'>About</Link>
            <Link to='/contact' className='nav_ele'>Contact</Link>
            <div className="nav_elebtn">
                <Link to='/login'>
                    <button className='nav_ele_btn'>Login</button>
                </Link>
                <Link to='/sign'>
                    <button className='nav_ele_btn'>Sign in</button>
                </Link>                
            </div>
        </div>
        <div className="cen">
            <div className="left_of_l">
                <h1>The Best way<br></br>to showcase<br></br> your project</h1>
                <Link to='/projects'>
                    <button className='btn_of_cen'>view projects</button>
                </Link>
            </div>
            <div className="right_of_l">
                <img src={col} alt="logo" className='img_of_cen'/>
            </div>
        </div>
    </div>
  )
}

export default Landing