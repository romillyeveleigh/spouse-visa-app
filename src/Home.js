import React, { useEffect } from "react";
import app from "./base";
import { useState } from "react";
import CategoryList from './components/CategoryList';
import {robots} from './constants/Robots';
import { Modal, Alert, Spinner } from 'react-bootstrap';
import SettingsQuestionsSignUp from "./components/SettingsQuestionsSignUp";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Home = ({currentUser}) => {

  useEffect(() => {});

  const [modalShow, setModalShow] = useState(true);

  // get user data from current firebase authentication session
  const user = currentUser;

  // initially set currentReloadStatus to 0 using useState hook
  const [currentuserdata, setcurrentuserdata] = useState(null);

  // see if currentuserdata is empty
  if (currentuserdata===null) {
    // if it's empty, grab data from firestore
    console.log('grabbing data from firestore!!!');

    // grab data from firestore
    app.firestore()
    .collection("user").doc(user.email)
    .get().then(doc => {

      // set the returned doc as currentuserdata object 
      setcurrentuserdata(doc.data());

      // set settings in sessionStorage
      sessionStorage.removeItem('application')
      sessionStorage.setItem('application', JSON.stringify(doc.data().application));

      }).catch(error => {
        console.log("Error getting document:", error);
      })
  }

  const shouldRenderWelcome = () => {
    let i = JSON.parse(sessionStorage.getItem('welcomeToken'))
    if (typeof i === 'object') {return i} 
    else return false
  }

  const targetElement = document.querySelector('#welcomemodal');

  if (shouldRenderWelcome() && currentuserdata!==null) {

    // render welcome modal
    return (
        <div className="tc">
        <p></p>
        <Modal
          onHide={() => {
            setModalShow(false)
            sessionStorage.removeItem('welcomeToken')
          }}
          show={modalShow}
          size="m"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          animation={false}
          id="welcomemodal"
          >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              New account created!<h6><div id="modal-badge" className="hidden badge badge-pill badge-success">Done✓</div></h6>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Alert variant="secondary"><span role="img" aria-label="light">💡</span> Thanks for signing up.<br/>Next step: Answer a few short questions about your application.</Alert>
            <SettingsQuestionsSignUp currentUser={user} currentuserdata={currentuserdata}/>
            
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  else if (shouldRenderWelcome() && currentuserdata==null) {

    // render spinner before welcome modal appears
    return (<div className="d-flex justify-content-center pt-5 pb-5">
                    <Spinner animation="border" variant="dark" role="status" size="lg" />
                    </div>
    );
  }

  else if (!shouldRenderWelcome()) {

  // render normal logged-in view
  return (
    <div className="checklist-background-image">
        <div className="tc">
        <p></p>
          <h5>My visa checklist: </h5>
        <CategoryList robots={robots} currentuserdata={currentuserdata}/>
      </div>
      </div>
    );
  }
};

export default Home;