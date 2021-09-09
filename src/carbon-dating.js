import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN = 0.693;
const K = LN/HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 * 
 */
 export default function dateSample(sampleActivity) {
   if(isNaN(sampleActivity)||typeof sampleActivity!='string'){
     return false
   }
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / K)
}
