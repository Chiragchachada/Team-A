import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
            <div className="row px-xl-5 pt-5">
                <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">

                    <h1>E Shopper</h1>

                    <p>This is an E-commerce Application created by Team-A ... We are doing this under eClerx guidance and support </p>
                    <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3"></i>29 Bank Street, Mumbai, INDIA</p>
                    <p className="mb-2"><i className="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                    <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3"></i>+91 022 6614 8655</p>
                </div>
                <div className="col-lg-8 col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-dark mb-2" href="Home"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                <a className="text-dark mb-2" href="Home"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                <a className="text-dark mb-2" href="About"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                <a className="text-dark mb-2" href="Cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                <a className="text-dark mb-2" href="Checkout"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                                <a className="text-dark" href="Contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-dark mb-2" href="Home"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                <a className="text-dark mb-2" href="Home"><i className="fa fa-angle-right mr-2"></i>Our Shop</a>
                                <a className="text-dark mb-2" href="About"><i className="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                <a className="text-dark mb-2" href="Cart"><i className="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                <a className="text-dark mb-2" href="Checkout"><i className="fa fa-angle-right mr-2"></i>Checkout</a>
                                <a className="text-dark" href="Contact"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <h5 className="font-weight-bold text-dark mb-4">Prime Subscription</h5>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 py-4" placeholder="Your Name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control border-0 py-4" placeholder="Your Email"
                                        required="required" />
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border-top border-light mx-xl-5 py-4">
                <div className="col-md-6 px-xl-0">
                    <p className="mb-md-0 text-center text-md-left text-dark">
                        &copy; <a className="text-dark font-weight-semi-bold" href="#">E-Shopper</a>. All Rights Reserved. Designed
                        by
                        <a className="text-dark font-weight-semi-bold" href="https://eClerx.com">  eClerx</a><br />
                        Distributed By <a href="https://eclerx.com" target="_blank">Team-A</a>
                    </p>
                </div>
                <div className="col-md-6 px-xl-0 text-center text-md-right">
                    <img className="img-fluid" src="img/payments.png" alt="" />
                </div>
            </div>
        </div>
    )
}
