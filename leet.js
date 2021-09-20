var num = [2,7,11,15]; 
var readlineSync = require("readline-sync");
var target = readlineSync.questionInt("Enter Your Target Point\n--=");
var index = 0;
var empty_arr = [];
while(index<num.length) {
    var sum = 0;
    while(sum<num.length) {
        var total = num[sum] + num[index];
        if(total==target) {
            empty_arr.push(index)
        }
        sum++
    }
    index++
}
console.log(empty_arr);