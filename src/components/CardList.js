import React from 'react';
import MenuCard from './MenuCard';
import { countriesThatRequireTBTest } from '../constants/CountriesThatRequireTBTest';
import { countriesNoEnglishTestRequired } from '../constants/CountriesNoEnglishTestRequired';

const CardList = ({ robots, category, currentuserdata, isdemo }) => {

	const cardIsNotNeeded = (card) => {
	if (currentuserdata) {

		const application = currentuserdata.application

		// check card conditionals and return true if card is not needed
		if (card===5 && countriesNoEnglishTestRequired.includes(application.applicantNationality)) {return true}
		else if (card===6 && !countriesThatRequireTBTest.includes(application.applyingFrom)) {return true}
		else if ((card===11 || card===13) && application.sponsorFinancialSalaried===false) {return true}
		else if ((card===12 || card===14) && application.applicantFinancialSalaried===false) {return true}
		else if ((card===15 || card===19) && (application.sponsorFinancialSalaried===false 
			&& application.sponsorFinancialSelfEmployed===false
			&& application.sponsorFinancialProperty===false
			&& application.sponsorFinancialOther===false
		)) {return true}
		else if ((card===16 || card=== 20) && (application.applicantFinancialSalaried===false 
			&& application.applicantFinancialSelfEmployed===false
			&& application.applicantFinancialProperty===false
			&& application.applicantFinancialOther===false
		)) {return true}
		else if (card=== 20 && application.applyingFrom!=='united-kingdom') {return true}
		else if (card===17 && application.sponsorFinancialSavings===false) {return true}
		else if (card===18 && application.applicantFinancialSavings===false) {return true}
		else if ((card===21 || card===23) && application.sponsorFinancialProperty===false) {return true}
		else if ((card===22 || card===24) && application.applicantFinancialProperty===false) {return true}
		else if (card===25 && application.applicantFinancialSelfEmployed===false) {return true}
		else if (card===26 && application.sponsorFinancialSelfEmployed===false) {return true}
		else if (card===27 && (application.applicantFinancialOther===false 
			&& application.sponsorFinancialOther===false)) {return true}
		else if (card===28 && (application.whereLive==='inOwnProperty'
			|| application.whereLive==='renting')) {return true}
		else if (card===29 && application.whereLive==='renting') {return true}
		else if (card===30 && (application.whereLive==='inOwnProperty' 
			|| application.whereLive==='family')) {return true}
		else if (card===32 && application.areMarried==='false') {return true}
		else if ((card===35 || card===36) && application.areMarried==='true') {return true}
		else if (card===37 && application.whereLive!=='renting') {return true}
		return false
		}
		return false
	}

const selectRobots = robots.filter(robot => robot.category === category)

  return (
    <div className="cardList">
		{
	        selectRobots.map((key, i) => {

	        	// check current card and only render if needed
	        	if (!cardIsNotNeeded(selectRobots[i].id)) {
		          return (
		            <MenuCard
		              key={i}
		              props={selectRobots[i]}
		              content={selectRobots[i].content}
		              checkthis={selectRobots[i].checkthis}
		              description={selectRobots[i].description}
		              id={selectRobots[i].id}
		              category={category}
		              currentuserdata={currentuserdata}
		              isdemo={isdemo}
		              />
		          );
		      	}
		      	return false
	        })
	      }
    </div>
  );
}

export default CardList;