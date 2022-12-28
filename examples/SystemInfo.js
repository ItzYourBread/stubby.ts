const { SystemInfo } = require("stubby.ts");

const sys = SystemInfo();

console.log(sys.memory()); // returns total system memory
console.log(sys.memoryUsage()); // returns system memory usage as a percentage
console.log(sys.cpuUsage()); // returns system CPU usage as a percentage
console.log(sys.cores()); // returns number of CPU cores
console.log(sys.cpuBrand()); // returns CPU brand
console.log(sys.uptime()); // returns system uptime in seconds
