import React from 'react'
import '../styling/contactForm.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
      });

   // initializing formik
  const contactForm = useFormik({
    initialValues : {
      name: "",
      email: "",
      msg: ""
    },

    onSubmit : (values) => {
      console.log(values);
    },

    validationSchema : loginSchema
  }); 

  return (
    <div className='mybody-1'>
        <h1> Contact Us </h1>
        <form onSubmit={contactForm.handleSubmit}>
            <label htmlFor="name"> Name: </label>
            <input type="text" id="name" required="" name="name" onChange={contactForm.handleChange} value={contactForm.values.name}/>
            <label htmlFor="email"> Email: </label>
            <input type="email" id="email" required="" name="email" onChange={contactForm.handleChange} value={contactForm.values.email}/>
            <label htmlFor="message"> Message: </label>
            <textarea id="message" required="" defaultValue={""} name="msg" onChange={contactForm.handleChange} value={contactForm.values.msg}/>
            <button type="”submit”" name="”submit”" className='submit'>
      {" "}
      Submit
    </button>
  </form>
    </div>
  )
}

export default ContactForm