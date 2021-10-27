
console.log("some string") //Строковый литерал
console.log("Hello there".length);//считает колличество символов
console.log("Another \n\tvery long \n\t\t string")
console.log("Another \"very long \" string")
//конкантинация сложение строк

var string = "Sometimes the same is different";
console.log("\n",string,"\n\n");
console.log(string.charAt(2));//возвращает символ под определённым индексом
console.log(string.charAt(string.length - 1));//мини команда);

console.log(string.substring(10));//возвращает строку из подстроки
console.log(string.substring(10,21));
console.log(string.slice(-10));// Тот же substring но slice ещё может принимать отрицательное значение
console.log(string.substr(14,4))//14 индес начального индекса 4 индекс символов сколько нужно взять
console.log(string)
console.log(string.indexOf("diff"));//для поиска номера строки за счет символов
console.log(string.lastIndexOf("n"));//начинает поиск с конца
console.log(string);
console.log(string.replace("is","isn't")); //можно заменить подстроку
console.log(string.split(" "));//разбивает строку на массив используя разделитель пробел
console.log(string.toUpperCase());//приводит весь текст к верхнему регистру
console.log(string.toLowerCase());//приводит весь текст к нижнему регистру
console.log(string[4]);//вместо записи charAt()
