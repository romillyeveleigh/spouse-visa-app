import React from 'react';
import CardList from './CardList';

const Category = ({ category, robots }) => {
	return (
    <div className="Category">
    	<p>{category}:</p>
    	<CardList robots={robots} category={category}/>
	</div>
  );
}

export default Category;