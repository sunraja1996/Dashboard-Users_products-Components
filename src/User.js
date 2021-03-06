import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react"

function User() {
  const [users, setUsers] = useState([])
  // on mount
  useEffect(()=>{
    
    fetchdata()
  }, [])
  
  let fetchdata = async () => {
    let userData = await axios.get("https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/staffs")
    setUsers(userData.data);
  }
  
  let handleDelete = async(id,Name) => {
    let ask = window.confirm('Do you want to Delete?')
    if (ask){
      await axios.delete(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/staffs/${id}`)
      fetchdata();
    } 
  }


  return (
    <>
    <div className="d-sm-flex align-items-center justify-content-around mb-4">
    <h1 className="text-center text-uppercase font-weight-bold">Teachers List</h1>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <Link to="createuser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-upload fa-sm text-white-50 px-2"></i> Create User</Link>
                    </div>
</div>
      
      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
          Teachers List
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>
                    Action
                  </th>
                </tr>
              </tfoot>
              <tbody>
                {
                users.map((mem) => {
                  
                  return <tr>
                  <td>{mem.Name}</td>
                  <td>{mem.Position}</td>
                  <td>{mem.Office}</td>
                  <td>{mem.Email}</td>
                  <td>{mem.Age}</td>
                  <td>{mem.Startdate}</td>
                  <td>${mem.Salary}</td>
                  <td>
                    <Link to={`/portal/users/view/${mem.id}`} className="btn btn-warning mx-1">View</Link>
                    <Link to={`/portal/users/edit/${mem.id}`}  className="btn btn-dark mx-1">Edit</Link>
                    <button onClick={() => handleDelete(mem.id)} className="btn btn-danger mx-1">Delete</button>
                  </td>
                </tr>
                }) 
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
