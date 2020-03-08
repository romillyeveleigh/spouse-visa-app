import React from 'react';
import { useState, useEffect } from 'react';
import {checklistQuestions} from '../constants/checklistQuestions';
import {user} from '../constants/User';

// check if card is 'done' and refresh styling in modal
const refreshStyling = (id, checkthis) => {

    const modalButton = document.querySelector('#modal-button')
    const modalTitle = document.querySelector('#contained-modal-title-vcenter')
    const modalBadge = document.querySelector('#modal-badge')

    // check if this card is 'done'
    if (user.card[id].filter(boolean => boolean === true).length === checkthis.length && user.status[id] === 3) {
        // if true, add styles
        modalButton.className = "btn btn-success border-success";
        modalTitle.className = "h4 text-success border-success";
        modalBadge.className = "shadow-4 badge badge-pill badge-success";
        modalBadge.innerHTML = "Done✓"
    } else if (user.card[id].filter(boolean => boolean === true).length <= checkthis.length && user.status[id] === 3) {
        // if 'in progress', add styles
        modalButton.className = "btn btn-primary";
        modalTitle.className = "h4 text-dark";
        modalBadge.className = "shadow-4 badge badge-pill badge-warning";
        modalBadge.innerHTML = "To check"
    } else if (user.status[id] === 2) {
        // if 'in progress', add styles
        modalButton.className = "btn btn-primary";
        modalTitle.className = "h4 text-dark";
        modalBadge.className = "shadow-4 badge badge-pill badge-warning";
        modalBadge.innerHTML = "In progress"
    } else {
        // if false, revert styles
        modalButton.className = "btn btn-primary";
        modalTitle.className = "h4 text-dark";
        modalBadge.className = "hidden badge badge-pill badge-success";
    }
}

const Checklist = ( {id, checkthis} ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {refreshStyling(id, checkthis)});

    return (
                // return list of questions from this card's checklist
                checkthis.map((num, i) => {
            		
                    // look at User to see if that question is checked or not
                    let isChecked = user.card[id][checkthis[i]]

                    // create a descriptive id for the question checkbox
                    let questionId = 'card'+id+'-question'+checkthis[i]

                    // create function to toggle the question to true or false
                    const toggleQuestion = () => {
                        // toggle question in user object 
                        user.card[id][checkthis[i]] = !isChecked
                        console.log('clicked on checklist!')
                        // concurrently trigger React's hook function useEffect
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