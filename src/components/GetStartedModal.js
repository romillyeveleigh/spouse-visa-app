import React from 'react';
import {Modal, Button, ListGroup} from 'react-bootstrap';
import '../css/ModalContainer.css';

const GetStartedModal = ( props )  => {

  return (
    <Modal
      {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      variant="info"
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <span role="img" aria-label="compass">🧭</span> Get Started 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="centered-box"><ListGroup border="3px">
      <h5>Using Spouse Visa Helper is easy. Just follow these simple steps to begin...</h5>
  <br/>
  <ListGroup.Item><mark>Step ‎1:</mark> <a href="/signup">Sign up</a> and answer a few short questions about your application, including how you meet the financial and accomodation requirements.</ListGroup.Item>
  <ListGroup.Item><mark>Step 2:</mark> Click 'Continue' when prompted. You'll see a fully-personalized checklist created just for you. This is a list of all of the documents required for your spouse visa application based on your answers in Step 1.</ListGroup.Item>
  <ListGroup.Item><mark>Step 3:</mark> Click on any document item to open it. Every item includes all the essential points you need to cover before you submit your application.</ListGroup.Item>
  <ListGroup.Item><mark>Step 4:</mark> Go through each document to update them. If you have an item, click "Yes, I have this" to turn it green, or you can choose "This is in progress".</ListGroup.Item>
  <ListGroup.Item><mark>Step 5:</mark> When all of your document items are green, congratulations! You're one step closer to a successful spouse visa application.</ListGroup.Item>
  <ListGroup.Item><span role="img" aria-label="lightbulb">💡</span> <mark>Special Tip:</mark> You can change your application settings at any time by going to the 'Settings' page after signing in.</ListGroup.Item>
</ListGroup></div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} id="modal-button" variant="info">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GetStartedModal;