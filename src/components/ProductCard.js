import React from 'react'
import { Card } from 'react-bootstrap'
import "../style/ProductCard.css";

function ProductCard(props) {
    return (
        <div>
         <Card className="cardSections">
        <Card.Img variant="top" src={props.image} className="productImage" />
        <Card.Body>
          <Card.Title className="titleName">{props.name}</Card.Title>
          <Card.Text  className="desc" >
          {props.description}
          </Card.Text>
          {
            props.isCategory === true ? null : <p className="pricetag">
          {props.price} Rs.
          </p> 
          }
         
        </Card.Body>
      </Card>
        </div>
    )
}

export default ProductCard
