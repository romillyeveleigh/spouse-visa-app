import React from 'react';
import { categoryObject } from '../constants/categoryObject';
import Category from './Category';

const CategoryList = ({ robots }) => {
  
  return (
    <div className="CategoryList">
    	{
      	categoryObject.map((user, i) => {
      		return (
        		<Category
              key={i}
          		category={categoryObject[i]}
          		robots={robots}
         		/>
     		 );
      	})
      	}
	</div>
  );
}

 export default CategoryList;