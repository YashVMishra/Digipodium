import React from 'react'
import './signup.css';
import './Digipodium logo.png';

const SignUp = () => {
  return (
    <div className='mybody'>
      <div className="mydiv">
        <form action="">
        
          <img src="Digipodium logo.png" alt="" className="myimg" />
          <h2 className="myh1">Sign Up For Free</h2>
          
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
          <input className="myinput" type="password" placeholder="Password" />

          <button className="mybtn">Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default SignUp