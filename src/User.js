import React from "react";
import { Link } from "react-router-dom";

function User() {

  const users = [
    {
      id : 1,
      Name : "Person 1",
      Position : "System Architect",
      Office : "Chennai",
      Age : 36,
      Startdate : "12/03/2013",
      Salary : 320000
    },
    {
      id : 2,
      Name : "Person 2",
      Position : "Software Developer",
      Office : "Bangalore",
      Age : 41,
      Startdate : "15/03/2011",
      Salary : 550000
    },
    {
      id : 3,
      Name : "Person 3",
      Position : "Software Engineer",
      Office : "Cochin",
      Age : 32,
      Startdate : "25/08/2016",
      Salary : 2320000
    },
    {
      id : 4,
      Name : "Person 4",
      Position : "System Architect",
      Office : "Chennai",
      Age : 36,
      Startdate : "12/06/2015",
      Salary : 320000
    },
    {
      id : 5,
      Name : "Person 5",
      Position : "Graphic Designer",
      Office : "Noida",
      Age : 42,
      Startdate : "08/05/2013",
      Salary : 120000
    }
  ]
  

  return (
    <>
    <div className="d-sm-flex align-items-center justify-content-around mb-4">
    <h1 className="text-center text-uppercase font-weight-bold">Users</h1>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <Link to="createuser" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-upload fa-sm text-white-50 px-2"></i> Create User</Link>
                    </div>
</div>
      
      
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Users
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
                  <td>{mem.Age}</td>
                  <td>{mem.Startdate}</td>
                  <td>${mem.Salary}</td>
                  <td>
                    <Link to={`/portal/users/view/${mem.id}`} className="btn btn-warning mx-1">View</Link>
                    <button className="btn btn-dark mx-1">Edit</button>
                    <button className="btn btn-danger mx-1">Delete</button>
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
