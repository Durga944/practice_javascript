// function show(){
//     console.log("Hiii i am mona")
// }
// function now(callback){
//     callback()

// }
// now(show)




function show(a,b,callback){
    var z=a+b
    console.log(z)
    callback()
}
function now(){
    console.log("I am not Happy")
}
show(2,4,now) 



// callbackfunction

// function m(D) {
//     console.log("hii");
//     D()
// };
// function n() {
//     console.log("hello");
// };
// function o(p) {
//     console.log("durga");
//     p(n)
// }
// o(m)

// var arr = [1,2,3];
// var a=arr.filter((x)=>x%2==0)
// console.log(a)



