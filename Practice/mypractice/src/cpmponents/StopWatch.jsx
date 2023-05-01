
import React, { useState, useRef } from "react";

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function startTimer() {
        if (intervalRef.current !== null) return;
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
        }, 10);
    }

    function stopTimer() {
        if (intervalRef.current === null) return;
        setIsRunning(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    function resetTimer() {
        setIsRunning(false);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    const formattedTime = new Date(time).toISOString().slice(14, -1);

    return (
        <div>
            <h2>Stopwatch</h2>
            <p>{formattedTime}</p>
            <button onClick={startTimer} disabled={isRunning}>
                Start
            </button>
            <button onClick={stopTimer} disabled={!isRunning}>
                Stop
            </button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default StopWatch;
