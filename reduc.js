// var sum = (n) => {
//     return n*3;
// }

// var arr = [1,3,4,5,];
// var new_arr = arr.reduce(sum);
// console.log(new_arr);

var arr = [1,2,3,4,5];
let a = arr.reduce((tatal,current)=>{
    return tatal+current;
},0);
console.log(a)

