// const s = [5, 7, 2];
// function editInPlace() {
//     // "use strict";
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
//   console.log(s);
// }
// editInPlace();

let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
//   Object.freeze(obj);
  obj.review = "bad";
  obj.newProp = "Test";
  console.log(obj); 