import React from 'react';
import { useState, useEffect } from 'react';
// import {render} from 'react-dom';
import {Modal, Button} from 'react-bootstrap';
import '../css/ModalContainer.css';
import Checklist from './Checklist';
import {user} from '../constants/User';

const ModalContainer = props => {

  // define React hook
  const [count, setCount] = useState(0);

  // look at User to see if 'got this' status was set or not
  let gotCard = user.status[props.id]
 
  // set 'got this' radio status in modal ('null', 1='don't have', 2='in progress', 3='I have this')
  let gotThisStatus1, gotThisStatus2, gotThisStatus3 = null;
  if (gotCard===1) {gotThisStatus1=true}
  else if (gotCard===2) {gotThisStatus2=true}
  else if (gotCard===3) {gotThisStatus3=true}

  // update 'got this' status in user object
  const setGotThisStatus = (status) => {
    if (status===1) {user.status[props.id]=1}
    else if (status===2) {user.status[props.id]=2}
    else if (status===3) {user.status[props.id]=3}
    // concurrently trigger React's hook function useEffect
    setCount(count + 1)
    return 'success'
  }

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
          {props.description}<h6><div id="modal-badge" className="hidden badge badge-pill badge-success">Done✓</div></h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.content}</p>
        <p>Make sure that:</p>
          <div className="was-validated">
            <Checklist 
              id={props.id} 
              checkthis={props.checkthis}
            />
          </div>
        <p>What is the current status of this?</p>
        <div className="was-validated">
            <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input red" id="{id+'A'}" name="radio-stacked" required 
              defaultChecked={gotThisStatus1}
              onClick={() => setGotThisStatus(1)} 
              />
              <label className="custom-control-label" htmlFor="{id+'A'}">I don't have it yet.</label>
            </div>
            <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input orange" id="{id+'B'}" name="radio-stacked" required
              defaultChecked={gotThisStatus2}
              onClick={() => setGotThisStatus(2)} 
               />
              <label className="custom-control-label" htmlFor="{id+'B'}">This is in progress.</label>
            </div>
            <div className="custom-control custom-radio mb-3">
                <input 
                type="radio" className="custom-control-input green" id="{id+'C'}" name="radio-stacked" required
                defaultChecked={gotThisStatus3}
                onClick={() => setGotThisStatus(3)} 
                />
                <label className="custom-control-label" htmlFor="{id+'C'}">I have this.</label>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} id="modal-button" className="">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalContainer;