// var  num1 = 10;
// var num2 = 6;
// var num3 = 9;

var readlineSync = require('readline-sync');
var num1 = readlineSync.question("enter the num1:--")
var num2 = readlineSync.question("enter the num2:--")
var num3 = readlineSync.question("enter the num3:--")
var max;
if(num1 > num2 && num1 > num3) {
    max = num1;
}
else if (num2 > num1 && num2 > num3) {
    max= num2;
}
else {
    max = num3;
}
console.log( max);

// always resing 
let i = 1;
while(i<=4) {
  console.log(i)
  i++
}