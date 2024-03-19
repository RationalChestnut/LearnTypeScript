const score: Array<number> = [];
const names: Array<string> = [];

// Does not work for string
function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(true);
// We can define our own types and pass into it
function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "Coca-Cola",
  type: 1,
});

function getSearchProducts<T>(products: Array<T>): T {
  return products[0];
}

// Arrow function
const getMoreSearchProducts = <T>(products: Array<T>): T => {
  return products[0];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

// const anotherFunction = <T, U extends Database>(valOne: T, valTwo: U): object => {
//   return { valOne, valTwo };
// };

// anotherFunction(3, 4.533);

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: Array<T> = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
