import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import waces from "./cards.json";
import "./App.css";

class App extends Component {

state ={
waces,
clickedFacesIds: [],
score:0,
goal:8,
status: "",
imagenumber:0
};

shuffleScoreCard = id => {
  this.setState({ imagenumber: this.state.imagenumber > 2 ? 0 : this.state.imagenumber+1})
  let clickedFacesIds = this.state.clickedFacesIds;
  if(clickedFacesIds.includes(id)){
    this.setState({clickedFacesIds: [], score:0, status: "Game Over! You lost. Click to play again!"});
    return;
  } else{ clickedFacesIds.push(id)
  if (clickedFacesIds.length === 8){
    this.setState({score:8, status: "You Won! Click to play again!", clickedFacesIds: []}); console.log("You Win");
    return;
  
  } 
  this.setState({waces,clickedFacesIds,score:clickedFacesIds.length,status: " "});

  for (let i = waces.length -1; i>0;i--){
    let j = Math.floor(Math.random() * (i+1));

    //reorganizes json file
    [waces[i], waces[j]] = [waces[j], waces[i]]; 

console.log("this is the changing order of faces right here"+ waces[i].image) ;
  }}
  }
  render() {
return(
<div className="App">
    <header className="App-header">
      <h1 className="App-title">Memory Game</h1>
      <p className="App-intro">
        Try not to click the same person twice!
          </p>
    </header>
    <Score total={this.state.score}
      goal={8}
      status={this.state.status}
    />
    <Wrapper>
      {this.state.waces.map(face => (
        <Card
          shuffleScoreCard={this.shuffleScoreCard}
          id={face.id}
          key={face.id}
          name={face.name}
          image={face.image[this.state.imagenumber]}
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




