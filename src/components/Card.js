import React from 'react';
import {render} from 'react-dom';
import {Modal, Button, ModalHeader, ModalBody, ModalFooter, ButtonToolbar, ButtonGroup, ToggleButton, Badge} from 'react-bootstrap';

// Modal function from Boostrap

function MyVerticallyCenteredModal(props, description) {

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
            <div class="was-validated">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
                <label class="custom-control-label" for="customControlValidation1">It's dated within the last 6 months.</label>
              </div>
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customControlValidation2" required />
                <label class="custom-control-label" for="customControlValidation2">It's in English.</label>
              </div>
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customControlValidation3" required />
                <label class="custom-control-label" for="customControlValidation3">It's the original document.</label>
              </div>
            </div>
<p>What is the current status of this?</p>
<div class="was-validated">
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input red" id="customControlValidationA" name="radio-stacked" required />
    <label class="custom-control-label" for="customControlValidationA">I don't have it yet.</label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input orange" id="customControlValidationB" name="radio-stacked" required />
    <label class="custom-control-label" for="customControlValidationB">This is in progress.</label>
  </div>
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input green" id="customControlValidationC" name="radio-stacked" required />
    <label class="custom-control-label" for="customControlValidationC">I have this.</label>
  </div>
</div>

        </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Next</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Card = ({ category, description, content }) => {
	
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
      <ButtonToolbar>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            description={description}
            content={content}
            category={category}
        />
      </ButtonToolbar>
    </>
  );
}

export default Card;