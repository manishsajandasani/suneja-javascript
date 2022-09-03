/* --------------------------------------------------------------------------- */
/* ------------------------ Rest Operator with Array ------------------------- */
// function addNumbers(a, b, c, ...others) {
//   console.log(arguments); /* old way */
//   console.log(others);
//   console.log(a + b + c);
// }
// addNumbers(1, 2, 3, 4, 5, 6);

/* --------------------------------------------------------------------------- */
/* ------------------------ Spread Operator with Array ------------------------- */
// const num = [10, 20, 30, 40, 50];
// function breakNumbers(n1, n2, n3, n4) {
//   console.log(n1, n2, n3, n4);
// }
// breakNumbers(num[0], num[1], num[2], num[3]); /* explicit breaking */
// breakNumbers(num); /* sending array itself */
// breakNumbers(...num); /* spread operator way */

/* --------------------------------------------------------------------------- */
/* ------------------------ Spread Operator with Array ------------------------- */
const employee = {
  empId: 101,
  empName: "Manish",
  empAge: 29,
};

/* Traditional Way */
// let name = employee.empName;
// let age = employee.empAge;
// console.log(name, age);

/* Destructuring Without Rest Operator (Object)*/
// let { empId, empName, empAge } = employee;
// console.log(empId, empName, empAge);

/* Destructuring With Rest Operator (Object)*/
// let { empAge, ...restEmployeeDetails } = employee;
// console.log(empAge, restEmployeeDetails);

/* Spread Operator with Object*/
/* In case of overriding */
const updateEmployee = {
  ...employee,
  empName: "Sanjay",
  empAge: 24,
  empLocation: "Bhopal",
};
console.log(updateEmployee);
console.log(employee);
