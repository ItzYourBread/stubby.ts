const { RandomNumber, RandomArray, SmallNumber, getSystemInfo } = require('./dist/index');

// generate a random number between 10 and 100
const randomNumber = RandomNumber(10, 100);
console.log(randomNumber);

// generate a random fruit from the array
const fruits = ['Apple', 'Pineapple', 'Orange', 'Strawberry', 'Mango', 'Cherry'];
const randomFruit = RandomArray(fruits);
console.log(randomFruit);

// convert a number to superscript
const num = 143;
const digits = num.toString().length + 1;
console.log(SmallNumber(num, digits));

// get system statistics
console.log(getSystemInfo().memory());
console.log(getSystemInfo().memoryUsage());
console.log(getSystemInfo().cpuUsage());
console.log(getSystemInfo().cores());
console.log(getSystemInfo().cpuBrand());
console.log(getSystemInfo().uptime());
