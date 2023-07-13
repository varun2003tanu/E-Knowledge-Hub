import React from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from './api';
import Navbar from './Navbar';
import './Post.css'
import ContCard from './ContCard';
import Homeach from './Homeach'

function Post() {
    const { id } = useParams();
    const post_details = getPost(id);
    const cont = post_details.contributors;
  return (
    <div className='post'>
        <Navbar/> 
        <div className="abt">
        <h1>Image Of Prototype</h1>
            <div className="abt_img">
                <img src={post_details.img} alt="" className='img_of_post'/>
            </div>
            <h1>Abstract</h1>
            <div className="abs">
                <p className='para'>
                    {post_details.abstract}
                </p>
            </div>
            <h1>Contributors</h1>
            <div className="contributors">
            {cont.map((ele, idx) => {
                    return <ContCard key={idx} img={ele.img_of_person} description={ele.name_of_person}/>
            })}
            </div>
            <h1>Technologies used</h1>
            <div className="tecused">
                
            </div>
            <h1>Faculty Incharge</h1>
            <div className="incharge">

            </div>
        </div>
    </div>
  )
}

export default Post