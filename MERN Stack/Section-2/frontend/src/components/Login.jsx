import React from 'react'
import '../styling/login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const Login = () => {

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password : Yup.string().required('Required')
  });

  // initializing formik
  const loginForm = useFormik({
    initialValues : {
      email: "",
      password: ""
    },

    onSubmit : async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      if(res.status===200){
        Swal.fire({
          icon:'success',
          title:'Login Success!'
        })
      } else if(res.status===401){
        Swal.fire({
          icon:'error',
          title:"Invalid Credentials!",
          text:'Email or Password is Incorrect'
        })
      } else {
        Swal.fire({
          icon:'error',
          title:'Something went wrong'
        })
      }
    },

    validationSchema : loginSchema
  });

  return (
    <div className='mybody'>

      <div className="myCard text-center">
        <h2 className="form-title mb-3">Login Form</h2>

        <form action="" className='text-center' onSubmit={loginForm.handleSubmit}>
            <label htmlFor="" className='mylabel'>Email</label>
            <p className='error-label'>{loginForm.touched.email ? loginForm.errors.email : ""}</p>
            <input className="form-control mb-4 rounded-5 border-5" type="email" name='email' onChange={loginForm.handleChange}  value={loginForm.values.email}/>
            <label htmlFor="" className='mylabel'>Password</label>
            <p className='error-label'>{loginForm.touched.password ? loginForm.errors.password : ""}</p>
            <input className="form-control mb-4 rounded-5 border-5" type="password" name='password' onChange={loginForm.handleChange}  value={loginForm.values.password}/>
            <button className="btn btn-danger w-100 mt-2 rounded-5">
              Login
            </button>
        </form>

      </div>
  </div>

  )
}

export default Login