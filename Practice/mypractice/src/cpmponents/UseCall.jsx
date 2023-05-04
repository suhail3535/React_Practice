import React, { useState, useCallback } from "react";

export function UseCall() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        // console.log("Click")
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
