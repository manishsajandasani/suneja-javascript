/* --------------------------------------------------------------------------- */
/* ------------------------ Closures (Use of Lexical Scope) ------------------------- */
// function addNumbers(n1) {
//   let n3 = 30;
//   return function (n2) {
//     return n1 + n2 + n3;
//   };
// }
// let result = addNumbers(10);
// console.log(result(20));

function addNumbers(a, b, c) {
  return {
    addAB: function () {
      return a + b;
    },
    addBC: function () {
      return b + c;
    },
  };
}
let result = addNumbers(100, 200, 300);
console.log(result.addAB());
console.log(result.addBC());
