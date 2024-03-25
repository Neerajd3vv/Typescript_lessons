// type user = {
//   name: string;
//   email: string;
//   age: number;
// };

// interface userTwo {
//   name: string;
//   email: string;
//   age: number;
// }

// First diff btwn types and inteface "=" sign in type 
// And second diff is that You can only use interfaces to implements classes 


///////   Union ////////

// Lets say we want a id parameter to be an number or it can also be an string , This you can not  do in interfaces

type customType = number | string

function userId(id: customType){
    console.log(id);
    
}

userId("10")
userId(10)


////   Intersection /////
// You can create type which has a poperty of mutiple interfaces or types or mix of both


type Employee = {
    name: String;
    age: number;
    salary: number
}

interface Manager {
name: string;
age: number;
salary: number;
address: string;
}

// intersection  type

type intersecton = Employee & Manager;

const userInfo: intersecton = {
name: "Neeraj",
age: 21,
salary: 100000,
address : "New delhi"
}