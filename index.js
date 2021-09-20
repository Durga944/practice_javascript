var arr = [1,2,3,4];
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Enter any num--");
arr[arr.length]=user
console.log(arr)

