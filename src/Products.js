import React from 'react';
import { Link } from "react-router-dom";


function Products() {
  const productdetails = [ 
    {
          id : 1,
          title : "iPhone 11",
          image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646502984732",
          price : 599,

    },
    {
          id : 2,
          title : "iPhone 13",
          image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268199",
          price : 799,

    },
    {
          id : 3,
          title : "iPhone 13 Pro",
          image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1644989935267",
          price : 999,

    },
    {
          id : 4,
          title : "iPhone 12",
          image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268265",
          price : 899,

    },
    {
          id : 5,
          title : "Samsung A8",
          image : "https://images.samsung.com/is/image/samsung/p6pim/my/sm-x200nidaxme/gallery/my-galaxy-a8-sm-x200-sm-x200nidaxme-thumb-532081628?$240_240_PNG$",
          price : 499,

    },
    {
          id : 6,
          title : "Xiaomi Pad 5",
          image : "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-5/section01.jpg",
          price : 699,

    },
    {
          id : 7,
          title : "Lenovo Yoga",
          image : "https://www.lenovo.com/medias/Yoga-9-SS-Hero-Evo.png?context=bWFzdGVyfHJvb3R8NzMxNjN8aW1hZ2UvcG5nfGg5Ny9oZGYvMTI1MTM5NjIxOTcwMjIucG5nfDE4OTUyYWUzZTc2MTJmYjc0ZTdmOTIyZWY0ZWM1OWQ1MTA1ZjJhYmZlOGY1ZmQzMmIzZGRlOGU0NGY2NTc5NDE",
          price : 399,

    },
    {
          id : 8,
          title : "iPad mini",
          image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-202109?wid=540&hei=530&fmt=jpeg&qlt=95&.v=1631751017000",
          price : 899,
    }
    
]

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
       productdetails.map((cards) => {
            return (<div className="col mb-5">
            <div className="card h-100">          
            <img className="card-img-top" src={cards.image} alt="..." />
            <hr/>
            
            <div className="card-body p-4">
                <div className="text-center fw-bolder ">
                    
                    <h5 className="fw-bolder">{cards.title}</h5>
                    <span>${cards.price}</span>
                </div>
            </div>
            <p className="text-center px-2 py-2"> Explore vast selection of products from Top Brands. Pay on Delivery. Best Deals. Easy and Fast Delivery. </p>

            <Link to={`/portal/products/view/${cards.id}`} className='btn btn-warning my-1'>View</Link>
            <button className='btn btn-danger'>Delete</button>
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