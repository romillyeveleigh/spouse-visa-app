import React from 'react';
import { useState, useEffect } from 'react';
import {checklistQuestions} from '../constants/checklistQuestions';
import {user} from '../constants/User';

const Checklist = ( {id, checkthis} ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        const modalButton = document.querySelector('#modal-button')
        const modalTitle = document.querySelector('#contained-modal-title-vcenter')
        const modalBadge = document.querySelector('#modal-badge')

        // check if this card is 'done'
        if (user.card[id].filter(boolean => boolean === true).length === checkthis.length) {
            // if done, add styles
            modalButton.className = "btn btn-success border-success";
            modalTitle.className = "h4 text-success border-success";
            modalBadge.className = "shadow-4 badge badge-pill badge-success";
        } else {
            // if not, revert styles
            modalButton.className = "btn btn-primary";
            modalTitle.className = "h4 text-dark";
            modalBadge.className = "hidden badge badge-pill badge-success";
    }
    });

    return (
                // return list of questions from this card's checklist
                checkthis.map((num, i) => {
            		
                    // look at User to see if that question is checked or not
                    let isChecked = user.card[id][checkthis[i]]

                    // created a descriptive id for the question checkbox
                    let questionId = 'card'+id+'-question'+checkthis[i]

                    // toggle the question to true or false
                    const toggleQuestion = () => {
                        user.card[id][checkthis[i]] = !isChecked
                        console.log('clicked on checklist!')
                        setCount(count + 1)
                        return 'success'
                    }

        		return (
    				<div className="custom-control custom-checkbox mb-3" key={questionId} >
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