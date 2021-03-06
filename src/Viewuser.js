import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useFormik } from "formik";

function Viewuser() {
  let params = useParams();
  
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
    validate: (values) => {
      let errors = {};

      if (!values.Name) {
        errors.Name = "Please enter your name";
      } else if (values.Name.length < 5) {
        errors.Name = "Character should be more than 5";
      }

      if (!values.Position) {
        errors.Position = "please enter your position";
      }

      if (!values.Email) {
        errors.Email = "please enter your eMail ID";
      }

      if (values.Age < 18) {
        errors.Age = "Age must be above 18";
      }

      return errors;
    },
    onSubmit: () => {},
  });
  useEffect(() => {
    let fetchdata = async () => {
      let userData = await axios.get(
        `https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/staffs/${params.id}`
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
          <Link to="/portal/users">
            <i class="fas fa-arrow-left text-white" aria-hidden="true"></i>{" "}
          </Link>
        </div>
        <h1 className="mx-2 px-4 py-2 mb-2 text-gray-800">
          {formik.values.Name}
        </h1>
      </div>
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center">
        <img
          className="personimage img-thumbnail rounded-circle z-depth-2"
         
          alt="100x100"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          data-holder-rendered="true"
        />
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
              </tr>
            </thead>
            <tr>
              <td>{formik.values.Name}</td>
              <td>{formik.values.Position}</td>
              <td>{formik.values.Office}</td>
              <td>{formik.values.Email}</td>
              <td>{formik.values.Age}</td>
              <td>{formik.values.Startdate}</td>
              <td>$ {formik.values.Salary}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Viewuser;
