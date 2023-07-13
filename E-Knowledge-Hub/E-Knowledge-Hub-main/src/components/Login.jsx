import React from 'react'
import './Login.css'
import svg from "./google.svg";
import img3 from "./img2.jpeg";

function Login() {
  return (
    <>
    <div className="full">
      <div className="card">
        <div className="left">
          <h2 className='wel'>WELCOME BACK !</h2>
          <div className="f">
            <form action="submit">
              <h3 className='t'>Enter some text</h3>
              <input type="text" className='enter' placeholder='Email Address' />
              <input type="text" className='enter' placeholder='Password' />
              <br />
              <a href="" className='fp'>Forgot Password ?</a>
              <br />
              <button type="submit" className='sign'>SIGN IN</button>
            </form>
            <button className='with_google'>
              <img src={svg} alt="" className='gg'/>
              SIGN IN WITH GOOGLE
            </button>
          </div>
        </div>
        <div className="right">
          <img src={img3} alt="" className='log_ig'/>
        </div>
      </div>
      </div>  
    </>
  )
}

export default Login;