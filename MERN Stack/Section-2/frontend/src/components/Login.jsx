import React from 'react'
import './login.css';

const Login = () => {
  return (
    <div className='mybody'>

      <div className="myCard">
        <h2 className="form-title">Login Form</h2>

        <form action="">
          <label htmlFor="">E-Mail</label>
          <input type="email" name="" id="" className="myinput" />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" className="myinput" />
          <button className="mybtn">Login</button>
        </form>

      </div>
  </div>

  )
}

export default Login