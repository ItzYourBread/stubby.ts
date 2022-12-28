import os from 'os';

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
function getSystemStats(): { memory: () => number, memoryUsage: () => number, cpuUsage: () => number, cores: () => number, cpuBrand: () => string, uptime: () => number } {
  try {
    const memory = os.totalmem();
    const cores = os.cpus().length;
    const uptime = os.uptime();
    const cpuBrand = os.cpus()[0].model;

    return {
      memory: () => memory,
      memoryUsage: () => Math.round(os.freemem() / memory * 100),
      cpuUsage: () => Math.round(os.loadavg()[0] / cores * 100),
      cores: () => cores,
      cpuBrand: () => cpuBrand,
      uptime: () => uptime,
    };
  } catch (error) {
    // Log the error and return an empty object
    console.error(error);
    return {};
  }
}
