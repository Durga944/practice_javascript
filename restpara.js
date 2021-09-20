function myfun(...num) {
    var sum = 0;
    var a = 0;
    while(a<num.length) {
        // console.log(num[a])
        sum = sum + num[a]
        a++
    }
    console.log(sum)
    console.log(num)
    return sum
    // console.log(num)
}
const x = myfun(1,2,3,4,5,6,7,8,9,10)
console.log(x)


//  