// Second use of interface is that you can impliment them as a class

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}
