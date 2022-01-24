let str = 'let varName = "value"';

console.log(str.match(/(?<=").+?(?=")/))