// console.log("gassskeeuuun gan");

// let userName = 3;

//function
function getName(): string {
  return "hello my name is Taufik";
  // return 123;
}

console.log(getName());

function printName(): void {
  console.log("taufik");
}

/////
function multiply(val1: number, val2: number) {
  return val1 * val2;
}

const result = multiply(2, 3);

console.log("hasil kali", result);

//variable function
type Bagi = (val1: number, val2: number) => number;

const Divided: Bagi = (val1: number, val2: number): number => {
  return val1 / val2;
};

console.log("bagi kuy", Divided(6, 2));

//// objek
// let user = {
//   name: "taufik",
//   age: 32,
// };

//variable Objek
type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "taufik",
  age: 32,
};

console.log("ini user: ", user.name);

//union Type, menggunakan lebih dari 1 type data
console.log("===========union type===========");
let phone: number | string;
phone = 628131546;
phone = "0812345687";
console.log(phone);

//default parameter, contoh Muhammad
console.log("===========default parameter===========");
const fullName = (firstName: string, lastName: string = "Muhammad"): string => {
  return firstName + " " + lastName;
};

console.log(fullName("Hidayat", "opik"));

//optional parameter digunakan untuk string 
console.log("===========optional parameter===========");
const getUmur = (val1: string, val2?: string): string => {
  //   return val1 + " " + val2;
  return val1 + val2;
};

console.log(getUmur("A", "2"));
