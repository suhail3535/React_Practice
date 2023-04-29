

function fun (a, b, ...c) {
    console.log(`${a} ${b}`); //Mukul Latiyan
    console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ]
    console.log(c[0]); //Lionel
    console.log(c.length); //3

}
fun("Mukul", "Latiyan", "Lionel", "Messi", "Barcelona");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // Concatenates arr1 and arr2

console.log(arr3); // Outputs [1, 2, 3, 4, 5, 6]
