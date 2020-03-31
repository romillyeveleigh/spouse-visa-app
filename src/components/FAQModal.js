import React from 'react';
import {Modal, Button,ListGroup} from 'react-bootstrap';
import '../css/ModalContainer.css';

const FAQModal = ( props )  => {

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
         <span role="img" aria-label="scroll">📜</span> FAQs 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="centered-box"><ListGroup border="3px">
      <h5>Got a question? Here are the answers to a few common queries...</h5>
  <br/>
  <ListGroup.Item><mark>"Does Spouse Visa Helper cover every situation?"</mark><br/>We can't cover the ins-and-outs of every single situation yet, so you should still check the guidance carefully make sure your application is correct before its submitted. </ListGroup.Item>
  <ListGroup.Item><mark>"I have a suggestion! Can you change something?"</mark><br/>Sure, send us your comments and suggestions. We'll be happy to see if we can make any improvements to accuracy or to help users.</ListGroup.Item>
  <ListGroup.Item><mark>"I found something wrong! Can you fix it?"</mark><br/>Yes, please let us know if there is something wrong with the information on the website. If you're right, we'll correct it asap.</ListGroup.Item>
  <ListGroup.Item><mark>"How did you start this web app?"</mark><br/>We realized the complicated process and lack of clarity when we applied for our own spouse visa. Thankfully, our application was successful. That experience inspired us to simplify the process to help others who are following the path we went down ourselves.</ListGroup.Item>
  <ListGroup.Item><mark>"What is the full list of catories Spouse Visa Helper covers?"</mark><br/>Here is the full list for those that are interested: <small>'Main Cover Letter','Sponsor Cover Letter','Applicant's Current Passport','Applicant's Previous Passports','Sponsor's Passport and Bio Data Page','Language Test Certificate','Online Application', 'Biometric Appointment Confirmation','Visa Payment Confirmation','IHS Payment Confirmation','Letter from Sponsor's Employer','Letter from Applicant's Employer', 'Sponsor's Payslips','Applicant's Payslips','Sponsor's Bank Statements','Applicant's Bank Statements','Savings Account Statements', 'P60 (End of Year Certificate)','P60 (End of Year Certificate)','Property Ownership Document','Lease Agreement','Self-Employment Documentation','Other Income','Letter from Homeowner','Property Ownership Document','Property Rental Agreement','Photo Documentation','Marriage Certificate',Travel Tickets and Receipts','Correspondence','Proof of Living Together','Letter from Landlord or Agency'.</small></ListGroup.Item>
  <ListGroup.Item><span role="img" aria-label="light">💡</span> Special Tip: You can change your application details at any time by going to the 'Settings' page after signin.</ListGroup.Item>
</ListGroup></div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} id="modal-button" variant="info">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FAQModal;