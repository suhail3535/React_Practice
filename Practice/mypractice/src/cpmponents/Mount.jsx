import React, { useEffect } from "react";

 const MyComponent=()=> {
    useEffect(() => {
        // componentDidMount
        console.log("Component mounted");

        return () => {
            // componentWillUnmount
            console.log("Component unmounted");
        };
    }, []); // empty dependency array to only run once

    return (
        <div>
            <p>Hello, World!</p>
        </div>
    );
}
export default MyComponent;