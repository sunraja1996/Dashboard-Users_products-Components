import React from 'react'
import { Link,Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import "./App.css";

function Edituser() {
      let [isLoading, setLoading] = useState(false);
      let params = useParams();
      let navigate = useNavigate();
      const formik = useFormik({
            initialValues: {
                  Name: "",
                  Standard: "",
                  Section: "",
                  Age: "",
                  Totalmarks: "",
            },
            validate : (values) => {
              let errors = {}
              
              if(!values.Name){
                errors.Name = "Please enter your name"
              }else if(values.Name.length<3){
                errors.Name = "Character should be more than 3"
              }
                
              if(!values.Section){
                errors.Section = "please enter Student Section"
              }
        
        
              if(values.Age>18){
                errors.Age = "Age must be above 18"
              }
        
              return errors
            },
            onSubmit: async(values) => {
                 try {
                  await axios.put(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/Students/${params.id}`,values);
                  navigate("/portal/students")
                 } catch (error) {
                  alert("Error");
                  console.log(error);
                 }
            },
          });
      useEffect(()=>{
            let fetchdata = async () => {
              let userData = await axios.get(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/Students/${params.id}`);
            //   setUsers(userData.data);
            formik.setValues(userData.data);
            }
            fetchdata()
          }, [])

      


  return (
      <div className="container">
      <div class="d-flex justify-content-start align-items-center">
        <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
          <Link to="/portal/students">
            <i class="fas fa-arrow-left text-white" aria-hidden="true"></i>{" "}
          </Link>
        </div>
        <h1 className="mx-2 px-4 py-2 ml-5 text-center text-uppercase font-weight-bold">
          Update Student Detail
        </h1>
      </div>
      <hr className="sidebar-divider d-none d-md-block" />

      <form className="py-5" onSubmit={formik.handleSubmit}>
        <div className="form-row">
          
          <div className="form-group col-md-12 py-1">
            <label for="name">Name</label>
            <input
              type="text"
              name="Name"
              onChange={formik.handleChange}
              value={formik.values.Name}
              className={`form-control ${formik.errors.Name ? 'error-border':''}`} 
              id="name"
              placeholder="Name"
            />

            {
              formik.errors.Name ? <span style={{color : 'red'}}>{formik.errors.Name}</span> : null
            }

          </div></div>
          <div className="form-row">
          <div className="form-group col-md-6 py-1">
            <label for="position">Standard</label>
            <input
              type="text"
              name="Standard"
              onChange={formik.handleChange}
              value={formik.values.Standard}
              className={`form-control ${formik.errors.Standard ? 'error-border':''}`}  
              id="Standard"
              placeholder="Standard"
            />

            {
              formik.errors.Position ? <span style={{color : 'red'}}>{formik.errors.Position}</span> : null
            }

          </div>

          <div className="form-group col-md-6 py-1">
            <label for="position">Section</label>
            <input
              type="text"
              name="Section"
              onChange={formik.handleChange}
              value={formik.values.Section}
              className='form-control'  
              id="Section"
              placeholder="Section"
            />
          </div>
          </div>
        

          <div className="form-row">
          <div className="form-group col-md-6 py-1">
            <label for="position">Age</label>
            <input
              type="text"
              name="Age"
              onChange={formik.handleChange}
              value={formik.values.Age}
              className={`form-control ${formik.errors.Age ? 'error-border':''}`}  
              id="Age"
              placeholder="Age"
            />

            {
              formik.errors.Age ? <span style={{color : 'red'}}>{formik.errors.Age}</span> : null
            }

          </div>

          <div className="form-group col-md-6 py-1">
            <label for="position">Total Marks</label>
            <input
              type="text"
              name="Totalmarks"
              onChange={formik.handleChange}
              value={formik.values.Totalmarks}
              className='form-control'  
              id="Totalmarks"
              placeholder="Totalmarks"
            />
          </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
        
        <button 
        type="submit" className="btn btn-primary text-uppercase" 
        disabled={!formik.isValid && isLoading} 
        > Update
        </button>
        
      </div>
        
      </form>
    </div>
  )
}

export default Edituser