
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../style/CustomNavbar.css";

function CustomNavbar() {
    return (
        <div style={{position:"fixed",width:"100%",zIndex:"1"}}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed >
                <Container>
                    <Navbar.Brand href="/" style={{color:"orange"}}>Ecommerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/cart">Cart</Nav.Link>
                            <Nav.Link href="/setting">Setting</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default CustomNavbar
