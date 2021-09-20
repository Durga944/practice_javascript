var arr = ["2","3","4","6","8","9","5","3","9","0","9"];
var i = 0;
var x = [];
var lenOfarr=arr.length
console.log(lenOfarr)
if (lenOfarr%2==0){
    while(i<lenOfarr) {
    
        var y = arr[i] + arr[i+1];
        var z = Number(y)
        x.push(z)
        i+=2
    }
    console.log(x);


}else{
    while(i<lenOfarr-1) {
        
        var y = arr[i] + arr[i+1];
        var z = Number(y)
        x.push(z)
        i+=2
        
    }
    var z = Number(arr[i])
    x.push(z)
    console.log(x);
}
