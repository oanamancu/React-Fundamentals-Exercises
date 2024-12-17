import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Game from "./Game";
import Score from "./Score";


const App = () => {

  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const onCorrectAnswer = (correct) => {
    setNumQuestions(numQuestions  + 1);
    if (correct) {
      setNumCorrect(numCorrect + 1);
    }
  }

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <Game onCorrectAnswer = {onCorrectAnswer}/>
        <Score numQuestions = {numQuestions} numCorrect={numCorrect}/>
      </div> 
    </div>
  );
};

export default App;
