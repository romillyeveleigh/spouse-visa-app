import React, { useCallback } from "react";
import {Form} from 'react-bootstrap';
import app from "../base";
import Countries from '../constants/Countries'

const formatCountryName = country => {
  country = country.replace(/-/g, ' ')
  return country.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

var SettingsQuestionsSignUp = ( {currentUser, history, currentuserdata} ) => {

  // get application data from sessionStorage
  const application = currentuserdata.application;

  const getApplicantName = () => {
    if (application.applicantName!=='') {return currentUser.displayName}
      else {return application.applicantName}
  }

  const returnApplicantNationalityTag = () => {
  if (application.applicantNationality) return (
    <option 
      value={application.applicantNationality} 
      // selected
    >
      {formatCountryName(application.applicantNationality)}
    </option>
    );
  }

  const returnApplyingFromTag = () => {
    if (application.applyingFrom) return (
      <option 
        value={application.applyingFrom} 
        // selected
      >
        {formatCountryName(application.applyingFrom)}
      </option>
      );
  }

  const getAreMarriedTag = (value) => {
    if (application.areMarried===value.toString()) {return 'true'}
      else {return ''}
  }

  const getwhereLiveTag = (value) => {
    if (application.whereLive===value) return 'true'
      else {return ''}
  }

  const handleSettingChange = useCallback(async event => {

    // update sessionstorage token so welcome modal doesn't show again
    sessionStorage.removeItem('welcomeToken') 

    event.preventDefault();
    const { 
      applicantName, 
      applicantNationality, 
      sponsorName, 
      applyingFrom, 
      applicationDate, 
      areMarried, 
      applicantFinancial, 
      sponsorFinancial, 
      whereLive
    } = event.target.elements;

      // grab data from submitted form and create query object
      const query = {
        'application.applicantName': applicantName.value, 
        'application.applicantNationality': applicantNationality.value, 
        'application.sponsorName': sponsorName.value, 
        'application.applyingFrom': applyingFrom.value, 
        'application.applicationDate': applicationDate.value, 
        'application.areMarried': areMarried.value,
        'application.whereLive': whereLive.value
      }
        query['application.'+applicantFinancial[0].id] = applicantFinancial[0].checked;
        query['application.'+applicantFinancial[1].id] = applicantFinancial[1].checked;
        query['application.'+applicantFinancial[2].id] = applicantFinancial[2].checked;
        query['application.'+applicantFinancial[3].id] = applicantFinancial[3].checked;
        query['application.'+applicantFinancial[4].id] = applicantFinancial[4].checked;
        query['application.'+sponsorFinancial[0].id] = sponsorFinancial[0].checked;
        query['application.'+sponsorFinancial[1].id] = sponsorFinancial[1].checked;
        query['application.'+sponsorFinancial[2].id] = sponsorFinancial[2].checked;
        query['application.'+sponsorFinancial[3].id] = sponsorFinancial[3].checked;
        query['application.'+sponsorFinancial[4].id] = sponsorFinancial[4].checked;
      try {
      // post setting changes to firestore
        await app.firestore()
                .collection("user").doc(currentUser.email)
                .update(query)
                window.location = "/home";
      } catch (error) {
        alert(error);
      }
  }, [history]);

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center pb-0">
       
        <Form className="form-horizontal" onSubmit={handleSettingChange}>
        <fieldset>
          {/* Form Name */}
          {/* Text input*/}
          <div className="form-group">
            <label className=" control-label" htmlFor="applicantName">What's the name of the person applying?</label>  
            <div className="">
            <input id="applicantName" name="applicantName" type="text" 
              defaultValue={getApplicantName()}
              className="form-control input-md" />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className=" control-label" htmlFor="applicantNationality">What's the applicant's nationality? </label>
            <div className="">
              <select id="applicantNationality" 
              name="applicantNationality" 
              className="form-control" 
              placeholder={currentUser.applicantNationality}
              defaultValue={currentUser.applicantNationality}
              >
            {returnApplicantNationalityTag()}
             <Countries />
              </select>
            </div>
          </div>
          {/* Text input*/}
          <div className="form-group">
            <label className=" control-label" htmlFor="sponsorName">Name of sponsor</label>  
            <div className="">
              <input 
              type="text" 
              id="sponsorName" 
              name="sponsorName" 
              defaultValue={application.sponsorName}
              className="form-control input-md"
              />
            </div>
          </div>
          {/* Select Basic */}
          <div className="form-group">
            <label className=" control-label" htmlFor="applyingFrom">Where are you applying from?</label>
            <div className="">
              <select id="applyingFrom" 
              name="applyingFrom" 
              className="form-control"
              placeholder={currentUser.applyingFrom}
              defaultValue={currentUser.applyingFrom}
              >
            {returnApplyingFromTag()}
          <Countries />
              </select>
            </div>
          </div>
          {/*Text input*/}
          <div className="form-group">
            <label className=" control-label" htmlFor="applicationDate">When do you aim to submit your application online?</label>  
            <div className="">
            <input type="date" id="applicationDate" name="applicationDate" defaultValue={application.applicationDate}
              className="form-control input-md" />
            </div>
          </div>
          {/* Multiple Radios */}
          <div className="form-group">
            <label className=" control-label" htmlFor="areMarried">Are you married?</label>
            <div className="">
              <div className="radio">
                <label htmlFor="areMarried-0">
                  <input type="radio" name="areMarried" id="areMarried-0" value="true" defaultChecked={getAreMarriedTag(true)}/>
                   &nbsp;Yes 
                </label>
              </div>
              <div className="radio">
                <label htmlFor="areMarried-1">
                  <input type="radio" name="areMarried" id="areMarried-1" value="false" defaultChecked={getAreMarriedTag(false)}/>
                  &nbsp;No
                </label>
              </div>
            </div>
          </div>
          {/* Multiple Checkboxes */}
          <div className="form-group">
            <label className=" control-label" htmlFor="sponsorFinancial">How is the sponsor helping to meet the financial requirement?</label>
            <div className="">
              <div className="checkbox">
                <label htmlFor="sponsorFinancialSavings">
                  <input type="checkbox" name="sponsorFinancial" id="sponsorFinancialSavings" defaultValue={1} defaultChecked={application.sponsorFinancialSavings}/>
                  Savings
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="sponsorFinancialSalaried">
                  <input type="checkbox" name="sponsorFinancial" id="sponsorFinancialSalaried" defaultValue={2} defaultChecked={application.sponsorFinancialSalaried}/>
                  &nbsp;Salaried employment
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="sponsorFinancialSelfEmployed">
                  <input type="checkbox" name="sponsorFinancial" id="sponsorFinancialSelfEmployed" defaultValue={3} defaultChecked={application.sponsorFinancialSelfEmployed}/>
                  &nbsp;Self-employment
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="sponsorFinancialProperty">
                  <input type="checkbox" name="sponsorFinancial" id="sponsorFinancialProperty" defaultValue={4} defaultChecked={application.sponsorFinancialProperty}/>
                  &nbsp;Property income
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="sponsorFinancialOther">
                  <input type="checkbox" name="sponsorFinancial" id="sponsorFinancialOther" defaultValue={5} defaultChecked={application.sponsorFinancialOther}/>
                  &nbsp;Other
                </label>
              </div>
            </div>
          </div>
{/* Multiple Checkboxes */}
          <div className="form-group">
            <label className=" control-label" htmlFor="applicantFinancial">How is the applicant helping to meet the financial requirement?</label>
            <div className="">
              <div className="checkbox">
                <label htmlFor="applicantFinancialSavings">
                  <input type="checkbox" name="applicantFinancial" id="applicantFinancialSavings" defaultValue={1} defaultChecked={application.applicantFinancialSavings}/>
                  &nbsp;Savings
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="applicantFinancialSalaried">
                  <input type="checkbox" name="applicantFinancial" id="applicantFinancialSalaried" defaultValue={2} defaultChecked={application.applicantFinancialSalaried}/>
                  &nbsp;Salaried employment
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="applicantFinancialSelfEmployed">
                  <input type="checkbox" name="applicantFinancial" id="applicantFinancialSelfEmployed" defaultValue={3} defaultChecked={application.applicantFinancialSelfEmployed}/>
                  &nbsp;Self-employment
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="applicantFinancialProperty">
                  <input type="checkbox" name="applicantFinancial" id="applicantFinancialProperty" defaultValue={4} defaultChecked={application.applicantFinancialProperty}/>
                 &nbsp;Property income
                </label>
              </div>
              <div className="checkbox">
                <label htmlFor="applicantFinancialOther">
                  <input type="checkbox" name="applicantFinancial" id="applicantFinancialOther" defaultValue={5} defaultChecked={application.applicantFinancialOther}/>
                  &nbsp;Other
                </label>
              </div>
            </div>
          </div>
          {/* Multiple Radios */}
          <div className="form-group">
            <label className=" control-label" htmlFor="whereLive">Where will you live in the UK?</label>
            <div className="">
              <div className="radio">
                <label htmlFor="whereLive-0">
                  <input type="radio" name="whereLive" id="whereLive-0" defaultValue={'family'} defaultChecked={getwhereLiveTag('family')} />
                  &nbsp;With family
                </label>
              </div>
              <div className="radio">
                <label htmlFor="whereLive-1">
                  <input type="radio" name="whereLive" id="whereLive-1" defaultValue={'inOwnProperty'} defaultChecked={getwhereLiveTag('inOwnProperty')}/>
                  &nbsp;In own property
                </label>
              </div>
              <div className="radio">
                <label htmlFor="whereLive-2">
                  <input type="radio" name="whereLive" id="whereLive-2" defaultValue={'renting'} defaultChecked={getwhereLiveTag('renting')}/>
                  &nbsp;Renting
                </label>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="form-group">
            <div className="">
              {' '}
              <button id="singlebutton" name="singlebutton" 
              className="btn btn-success btn-block">Continue to checklist</button> 
            </div>
          </div>
        </fieldset>
      </Form>
</div>
</div>
</div>
    );
  }
;

export default SettingsQuestionsSignUp;