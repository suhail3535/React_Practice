// // // //

// // // // let matrix = [
// // // //     [1, 2, 3],
// // // //     [4, 5, 6],
// // // //     [7, 8, 9],
// // // // ];

// // // // let r = 3;
// // // // let c = 3;

// // // // output = [
// // // //     [7,4,1],
// // // //     [8,5,2],
// // // //     [9,6,3],
// // // // ]
// // // // [
// // // //   [7, 4, 1],
// // // //   [8, 5, 2],
// // // //   [9, 6, 3]
// // // // ]

// // // // *****second largest in array********/
// // // // let arr1 = [];
// // // // for (let i = 0; i < c; i++) {
// // // //     let bag = "";
// // // //     for (let j = r - 1; j >= 0; j--) {
// // // //         bag = bag + matrix[j][i] + " ";
// // // //     }
// // // //     arr1.push(bag);
// // // // }
// // // // console.log(arr1);

// // // // ****Remove duplicate for sorted array*****
// // // // let arr = [1, 1, 2, 1, 4, 8, 6]
// // // // let a = arr.sort((a, b) => {
// // // //     return a - b;

// // // // })
// // // // console.log(a);
// // // // let bag = "";
// // // // for (let i = 0; i < a.length; i++){
// // // //     if (arr[i]!== arr[i + 1]) {

// // // //         bag = bag + arr[i]+" "

// // // //     }

// // // // }
// // // // console.log(bag);

// // // // ****rotate an Array*****
// // // let arr1 = [1, 1, 2, 1, 4, 8, 6];
// // // let max = -Infinity;
// // // // let newarray = arr1.sort((a, b) => {
// // // // let newarray = arr1.sort((a, b) => {
// // // //     return a - b;
// // // // })
// // // // let bag = "";
// // // // for (let i = arr1.length-1; i >= 0; i--){
// // // // bag=bag+arr1[i]+" "
// // // // }
// // // // console.log(bag)

// // // // *****Given an array, does an array Contains Duplicate****
// // // // let arr = [1, 2, 4, 8, 6];
// // // // let flag = false;
// // // // for (let i = 0; i < arr.length; i++){
// // // //     if (arr[i] === arr[i + 1]) {
// // // //         flag = true;
// // // //         break
// // // //     }
// // // // }
// // // // console.log(flag)
// // // /*****Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. */

// // // // let arr = [1, 1, 2, 4, 4, 8, 8, 6, 6];
// // // // let bag = "";
// // // // let obj={}
// // // // for (let i = 0; i < arr.length; i++){
// // // //     if (obj[arr[i]] === undefined) {
// // // //         obj[arr[i]] = 1;
// // // //     } else {
// // // //         obj[arr[i]]++;
// // // //     }
// // // // }
// // // // let ans;
// // // // for (let key in obj) {
// // // //     if (obj[key]<=2) {
// // // //      ans=obj[key]
// // // //     }
// // // // }
// // // // console.log(ans);

// // // // function add(a) {
// // // //   return function(b) {
// // // //     return a + b;
// // // //   }
// // // // }

// // // // Usage
// // // // console.log(add(2)(3)); // returns 5
// // // function debounce(func, delay) {
// // //     let timerId;
// // //     return function () {
// // //         const context = this;
// // //         const args = arguments;
// // //         clearTimeout(timerId);
// // //         timerId = setTimeout(() => {
// // //             func.apply(context, args);
// // //         }, delay);
// // //     };
// // // }

// // // // Usage
// // // const myInput = document.getElementById("my-input");
// // // const myEventHandler = () => {
// // //     console.log("Event handler called!");
// // // };
// // // myInput.addEventListener("input", debounce(myEventHandler, 500));

// // // let arr = [1, 2, 3, 4, 5, 66, 6, 7,8,66,66, 66]
// // // arr.sort((a, b) => a - b)
// // // for ( let i=arr.length-1;i>=0;i--){
// // // 	if(arr[i]<arr[arr.length-1]){
// // // 		console.log(arr[i])
// // // 		break;
// // // 	}
// // // }

// // // let obj={};
// // // for(let i=0;i<arr.length;i++){
// // // 	obj[arr[i]]=1
// // // }
// // // // console.log(obj)
// // // let ans=[]
// // // for(let key in obj){
// // // 	ans.push(key)
// // // }
// // // console.log(+ans[ans.length-2])

// // // let arr = [1, 5, 66, 7,8,9,66,66, 66]
// // // let max= -Infinity
// // // let sMax=-Infinity

// // // for(let i=0;i<arr.length;i++){

// // // 	if(arr[i]>max){
// // // 		sMax=max
// // // 		max=arr[i]
// // // 	}
// // // 	if(arr[i]>sMax&&arr[i]<max){
// // // 		sMax=arr[i]
// // // 	}
// // // }
// // // console.log(sMax,)
// // // function appearOne(arr) {
// // //   let obj = {};
// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (obj[arr[i]] === undefined) {
// // //       obj[arr[i]] = 1;
// // //     } else {
// // //       obj[arr[i]]++;
// // //     }
// // //     }
// // //     console.log(obj)
// // //   let oneKey;
// // //   for (let key in obj) {
// // //     if (obj[key] == 1) {
// // //       oneKey = key;
// // //       break;
// // //     }
// // //   }
// // //   console.log(oneKey);
// // // }
// // // let arr = [7,7,8,8,1, 2, 2, 3, 3, 4, 5, 5, 4];
// // // appearOne(arr);

// // // function userDetails (name,lastName,callback) {
// // //   let details = 'my name is' + ' ' + name + ' '+ 'and lastName is' +' '+ lastName + '.'
// // //   callback(details);
// // // }

// // // userDetails('suhail', 'khan', function (details) {
// // //   console.log(details)
// // // })
// // // class Animal {
// // //   constructor(name, sound) {
// // //     this.name = name;
// // //     this.sound = sound;
// // //   }

// // //   speak() {
// // //     console.log(`${this.name} says ${this.sound}`);
// // //   }
// // // }

// // // const dog = new Animal('Fido', 'woof');
// // // dog.speak(); // Output: "Fido says woof"
// // // ***********constructor function********

// // // function Animal (name, age) {
// // //   this.name = name;
// // //   this.age = age;
// // //   this.sayHello = function () {
// // //     console.log(`my name is ${this.name} and my age is ${this.age}`)
// // //   }
// // // }
// // // const data = new Animal("blueberry", 30)
// // // data.sayHello();

// // /**********fuctory function********* */

// // // function userDetails (name,course) {
// // // return{
// // //   name,
// // //   course,
// // //   sayHello () {
// // //     console.log(`my name is ${this.name} ans course is ${this.course}`)
// // //   }

// // // }
// // // }

// // // const john = userDetails("masai", "dataengineer")
// // // john.sayHello();

// // function getData() {
// //   const id = setInterval(() => {
// //     // console.log("running")
// //   update();
// //   }, 2000);

// // }
// // getData();

// //  function update () {
// //   const time = setTimeout(() => {
// //         console.log("settimeout");
// //     },2000);

// // }

// let newarr = [1, 2, 3, 4, 5,6];

// function arrLength (arr) {
//   return arr.length
// }
// let length = arrLength(newarr)
// console.log(length)

// OUTPUT=SCHOOL BEST IS MASAI
// str = str.split(" ")
// // console.log(x)
// let bag=[]
// for (let i =str.length-1; i >= 0; i--){
// bag.push(str[i])
// }
// console.log(bag.join(" "))
// let str = " MASAI IS BEST SCHOOL";
// let bag = "";
// let word = "";
// for (let i = 0; i < str.length; i++){
//   if (str[i] === " ") {
//     bag = word + " " + bag;
//     word=""
//   } else {
//     word=word+str[i]
//     }

// }
// // console.log(bag)
// console.log(word+" "+bag)

let N=5
let arr1 = [1, 5,7,9]
let arr2 = [2,4,6,8];


// let count = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] === 0) {
//     count++;
//   }
// }
// arr = arr.filter((ele) => ele !== 0)
// while (count > 0) {
//   arr.push(0)
//   count--
// }
// console.log(arr.join(" "))

let n = arr1.length;
let m = arr2.length;
let l = arr1.length + arr2.length;

let arr3 = new Array(l)
let i = 0;
let j = 0;
let k = 0;

while (i < n && j < m) {
  if (arr1[i] < arr2[j]) {
    arr3[k] = arr1[i];
    i++;
    k++;
  } else if (arr2[j] < arr1[i]) {
    arr3[k] = arr2[j];
    j++;
    k++;
  } else if (arr1[i] === arr2[j]) {
    arr3[k] = arr1[i]
    i++
    k++
    arr3[k] = arr2[j];
    j++;
    k++;
}
}

while (i < n) {
  arr3[k] = arr1[i];
  i++;
  k++
}
while (j < m) {
    arr3[k] = arr2[j];
    j++;
    k++;
}
console.log(arr3.join(" "));



