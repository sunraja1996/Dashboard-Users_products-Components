import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";

function Viewproducts() {
      let params = useParams();
  
      const formik = useFormik({
        initialValues: {
            Image: "",
            Productname: "",
            Productprice: "",
        },
        validate: (values) => {
          let errors = {};
    
          if (!values.Name) {
            errors.Name = "Please enter your name";
          }
    
          return errors;
        },
        onSubmit: () => {},
      });
      useEffect(() => {
        let fetchdata = async () => {
          let userData = await axios.get(
            `https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/product/${params.id}`
          );
          //   setUsers(userData.data);
          formik.setValues(userData.data);
        };
        fetchdata();
      }, []);

    
  return (
    <>
    <div class="d-flex justify-content-start align-items-center">
      <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
      <Link to="/portal/products">
        <i class="fas fa-arrow-left text-white" aria-hidden="true"></i> </Link>
      </div>
      <h1 className="mx-2 px-4 py-2 mb-2 text-gray-800">{formik.values.Productname}</h1></div>
      <hr className="sidebar-divider d-none d-md-block" />

      <table class="table table-bordered ">
      <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"class="w-25 ">
			      <img src={formik.values.Image} alt="products" className='img-thumbnail rounded mx-auto d-block'/></th>
      <td>{formik.values.Productname}</td>
      <td>${formik.values.Productprice}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Viewproducts