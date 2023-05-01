import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from "./pro.module.css"
const Product = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))

        .catch ((err) => {
            console.log(err)
        })

console.log(data,"final")


    }
    useEffect(() => {
        getData();
},[])


  return (
      <div>
          Product list
          <hr />
          <div id={style.main}>
              {data.map((ele) => {
                  return (
                      <div id={style.pro}>
                          <img src={ele.image} alt="imag" />
                          <h2>{ele.category}</h2>
                          <h4>{ele.price}</h4>
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

export default Product