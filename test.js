const { RandomArray } = require("./lib/index");

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