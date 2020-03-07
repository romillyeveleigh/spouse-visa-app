import React from 'react';
import {render} from 'react-dom';
import {Badge} from 'react-bootstrap';
import ModalContainer from './ModalContainer';

const Card = ({ category, description, content, id, checkthis }) => {

  // Modal function from Boostrap
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5 card"
      onClick={() => setModalShow(true)}>
      	<div className="card-container">
  	        <h2 className="cardHeader">{description}</h2>
  	        <p className="card-content">{content}</p>
  	        <p className="card-category">{category}</p>
            <Badge pill variant="success">Done</Badge>
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