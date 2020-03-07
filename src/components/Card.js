import React from 'react';
import { useState, useEffect } from "react";
import {render} from 'react-dom';
import {Badge} from 'react-bootstrap';
import ModalContainer from './ModalContainer';
import {user} from '../constants/User';

const Card = ({ category, description, content, id, checkthis }) => {

  // Modal function from Boostrap
  const [modalShow, setModalShow] = useState(false);

  const blueStyle = "tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 card"
  const greenStyle = "tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card"
  let chosenStyle = blueStyle
  let variant = "secondary"
  let buttonText = "To do"
  if (user.card[id].filter(boolean => boolean === true).length === checkthis.length) {
    chosenStyle = greenStyle
    variant = "success"
    buttonText = "Done✓"
  }
  
  return (
    <>
      <div id={id} className={chosenStyle}
      onClick={() => setModalShow(true)}>
      	<div className="card-container">
            <h2 className="cardHeader">{description}</h2>
  	        <p className="card-content">{content}</p>
  	        <p className="card-category">{category}</p>
            <h6><Badge pill variant={variant}>{buttonText}</Badge></h6>
      	 </div>
      </div>
        <ModalContainer
            show={modalShow}
            onHide={() => setModalShow(false)}
            category={category}
            description={description}
            content={content}
            id={id}
            checkthis={checkthis}
        />
    </>
  );
}

export default Card;