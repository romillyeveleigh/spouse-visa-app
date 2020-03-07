import React from 'react';
import {checklistQuestions} from '../constants/checklistQuestions';

const Checklist = ( {id, checkThis} ) => {

    return (
    	checkThis.map((num, i) => {
    		
    		// make the key and id unique
    		i += id+'-'

    		return (
				<div className="custom-control custom-checkbox mb-3" key={i}>
		        	<input type="checkbox" onChange={() => console.log('clicked')} className="custom-control-input" id={i} required />
		        	<label className="custom-control-label" htmlFor={i}>{checklistQuestions[num]}</label>
		      	</div>
      		);
    	})
    );
}

export default Checklist;