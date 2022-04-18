import React, { useState } from "react";
import {Modal} from "react-bootstrap";
import './Style.css'

export default function Product({ product }) {
  const [quantity, setquantity] = useState();
  const [varient, setvarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "50px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded cat-item "
    >
     <div onClick={handleShow}  style={{cursor:'pointer'}}>
     <h1>{product.title}</h1>
      <img
        src={product.image}
        className="img-fluid cat-img mx-auto "
        style={{ height: "200px", width: "200px" }}
      ></img>
     </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          {/* <p>SIZE</p> */}
         <div className="w-100 d-flex m-1">
          <p className="mt-3 me-2">Quantity</p>
          <select 
            className="form-control mx-auto p-0 text-center mt-2" 
            value={quantity} style={{cursor:'pointer',width:"50px"}}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option  value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
        </div>
        <div className=" mt-3 w-100">
          <h1 className="mt-2" style={{cursor:'pointer'}}>Price :{product.price}₹</h1>
          
        </div>
        
        
      </div>

      <div className="flex-container">
       

        <div className="m-1 w-100">
          <button className="btn btn-primary"> ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
  <Modal.Header closeButton onClick={handleClose}>
    <Modal.Title>{product.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img src={product.image} className="img-fluid " style={{height:"450px", width:"450px"}}></img>
    
  </Modal.Body>
  

  <Modal.Footer>
  <button className="btn" onClick={handleClose}>close</button>
   
  </Modal.Footer>
</Modal>
    </div>
  );
}

