"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemInfo = void 0;
var os = require("os");
/**
 * Returns an object with functions for accessing various system statistics.
 *
 * @returns {Object} An object with the following properties:
 * - `memory`: A function that returns the total amount of memory in bytes.
 * - `memoryUsage`: A function that returns the current memory usage as a percentage.
 * - `cpuUsage`: A function that returns the current CPU usage as a percentage.
 * - `cores`: A function that returns the number of CPU cores.
 * - `cpuBrand`: A function that returns the brand of the CPU.
 * - `uptime`: A function that returns the system uptime in seconds.
 */
function SystemInfo() {
    var memory = os.totalmem();
    var cores = os.cpus().length;
    var uptime = os.uptime();
    var cpuBrand = os.cpus()[0].model;
    return {
        memory: function () { return memory; },
        memoryUsage: function () { return Math.round((os.freemem() / memory) * 100); },
        cpuUsage: function () { return Math.round((os.loadavg()[0] / cores) * 100); },
        cores: function () { return cores; },
        cpuBrand: function () { return cpuBrand; },
        uptime: function () { return uptime; },
    };
}
exports.SystemInfo = SystemInfo;
