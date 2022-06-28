import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Viewuser() {
  const users = [
    {
      id: 1,
      Name: "Person 1",
      Position: "System Architect",
      Office: "Chennai",
      Age: 36,
      Startdate: "12/03/2013",
      Salary: 320000,
    },
    {
      id: 2,
      Name: "Person 2",
      Position: "Software Developer",
      Office: "Bangalore",
      Age: 41,
      Startdate: "15/03/2011",
      Salary: 550000,
    },
    {
      id: 3,
      Name: "Person 3",
      Position: "Software Engineer",
      Office: "Cochin",
      Age: 32,
      Startdate: "25/08/2016",
      Salary: 2320000,
    },
    {
      id: 4,
      Name: "Person 4",
      Position: "System Architect",
      Office: "Chennai",
      Age: 36,
      Startdate: "12/06/2015",
      Salary: 320000,
    },
    {
      id: 5,
      Name: "Person 5",
      Position: "Graphic Designer",
      Office: "Noida",
      Age: 42,
      Startdate: "08/05/2013",
      Salary: 120000,
    },
  ];
  let params = useParams();

  return (
    <>
  
  <div class="d-flex justify-content-start align-items-center">
      <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
      <Link to="/portal/users">
        <i class="fas fa-arrow-left text-white" aria-hidden="true"></i> </Link>
      </div>
      <h1 className="mx-2 px-4 py-2 mb-2 text-gray-800">{users[params.id - 1].Name}</h1></div>
      <hr className="sidebar-divider d-none d-md-block" />

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
                <th>Action</th>
              </tr>
            </thead>
            <tr>
              <td>{users[params.id - 1].Name}</td>
              <td>{users[params.id - 1].Position}</td>
              <td>{users[params.id - 1].Office}</td>
              <td>{users[params.id - 1].Age}</td>
              <td>{users[params.id - 1].Startdate}</td>
              <td>${users[params.id - 1].Salary}</td>
              <td>
                <Link
                  to={`/portal/users/view/edit/${users[params.id - 1].id}`}
                  className="btn btn-warning"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Viewuser;
