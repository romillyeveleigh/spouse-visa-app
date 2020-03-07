import React from 'react';
import {checklistQuestions} from '../constants/checklistQuestions';
import {User} from '../constants/User';

const Checklist = ( {id, checkthis} ) => {

    return (
                // return list of questions from this card's checklist
                checkthis.map((num, i) => {
        		
                // look at User to see if that question is checked or not
                let isChecked = User.card[id][checkthis[i]]

                // make the key and id unique
                let questionId = 'card'+id+'-question'+checkthis[i]

                // toggle the question to true or false
                const toggleQuestion = () => {
                    User.card[id][checkthis[i]] = !isChecked
                    return 'success'
                }

        		return (
    				<div className="custom-control custom-checkbox mb-3" key={questionId}>
    		        	<input 
                        type="checkbox"
                        className="custom-control-input" 
                        id={questionId}
                        defaultChecked={isChecked}
                        onClick={() => toggleQuestion()} 
                        required
                        />
    		        	<label className="custom-control-label" htmlFor={questionId}>{checklistQuestions[num]}</label>
    		      	</div>
          		);
    	})
    );
}

export default Checklist;