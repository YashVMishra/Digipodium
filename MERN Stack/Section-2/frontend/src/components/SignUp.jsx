import React from 'react'
import '../styling/signup.css';
import { useFormik } from 'formik';

const SignUp = () => {

  const loginForm = useFormik({
    initialValues : {
      name: "",
      email: "",
      password: ""
    },

    onSubmit : (values) => {
      console.log(values);
    }
  });

  return (
    <div className='mybody'>
      <div className="mydiv">
        <form action="" onSubmit={loginForm.handleSubmit}>
        
          <img src="/Digipodium-logo.png" alt="" className="myimg" />
          <h3 className="myh1">Sign Up For Free</h3>
          
          <label htmlFor="" className="mylabel" >
            Username
          </label>
          <input className="myinput" type="text" placeholder="Username" name='name' onChange={loginForm.handleChange}  value={loginForm.values.name}/>

          <label htmlFor="" className="mylabel">
            E-mail Address
          </label>
          <input className="myinput" type="email" placeholder="E-mail Address" name='email' onChange={loginForm.handleChange}  value={loginForm.values.email}/>

          <label htmlFor="" className="mylabel">
            Password
          </label>
          <input className="myinput lastinput" type="password" placeholder="Password" style={{margin:"0px 0px 0px 0px"}} name='password' onChange={loginForm.handleChange}  value={loginForm.values.password}/>

          <button className="mybtn">Sign Up</button>
        </form>
      </div>

    </div>
  )
}

export default SignUp