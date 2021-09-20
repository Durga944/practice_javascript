var readlineSync = require('readline-sync');
var num1 = readlineSync.question("enter the num1:--")
var num2 = readlineSync.question("enter the num2:--")
var num3 = readlineSync.question("enter the num3:--")
var min;
if(num1 < num2 && num1 < num3) {
    max = num1;
}
else if (num2 < num1 && num2 < num3) {
    max= num2;
}
else {
    max = num3;
}
console.log( max);
