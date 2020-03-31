import React from "react";
import {ListGroup, Jumbotron, Button, Container, Row, Col} from 'react-bootstrap';
import CategoryList from './CategoryList';
import {robotsDemo} from '../constants/demo/RobotsDemo';
import {dataDefaultDemo} from '../constants/demo/UserDemo';

const WelcomePage = ({currentUser}) => {

  return (
    <div className="pt-50">
    <Jumbotron className="container-fluid jumbotron-welcome-page pb0" color="#fff" variant="light">
    <Container>
  <Row>
    <Col>
      <h1>Welcome to Spouse Visa Helper!</h1>
  <p>
    Are you applying for a UK spouse visa? Spouse Visa Helper lets you 
    easily keep track of everything you need for your online application from start to finish.
  </p>
<p>
    <Button variant="primary" onClick={() => (window.location="/signup")}>Create a free account</Button>
  </p>
    </Col>
  </Row>
</Container>
</Jumbotron>
<div className="tc bg-light-gray pt-2 pb-0">
      <p></p>{''}
        <h2 className="grey">How does it work?</h2>
        <p></p>
        <div className="centered-box"><ListGroup border="3px">
  <ListGroup.Item><mark>Step ‎1</mark>:  <a href="./signup">Sign up</a> and answer a few simple questions</ListGroup.Item>
  <ListGroup.Item><mark>Step 2</mark>:  View your personalized visa checklist</ListGroup.Item>
  <ListGroup.Item><mark>Step 3</mark>:  Click on each item to update its status</ListGroup.Item>
</ListGroup></div>
       <br /><br />
      <h4 className="silver">Try the demo. It's simple.</h4>
      <CategoryList className="pt-4" robots={robotsDemo} currentuserdata={dataDefaultDemo} isdemo="true" />
      <p>{''}</p>
      </div>
      <div className="tc bg-white pt-0 pb-2 mb-5">
        <h2 className="p-1">Sign up now to:</h2>
        <p></p>
        <p></p>
        <div className="centered-box"><ListGroup >
  <ListGroup.Item>Save your answers <span role="img" aria-label="tick">✔️</span></ListGroup.Item>
  <ListGroup.Item>Get a personalized checklist <span role="img" aria-label="tick">✔️</span></ListGroup.Item>
  <ListGroup.Item>Track your application anywhere <span role="img" aria-label="tick">✔️</span></ListGroup.Item>
</ListGroup></div>
<p></p>
        <Button onClick={() => (window.location="/signup")} variant="primary">Create a free account</Button>
        
      </div>

    </div>
  );
};

export default WelcomePage;