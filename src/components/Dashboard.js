import React, { useState } from "react";

const Dashboard = (props) => {
    return (
        <>
            <button data-testid="dash-button" onClick={() => props.gameCount("strike")}>Strike</button>
            <button data-testid="dash-button" onClick={() => props.gameCount("ball")}>Ball</button>
            <button data-testid="dash-button" onClick={() => props.gameCount("foul")}>Foul</button>
            <button data-testid="dash-button" onClick={() => props.gameCount("hit")}>Hit</button>
        </>
    )
}

export default Dashboard;