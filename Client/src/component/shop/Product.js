import React, { useState } from "react";
import {Modal} from "react-bootstrap";
// import '../../css/Style.css'


export default function Product({ product, search }) {
  const [quantity, setquantity] = useState();
  const [varient, setvarient] = useState("small");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);







  return (
    <>
    
{/* Page Product design start */}
    <div
      style={{  borderRadius:'40px', margin: '0px' }}
      className="shadow-lg   mb-5  bg-white  cat-item "
    >
     <div onClick={handleShow}  style={{cursor:'pointer'}} className=' '>
    
     <h1 id="small" >{product.title}</h1>
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
          <p className="mt-3  text-muted" style={{ fontSize: '14px'}}>Quantity</p>
          <select 
            className="form-control mx-auto p-0 text-center mt-2 shadow rounded  text-muted" 
            value={quantity} style={{cursor:'pointer',width:"40px"}}
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
          <h1  className="mt-2 text-muted" style={{cursor:'pointer', fontSize: '14px'}}>Price: {product.price}₹</h1>
          
        </div>
        
        
      </div>

      <div className="flex-container">
       

        <div className="m-1 w-100">
          <button className="btn btn-primary rounded shadow"> ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} >
  <Modal.Header closeButton onClick={handleClose}>
   
  </Modal.Header>

  <Modal.Body >
  <img src={product.image} className="img-fluid mx-auto" style={{height:"530px"}}></img>
    
  </Modal.Body>
  

  
</Modal>
    </div>
    {/* Page Product design end */}
    </>
  );
}

