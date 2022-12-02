const { RandomArray, RandomNumber, SmallNumber } = require("./dist/index");
const stubby = require("./dist/index")

let num = "143";
let digits = num.length + 1;

console.log(stubby.SmallNumber(num, digits))

/**
  * For more examples view our examples folder!
**/