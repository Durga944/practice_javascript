//Callback:-Callback is a function in which we can pass function as argument and parametor to another function.

//first way
/*function f(name,Callback) {
    console.log(name)
    Callback()
}
function sy() {
    console.log("I am durga")

}
f("durga",sy)*/

//second way
/*function f(name,Callback) {

    Callback()
    console.log(name)

}
function sy() {
    console.log("I am durga")

}
f("durga",sy)*/

//third way
/*function f(name,Callback) {

    setTimeout(()=> {Callback(),3000})
    console.log(name)

}
function sy() {
    console.log("I am durga")

}
f("durga",sy)*/

//fourth way 
// function f1() {
//     console.log("durga")
// }
// function f2() {
//     console.log("18")
// }
// setTimeout(f1,2000)
// f2()

// fifth way

function show (a,b,callback) {
    var z = a + b;
    console.log(z);
    callback()
}
function now () {
    console.log("Wonderfull");
}
show(10,20,now);

// sixth way
console.log("durga");
setTimeout(() => {
    console.log("sanu");
},3000);
console.log("mona");


