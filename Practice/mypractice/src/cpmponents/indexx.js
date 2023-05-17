// ******promises example **********
// function main (time) {
//     return new Promise((res, rej) => {
//         if (typeof time !== "number") {
//             rej("argumnet is not number");
//             return;
//         }

//         setTimeout(() => {
//             res({status:200});
//         }, time);
//     });
// }
// main(5000)
//     .then((res) => console.log("My promise is resole after 5 sec"))
//     .catch((err) => console.log(err));

// // async function data() {

// //     try {
// //         console.log("waitning for promise resolve");
// //         let res = await main(5000);
// //         console.log(res);
// //         if (res.status === 200) {
// //             return true;
// //         }
// //     }
// //     catch (error) {
// //         console.log(error);
// //     }
// // }
// // data()
// //     .then((res) => {
// //     console.log(res);
// // });
// function sayGoodbye() {
//     console.log("Good bye! ", this); // Window
// }

// function sayHello() {
//     console.log("Helloo! ", this); // Window
//     sayGoodbye();
// }

// sayHello();

// var john = {
//     name: "John Doe",
//     age: 30,
//     sayName: function () {
//         // this.age = 35;
//         console.log("My name is ", this.name);
//     },
//     sayHello: function() {
//         console.log("Hello! from ", this.name);
//     },
// };

// john.sayName();
// john.sayHello();

// function sayHello() {
//     console.log("Hello! ", this);
// }

// var john = {
//     name: "John Doe",
//     age: 30,
// };

// var james = {
//     name: "James Bond",
//     age: 30,
// };

// sayHello.call(james);
// sayHello.apply(john);
// function sayHello() {
//     console.log("Hello! ", this, this.name);
// }

// var John = {
//     name: "John Doe",
//     age: 30,
// };

// var johnSayHello = sayHello.bind(John);

// johnSayHello();

// When a function is called with the new operator, it gives us a brand new object & the this refers to the newly created object.
function Person(name) {
    this.name = name;

    this.sayHello = function () {
        console.log("Hello! ", this, this.name);
    };
}

var james = new Person("James Bond");
var john = new Person("John Doe");

john.sayHello();
james.sayHello();