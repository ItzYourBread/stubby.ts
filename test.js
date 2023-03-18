const { RandomNumber, RandomArray, SmallNumber, SystemInfo, Replace } = require('./dist/index');

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
console.log(SystemInfo().memory());
console.log(SystemInfo().memoryUsage());
console.log(SystemInfo().cpuUsage());
console.log(SystemInfo().cores());
console.log(SystemInfo().cpuBrand());
console.log(SystemInfo().uptime());

let paragraph = "Hello my name ia %name%, im %age% years old, and most peoples like me to call %nickname%.";
let replacements = {
    '%name%': 'Arif',
    '%age%': '16',
    '%nickname%': 'Bread'
};
console.log(Replace(paragraph, replacements));