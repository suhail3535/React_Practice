// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber < 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject(new Error("Random number is greater than 0.5"));
//         }
//     }, 1000);
// });

// myPromise
//     .then((result) => {
//         console.log(`Promise fulfilled with result: ${result}`);
//     })
//     .catch((error) => {
//         console.error(`Promise rejected with error: ${error}`);
//     });
<div>
    <h2>Stopwatch</h2>
    <p id="timer">00:00:00</p>
    <button id="start-btn">Start</button>
    <button id="stop-btn">Stop</button>
    <button id="reset-btn">Reset</button>
</div>;
