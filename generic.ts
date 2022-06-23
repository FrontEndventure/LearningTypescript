function getData(val1: any) {
  return val1;
}

// console.log(getData("Taufik").length);
// //data undefined
// console.log(getData(1231).length);

//pakai Generic
//function
function myDataUtama<T>(params: T) {
  return params;
}
//arrow function
const myData = <T>(value: T) => {

    //jika pakai jsx
// const myData = <T, >(value: T) => {
  return value;
};

console.log(myData("Taufik").length);
console.log(myData(24234));
