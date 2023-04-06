const { Random } = require("./dist/index");

// Generate a random number between 0 and 100
const randomNumber = Random(0, 100);
console.log(randomNumber); // Output: a random number between 0 and 100

// Generate a random number between -10 and 10
const negativeRandomNumber = Random(-10, 10);
console.log(negativeRandomNumber); // Output: a random number between -10 and 10

// Generate a random string from an array
const fruits = ["Apple", "Banana", "Cherry", "Grape", "Kiwi"];
const randomFruit = Random(fruits);
console.log(randomFruit); // Output: a random fruit from the array

// Generate a random object from an array of objects
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const randomPerson = Random(people);
console.log(randomPerson); // Output: a random person object from the array