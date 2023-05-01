function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(function () {
        const data = "Some data";
        // Invoke the callback function with the data
        callback(data);
    }, 2000);
}

// Define the callback function
function processData(data) {
    console.log("Data received:", data);
}

// Pass the callback function to the fetchData function
fetchData(processData);
