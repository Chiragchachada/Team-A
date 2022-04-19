import React from 'react'
import { useLocation } from 'react-router-dom';

export default function CategoryProducts() {
    const location = useLocation();
    const category = location.state;
    console.log("qw",category);

  if(category){
      return(<><div class="col-lg-9 mx-auto col-md-12">
      <div class="row  pb-3">
      
      {category.products.map((product)=>{
          return( 
              
             
             
             
            
             
              <div class="col-lg-4 col-md-6 mt-4 col-sm-12 pb-1">
                  <div class="card product-item border-0 mb-4">
                      <div class="card-header h-72 product-img position-relative overflow-hidden bg-transparent border p-0">
                          <img class="img-fluid  mx-auto " src={product.image} alt=""/>
                      </div>
                      <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 class="text-truncate mb-3">{product.title}</h6>
                          <div class="d-flex justify-content-center">
                              <h6>{product.price}</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6>
                          </div>
                      </div>
                      <div class="card-footer d-flex justify-content-between bg-light border">
                          <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                          <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                      </div>
                  </div>
              </div>
              
         )
      })}
      
      </div>
      </div> </>)
  }else{
      return(<><h1>Please Select Category</h1>
      <div>Move to Category</div></>)
  }
}
