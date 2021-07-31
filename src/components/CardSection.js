import React from 'react'
import { Card } from 'react-bootstrap'
import "../style/CardSection.css";

function CardSection(props) {
    return (
        <div>
         <Card className="cardSection">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{textAlign:"start"}}>{props.name}</Card.Title>
          <Card.Text style={{textAlign:"start",textDecoration:"none"}} className="desc" >
          {props.description}
          </Card.Text>
          {
            props.isCategory === true ? null : <Card.Text style={{fontWeight:"bold" , textAlign:"start"}}>
          {props.price} Rs.
          </Card.Text> 
          }
         
        </Card.Body>
      </Card>
        </div>
    )
}

export default CardSection
