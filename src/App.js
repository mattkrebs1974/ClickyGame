import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import faces from "./cards.json";
import "./App.css";

class App extends Component {

state ={
faces,
clickedFacesIds: [],
score:0,
goal:8,
status: "",
imagenumber:1
};

shuffleScoreCard = id => {
  let clickedFacesIds = this.state.clickedFacesIds;

  if(clickedFacesIds.includes(id)){
    this.setState({clickedFacesIds: [], score:0, status: "Game Over! You lost. Click to play again!"});
    return;
  } else{ clickedFacesIds.push(id)
  if (clickedFacesIds.length === 8){
    this.setState({score:8, status: "You Won! Click to play again!", clickedFacesIds: []}); console.log("You Win");
    return;
  
  } 
  this.setState({faces,clickedFacesIds,score:clickedFacesIds.length,status: " "});

  for (let i = faces.length -1; i>0;i--){
    let j = Math.floor(Math.random() * (i+1));
    [faces[i], faces[j]] = [faces[j], faces[i]]; 

  }
  }
  }
  render() {
return(
<div className="App">
    <header className="App-header">
      <h1 className="App-title">The Clickster</h1>
      <p className="App-intro">
        Try not to click the same image twice!
          </p>
    </header>
    <Score total={this.state.score}
      goal={8}
      status={this.state.status}
    />
    <Wrapper>
      {this.state.faces.map(face => (
        <Card
          shuffleScoreCard={this.shuffleScoreCard}
          id={face.id}
          key={face.id}
          image={face.image}
        />
      ))}
    </Wrapper>
    <footer>
   
    </footer>
</div>
);
}
}

export default App; 




