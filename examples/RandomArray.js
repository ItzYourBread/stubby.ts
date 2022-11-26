const { RandomArray } = require("stubby.ts");


// first example.
let fruits = [
  "Apple",
  "Pineapple",
  "Orange",
  "Strawberry",
  "Mango",
  "Cherry"
];

let randomFruits = RandomArray(fruits);
console.log(randomFruits); // it will send the value randomly of fruits array


// second example
let names = [
  {
    name: "Arif"
  },
  {
    name: "Afrin"
  }
];

let randomNames = RandomArray(names);
console.log(randomNames.name); // it will send random object value