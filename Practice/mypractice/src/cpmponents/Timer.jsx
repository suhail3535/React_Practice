import React, { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, );

    const handleClearTimer = () => {

        setTime(0)
    };

    return (
        <div>
            <h1>Timer: {time}</h1>
            <button onClick={handleClearTimer}>Clear Timer</button>
        </div>
    );
}

export default Timer;
