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
export declare function SystemInfo(): {
    memory: () => number;
    memoryUsage: () => number;
    cpuUsage: () => number;
    cores: () => number;
    cpuBrand: () => string;
    uptime: () => number;
};
