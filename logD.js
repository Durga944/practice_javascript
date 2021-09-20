// var arr = [7,"h","a",9]
// var index = 0;
// while (index<arr.length){
//     console.log(typeof(arr[index]));
//     index++
// }


// var str = ["w",4,5,"g","d","t"];
// var i = 0;
// while(i<str.length){
//     console.log(typeof(str[i]))
//     i++
// }
7
// var arr = "I am Durga"
// var x = arr.split()
// console.log(x);

// var a = "123dfgjtt"
// var i = 0;
// while (i<a.length){
//     var b=Number(a[i])
//     // console.log(b);
//     if (b===b){
//         console.log("number",(a[i]))
//     }
//     else {
//         console.log("string",(a[i]))
//     }
//     i++
// }

var str = "w45gdt";
var index = 0;
while(index<str.length) {
    var typeconvert = Number(str[index]);
    // console.log(typeconvert);
    if(typeconvert===typeconvert) {
        console.log(`number ${str[index]}`);
    }else{
        console.log(`string ${str[index]}`)
    }
    index++
}

