import React from 'react';
import {render} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';
import '../css/ModalContainer.css';
import Checklist from './Checklist';

const ModalContainer = props => {
  console.log('ModalContainer rendered!')
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
          {props.description} (id:{props.id})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.content}</p>
        <p>Make sure that:</p>
          <div className="was-validated">
            <Checklist id={props.id} checkthis={props.checkthis}/>
          </div>
      <p>What is the current status of this?</p>
        <div className="was-validated">
          <div className="custom-control custom-radio mb-3">
            <input type="radio" className="custom-control-input red" id="{id+'A'}" name="radio-stacked" required />
            <label className="custom-control-label" htmlFor="{id+'A'}">I don't have it yet.</label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input type="radio" className="custom-control-input orange" id="{id+'B'}" name="radio-stacked" required />
            <label className="custom-control-label" htmlFor="{id+'B'}">This is in progress.</label>
          </div>
          <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input green" id="{id+'C'}" name="radio-stacked" required />
              <label className="custom-control-label" htmlFor="{id+'C'}">I have this.</label>
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