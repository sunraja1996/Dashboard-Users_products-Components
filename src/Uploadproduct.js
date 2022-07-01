import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./App.css";
import axios from "axios";

function Uploadproduct() {
  let Navigate = useNavigate();
  let [isLoading, setLoading] = useState(false);
  let formik = useFormik({
    initialValues: {
      Image: "",
      Productname: "",
      Productprice: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.Productname) {
        errors.ProductName = "Please enter your Product Name";
      }
      if (!values.Productprice) {
        errors.Productprice = "please enter your Productprice";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        console.log(values);
        await axios.post(
          "https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/product",
          values
        );
        Navigate("/portal/products");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-start align-items-center">
          <div className="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
            <Link to="/portal/products">
              <i
                className="fas fa-arrow-left text-white"
                aria-hidden="true"
              ></i>{" "}
            </Link>
          </div>
          <h1 className="text-center text-uppercase font-weight-bold">
            Product Details
          </h1>
        </div>
        <hr className="sidebar-divider d-none d-md-block" />
        

          <form className="py-3" onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
              <label for="name">Product Name</label>
            <input
              type="text"
              name="Productname"
              onChange={formik.handleChange}
              value={formik.values.ProductName}
              className={`form-control ${formik.errors.ProductName ? 'error-border':''}`} 
              id="Productname"
              placeholder="Productname"
            />

            {
              formik.errors.ProductName ? <span style={{color : 'red'}}>{formik.errors.ProductName}</span> : null
            }

          </div>
              
              <div className="form-group col-md-6">
                <label for="price">Product Price</label>
                <input
                  type="text"
                  name="Productprice"
                  onChange={formik.handleChange}
                  value={formik.values.Productprice}
                  className={`form-control ${
                    formik.errors.Productprice ? "error-border" : ""
                  }`}
                  id="Productprice"
                  placeholder="Product Price"
                />

                {formik.errors.Productprice ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.Productprice}
                  </span>
                ) : null}

              </div>
              
            </div>
          
          <label for="formFile" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            name="Image"
                  onChange={formik.handleChange}
                  value={formik.values.Image}
                  className={`form-control ${
                    formik.errors.Image ? "error-border" : ""
                  }`}
            id="Image"
            placeholder="image-link paste here"
            
          />
        
        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="submit" className='btn btn-primary text-uppercase' >Submit
          </button>
        </div>
        </form>
      </div>
      
    </>
  );
}

export default Uploadproduct;
