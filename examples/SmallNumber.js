const stubby = require("stubby.ts");

const num = "143";
const digits = num.length + 1;
console.log(stubby.SmallNumber(num, digits)); // prints the number in small form, e.g. "¹⁴³"
