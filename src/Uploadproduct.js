import React from 'react'
import { Link } from "react-router-dom";

function Uploadproduct() {
  return (
      <>
      <div className='container'>

      <div class="d-flex justify-content-start align-items-center">
      <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
      <Link to="/portal/products">
        <i class="fas fa-arrow-left text-white" aria-hidden="true"></i> </Link>
      </div>
      <h1 class="text-center text-uppercase font-weight-bold">Product Details</h1></div>
       <hr className="sidebar-divider d-none d-md-block" />
      <div class="mb-3">
            <form>
           
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="pname">Product Name</label>
          <input type="text" class="form-control" id="pname" placeholder="Product Name"/>
        </div>
        <div class="form-group col-md-6">
          <label for="price">Product Price</label>
          <input type="text" class="form-control" id="price" placeholder="Product Price"/>
        </div>
        <div class="form-group col-md-12">
        <label for="description">Product Description</label>
        <input type="text" class="form-control" id="description" placeholder="Product Description"/>
      </div>
        
      </div></form>
      <label for="formFile" class="form-label">Product Image</label>
      <input class="form-control" type="file" id="formFile"/>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <button type="submit" className="btn btn-primary"><i
                                className="fas fa-upload fa-sm text-white-50 px-2"></i>Upload</button>
      </div>
        </div></>
  )
}

export default Uploadproduct