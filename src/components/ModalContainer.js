import React from 'react';
import { useState } from 'react';
// import {render} from 'react-dom';
import {Modal, Button, Alert} from 'react-bootstrap';
import '../css/ModalContainer.css';
import Checklist from './Checklist';
import app from "../base";

const ModalContainer = ( props )  => {

  const [count, setCount] = useState(0);

  let prop1 = 'card'+props.id

  const returnGotCardStatus = () => {
    if (props.user) {
      return props.user.status[prop1]
    } else {return null}
  }

  // set 'got this' radio status in modal ('null', 1='don't have', 2='in progress', 3='I have this')
  let gotThisStatus1, gotThisStatus2, gotThisStatus3 = null;
  if (returnGotCardStatus()===1) {gotThisStatus1=true}
  else if (returnGotCardStatus()===2) {gotThisStatus2=true}
  else if (returnGotCardStatus()===3) {gotThisStatus3=true}

  // update 'got this' status in user object
  const setGotThisStatus = (num) => {

    if (num===1 || num===2 || num===3) {
      props.user.status[prop1]=num;

      // // abort firestore update if demo data is running, but still refresh styling
      if (props.isdemo==='true') {

      setCount(count + 1)
      return 'halted firestore update'}

      // update value in firestore
      const query = {};
      const card = prop1
      const statusAndCard = 'status.'+card
      query[statusAndCard] = num;
      app.firestore()
      .collection("user").doc(app.auth().currentUser.email)
      .update(
          query
      ).catch(error => {
          console.log("Error updating document:", error);
      })
    }
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
        <Alert variant="secondary"><img src="/img/i.png" alt="information" width="15" height="15" /> {props.content}</Alert>
           <p>Do you have this?</p>
        <div className="was-validated">
            <div className="custom-control custom-radio mb-3">
              <input type="radio" className="custom-control-input red" id="{id+'A'}" name="radio-stacked" required 
              defaultChecked={gotThisStatus1}
              onClick={() => setGotThisStatus(1)} 
              />
              <label className="custom-control-label" htmlFor="{id+'A'}">No, I haven't started this yet.</label>
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
                <label className="custom-control-label" htmlFor="{id+'C'}">Yes, I have this.</label>
            </div>
        </div>
        <p>Make sure that: </p>
          <div className="was-validated">
            <Checklist 
              id={props.id} 
              checkthis={props.checkthis}
              user={props.user}
              isdemo={props.isdemo}
            />
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} id="modal-button" className="">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalContainer;