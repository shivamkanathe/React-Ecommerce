import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../style/AddAddress.css";

function AddAddress() {
  return (
    <div className="container">
      <div className="address">
        <h2>Address</h2>
        <Form className="addform">
            <Row>
                <Col lg={6} md={6}>
                <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control className="forminput" type="text" placeholder="Enter City" />
          </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                <Form.Group className="mb-3" controlId="contact">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control className="forminput" type="text" placeholder="Enter Contact Number" />
          </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={6}>
                <Form.Group className="mb-3" controlId="houseNumber">
            <Form.Label>House Number</Form.Label>
            <Form.Control className="forminput" type="text" placeholder="Enter House Number" />
                </Form.Group>
                </Col>
                <Col lg={6} md={6}>
                <Form.Group className="mb-3" controlId="buldingNumber">
            <Form.Label>Building Name</Form.Label>
            <Form.Control className="forminput" type="text" placeholder="Enter Building Number" />
          </Form.Group>
                </Col>
            </Row>
        
          <Form.Group className="mb-3" controlId="street">
            <Form.Label>Street</Form.Label>
            <Form.Control className="forminput" type="text" placeholder="Enter Street" />
          </Form.Group>
          
      
          <Form.Group className="mb-3" controlId="area">
            <Form.Label>Area</Form.Label>
            <Form.Control className="forminput" type="text" placeholder="Enter Area"/>
          </Form.Group>

          <Button variant="primary" type="submit" style={{marginTop:"15px"}}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddAddress;
