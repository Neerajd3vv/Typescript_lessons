// its a way to give type to object but it's not clean
interface user {
  id: string;
  name: string;
  age: number;
}

type UserType = {
  [key: string]: user;
};

const testUser: UserType = {
  xyzid: {
    id: "xyzid",
    name: "Neeraj",
    age: 21,
  },
  abcid: {
    id: "abcid",
    name: "raghav",
    age: 20,
  },
};
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// We can use something called Record for easy type to object
interface innerData {
  id: string;
  name: string;
  age: number;
}
type UserTypeTwo = Record<string, innerData>;

const testUserTwo: UserTypeTwo = {
  xyzid: {
    id: "xyzid",
    name: "Neeraj",
    age: 21,
  },
  abcid: {
    id: "abcid",
    name: "raghav",
    age: 20,
  },
};

console.log(testUserTwo["xyzid"]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Another way to create key value pair/ objects basically , its a js thing
const userMap = new Map<string, { id: string; name: string; age: number }>();
userMap.set("xyzID", { id: "xyzID", name: "paplu", age: 21 });
console.log(userMap.get("xyzID"));
