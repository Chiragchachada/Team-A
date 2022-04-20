import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../../store/cart-reducer';


function DetailsProduct() {
    const [quantity, setquantity] = useState(1);

    const user = useSelector((state) => {
        return state.au.auth;
    });
    const dispatch = useDispatch();
    const userid = user.id;
    const locations = useLocation()

    const products = locations.state;
    console.log("kd", products)
    const addToCart = (products, userid,quantity) => {
        dispatch(addtoCart(products, userid, quantity));
    };
 const incNum=()=>{
     setquantity(quantity+1)
 }
const decNum =()=>{
    setquantity(quantity-1)
}
    if (products) {
        return (
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
                            <button className="btn btn-primary px-3 " onClick={() => addToCart(products, userid,quantity)}><i className="fa fa-shopping-cart mr-1 "></i> {' '} Add To Cart</button>
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
                                        <h4 className="mb-4">1 review for {products.title}</h4>
                                        <div className="media mb-4">
                                            {/*<img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }}></img> */}
                                            <div className="media-body">
                                                <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                <div className="text-primary mb-2">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                    <i className="far fa-star"></i>
                                                </div>
                                                <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h4 className="mb-4">Leave a review</h4>
                                        <small>Your email address will not be published. Required fields are marked *</small>
                                        <div className="d-flex my-3">
                                            <p className="mb-0 mr-2">Your Rating * :</p>
                                            <div className="text-primary">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <label for="message">Your Review *</label>
                                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label for="name">Your Name *</label>
                                                <input type="text" className="form-control" id="name"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="email">Your Email *</label>
                                                <input type="email" className="form-control" id="email"></input>
                                            </div>
                                            <div className="form-group mb-0">
                                                <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


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