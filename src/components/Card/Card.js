import React from "react";
import "./Card.css";

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Card = jill => (

  <div className="card img-container hover">
    <img style={{ width: "inherit", height: "100%"}} alt={jill.name} src={jill.image} id={jill.id}
        onClick={() => jill.shuffleScoreCard(jill.id)} className='shuffleScore'/> 
  </div>   
);
export default Card;
