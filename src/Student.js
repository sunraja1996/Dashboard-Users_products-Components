import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react"

function Student() {
  const [students, setStudents] = useState([])
  // on mount
  useEffect(()=>{
    
    fetchdata()
  }, [])
  
  let fetchdata = async () => {
    let userData = await axios.get("https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/Students")
    setStudents(userData.data);
  }
  
  let handleDelete = async(id,Name) => {
    let ask = window.confirm('Do you want to Delete?')
    if (ask){
      await axios.delete(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/Students/${id}`)
      fetchdata();
    } 
  }


  return (
    <>
    <div className="d-sm-flex align-items-center justify-content-around mb-4">
    <h1 className="text-center text-uppercase font-weight-bold">Student List</h1>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <Link to="createstudent" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-upload fa-sm text-white-50 px-2"></i> Create Student Details</Link>
                    </div>
</div>
      
      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
          Student List
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
                  <th>Standard</th>
                  <th>Section</th>
                  <th>Age</th>
                  <th>Total Marks</th>
                  <th>
                    Action
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>Name</th>
                  <th>Standard</th>
                  <th>Section</th>
                  <th>Age</th>
                  <th>Total Marks</th>
                  <th>
                    Action
                  </th>
                </tr>
              </tfoot>
              <tbody>
                {
                students.map((stu) => {
                  
                  return <tr>
                  <td>{stu.Name}</td>
                  <td>{stu.Standard}</td>
                  <td>{stu.Section}</td>
                  <td>{stu.Age}</td>
                  <td>{stu.Totalmarks}</td>
                  
                  <td>
                    <Link to={`/portal/students/view/${stu.id}`} className="btn btn-warning mx-1">View</Link>
                    <Link to={`/portal/students/edit/${stu.id}`}  className="btn btn-dark mx-1">Edit</Link>
                    <button onClick={() => handleDelete(stu.id)} className="btn btn-danger mx-1">Delete</button>
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

export default Student;
