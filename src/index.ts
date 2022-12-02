/**
 * @param - first value is minimum ans second value is maximum.
 **/
import { getRandomNumber as RandomNumber } from './lib/getRandomNumber';

/**
 * @object - the array object.
 **/
import { getRandomArray as RandomArray } from './lib/getRandomArray';

/**
 * @param - first value is count and second value is digits
 **/
import { toSmallNumber as SmallNumber } from './lib/toSmallNumber';

export default {
  RandomNumber,
  RandomArray,
  SmallNumber,
};
export { RandomNumber, RandomArray, SmallNumber };
