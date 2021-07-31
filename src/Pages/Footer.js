import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../style/Footer.css";

function Footer() {
    return (
        <div className="container-fluid footer">
            <Row className="footer-row ">
                <Col lg={3}>
                    <h3>Ecommerce</h3>
                    <li>Ports to get digital products</li>
                    <li>2020 Onports.All rights are reserved</li>
                </Col>
                <Col lg={2}>
                    <h4>Products</h4>
                    <li>Fashion Cloths</li>
                    <li>Electronic</li>
                    <li>Study Material</li>
                </Col>
                <Col lg={2}>
                    <h4>Service</h4>
                    <li>Online Shopping</li>
                    <li>Be a member</li>
                    <li>Expand with us</li>
                </Col>
                
            </Row>
        </div>
    )
}

export default Footer
