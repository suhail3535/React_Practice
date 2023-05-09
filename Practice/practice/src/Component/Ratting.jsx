import React, { useState } from 'react'

const Ratting = () => {
const[count,setCount]=useState(0)
const[count1,setCount1]=useState(0)

    const handleUpdate = () => {
    setCount(count+1)

    }
        const handleRemove = () => {
            setCount(count-1);
        };


  return (
      <div>
          Ratting
          <h1>Ratting updates</h1>
          <span>Ratting count:{count}</span>
          <br />
          <br />
          <br />
          <button onClick={handleUpdate}>
              Ratting<span>👍</span>
          </button>
          <button onClick={handleRemove}>
              Ratting<span>👎</span>
          </button>
      </div>
  );
}

export default Ratting