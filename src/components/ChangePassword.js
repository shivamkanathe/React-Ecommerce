import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "../style/ChangePassword.css";

function ChangePassword() {
    return (
        <div className="container">
            <div className="mainChange">
                <h2>Change Password</h2>
                <Form className="forms">
  <Form.Group className="mb-3" controlId="forpassword">
    <Form.Label>Current Password</Form.Label>
    <Form.Control className="changeinput" type="password" placeholder="Enter Current Password" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>New Password</Form.Label>
    <Form.Control className="changeinput" type="password" placeholder="Enter New Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Change
  </Button>
</Form>
            </div>
        </div>
    )
}

export default ChangePassword
