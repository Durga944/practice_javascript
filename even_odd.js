
var readlineSync = require('readline-sync');
var Number = readlineSync.question("enter the name:--")
// console.log(Number)

if (Number % 2 == 0) {
    console.log(Number,"even number")
}else {
    console.log(Number,"odd number")
}



