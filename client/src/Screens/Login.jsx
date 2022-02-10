import React, { useState } from "react";
import { useEffect } from 'react';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import {loginUser} from '../action/userAction';



const Login = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useDispatch()

useEffect(()=>{
    if(localStorage.getItem('currentUser')){
        window.location.href="/"
    }
},[])  

const loginHandler=()=>{
    const user={email,password}
    dispatch(loginUser(user))
}



return (<>
    <Container>
    <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email 
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter esmail" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Remember me" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button onClick={loginHandler}>Sign in</Button>
    </Col>
  </Form.Group>
</Form>
    </Container>    
  </>);
};

export default Login;
