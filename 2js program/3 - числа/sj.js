var N = new Number(4000);

var n = 5000;
console.log(typeof N);
console.log(N.toFixed(20));//обозначает колличество знаков после запятой
console.log(2 .toFixed(5));
console.log(N.toExponential(4));
console.log(N.toPrecision(8));


//Арифметические операторы
console.log(+10);
console.log(-10);
//Унарные операторы
var i = 10;
console.log(++i);
console.log(i);
console.log(i++);
console.log(i);
//Бинарные операторы
console.log(5 + 10);
console.log(7 - 3);
console.log(5 * 9);
console.log(10 / 3);
console.log(10 % 3);

var n = 100;
n = n + 20;
console.log(n);
n = n * 2;
console.log(n)

var n = 100;
n += 20;         //n = n + 20;
console.log(n);
n *= 2;         //n = n * 2;
console.log(n)

//Операторы Отношения

console.log(5 > 10);//false
console.log(5 < 10);//true
console.log(10 >= 10);//true
console.log(8 <= 20);//true
console.log(10 === 10);//true
console.log(10 !== 10);//false
console.log(10 == "10");//true
console.log(10 === "10");//false

//Объект Math
console.log(Math.sqrt(25));
console.log(Math.pow(3,5));
console.log(Math.PI);
console.log(Math.E);

console.log(2<<53);

//Проблема есстественнных чисел

console.log(0.2 + 0.1)//проблема
console.log(100000000000000008 + 100000000000000008)//проблема
