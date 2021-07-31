
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "../style/LoginPage.css"

function LoginPage() {
const [signUp, setSignUp] = useState(false);

    const handleSignup = () => {
        setSignUp(true);
    }
    const handleLogin = () => {
        setSignUp(false);
    }

    return (
        <div className="container" id="login">
            <div className="mainDiv">
                <h2 style={{fontWeight:"bold",paddingBottom:"50px"}}>{signUp ? "SignUp" : "Login" }</h2>
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="inpt" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="inpt" />
  </Form.Group>
    {signUp ? null :<div className="paras">
    <p >Forget password?</p>
    </div>}
 <div className="btnSection">
 <Button variant="primary" type="submit" className="btn">
    Submit
  </Button>
 </div>
</Form>

{signUp ? <p style={{textAlign:"center"}}>Already have an account? <span style={{color:"blue",cursor:"pointer"}} onClick={handleLogin} >Login</span> </p>
: <p style={{textAlign:"center"}}>Don't have an account? <span style={{color:"blue",cursor:"pointer"}} onClick={handleSignup} >Signup</span> </p>
}
            </div>      
        </div>
    )
}

export default LoginPage
