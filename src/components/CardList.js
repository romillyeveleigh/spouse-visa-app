import React from 'react';
import Card from './Card';


const CardList = ({ robots, category }) => {

const selectRobots = robots.filter(robot => robot.category === category)

  return (
    <div className="cardList">
		{
	        selectRobots.map(( key, i) => {
	          return (
	            <Card
	              key={i}
	              description={selectRobots[i].description}
	              content={selectRobots[i].content}
	              category={category}
	              />
	          );
	        })
	      }
    </div>
  );
}

export default CardList;