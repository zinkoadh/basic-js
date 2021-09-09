import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *  
 */
 export default function deleteDigit(n) {
  let arr_d = []
  for(let i=0; i<String(n).length; i++){
    arr_d.push(parseInt(String(n).slice(0,i)+String(n).slice(i+1)))
  }
  
  return arr_d.sort((a,b)=> b-a)[0]
}
