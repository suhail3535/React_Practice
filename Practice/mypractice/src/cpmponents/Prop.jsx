import { useState } from "react";

export function Parent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <Child1 count={count} />
            <Child2 incrementCount={incrementCount} />
        </div>
    );
}

export function Child1(props) {
    return (
        <div>
            <p>Count: {props.count}</p>
        </div>
    );
}

export function Child2(props) {
    return (
        <div>
            <button onClick={props.incrementCount}>Increment Count</button>
        </div>
    );
}
