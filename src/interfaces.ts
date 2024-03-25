// function isLeegal(user: { name: string; email: string; age: number }) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function sayHello(user: { name: string; email: string; age: number }) {
//   console.log("hello" + user.name);
// }
// const user = {
//   name: "Neeraj",
//   email: "neeraj@gmail.com",
//   age: 21,
// };
// isLeegal(user);

// The above solution is correct by its voilating the dry principle like we are reapeting the types of user  , What we can do instead is following:=

interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  address?: string // it's optional user can pass address if he wants or not 
}

function isLeegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
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

