import React from 'react'
import '../styling/login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  // initializing formik
  const loginForm = useFormik({
    initialValues : {
      email: "",
      password: ""
    },

    onSubmit : (values) => {
      console.log(values);
    },

    validationSchema : loginSchema
  });

  return (
    <div className='mybody'>

      <div className="myCard text-center">
        <h2 className="form-title mb-3">Login Form</h2>

        <form action="" className='text-center' onSubmit={loginForm.handleSubmit}>
            <label htmlFor="" className=''>Email</label>
            <p>{loginForm.errors.email}</p>
            <input className="form-control mb-4 rounded-5 border-5" type="email" name='email' onChange={loginForm.handleChange}  value={loginForm.values.email}/>
            <label htmlFor="">Password</label>
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