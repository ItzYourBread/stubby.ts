const stubby = require('stubby.ts');

// Create an array of fruits
const fruits = ['Apple', 'Pineapple', 'Orange', 'Strawberry', 'Mango', 'Cherry'];

// Use the RandomArray function to get a random fruit from the array
const randomFruit = stubby.RandomArray(fruits);
console.log(randomFruit); // Outputs a random fruit from the array
