import React from 'react'
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";

function Viewproducts() {
      const productdetails = [ 
            {
                  id : 1,
                  title : "iPhone 11",
                  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone-11-202108?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646502984732",
                  price : 599,
                  discount : "upto 5% discount"
        
            },
            {
                  id : 2,
                  title : "iPhone 13",
                  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268199",
                  price : 799,
                  discount : "upto 10% discount"
        
            },
            {
                  id : 3,
                  title : "iPhone 13 Pro",
                  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone13pro-202203?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1644989935267",
                  price : 999,
                  discount : "upto 30% discount"
        
            },
            {
                  id : 4,
                  title : "iPhone 12",
                  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12purple-202109?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1646335268265",
                  price : 899,
                  discount : "upto 5% discount"
        
            },
            {
                  id : 5,
                  title : "Samsung A8",
                  image : "https://images.samsung.com/is/image/samsung/p6pim/my/sm-x200nidaxme/gallery/my-galaxy-a8-sm-x200-sm-x200nidaxme-thumb-532081628?$240_240_PNG$",
                  price : 499,
                  discount : "upto 25% discount"
        
            },
            {
                  id : 6,
                  title : "Xiaomi Pad 5",
                  image : "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-5/section01.jpg",
                  price : 699,
                  discount : "upto 16% discount"
        
            },
            {
                  id : 7,
                  title : "Lenovo Yoga",
                  image : "https://www.lenovo.com/medias/Yoga-9-SS-Hero-Evo.png?context=bWFzdGVyfHJvb3R8NzMxNjN8aW1hZ2UvcG5nfGg5Ny9oZGYvMTI1MTM5NjIxOTcwMjIucG5nfDE4OTUyYWUzZTc2MTJmYjc0ZTdmOTIyZWY0ZWM1OWQ1MTA1ZjJhYmZlOGY1ZmQzMmIzZGRlOGU0NGY2NTc5NDE",
                  price : 399,
                  discount : "upto 25% discount"
        
            },
            {
                  id : 8,
                  title : "iPad mini",
                  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-202109?wid=540&hei=530&fmt=jpeg&qlt=95&.v=1631751017000",
                  price : 899,
                  discount : "upto 20% discount"
            }
            
        ]
      let params = useParams();
  return (
    <>
    <div class="d-flex justify-content-start align-items-center">
      <div class="mx-2 px-4 py-2 mb-2 bg-primary bg-gradient text-white rounded-pill">
      <Link to="/portal/products">
        <i class="fas fa-arrow-left text-white" aria-hidden="true"></i> </Link>
      </div>
      <h1 className="mx-2 px-4 py-2 mb-2 text-gray-800">{productdetails[params.id - 1].title}</h1></div>
      <hr className="sidebar-divider d-none d-md-block" />

      <table class="table table-bordered ">
      <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">ID</th>
      <th scope="col">Product Name</th>
      <th colSpan="2">Product Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"class="w-25 ">
			      <img src={productdetails[params.id - 1].image} alt="products" className='img-thumbnail rounded mx-auto d-block'/></th>
      <td>{productdetails[params.id - 1].id}</td>
      <td>{productdetails[params.id - 1].title}</td>
      <td>${productdetails[params.id - 1].price}</td>
      <td>{productdetails[params.id - 1].discount}</td>

      <td>
            <button className='btn btn-danger'>Delete</button>
      </td>
      
    </tr>
  </tbody>
</table>
    </>
  )
}

export default Viewproducts