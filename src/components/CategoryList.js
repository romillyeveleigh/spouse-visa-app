import React from 'react';
import { categoryObject } from './categoryObject';
import Category from './Category';

const CategoryList = ({ robots }) => {
  return (
    <div className="CategoryList">
    	{
        	categoryObject.map((user, i) => {
          		return (
            		<Category
             			category={i}
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