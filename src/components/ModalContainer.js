import React from 'react';
import {render} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';
import {props} from './Card';
import '../css/ModalContainer.css';

function ModalContainer (props, description) {

  	return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.description}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.content}</p>
          <p>Make sure that:</p>
            <div className="was-validated">
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customControlValidation1" required />
                <label className="custom-control-label" htmlFor="customControlValidation1">It's dated within the last 6 months.</label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customControlValidation2" required />
                <label className="custom-control-label" htmlFor="customControlValidation2">It's in English.</label>
              </div>
              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customControlValidation3" required />
                <label className="custom-control-label" htmlFor="customControlValidation3">It's the original document.</label>
              </div>
            </div>
        <p>What is the current status of this?</p>
          <div className="was-validated">
            <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input red" id="customControlValidationA" name="radio-stacked" required />
              <label className="custom-control-label" htmlFor="customControlValidationA">I don't have it yet.</label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input orange" id="customControlValidationB" name="radio-stacked" required />
              <label className="custom-control-label" htmlFor="customControlValidationB">This is in progress.</label>
            </div>
            <div className="custom-control custom-radio mb-3">
                <input type="radio" className="custom-control-input green" id="customControlValidationC" name="radio-stacked" required />
                <label className="custom-control-label" htmlFor="customControlValidationC">I have this.</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default ModalContainer;