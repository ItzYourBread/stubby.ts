const { RandomArray, RandomNumber, SmallNumber, getSystemInfo } = require("./dist/index");
const stubby = require("./dist/index")

let num = 138;
let digits = num.toString().length  + 1;

const st = getSystemInfo();

const arr = [
	"frust",
	"bread"
]
console.log(RandomArray(arr))

console.log(stubby.SmallNumber(num, digits))
console.log(RandomNumber(10, 100))
console.log(st.memory())

/**
  * For more examples view our examples folder!
**/