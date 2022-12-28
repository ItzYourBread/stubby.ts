const stubby = require('stubby.ts');

// Create an array of fruits
const fruits = ['Apple', 'Pineapple', 'Orange', 'Strawberry', 'Mango', 'Cherry'];

// Use the RandomArray function to get a random fruit from the array
const randomFruit = stubby.RandomArray(fruits);
console.log(randomFruit); // Outputs a random fruit from the array

const names = [
  { name: 'Arif' },
  { name: 'Afrin' }
];

// Use the RandomArray function to get a random object from the array
const randomName = stubby.RandomArray(names);
console.log(randomName.name); // Outputs a random name from the array
