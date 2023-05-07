import React, { useEffect, useState } from "react";
import axios from "axios";
import View from "../View/View";
const Action = () => {
    const initialState = [
        { id: 1, name: "suhail", title: "masai" },
        { id: 1, name: "bittu sir", title: "masai" },
    ];
    const[data,setData]=useState([initialState])
    // const getData = () => {
    //     axios
    //         .get("https://fakestoreapi.com/products")
    //         .then((res) => {
    //             setData(res.data)
    //             console.log(data)
    //         })

    //         .catch((err) => console.log(err));
    // };
    // useEffect(() => {
    //     getData();
    // }, [])
    console.log("line18", data)
    useEffect(() => {
  setData(data)
},[])


    return <div>
        Product page
        <hr />
        {data.map((ele) => {
            return <view key={ele.id} {...ele} />
})}


    </div>;
};

export default Action;
