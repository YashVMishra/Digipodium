import React from 'react'
import '../styling/signup.css';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const naviagte = useNavigate();

  const loginForm = useFormik({
    initialValues : {
      name: "",
      email: "",
      password: ""
    },

    onSubmit : async (values) => {
      console.log(values);

      // sending request to backend
      const res = await fetch('http://localhost:5000/user/add', {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          "Content-Type": "application/json",
        }
      });

      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon : 'success',
          title :  `${values.name} registered succesfully`,
          text :'Now Login to Continue'
        })
        naviagte('/login');
      } else {
        Swal.fire({
          icon : 'error',
          title : 'OOPs',
          text :'Some Error Occured'
        })
      }
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