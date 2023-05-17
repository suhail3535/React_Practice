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


var john = {
    name: "John Doe",
    age: 30,
    sayName: function () {
        // this.age = 35;
        console.log("My name is ", this.name);
    },
    sayHello: function() {
        console.log("Hello! from ", this.name);
    },
};

john.sayName();
john.sayHello();
