import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import book from "../Images/books.jpg"
import "../style/OrderCart.css"

function OrderCart(props) {
    return (
        <div className = "orderCart">
            <Row>
                <Col lg={6} md={6}>
                    <div className="detail">
                        <Image className="imagee" src={props.image} responsive/>
                        <div style={{paddingLeft:"15px",textAlign:"start",justifyContent:"center"}}>
                        <p style={{paddingTop:0,paddingBottom:"3px",marginTop:"3px",marginBottom:0,fontWeight:"bold"}}>{props.name}</p>
                        <p style={{fontWeight:600,color:"black"}}>Rs. {props.price}</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6}>
                   <div className="right">
                   <p style={{paddingTop:0,paddingBottom:"3px",marginTop:"3px",marginBottom:0,fontWeight:700,color:props.status === "Delivered" ? "green": props.status === "Progress" ? "orange":"red"}}>{props.status === "Delivered" ? "Delivered" : props.status==="Progess" ?" In-Progress":"Cancelled"}</p>
                    <p style={{paddingTop:0,paddingBottom:"3px",marginTop:"3px",marginBottom:0, fontSize:"12px"}}>{props.status === "Delivered" ? "Your product has been delivered" : props.status === "Progress" ? "Your product is on way" : "You have cancelled order"}</p>
                    <p style={{paddingTop:0,paddingBottom:"3px",marginTop:"3px",marginBottom:0}}>Delivery Date: {props.date}</p>
                    <div style={{display:"flex", paddingTop:"10px"}}>
                    {props.status === "Delivered" ?<> <FontAwesomeIcon icon={faStar} className="start"/>
                    <FontAwesomeIcon icon={faStar} className="start" />
                    <FontAwesomeIcon icon={faStar} className="start" />
                    <FontAwesomeIcon icon={faStar} className="start" />
                    <FontAwesomeIcon icon={faStar}  className="start"/></> : props.status === "Progress" ? null : "No ratings" }
                    
                    </div>
                   </div>
                    </Col>
            </Row>
        </div>
    )
}

export default OrderCart
