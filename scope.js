// var i = 4;
// function m() {
//     i = 10;
//     console.log(i)
// }
// m()
// console.log(i)

var a = "Hello guys..";

function first() {
    b = "How are you?..";
    second();
        function second() {
            var c = "Myself Durga Dharwey..";
            console.log(a+b+c);
            // third();
        }
}

// function third() {
//     var d = "I love my family.."; error
//     console.log(a+b+c+d);
// }
first();