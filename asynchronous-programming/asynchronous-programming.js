/* --------------------------------------------------------------------------- */
/* ------------------------ Traditional Way ------------------------- */
// const users = [
//   { userName: "Manish", age: 29, email: "msajan@gmail.com" },
//   { userName: "Sanju", age: 25, email: "sanju@gmail.com" },
//   { userName: "Rahul", age: 23, email: "rahul@gmail.com" },
// ];
// function showUsers(users) {
//   setTimeout(() => {
//     users.forEach((user) => {
//       console.log(user.userName);
//     });
//   }, 1000);
// }
// function addUser(user) {
//   setTimeout(() => {
//     users.push(user);
//   }, 2000);
// }
// showUsers(users);
// addUser({ userName: "Kailash", age: 30, email: "kailash@gmail.com" });

/* --------------------------------------------------------------------------- */
/* ------------------------ Callbacks ------------------------- */
// const users = [
//   { userName: "Manish", age: 29, email: "msajan@gmail.com" },
//   { userName: "Sanju", age: 25, email: "sanju@gmail.com" },
//   { userName: "Rahul", age: 23, email: "rahul@gmail.com" },
// ];
// function showUsers() {
//   setTimeout(() => {
//     users.forEach((user) => {
//       console.log(user.userName);
//     });
//   }, 1000);
// }
// function addUser(user, callbackFunc) {
//   setTimeout(() => {
//     users.push(user);
//     callbackFunc();
//     users.push({ userName: "Urwashi", age: 34, email: "urwashi@gmail.com" });
//   }, 2000);
// }
// addUser(
//   { userName: "Kailash", age: 30, email: "kailash@gmail.com" },
//   showUsers
// );

/* --------------------------------------------------------------------------- */
/* ------------------------ Promises ------------------------- */
// const users = [
//   { userName: "Manish", age: 29, email: "msajan@gmail.com" },
//   { userName: "Sanju", age: 25, email: "sanju@gmail.com" },
//   { userName: "Rahul", age: 23, email: "rahul@gmail.com" },
// ];
// function showUsers() {
//   setTimeout(() => {
//     users.forEach((user) => {
//       console.log(user.userName);
//     });
//   }, 1000);
// }
// function addUser(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       users.push(user);
//       let error = false;
//       if (error) {
//         reject("Kachhu to gadbad hego");
//       } else {
//         resolve("Hui gawa bachuaa");
//       }
//     }, 2000);
//   });
// }
// addUser({ userName: "Shivam", age: 30, email: "shivam@gmail.com" })
//   .then(showUsers)
//   .catch((err) => console.log(err));

/* --------------------------------------------------------------------------- */
/* ------------------------ Async & Await ------------------------- */
const users = [
  { userName: "Manish", age: 29, email: "msajan@gmail.com" },
  { userName: "Sanju", age: 25, email: "sanju@gmail.com" },
  { userName: "Rahul", age: 23, email: "rahul@gmail.com" },
];
function showUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      console.log(user.userName);
    });
  }, 1000);
}
function addUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      let error = false;
      if (error) {
        reject("Kachhu to gadbad hego");
      } else {
        resolve("Hui gawa bachuaa");
      }
    }, 2000);
  });
}
async function startAddingUser() {
  await addUser({ userName: "Rohan", age: 40, email: "rohan@gmail.com" });
  showUsers();
}
startAddingUser();
