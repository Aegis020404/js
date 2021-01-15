console.log(Math.pow(2,5));//возведение числа в степень (число,степень)
console.log(Math.sqrt(400));

console.log(Math.abs(300));
console.log(Math.abs(-300));

console.log(Math.round(5.5));//округление числа
console.log(Math.round(5.4));

console.log(Math.floor(5.9));//округление в малую сторону
console.log(Math.ceil(9.2));//округление в большую сторону

console.log(Math.min(6,9,2,5));//2 возвращает меньшее число
console.log(Math.max(6,9,2,5));//9 возвращает большое число

console.log(Math.exp(1));//выводит экспоненту в указанной степени
console.log(Math.exp(2));
console.log(Math.exp(3));

console.log(Math.log(5));//возвращает натуральный логаритм числа

console.log(Math.sin(1));
console.log(Math.cos(1));
console.log(Math.tan(1));
console.log(Math.atan(1));//арктангенс

console.log(Math.PI);
console.log(Math.cos(Math.PI));//косинус числа PI = -1
console.log(Math.E); 
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.SQRT2);//квадртнаый корень двойки
console.log(Math.SQRT1_2);//квадртнаый корень 1/2



console.log(Math.random());//даёт рандомное число от 0 до 1
console.log(Math.random());

console.log(-10 + Math.random() * 20);//будет выводить числа с -10 до 10

var getRandom = function(min,max) {
    return Math.random() * (max - min) + min;
}

console.log(getRandom(-10,10));










