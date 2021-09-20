// fillmethod
// fill(value)
// fill(value,start)
// fill(value,end)

// var arr = [1,2,3,4];
// arr.fill(5)
// console.log(arr)

// var arr = [1,2,3,4,5,6]
// arr.fill(6,2)
// console.log(arr)

// var arr = [1,2,3,4,5,6]
// arr.fill(8,2,4)
// console.log(arr)

// var arr = [1,2,3,4]
// arr.fill(4,NaN,NaN)
// console.log(arr)

// filtermethod
// var num = [1,2,3,4,5,6]
// var f = num.filter(function(f) {
//     return f >= 5
// })
// console.log(f)
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi", 2, 3);
// console.log(fruits);


const fullNames = students.map((element, index) => {
    return {'fullName': element['f_name'] + ' ' + element['l_name']}
  });
  
  console.log(fullNames);

