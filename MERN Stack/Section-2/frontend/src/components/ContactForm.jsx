import React from 'react'
import '../styling/contactForm.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {

    const contactSchema = Yup.object().shape({
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

    validationSchema : contactSchema
  }); 

  return (
    <div className='mybody-1'>
        <h1 className='myh1'> Contact Us </h1>
        <form onSubmit={contactForm.handleSubmit} className='myform'>
            <label htmlFor="name" className='mylabel-1'> Name: </label>
            <p className='error-label'>{contactForm.errors.email}</p>
            <input className='myinput' type="text" id="name" required="" name="name" onChange={contactForm.handleChange} value={contactForm.values.name}/>

            <label htmlFor="email" className='mylabel-1'> Email: </label>
            <input className='myinput' type="email" id="email" required="" name="email" onChange={contactForm.handleChange} value={contactForm.values.email}/>

            <label htmlFor="message" className='mylabel-1'> Message: </label>
            <textarea className='myinput' id="message" required="" defaultValue={""} name="msg" onChange={contactForm.handleChange} value={contactForm.values.msg}/>

            <button type="”submit”" name="”submit”" className='submit'>
      {" "}
      Submit
    </button>
  </form>
    </div>
  )
}

export default ContactForm