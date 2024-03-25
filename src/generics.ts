type array = number | string;

function firstEl(arry: array[]) {
  return arry[0];
}

const results = firstEl(["Neeraj", "Bhatt"]);

console.log(results);

// ++++++++++++++++++++++++++++++++++++++++++++++++

function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("Neeraj");
console.log(output1.toUpperCase());

const output2 = identity<number>(21);
console.log(output2);

// +++++++++++++++++++++++++++++++++++++++++++++++

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const outcome1 = getFirstElement<string>(["Neeraj", "Bhatt"]);

console.log(outcome1.toUpperCase());
