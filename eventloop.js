// const fs = require("fs");
// const fileName = "index.txt";

// fs.watch(fileName,() => {
//     console.log("file changed");
// })

// const fun2 = () => {
//     setTimeout(() => {
//         console.log("fun2 start");
//     },3000);
// }

// fun1 = () => {
//     console.log("fun1 start");
//     fun2();
//     console.log("fun1 ending");
// }

// fun1();

// var a = "1.5";
// var b = parseFloat(a);
// console.log(b);

// var fruits = ["Apple", "Mango", "Oranges", "Banana"];
// var shifted = fruits.shift();

// console.log(fruits);


// console.log(shifted);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add 2 elements:
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits);