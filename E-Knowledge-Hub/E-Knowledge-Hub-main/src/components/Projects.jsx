import React from 'react'
import Side from './Side'
import Navbar from './Navbar'
import './Projects.css'
import add from './add.png'
import CardOfProj from './CardOfProj'
import { data } from './data.js'



function Projects() {
  return (
    <div className='page_of_proj'>
        <Navbar/>
        <div className="bar1">
          <form action="submit" method="post">
            <input type="text" placeholder='Search projects..' className='search1'/>
            <button className='search_proj' type='submit'>search</button>
          </form>
          <button className='add_project'>
            <img src={add} alt="add" className='add_logo'/>
            Add Project</button>
        </div>
        <div className="bar2">
          <div className="card_holder">
            <h1 style={{marginLeft: 10}}>ALL the projects of ceer department</h1>
          {data.map((dataset, idx) => (
              <><CardOfProj key={idx} id={dataset._id} img={dataset.img} title={dataset.title} theme={dataset.theme} /></>
          ))}
          </div>
        </div>
    </div>
  )
}

export default Projects