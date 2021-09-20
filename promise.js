// const promise = new Promise((res,rej)=>{
//     res("hello")
//     rej("bye")
//     // res("hello")
// })
// promise.then((result)=>{
//     console.log(result)

// const { rejects } = require("assert/strict");
// const { resolve } = require("path/posix");

// const { rejects } = require("assert/strict");
// const { resolve } = require("path/posix");

// }).catch((mine)=>{
//     console.log(mine)
// })



// const prom = new Promise ((resolve,rejects) => {
//     var a=10
//     var b=3
//     if(a>b){
//         resolve("uuu")
//     }else {
//         rejects("hhjj")
//     }
// }) .then(
//     (value) => {
//         console.log(value);
//     }
// ) .catch(
//     (error) => {
//         console.log(error);
//     }
// )


let prom = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("data recieved")
    },3000)
})
async function sy () {
    const num = await prom
    console.log(num);
    console.log("durga");
}
sy();

