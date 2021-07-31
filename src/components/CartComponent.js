import {
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faTimes,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrow } from "@popperjs/core";
import React, { useState } from 'react';

import { Button, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "../Images/books.jpg";
import "../style/CartComponent.css";
import CustomDialog from "./CustomDialog";

function CartComponent(props) {

  console.log("this is status" +  props);
  const [quantity, setQuantity] = useState(1);
  const [isDelete, setIsDelete] = useState(true);
  const [show, setShow] = useState(false);
  const [showAddres, setShowAddres] = useState(false);
  const [address, setAddress] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAddres(false);
  }
  const handleShow = () => setShow(true);
  const showAddresss = () =>setShowAddres(true);
  
  const decrement = () => {
    if(quantity>0){ 
    setQuantity(quantity-1); 
    }
  }

  const onDelete = () =>{
    setIsDelete(false);
  }

  const addAddress = () => {
    setAddress(true);
  }

  return (
    
    <div className="main">
    {
      isDelete ? 
    
      <div className="content">
        <Row style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="show">
              <Image src={props.image} responsive className="cartImage" />
              <div className="data">
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {props.name}
                </p>
                <div style={{ display: "flex" }}>
                  <p>Quantity : {quantity}</p>
                  <div className="arrow">
                    <div className="circleup" onClick={()=>setQuantity(quantity+1)}>
                      <FontAwesomeIcon icon={faArrowUp} className="arrows" />
                    </div>
                    <div className="circledown" onClick={decrement}>
                      <FontAwesomeIcon icon={faArrowDown} className="arrows" />
                    </div>
                  </div>
                </div> 

                <p style={{   color: props.availability ? "green" : "red" , fontWeight: 500 }}> {props.availability  ? "Available" : "Not Available" }</p>

              <Link to={{pathname:props.address ? "" : "/address"}} style={{textDecoration:"none",color:"black"}}>
              <p className="des" style={{color:props.address == null ? "green":null, fontWeight:props.address == null ? 600:null,cursor:props.address == null ? "pointer" : "auto"}} onClick={props.address ==null ? addAddress : null} >{props.address == null ? "+ Add Address": props.address}</p>
              </Link> 
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}  className="colum">
         <div className="close" onClick={onDelete}>
         <FontAwesomeIcon icon={faTimes} />
         </div>
            <div className="priceData">
              <div>
                <p style={{ fontSize: "18px", fontWeight: 500 }}>Price : </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Rs.{props.price}
                </p>
              </div>

              <div>
                <p style={{ fontSize: "18px", fontWeight: 500 }}>
                  Discount Price :{" "}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Rs.{props.discount}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "18px", fontWeight: 500 }}>Delivery : </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Rs.{props.delivery}
                </p>
              </div>
              <hr style={{padding:0,margin:0}} />
              <div>
                <p style={{ fontSize: "18px", fontWeight: 500 }}>Total : </p>

                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Rs.{props.total}
                </p>
              </div>
             <div className="order">
             <CustomDialog isOpen={show} handleClose={handleClose} title="Your order is placed successfully" />
             <CustomDialog isOpen={showAddres} handleClose={handleClose} title="Please add your correct address" />
             <Button style={{backgroundColor:"orange",border:"none"}} onClick={props.address == null ? showAddresss: handleShow} >Order Now</Button>
             </div>
            </div>
          </Col>
        </Row>
      </div> : null 
    }
    </div>
 
 );
}

export default CartComponent;
