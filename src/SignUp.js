import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import {dataDefault} from './constants/User';
import {Form, Button, Card} from 'react-bootstrap';

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { username, password, displayName } = event.target.elements;
    try {
      // create new user
      await app
      .auth()
      .createUserWithEmailAndPassword(username.value, password.value)
      .then(function(result) {
        // update the new profile to contain display name
        app.auth().currentUser.updateProfile({
          displayName: displayName.value
        })
        // copy and paste the user template into firestore
        app
        .firestore()
        .collection("user").doc(username.value.toLowerCase())
        .set(dataDefault);

        // create a date +30 days in the future
        let date = new Date()
        date.setDate(date.getDate() + 30)
        let dateInFuture = new Date(date).toISOString().slice(0,10)

        // set token in sessionStorage to show welcome modal on signup
        sessionStorage.setItem('welcomeToken', JSON.stringify({welcomeToken: true}));

        // set date in firestore
        const query = {'application.applicationDate': dateInFuture}
        return app.firestore()
        .collection("user").doc(app.auth().currentUser.email)
        .update(query)
        
      })
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="signup-cover-image">
      <div className="d-flex flex-column p-4">
      <p></p>
        <div className="d-flex justify-content-center">
          <Card className="login-form" body>
            <Form onSubmit={handleSignUp}>
              <h4 className="d-flex">Simplify your visa application</h4>
                
                  <Form.Group controlId="formBasicdisplayName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control name="displayName" type="displayName" placeholder="Enter name" autofocus="true"/>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control name="username" type="username" placeholder="Enter email" />
                 
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check className="text-muted" type="checkbox" label="Remember me" />
                  </Form.Group>
                <Button variant="primary btn-block" type="submit">
                  Continue
                </Button>
                <h6>
                <br/><a href="/login">Already have an account?</a></h6>
              </Form>
            </Card>
            <p></p>
          </div>
        </div>
      </div>
    );
};

export default withRouter(SignUp);
