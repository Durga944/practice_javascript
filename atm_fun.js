function language () {
    if(user==1) {
        var a = "English";
    }else {
        var a = "Hindi";
    }
    return user;
}
language();
var readlineSync = require("readline-sync");
var user = readlineSync.questionInt("Choose Your Language \n 1. English \n 2. Hindi \n--=");

function pin_code() {
    if(user==1) {
        var i = 0;
        while(i<3) {
            var pin = readlineSync.questionInt("Enter Your  Four Digit Pin--=");
            if(pin==1234) {
                console.log("Correct");
                break
            }else {
                console.log("Incorrect pin");
            }
            i++
 
        }
    }else{
        var i = 0;
        while(i<3) {
            var pin = readlineSync.questionInt("Apna char number ka pin Darj kare--=");
            if(pin==1234) {
                console.log("Aapka pin sahi hai");
                break
            }else {
                console.log("Fir se apna pin dale");
            }
            i++
        }
    }
    return pin;
}
var code = pin_code();
console.log(code);

function options() {
    if(user==1) {
        if(code==1234) {
            var Balance = 500000;
            console.log('please press 1 for your balance inquiry');
            console.log('please press 2 for your withdrawl');
            console.log('please press 3 for your pay in');
            console.log('please press 4 for your return card/ Exit');
            console.log(".............");
            var option=readlineSync.questionInt('what would you like to choose=');
            if(option==1) {
                var ans= (Balance ,"Your current balance")
            }
            else if(option==2) {
                var withdrwal=readlineSync.questionInt("enter how much money would you like to withdrawl=");
                var ans=(balance-withdrwal,"Your Current balance")
            }
            else if(option==3) {
                var pay=readlineSync.questionInt("enter how much money you want to pay in=");
                var ans= (balance + pay,"you current balance")
            }else {
                var ans= "collect your card";
                console.log("THANK YOU FOR VISIT");
            }
        }
        return ans;
    }else{
        if(code==1234) {
            var Balance = 500000;
            console.log('Kripya karke 1 dbaye apni Jma rashi ke bare me janne ke liye');
            console.log('Pese nikalne ke liye 2 Dbaye');
            console.log('Pese Jma karne ke liye 3 dbaye');
            console.log('Apna card wapis lene ke liye 4 dbaye');
            console.log("...........");
            var option=readlineSync.questionInt("kripya karke apna Vikalp chune=");
            if(option==1) {
                var ans= (balance,"Apki kul jma rashi")
            }
            else if(option==2) {
                var withdrwal=readlineSync.questionInt("Aap kitni rashi nikalna chahoge?=");
                var ans = (balance-withdrwal,"apki kil jma rashi")
            }
            else if(option==3) {
                var pay = readlineSync.questionInt("Aap kitna Bhugtan karna chahoge?=");
                var ans= (balance + pay,"Apki Kul Jma rashi")
            }else{
                var ans= "Apna card Jma kar lijiye";
                console.log("Dhanyawad Aane Ke liye");
            }
        }
        return ans;
    }
}
options();
// function main()
//     console.log(language());
//     console.log(options());
// main();































