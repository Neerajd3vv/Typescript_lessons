"use strict";
// function isLeegal(user: { name: string; email: string; age: number }) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
function isLeegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// const user = ;
console.log(isLeegal({
    firstName: "Neeraj",
    lastName: "Bhatt",
    email: "neeraj@gmail.com",
    age: 21,
}));
