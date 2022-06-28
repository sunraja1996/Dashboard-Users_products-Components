import React from 'react'
import Sidebar from "./sidebar.js";
import Topbar from "./topbar.js";
import { Outlet } from "react-router-dom";

function Portal() {
  return (
      <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div className="container-fluid">
                  <Outlet />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portal