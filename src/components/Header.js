import React, { useEffect } from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import app from "../base";
import { AuthContext } from "../Auth";
import GetStartedModal from "./GetStartedModal";
import FAQModal from "./FAQModal";
import ContactUsModal from "./ContactUsModal";
import { useState } from 'react';

const LoggedOutView = ( {currentUser} ) => {

const [modalShow1, setModalShow1] = useState(false);
const [modalShow2, setModalShow2] = useState(false);
const [modalShow3, setModalShow3] = useState(false);

const user = app.auth().currentUser;

  if (!user) {

    return (
             <div>
             <Navbar bg="light" variant="light" expand="sm">
  <Navbar.Brand href="/">
  <img  alt=""
        src="/visa_icon.png"
        width="40"
        height="40"
        className="d-inline-block align-middle"
      />{' '}Spouse Visa Helper</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/login">Sign in</Nav.Link>
      <NavDropdown title="Help" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => setModalShow1(true)}>Get Started</NavDropdown.Item>
        <NavDropdown.Item onClick={() => setModalShow2(true)}>FAQs</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => setModalShow3(true)}>Contact Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav inline="true">
      <Nav.Link href="/signup">Sign up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<GetStartedModal 
show={modalShow1}
onHide={() => setModalShow1(false)}
/>
<FAQModal 
show={modalShow2}
onHide={() => setModalShow2(false)}
/>
<ContactUsModal 
show={modalShow3}
onHide={() => setModalShow3(false)}
/>

</div>

    );
  }
  return null;
};

const LoggedInView = ( { currentUser } ) => {

const [modalShow1, setModalShow1] = useState(false);
const [modalShow2, setModalShow2] = useState(false);
const [modalShow3, setModalShow3] = useState(false);

const user = app.auth().currentUser;

  if (user) {

    if (window.location.pathname==="/") {window.location="/home";}

    return (
     <div>
     <Navbar bg="light" variant="light" expand="sm">
  <Navbar.Brand href="/home">
  <img  
        alt=""
        src="/visa_icon.png"
        width="40"
        height="40"
        className="d-inline-block align-middle"
      />{' '}Spouse Visa Helper</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/settings">Settings</Nav.Link>
      <NavDropdown title="Help" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => setModalShow1(true)}>Get Started</NavDropdown.Item>
        <NavDropdown.Item onClick={() => setModalShow2(true)}>FAQs</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => setModalShow3(true)}>Contact Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav inline="true">
      <Nav.Link href="/settings">{}
        <AuthContext.Consumer>
          {props => {
            if (props.currentUser.displayName!==null) {return 'Hello, '+props.currentUser.displayName}
            else {return 'Hello, new user'}
          }}
        </AuthContext.Consumer>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>

  
</Navbar>

<GetStartedModal 
show={modalShow1}
onHide={() => setModalShow1(false)}
/>
<FAQModal 
show={modalShow2}
onHide={() => setModalShow2(false)}
/>
<ContactUsModal 
show={modalShow3}
onHide={() => setModalShow3(false)}
/>

</div>
    );
  }
  return null;
};

const Header = ({currentUser}) => {

  useEffect(() => {
  });

    return (
        <div>
          <LoggedOutView currentUser={currentUser}/>
          <LoggedInView currentUser={currentUser}/>
        </div>
    );
  
}

export default Header;
