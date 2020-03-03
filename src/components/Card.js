import React from 'react';
import {render} from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function MyVerticallyCenteredModal(props, description) {

  	return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.content}</p>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Card = ({ category, description, content }) => {
	 const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card">
    	<div className="card-container"
      	onClick={() => setModalShow(true)}>
	        <h2 className="card-header">{description}</h2>
	        <p className="card-content">{content}</p>
	        <p className="card-category">{category}</p>
    	</div>
	    <ButtonToolbar>
		    <MyVerticallyCenteredModal
		        show={modalShow}
		        onHide={() => setModalShow(false)}
		        description={description}
	            content={content}
	            category={category}
		    />
	   	</ButtonToolbar>
    </div>
  );
}

export default Card;