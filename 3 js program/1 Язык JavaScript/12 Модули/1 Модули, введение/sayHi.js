export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  
let secScript = 'secScript';
let firstScript = 'firstScript';
export let user = firstScript;
window.secScript = secScript

import {qwe} from './run1.js'
console.log(qwe)
qwe['1'] = 'sayHi'