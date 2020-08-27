import React from "react";
import "./Score.css";

// import Arrow from 'react-icons/lib/fa/caret-right';

//stateless component
const Score = props => (
    <div className="gameScore">
        <h3 className="score">Your Score {props.total}</h3>
        <h3 className="status" style = {{color: props.status === "Game Over! You lost. Click to play again!" ? "red" : "green"}}>{props.status}</h3>
    </div>
);

export default Score;
