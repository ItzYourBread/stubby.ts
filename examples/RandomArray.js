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
console.log(randomFruits);

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
console.log(randomNames.name);