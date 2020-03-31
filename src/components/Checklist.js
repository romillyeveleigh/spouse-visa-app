import React from 'react';
import { useState, useEffect } from 'react';
import {checklistQuestions} from '../constants/checklistQuestions';
import app from "../base";

// check status of current card and refresh its style in modal view
const refreshStyling = (id, checkthis, user) => {

    console.log('refreshStyling ran!')

    // define current status of card
    let prop1 = 'card'+id 
    const getCurrentStatus = () => {
        if (user) {return user.status[prop1]}
            else {return 'no user found!'}
    }

    const modalButton = document.querySelector('#modal-button')
    const modalTitle = document.querySelector('#contained-modal-title-vcenter')
    const modalBadge = document.querySelector('#modal-badge')

    // check if this card is 'done'
    let prop2 = 'card'+id

    const countChecks = () => {
        let i=0
        if (user) {
            if (user[prop2]) {
                // count the number of 'trues' in this menu card
                i = Object.values(user[prop2]).filter(i => i===true).length
            }
        }
        return i
    };

    if (countChecks() === checkthis.length && getCurrentStatus() === 3) {
         // if true, add style to card in modal view
        modalButton.className = "btn btn-success border-success";
        modalTitle.className = "h4 text-success border-success";
        modalBadge.className = "badge badge-pill badge-success";
        modalBadge.innerHTML = "✓ Done"
    } else if (countChecks() <= checkthis.length && getCurrentStatus() === 3) {
        // if 'in progress', add style to card in modal view
        modalButton.className = "btn btn-primary";
        modalTitle.className = "h4 text-dark";
        modalBadge.className = "shadow-4 badge badge-pill badge-warning";
        modalBadge.innerHTML = "👀 To check"
    } else if (getCurrentStatus() === 2) {
        // if 'in progress', add style to card in modal view
        modalButton.className = "btn btn-primary";
        modalTitle.className = "h4 text-dark";
        modalBadge.className = "shadow-4 badge badge-pill badge-warning";
        modalBadge.innerHTML = "👷 In progress"
    } else {
        // if false, revert style for card in modal view
        modalButton.className = "btn btn-primary";
        modalTitle.className = "h4 text-dark";
        modalBadge.className = "shadow-4 badge badge-pill badge-secondary";
        modalBadge.innerHTML = "📋 To do"
    }
}

const Checklist = ( {id, checkthis, user, isdemo } ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {refreshStyling(id, checkthis, user)});

    return (
                // return list of questions from this card's checklist
                checkthis.map((num, i) => {

                    let prop1 = 'card'+id
                    let prop2 = 'answer'+checkthis[i]
            		
                    // look at User to see if that question is checked or not
                    const isChecked = () => {
                        if (user) {
                            if (user[prop1]) {
                                return user[prop1][prop2]
                            }
                        }
                    }

                    // create a descriptive id for the question checkbox
                    let questionId = 'card'+id+'-question'+checkthis[i]

                    // create function to toggle the question to true or false and send value to refreshStyling
                    const toggleQuestion = () => {

                        // set the new value of current card to 'true/false' in current session
                        user[prop1][prop2] = !isChecked()

                        // halt if demo data is running, but still refresh styling
                        console.log('isdemo in checklist:', isdemo)
                        if (isdemo==='true') {
                            setCount(count + 1)
                            return 'halted firestore update'
                        }
                        
                        // set the new value of current card to 'true/false' in firestore
                        // prepare query to send to Firestore
                        const query = {};
                        const card = prop1
                        const answer = prop2
                        const cardAndAnswer = card+'.'+answer
                        query[cardAndAnswer] = isChecked();

                        // update value in firestore
                        app.firestore()
                        .collection("user").doc(app.auth().currentUser.email)
                        .update(
                            query
                        ).catch(error => {
                            console.log("Error updating document:", error);
                        })
                        
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
                        defaultChecked={isChecked()}
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