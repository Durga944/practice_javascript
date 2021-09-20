var readlineSync = require('readline-sync');
var day = readlineSync.question("enter the day:--")
var meal = readlineSync.question("enter the meal:--")
if(day == "monday") {
    if(meal=="breakfast") {
        console.log("poha")
    }else if(meal=="lunch") {
        console.log("rajma chawal")
    }else {
        console.log("roti sabji")
    }
}
else if(day == "tuesday") {
    if(meal=="breakfast"){
        console.log("puri sabji")
    }else if(meal=="lunch") {
        console.log("thuka")
    }else{
        console.log("chikan chawal")
    }
}else {
    console.log("nothing")
}