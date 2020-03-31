import React from 'react';
import { useState } from "react";
import {Badge} from 'react-bootstrap';
import ModalContainer from './ModalContainer';

const MenuCard = ({ category, description, content, id, checkthis, currentuserdata, isdemo }) => {

  const user = currentuserdata

  // Modal function from Bootstrap
  const [modalShow, setModalShow] = useState(false);

  // add style to cards in list view
  const blueStyle = "tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 card"
  const yellowStyle = "tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5 card"
  const greenStyle = "tc grow bg-light-green br3 pa3 ma2 dib bw2 card"
  const greenStyleDone = "tc bg-light-green br3 pa3 ma2 dib bw2 card"
  let chosenStyle = blueStyle
  let variant = "secondary"
  let buttonText = "To do"
  
  let prop1 = 'card'+id

  const getCurrentStatus = () => {
      if (user) {return user.status[prop1]}
          else {return 'no user found!'}
  }

  const userExists = () => {
    if (user) {return true}
      else {return false}
  }

  let prop2 = 'card'+id

  const countChecks = () => {
        let i=0
        if (user) {
          if (user[prop2]) {
            // count the number of 'trues' in this menu card
            i=Object.values(user[prop2]).filter(i => i===true).length
          }
        }
      return i
    };

  if (countChecks() === checkthis.length && getCurrentStatus() === 3) {
    chosenStyle = greenStyleDone
    variant = "success"
    buttonText = "Done✓"
  } else if (getCurrentStatus() === 2) {
    chosenStyle = yellowStyle
    variant = "secondary"
    buttonText = "In progress"
  } else if (countChecks() <= checkthis.length && getCurrentStatus() === 3) {
    chosenStyle = greenStyle
    variant = "warning"
    buttonText = "To check"
  }

  return (
    <div>
      <div 
      id={id} 
      className={chosenStyle}
      // only allow onclick if userdata is present, to prevent errors
      onClick={() => setModalShow(userExists())}
      >
      	<div className="card-container">
            <h2 className="cardHeader">{description}</h2>
  	        <p className="card-content">{content}</p>
        </div>
        <div className="card-category">{category}</div>
        <h6><Badge pill variant={variant}>{buttonText}</Badge></h6>
      </div>
 <ModalContainer
            show={modalShow}
            onHide={() => setModalShow(false)}
            category={category}
            description={description}
            content={content}
            id={id}
            checkthis={checkthis}
            user={user}
            currentuserdata={currentuserdata}
            isdemo={isdemo}
        />
    </div>
  );
}

export default MenuCard;