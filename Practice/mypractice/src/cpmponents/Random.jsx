import React, { useState } from "react";

// function RandomNumberGenerator() {
//     const [userNumber, setUserNumber] = useState("");
//     const [randomNumber, setRandomNumber] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const randomNumber = Math.floor(Math.random() * 100) + 1;
//         setRandomNumber(randomNumber);
//         setUserNumber("")
//     };

//     return (
//         <div>
//             <h2>Random Number Generator</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Enter a number:
//                     <input
//                         type="number"
//                         value={userNumber}
//                         onChange={(e) => setUserNumber(e.target.value)}
//                     />
//                 </label>
//                 <button type="submit">Generate Random Number</button>
//             </form>
//             {randomNumber&&<p>The random number is: {randomNumber}</p>}
//         </div>
//     );
// }

// export default RandomNumberGenerator;

const Genrator = () => {
    const [user, setUser] = useState("");
    const [number, setNumber] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const number = Math.floor(Math.random() * 100) + 1;
        setNumber(number)
        setUser("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="enterNumber"
                />
                <button>Submit</button>
            </form>
            <hr />
            <h1>Random number is:{number}</h1>
        </div>
    );
};
export default Genrator;