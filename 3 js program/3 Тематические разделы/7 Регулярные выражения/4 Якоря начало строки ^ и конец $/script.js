// Каретка ^ означает совпадение с началом текста, а доллар $ – с концом.

let str1 = 'Mary had a little lamb';
console.log( /^mary/i.test(str1));


let str2 = "it's fleece was white as snow";
console.log( /snow$/.test(str2)); // true


let goodInput = '12:34';
let badInput = '12:344';

let regexp = /^\d\d:\d\d$/;
console.log(regexp.test(badInput)); // false
console.log(regexp.test(goodInput)); // true

