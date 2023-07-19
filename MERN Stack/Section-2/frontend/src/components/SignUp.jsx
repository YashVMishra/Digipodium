import React from 'react'
import '../styling/signup.css';

const SignUp = () => {
  return (
    <div className='mybody'>
      <div className="mydiv">
        <form action="">
        
          <img src="/Digipodium-logo.png" alt="" className="myimg" />
          <h3 className="myh1">Sign Up For Free</h3>
          
          <label htmlFor="" className="mylabel">
            Username
          </label>
          <input className="myinput" type="text" placeholder="Username" />

          <label htmlFor="" className="mylabel">
            E-mail Address
          </label>
          <input className="myinput" type="email" placeholder="E-mail Address" />

          <label htmlFor="" className="mylabel">
            Password
          </label>
          <input className="myinput lastinput" type="password" placeholder="Password" style={{margin:"0px 0px 0px 0px"}}/>

          <button className="mybtn">Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default SignUp