import React, { useState } from "react";

export const Display = () => {
    const [scores, setScores] = useState({
        balls: 0,
        strikes: 0
    });
    //Our count function is going to live in Display. Things are bound to get ugly.
    const gameCount = (type) => {

        if (scores.strikes >= 3 || scores.balls >= 4) {
            setScores({
                balls: 0,
                strikes: 0
            });
        }

        else {
            switch (type) {
                case "strike":
                    setScores({
                        strikes: scores.strikes++
                    });
                    break;
                case "ball":
                    setScores({
                        balls: scores.balls++
                    })
                    break;
                case "foul": //This was FOUL to program... HA HA HA.                     Laugh.
                    if (scores.strikes <= 1) {
                        setScores({
                            strikes: scores.strikes++
                        })
                    }
                    else {
                        //Do absolutely nothing.
                        return;
                    }
                    break;
                case "hit":
                    setScores({
                        balls: 0,
                        strikes: 0
                    });
            }
        }
    }

    return (
        <div className="display">
            <div className="balls">
                <h1>Balls: {scores.balls}</h1>
            </div>
            <div className="strikes">
                <h1>Strikes: {scores.strikes}</h1>
            </div>

        </div>
    )
}
