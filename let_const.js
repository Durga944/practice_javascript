/*const a = 0;
a = 1;
console.log(a)*/

/*let a = 0;
 a = 1;
console.log(a)*/

// const a = 1, b = 2
// let c = 3, d = 4
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


//**var keyword**
// var x = 15;
// var y = 20;
// if (x>y) {
//     var x = 2;
//     console.log(x)
// }else{
//     var y = 5.2;
//     console.log(y)

// }
// console.log(x,y)

//**let keyword**
// let x = 15;
// let y = 20;
// if (x>y) {
//     let x = 2;
//     console.log(x)
// }else{
//     let y = 5.2;
//     console.log(y)

// }
// console.log(x,y)


//**const keyword**
// const x = 15;
// const y = 20;
// if (x>y) {
//     const x = 2;
//     console.log(x)
// }else{
//     const y = 5.2;
//     console.log(y)

// }

//Diffrent between globle scope,function scope and local scope
// var a = 7;
// function func(num) {
//     if (false){
//         var b = 9;
//         console.log(b+num);
//     }else {
//         a = num + 15;
//         console.log(a);
//     }
// }
// func(2)


// var a = 5;
// function fun() {
//     var b = 7;
//     console.log(a)
//     console.log(b)
//     if(true){
//         var c =10;
//         console.log(a)
//         console.log(c)
//     }
//     console.log(b)
// }
// fun()
// console.log(a)

// const a = 5;
// function fun() {
//     const b = 7;
//     console.log(a)
//     console.log(b)
//     if(true){
//         const c =10;
//         console.log(a)
//         console.log(c)
//     }
//     console.log(b)
// }
// fun()
// console.log(a)

let a = 5;
function fun() {
    let b = 7;
    b = 8;
    console.log(a)
    console.log(b)
    if(true){
        let c =10;
        console.log(a)
        console.log(c)
    }
    console.log(b)
}
fun()
console.log(a)