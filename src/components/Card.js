import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

const Card = ({ category, description, content }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5 card">
      <div>
        <h2 className="card-header">{description}</h2>
        <p className="card-content">{content}</p>
        <p className="card-category">{category}</p>
      </div>
    </div>
  );
}

export default Card;
