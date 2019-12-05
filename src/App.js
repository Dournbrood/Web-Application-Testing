import React, { useState, useEffect } from 'react';
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  const [scores, setScores] = useState({
    balls: 0,
    strikes: 0
  });
  //Our count function is going to live in Display. Things are bound to get ugly.
  const gameCount = (type) => {
    let { balls, strikes } = scores;

    switch (type) {
      case "strike":
        strikes++;
        break;
      case "ball":
        balls++;
        break;
      case "foul": //This was FOUL to program... HA HA HA.                     Laugh.
        if (strikes <= 1) {
          strikes++;
        }
        else {
          //Do absolutely nothing.
          return;
        }
        break;
      case "hit":
        strikes = 0;
        balls = 0;
    }
    if (strikes >= 3 || balls >= 4) {
      strikes = 0;
      balls = 0;
    }

    setScores({ balls, strikes });
  }

  return (
    <div className="App">
      <Display scores={scores} />
      <Dashboard gameCount={gameCount} />
    </div>
  );
}

export default App;
