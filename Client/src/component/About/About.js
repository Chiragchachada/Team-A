import React, { useState } from "react";

import { Link } from 'react-router-dom';



export default function Contact() {
    return (
        <>
            <section className="container h-100">
                 <div className="row">
                    <div className="col-md-12">

                        <h2 className="text-center my-5">-Meet Our Team Members-</h2>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3">
                        <div className="shadow d-flex justify-content-center p-3 bg-dark rounded-lg flex-column">
                            {/* <div className="person-img">
                                <img src={"https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} className="img-fluid rounded-circle" alt="img-1"></img>
                            </div> */}
                            <div className="person-name my-2">
                                <h3 className="text-white">Shubham</h3>

                            </div>
                            <div className="info">
                                <h6 className="text-white">Full-Stack Developer</h6>

                            </div>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">View Profile</button>

                        </div>
                        
                    </div>
                   
                    <div className="col-lg-3 col-md-4 col-sm-3">
                        <div className="shadow d-flex justify-content-center p-3 bg-dark rounded-lg flex-column">
                            {/* <div className="person-img">
                                <img  src={"https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} className="img-fluid rounded-circle" alt="img-1"></img>
                            </div> */}
                            <div className="person-name my-2">
                                <h3 className="text-white">Chirag</h3>

                            </div>
                            <div className="info">
                                <h6 className="text-white">FUll-Stack Developer</h6>

                            </div>

                            <button type="button" className="btn btn-secondary btn-lg btn-block">View Profile</button>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3">
                        <div className="shadow d-flex justify-content-center p-3 bg-dark rounded-lg flex-column">
                            {/* <div className="person-img">
                                <img src={"https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }className="img-fluid rounded-circle" alt="img-1"></img>
                            </div> */}
                            <div className="person-name my-2">
                                <h3 className="text-white">Ankit</h3>

                            </div>
                            <div className="info">
                                <h6 className="text-white">Web Developer</h6>

                            </div>

                            <button type="button" className="btn btn-secondary btn-lg btn-block">View Profile</button>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3">
                        <div className="shadow d-flex justify-content-center p-3 bg-dark rounded-lg flex-column">
                            {/* <div className="person-img">
                                <img src={"https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} className="img-fluid rounded-circle" alt="img-1"></img>
                            </div> */}
                            <div className="person-name my-2">
                                <h3 className="text-white">Anbumani</h3>

                            </div>
                            <div className="info">
                                <h6 className="text-white">Full-Stack Developer</h6>

                            </div>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">View Profile</button>

                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-3">
                        <div className="shadow d-flex justify-content-center p-3 mt-4 bg-dark rounded-lg flex-column">
                            {/* <div className="person-img">
                                <img src={"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} className="img-fluid rounded-circle" alt="img-1"></img>
                            </div> */}
                            <div className="person-name my-2">
                                <h3 className="text-white">Rupesh</h3>

                            </div>
                            <div className="info">
                                <h6 className="text-white">Front-End Developer</h6>

                            </div>

                            <button type="button" className="btn btn-secondary btn-lg btn-block">View Profile</button>
                        </div>

                    </div>
                    

                </div>

            </section>
        </>
    )
}