let regexp = /html|css|java(script)?/gi;

let str = "Сначала появился язык Java, затем HTML, потом JavaScript";



regexp = /Java(Script)?|PHP|(C\+\+|C$)/gi;

console.log("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C


regexp = /\[.*?\].*\[.*?\]/;

str = "..[url]http://ya.ru[/url]..";
console.log( str.match(regexp) ); // [url]http://ya.ru[/url]