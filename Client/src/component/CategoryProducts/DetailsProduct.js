import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../store/cart-reducer';
import {addreview} from '../../store/product-reducer'
import { toast, ToastContainer } from 'react-toastify';


function DetailsProduct() {
    const[quantity, setquantity]= useState(1)
  const [comment, setComment] =useState('')
  const [name, setName] =useState('')
  const [emailId, setEmailId] =useState('')

  const navigate = useNavigate();

    const user = useSelector((state) => {
        return state.au.auth;
    });
    const dispatch = useDispatch();
    const userid = user.id;
    const locations = useLocation()

    const data = locations.state;
    
    const products = data.product
    const addToCart = (products, userid,quantity) => {
        dispatch(addtoCart(products, userid, quantity));
    };

    
    const incNum=()=>{
     setquantity(quantity+1)
    }
    const decNum =()=>{
    setquantity(quantity-1)
    }

    function Addreview(){
        dispatch(addreview(data.category,{productid:products._id, reviews:{name:name, comment:comment, emailid:emailId}}))
        setName("")
        setComment("")
        setEmailId("")
        
        navigate("/")
    }

    const valNot = () => {
        toast.success('Added successfully', {
          position: 'top-center',
          autoClose: 1000,
        });
      };

      const valNot1 = () => {
        toast.success('Review Added', {
          position: 'top-center',
          autoClose: 1000,
        });
      };

    if (data) {
        return (
            <>
            <div className="container-fluid py-5">
                <div className="row px-xl-5">

                    <div className="col-lg-5 pb-5 mx-auto">
                        <div id="product-carousel" className="carousel slide mx-auto" data-ride="carousel">
                            <div className="carousel-inner ">
                                <div className="carousel-item active "   style={{ height: "300px", width: "300px" }}>
                                    <img className="w-100 h-100"    src={products.image} alt="Image"></img>
                                </div>

                            </div>
                           
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold ">{products.title}</h3>
                        
                           
                          
                               <div >
                            
                  
                          
                        </div>
                        <div >
                        <h3 className="font-weight-semi-bold mb-4">{products.price}₹</h3>
                        </div>
                        <p className="mb-4"> {products.description}</p>
                        

                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: '130px' }} >
                                <div className="input-group-btn ">
                                    <button className="btn btn-primary btn-minus" onClick={decNum} >
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control bg-secondary text-center" value={quantity}></input>
                                <div className="input-group-btn ">
                                    <button onClick={incNum} className="btn btn-primary btn-plus ">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='text-center mx-auto' >
                            {user.auth &&<button className="btn btn-primary px-3 " onClick={() => {addToCart(products, userid,quantity)
                            valNot()}}><i className="fa fa-shopping-cart mr-1 "></i> {' '} Add To Cart</button>}
                            </div>
                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                            <a className="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
                            <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews</a>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <h4 className="mb-3">{products.description}</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-2">
                                <h4 className="mb-3">Additional Information</h4>
                                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item px-0">
                                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                            </li>
                                            <li className="list-group-item px-0">
                                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-pane-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4 className="mb-4">{products.reviews.length} review for {products.title}</h4>
                                        <div className="media mb-4">
                                        <div className="media-body">
                                          {products.reviews.map((review)=>{
                                              console.log("review", review);
                                            return(<>
                                                <h6>{review.name}<small> - <i>{review.createdAt}</i></small></h6>
                                                {/* <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div> */}
                                                <p>{review.comment}</p>
                                                </>)
                                          })}  
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <div className="d-flex my-3">
                                        {/* <p class="mb-0 mr-2">Your Rating * :</p>
                                    <div class="text-primary">
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div> */}
                                        </div>
                                        
                                            <div className="form-group ">
                                                <label for="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" value={comment}
                                                onChange={(e)=>setComment(e.target.value)} className="form-control"></textarea>
                                            </div>
                                            
                                            <div className="form-group">
                                                <label for="name">Your Name *</label>
                                                <input type="text" className="form-control" value={name}
                                               onChange={(e)=>setName(e.target.value)}id="text"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Your Email *</label>
                                                <input type="email" className="form-control" value={emailId}
                                               onChange={(e)=>setEmailId(e.target.value)}id="email"></input>
                                            </div>
                                            <div className="form-group">
                                                <button  value="Leave Your Review"  onClick={()=>{Addreview(data.category,{productid:products._id, reviews:{name:name, comment:comment, emailid:emailId}})
                                                 valNot1()}}
                                                  className="btn btn-primary px-3">Leave Your Review</button>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <ToastContainer theme='dark' />
</>

        )
    }
    else {
        return (
            <div>
                <p>404 NOT FOUND</p>
            </div>
        )
    }
}

export default DetailsProduct