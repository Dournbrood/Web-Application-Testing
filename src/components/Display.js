import React, { useState } from "react";

export const Display = (props) => {
    return (
        <div className="display">
            <div className="balls" data-testid="balls-display">
                <h1>Balls: {props.scores.balls}</h1>
            </div>
            <div className="strikes" data-testid="strikes-display">
                <h1>Strikes: {props.scores.strikes}</h1>
            </div>

        </div>
    )
}

export default Display;