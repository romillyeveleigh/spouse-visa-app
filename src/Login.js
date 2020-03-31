import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import {Form, Button, Card} from 'react-bootstrap';


const Login = ({ history }) => {

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { username, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(username.value.toLowerCase(), password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  console.log('Set currentUser to:', currentUser, 'in Login.js')

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin-cover-image">
    <div className="d-flex flex-column p-4">
      
      <p></p>
<div className="d-flex justify-content-center">
<Card className="login-form" body>
<Form onSubmit={handleLogin}>
<h4 className="d-flex">Sign in</h4>
<h6><a href="/signup">Don't have an account?</a></h6>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="username" type="username" placeholder="Enter email" autoFocus={true}/>
    
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>
  <Button variant="primary btn-block" type="submit">
    Sign in
  </Button>
</Form>
</Card>
<p></p>
</div>
    </div>
    </div>
  );
};

export default withRouter(Login);
