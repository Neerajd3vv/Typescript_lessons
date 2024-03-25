// note :- Type inference-> Means, Here we dont have to tell explicitily typr boolean , But we did it cause its good we do it explicitely

function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

const result = isLegal(16);

console.log(result);
