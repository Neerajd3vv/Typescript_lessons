// This one is interseting
// We can once we have declared change the inside/ smaller value inside of object or arrays.
const dogChar = {
  name: "jackie",
  age: 21,
};
const superHeroes = ["superman", "spiderman", "hulk"];
// look i can easliy change name property of object , same with arrays

dogChar.name = "rockey";
superHeroes[1] = "thor";

// what we cant do is change whole of object and array then ts give errors
// so if we want that not a smaller value shoulb be changign we can use readonly

type doggy = {
  name: string;
  age: number;
};

const dogCharTwo: Readonly<doggy> = {
  name: "wholfy",
  age: 15,
};

// now its showing squiggily
dogCharTwo.age = 22;

// ++++++++++++++++++ same for Array ++++++++++++++++++++++
type suppy = string[];

const superHeroesTwo: Readonly<suppy> = ["superman", "spiderman", "hulk"];

superHeroesTwo[1] = "paplu";
