import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import '../css/ModalContainer.css';

const ContactUsModal = ( props )  => {

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
         Contact Us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

<Form action="https://submit-form.com/DdoZSZCNl2erm7K2I1Xh_" target="_self">
  <Form.Group controlId="formBasicEmail">
    <Form.Control name="subject" type="text" placeholder="Subject" required/>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Control name="message" as="textarea" rows="3" placeholder="Message..." required/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Control name="email" type="text" placeholder="Your email" required/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </Modal.Body>
    </Modal>
  );
}

export default ContactUsModal;