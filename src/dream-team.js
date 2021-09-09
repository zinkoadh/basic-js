import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 * 
 */
 export default function createDreamTeam(members) {
  throw new NotImplementedError('Not implemented');

  // let filtered_members = members.filter(x=> typeof x ==="string").map(x => x!==' ', members)
  // let dream_name = []
  // for (let i =0; i<filtered_members.length; i++){
    // filtered_members[i].split(' ')
  // }
  // return filtered_members[1]
}
