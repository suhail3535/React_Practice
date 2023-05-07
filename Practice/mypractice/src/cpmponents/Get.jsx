import React, { useEffect, useState } from "react";


const Get = () => {
const[data,setData]=useState([])
const getData = async () => {
            try {
                let res = await fetch("https://fakestoreapi.com/products");
                if (!res.ok) {
                    console.log("somthing went wrong");
                }
                let data = await res.json();
                setData(data)
                console.log("bag",data);
            } catch (error) {
                console.log(error);
            }
        };
        useEffect(() => {
            getData();
        }, []);
    console.log(data,"line22")
  return (
      <div>
          welcome

          {data.map((ele) => {
              return <div>

                  <p>{ ele.title}</p>
    </div>
})}




      </div>
  )
}

export default Get