import React, { useState } from 'react'

const Crosel = () => {
    const[count,setCount]=useState(0)

    let data = [
<img src="https://via.placeholder.com/300" alt="title" />


        ]

    const handlePlus = () => {
     setCount(count++)


    }
        const handleMinus = () => {
            setCount(count--);
        };



  return (
      <div>
          Crosel
          <div></div>
          <button onClick={handlePlus}>Next</button>
          <button onClick={handleMinus}>Prev</button>
      </div>
  );
}

export default Crosel