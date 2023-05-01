// function fun (a, b, ...c) {
//     console.log(`${a} ${b}`); //Mukul Latiyan
//     console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
//     console.log(c[0]); //Lionel
//     console.log(c.length); //3

// }
// fun("Mukul", "Latiyan", "Lionel", "Messi", "Barcelona");

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]; // Concatenates arr1 and arr2

// console.log(arr3); // Outputs [1, 2, 3, 4, 5, 6]
import React, { useEffect, useState } from "react";
const alldata = JSON.parse(localStorage.getItem("data"))
console.log(alldata)
const UserForm = () => {
    const [name, Setname] = useState("");
    const [location, Setlocation] = useState("");
    const [image, SetImage] = useState("");
  useEffect(() => {

},[])
  const handleSubmit = (e,data) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data))
  }
  const handleFormSubmit = (e) => {
      e.preventDefault();
        const formData = { name, location, image };
      handleSubmit(e, formData);

  };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    id="name"
                    value={name}
                    onChange={(e) => Setname(e.target.value)}
                />
                <br />
                <input
                    type="location"
                    placeholder="location"
                    value={location}
                    id="location"
                    onChange={(e) => Setlocation(e.target.value)}
                />
                <br />
                <input
                    type="url"
                    placeholder="image"
                    value={image}
                    id="image"
                    onChange={(e) => SetImage(e.target.value)}
                />
                <br />
                <input type="submit" vaule="Add Data" />
            </form>
            <hr />
          
        </div>
    );
};

export default UserForm;
