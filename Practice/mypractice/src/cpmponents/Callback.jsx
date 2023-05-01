// function fetchData(callback) {
//     // Simulating an asynchronous operation
//     setTimeout(function () {
//         const data = "Some data";
//         // Invoke the callback function with the data
//         callback(data);
//     }, 2000);
// }

// // Define the callback function
// function processData(data) {
//     console.log("Data received:", data);
// }

// // Pass the callback function to the fetchData function
// fetchData(processData);
import React, { useState } from "react";

function Background() {
    const [bgColor, setBgColor] = useState("#ffffff"); // set initial background color to white

    function changeBgColor() {
        const randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16); // generate a random hex color code
        setBgColor(randomColor); // set the background color to the generated color
    }

    return (
        <div style={{ backgroundColor: bgColor, height: "100vh" }}>
            <button onClick={changeBgColor}>Change Background Color</button>
        </div>
    );
}

export default Background;
