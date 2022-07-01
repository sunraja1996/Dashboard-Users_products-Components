import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react"


function Products() {
      const [products, setProducts] = useState([])
      // on mount
      useEffect(()=>{
        
        fetchdata()
      }, [])
      
      let fetchdata = async () => {
        let userData = await axios.get("https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/product")
        setProducts(userData.data);
      }
      
      let handleDelete = async(id) => {
        let ask = window.confirm('Do you want to Delete?')
        if (ask){
          await axios.delete(`https://62bc5de3eff39ad5ee23cb9b.mockapi.io/api/product/${id}`)
          fetchdata();
        } 
      }

  return (
    <><div className="d-sm-flex align-items-center justify-content-around mb-4">
    <h1 className="text-center text-uppercase font-weight-bold">Products</h1>
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                       <Link to="uploadproducts" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-upload fa-sm text-white-50 px-2"></i>Upload Products</Link>
                    </div>
</div>
      
      <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                
       { 
       products.map((cards) => {
            return (<div className="col mb-5">
            <div className="card h-100">          
            <img className="card-img-top" src={cards.Image} alt="..." />
            <hr/>
            
            <div className="card-body p-4">
                <div className="text-center fw-bolder ">
                    
                    <h5 className="fw-bolder">{cards.Productname}</h5>
                    <span>${cards.Productprice}</span>
                </div>
            </div>
            <p className="text-center px-2 py-2"> Explore vast selection of products from Top Brands. Pay on Delivery. Best Deals. Easy and Fast Delivery. </p>

            <Link to={`/portal/products/view/${cards.id}`} className='btn btn-warning my-1'>View</Link>
            <button onClick={() => handleDelete(cards.id)} className='btn btn-danger'>Delete</button>
        </div> 
        </div> )
       })
       }
                  </div>
                    </div>
                    </section>
 
                    </>

  )
}

export default Products;