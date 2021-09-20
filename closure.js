// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//         let sum = a+b;
//         console.log(`the sum of two no. is ${sum}.`);
//     }
//     innerFun();
// }
// outerFun(5);

const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a+b;
        return (`the sum of two no. is ${sum}.`);
    }
    return innerFun();
}
let inner = outerFun(5);

console.log(inner);

// inner();
// console.log(b)

// let c=0
// let sum=(a,b)=> {
//     c=a+b
//     return c
// }

// let sub=(b)=> {
//     return c-b
// }

// let main=()=> {
//     sum(3,5);
//     console.log(sub(8))
// }
// main();