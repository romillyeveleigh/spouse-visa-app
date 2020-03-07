import React from 'react';
import CardList from './CardList';

const Category = ({ robots, category }) => {
	return (
    <div className="Category">
    	<p>{category}:</p>
    	<CardList robots={robots} category={category}/>
	</div>
  );
}

export default Category;