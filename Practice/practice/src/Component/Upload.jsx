import React, { useState } from 'react'

const Upload = () => {

const[data,setData]=useState("")



    const handleUpload = (e) => {
        e.preventDefault();
        setData(data)
        localStorage.setItem("file", data)
        alert("data uplodaing")
    }



  return (
      <div>
          <h1>Upload file here</h1>
          <form onSubmit={handleUpload}>
              <input type="file"  value={data} onChange={(e)=>setData(e.target.value)} placeholder="select file" /> <br />
              <input type='submit' value="Upload" />
          </form>
      </div>
  );
}

export default Upload