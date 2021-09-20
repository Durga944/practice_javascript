arr = new Array(1,2,3,4,5,6,7)
var new_arr = arr.filter(function(x) {
    return x%2==0;
});
console.log(new_arr);