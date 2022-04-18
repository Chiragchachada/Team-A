import React, { useState } from "react";
import products from "../component/data";
import {Modal} from "react-bootstrap";

export default function Product({ item }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "50px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
     <div onClick={handleShow} style={{cursor:'pointer'}}>
     <h1>{item.title}</h1>
      <img
        src={item.image}
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      ></img>
     </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>SIZE</p>
          <select
            className="form-control"
            value={varient} style={{cursor:'pointer'}}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {item.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select 
            className="form-control"
            value={quantity}style={{cursor:'pointer'}}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-2" style={{cursor:'pointer'}}>Price :{item.prices[0][varient] * quantity}₹</h1>
          
        </div>

        <div className="m-1 w-100">
          <button className="btn"> ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
  <Modal.Header closeButton onClick={handleClose}>
    <Modal.Title>{item.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img src={item.image} className="img-fluid " style={{height:"450px"}}></img>
    
  </Modal.Body>
  

  <Modal.Footer>
  <button className="btn" onClick={handleClose}>close</button>
   
  </Modal.Footer>
</Modal>
    </div>
  );
}

