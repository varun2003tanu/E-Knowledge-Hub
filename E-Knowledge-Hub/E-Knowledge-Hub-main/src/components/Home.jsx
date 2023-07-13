import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Side from './Side'
import Slideshow from './Slideshow'
import col from './college.jpeg'
import logo4 from './logo4.jpg'
import Homeach from './Homeach'
import test from './test.jpeg'
import test2 from './test2.jpeg'

const imgs = [test, test2];

function Home() {
  return (
    <div className='body_of_home'>
        <Navbar/>
        <div className="mainp">
        <div className="coll_photo">
            <img src={logo4} alt="logo4" className='coll_photo'/>
        </div>
        <img src={col} alt="logo" className='college_photo'/>
        <div className="down">
          <h1 style={{marginLeft: 20}}>Some Achievements</h1>
          <div className="achieve">
            <Homeach img={imgs[0]} description='get the descriptions using a database' id={1}/>
            <Homeach img={imgs[1]} description='get the descriptions using a database' id={2}/>
            <Homeach img={imgs[0]} description='get the descriptions using a database' id={3}/>
          </div>
          
        </div>
        </div>
    </div>
  )
}

export default Home