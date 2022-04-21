import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addtoCart } from '../../store/cart-reducer';

export default function CategoryProducts() {
    const navigates = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.au.auth
    })
    const location = useLocation();
    const category = location.state;
    const userid = user.id
    const addToCart = (product, userid) => {
        dispatch(addtoCart(product, userid))
    }
    function Hdeatails(product){
        // var newData = Object.assign(product)

        navigates("/detail", {state:{product:product, category:category._id}});
    
      }


    if (category) {
        console.log("category", category);
        return (<><div class="col-lg-9 mx-auto col-md-12">
            <div class="row  pb-3">

                {category.products.map((product) => {
                    return (






                        <div class="col-lg-4 col-md-6 mt-4  col-sm-12 pb-1">
                            <div class="card product-item border-0 mb-4">
                                <div class="card-header h-72 product-img position-relative overflow-hidden bg-transparent border p-0 ">
                                    <img class="img-fluid h-60 mx-auto my-auto " style={{ width: '250px', height: '280px' }} src={product.image} alt="" />
                                </div>
                                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                    <h6 class="text-truncate mb-3">{product.title}</h6>
                                    <div class="d-flex justify-content-center">
                                        <h6>{product.price} ₹ </h6>
                                    </div>
                                </div>
                                <div class="card-footer d-flex justify-content-between bg-light border">
                                    <a  onClick={()=>Hdeatails(product )} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                                    {user.auth && <a onClick={() => addToCart(product, userid)} class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>}
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div> </>)
    } else {
        return (<><h1>Please Select Category</h1>
            <div>Move to Category</div></>)
    }
}
