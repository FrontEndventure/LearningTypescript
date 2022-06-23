"use strict";
// console.log("gassskeeuuun gan");
// let userName = 3;
//function
function getName() {
    return "hello my name is Taufik";
    // return 123;
}
console.log(getName());
function printName() {
    console.log("taufik");
}
/////
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 3);
console.log("hasil kali", result);
const Divided = (val1, val2) => {
    return val1 / val2;
};
console.log("bagi kuy", Divided(6, 2));
let user = {
    name: "taufik",
    age: 32,
};
console.log("ini user: ", user.name);
//union Type, menggunakan lebih dari 1 type data
console.log("===========union type===========");
let phone;
phone = 628131546;
phone = "0812345687";
console.log(phone);
//default parameter, contoh Muhammad
console.log("===========default parameter===========");
const fullName = (firstName, lastName = "Muhammad") => {
    return firstName + " " + lastName;
};
console.log(fullName("Hidayat", "opik"));
//optional parameter digunakan untuk string 
console.log("===========optional parameter===========");
const getUmur = (val1, val2) => {
    //   return val1 + " " + val2;
    return val1 + val2;
};
console.log(getUmur("A", "2"));
