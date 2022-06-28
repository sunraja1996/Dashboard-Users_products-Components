import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";


function Createuser() {
  
 
 
  return (
    
    <div className='container'>
       <div class="d-flex justify-content-start align-items-center">
       <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
      <Link to="/portal/users">
        <i class="fas fa-arrow-left text-white" aria-hidden="true"></i> </Link>
      </div>
      <h1 className="mx-2 px-4 py-2 ml-5 text-center text-uppercase font-weight-bold">Create User</h1></div>
      <hr className="sidebar-divider d-none d-md-block" />

         
      <form className="py-5">
        
      <div className="form-row">
      <div className="form-group col-md-4 py-1">
          <label for="id">ID</label>
          <input type="text" className="form-control" id="id" placeholder="id"/>
        </div>
        <div className="form-group col-md-4 py-1">
          <label for="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name"/>
        </div>
        <div className="form-group col-md-4 py-1">
          <label for="position">Position</label>
          <input type="text" className="form-control" id="position" placeholder="position"/>
        </div>
      </div>
      
      <div className="form-row">
      <div className="form-group col-md-6 py-1">
        <label for="Office">Office</label>
        <input type="text" className="form-control" id="Office" placeholder="Office"/>
      </div>
        <div className="form-group col-md-6 py-1">
          <label for="salary">Salary</label>
          <input type="text" className="form-control" id="salary" placeholder="000000"/>
        </div>
      </div>
      <div className="form-row">
      <div className="form-group col-md-6 py-1">
        <label for="email">Email</label>
        <input type="email" className="form-control" id="email" placeholder="Email eg:- abd@mail.com"/>
      </div>
      <div className="form-group col-md-2 py-1">
        <label for="age">Age</label>
        <input type="number" className="form-control" id="age" placeholder="18"/>
      </div>
      <div className="form-group col-md-4 py-1">
        <label for="Start-Date">Start Date</label>
        <input type="date" className="form-control" id="Start-Date"/>
      </div>
      </div>
     
      <div className="form-group">
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
      <button type="submit" className="btn btn-primary">Create</button>
        </div>
      
    </form>
    </div>
  )
}

export default Createuser