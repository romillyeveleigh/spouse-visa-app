import React from 'react';
import CardList from './CardList';
import {Card} from 'react-bootstrap';

const Category = ({ robots, category, currentuserdata, isdemo }) => {
	return (
    <div className="Category">
    	
    	<Card.Body className="pt-0 pb-0 pr-1 pl-1 b-2" variant="flush">
  <div className="pt-2 pb-0">{category}:</div>
  <CardList className="ml-0 mr-1" 
  robots={robots} 
  category={category} 
  currentuserdata={currentuserdata}
  isdemo={isdemo}
  />
</Card.Body>
	</div>
  );
}

export default Category;