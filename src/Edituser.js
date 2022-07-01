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
              Position: "",
              Office: "",
              Email: "",
              Age: "",
              Startdate: "",
              Salary: "",
            },
            validate : (values) => {
              let errors = {}
              
              if(!values.Name){
                errors.Name = "Please enter your name"
              }else if(values.Name.length<5){
                errors.Name = "Character should be more than 5"
              }
                
              if(!values.Position){
                errors.Position = "please enter your position"
              }
        
              if(!values.Email){
                errors.Email = "please enter your eMail ID"
              }
        
              if(values.Age<18){
                errors.Age = "Age must be above 18"
              }
        
              return errors
            },
            onSubmit: async(values) => {
                 try {
                  await axios.put(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/staffs/${params.id}`,values);
                  navigate("/portal/users")
                 } catch (error) {
                  alert("Error");
                  console.log(error);
                 }
            },
          });
      useEffect(()=>{
            let fetchdata = async () => {
              let userData = await axios.get(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/staffs/${params.id}`);
            //   setUsers(userData.data);
            formik.setValues(userData.data);
            }
            fetchdata()
          }, [])

      


  return (
      <div className="container">
      <div class="d-flex justify-content-start align-items-center">
        <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
          <Link to="/portal/users">
            <i class="fas fa-arrow-left text-white" aria-hidden="true"></i>{" "}
          </Link>
        </div>
        <h1 className="mx-2 px-4 py-2 ml-5 text-center text-uppercase font-weight-bold">
          Update User
        </h1>
      </div>
      <hr className="sidebar-divider d-none d-md-block" />

      <form className="py-5" onSubmit={formik.handleSubmit}>
        <div className="form-row">
          
          <div className="form-group col-md-6 py-1">
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

          </div>
          <div className="form-group col-md-6 py-1">
            <label for="position">Position</label>
            <input
              type="text"
              name="Position"
              onChange={formik.handleChange}
              value={formik.values.Position}
              className={`form-control ${formik.errors.Position ? 'error-border':''}`}  
              id="position"
              placeholder="position"
            />

            {
              formik.errors.Position ? <span style={{color : 'red'}}>{formik.errors.Position}</span> : null
            }

          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6 py-1">
            <label for="Office">Office</label>
            <input
              type="text"
              name="Office"
              onChange={formik.handleChange}
              value={formik.values.Office}
              className="form-control"
              id="Office"
              placeholder="Office"
            />
          </div>
          <div className="form-group col-md-6 py-1">
            <label for="salary">Salary</label>
            <input
              type="text"
              name="Salary"
              onChange={formik.handleChange}
              value={formik.values.Salary}
              className="form-control"
              id="salary"
              placeholder="000000"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6 py-1">
            <label for="email">Email</label>
            <input
              type="email"
              name="Email"
              onChange={formik.handleChange}
              value={formik.values.Email}
              className={`form-control ${formik.errors.Email ? 'error-border':''}`} 
              id="email"
              placeholder="Email eg:- abd@mail.com"
            />
          </div>
          <div className="form-group col-md-2 py-1">
            <label for="age">Age</label>
            <input
              type="text"
              name="Age"
              onChange={formik.handleChange}
              value={formik.values.Age}
              className={`form-control ${formik.errors.Age ? 'error-border':''}`} 
              id="age"
              placeholder="18"
            />

            {
              formik.errors.Age ? <span style={{color : 'red'}}>{formik.errors.Age}</span> : null
            }


          </div>
          <div className="form-group col-md-4 py-1">
            <label for="Start-Date">Start Date</label>
            <input type="date"
            
             name="Startdate"
             onChange={formik.handleChange}
             value={formik.values.Startdate}
             className="form-control" id="Start-Date"> 
             </input>
             

          </div>
        </div>

        <div className="form-group"></div>
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