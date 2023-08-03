import React from 'react'
import '../styling/product.css'
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const Product = () => {
    const productForm = useFormik({
        initialValues : {
          title: "",
          description: "",
          price: "",
          category: "",
          image: ""
        },
    
        onSubmit : async (values) => {
          console.log(values);
    
          // sending request to backend
          const res = await fetch('http://localhost:5000/product/add', {
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
              title :  'Registered succesfully',
              text :'Now Login to Continue'
            })
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
        <div className="form-container mt-3">
            <h2>Product Form</h2>
            <form action="#" onSubmit={productForm.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={productForm.handleChange}  
                        value={productForm.values.title}
                        className="form-input"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={productForm.handleChange}  
                        value={productForm.values.description}
                        className="form-input"
                        required=""
                        defaultValue={""}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price" className="form-label">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={productForm.handleChange}  
                        value={productForm.values.price}
                        className="form-input"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category" className="form-label">
                        Category:
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        onChange={productForm.handleChange}  
                        value={productForm.values.category}
                        className="form-input"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">
                        Image:
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={productForm.handleChange}  
                        value={productForm.values.image}
                        className="form-input"
                        required=""
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="form-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>

    )
}

export default Product