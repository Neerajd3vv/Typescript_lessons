interface UserTwo {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  addresses: string;
}

// so let take a function for updating userinfo i can do following thing but then the problem is what if in the future no. of key value pair increases i can't provide so much arguments to a funtion it does'nt look good
function updateUser(name: string, password: string, addresses: string) {}

// another way is using pick api

type UpdatedData = Pick<UserTwo, "name" | "password" | "addresses">;

function updateUserInfo(updateData: UpdatedData) {
  // hit db to update user info
  console.log(
    `Name: ${updateData.name} Password : ${updateData.password} address: ${updateData.addresses}`
  );
}

updateUserInfo({ name: "neeraj" , password: "123neeraj" , addresses: "delhi"})