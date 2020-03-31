import React from 'react';
import { categoryObject } from '../constants/categoryObject';
import { categoryObjectDemo } from '../constants/demo/categoryObjectDemo';
import Category from './Category';

const CategoryList = ({ robots, currentuserdata, isdemo }) => {
  
  if (!isdemo) {
    return (
      <div className="CategoryList">
      	{
        	categoryObject.map((user, i) => {
        		return (
          		<Category
                key={i}
            		category={categoryObject[i]}
            		robots={robots}
                currentuserdata={currentuserdata}
                isdemo={'false'}
           		/>
       		 );
        	})
        	}
  	</div>
    );
  } 
  else {
    // insert demo data into render
    return (
      <div className="CategoryList">
        {
          categoryObjectDemo.map((user, i) => {
            return (
              <Category
                key={i}
                category={categoryObjectDemo[i]}
                robots={robots}
                currentuserdata={currentuserdata}
                isdemo={isdemo}
              />
           );
          })
          }
    </div>
    );
  }
}

 export default CategoryList;