import React from 'react';
import Card from './Card';

const CardList = ({ robots, category }) => {

const selectRobots = robots.filter(robot => robot.category === category)

  return (
    <div className="cardList">
		{
	        selectRobots.map((key, i) => {
	          return (
	            <Card
	              key={i}
	              props={selectRobots[i]}
	              content={selectRobots[i].content}
	              checkThis={selectRobots[i].checkThis}
	              description={selectRobots[i].description}
	              id={selectRobots[i].id}
	              category={category}
	              />
	          );
	        })
	      }
    </div>
  );
}

export default CardList;