// its simply make properties of a type/interface optional

interface AboutUser  {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
    addresses: string;
      

}

// now a funtion to update user info 
//Pick
type UserUpdatedAbout = Pick<AboutUser, "name" | "addresses" | "password">

// its not necesaary that user will change all 3 things so what we can so is ask him provide argumnets optinally

type PartialUserUpdatedData = Partial<UserUpdatedAbout>

function userAbout (partial: PartialUserUpdatedData){
  // update , do db call 
}