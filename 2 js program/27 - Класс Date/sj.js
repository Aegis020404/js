console.log(Date.now());

x = Date.now();
var date = new Date();//выводится дата и время создание этого объекта ,а также часовой пояс
console.log(date);
console.log(date.toString());

var date1 = new Date(1990,0,1,10,24,22,345);//(год, месяц, число,часы,минуты,секунды,миллисекунды)

console.log(date1);//в стандартном виде миллисекунды не выводятся

console.log(date1.getMilliseconds());//345 
console.log(date1.getHours());//10
console.log(date1.getMinutes());//24
console.log(date1.getSeconds());//22
console.log("")
console.log(date.getDay())//говорит день недели воскресенье = 0
console.log(date.getDate());//говорит день месяца
console.log(date1.getMonth());//говорит месяц 0 это Январь
console.log(date1.getYear());//говорит год 90
console.log(date1.getFullYear());//говорит полный указанный год 1990

//кроме геттеров ещё есть сеттеры для всех короме дня недели
date1.setDate(15);
console.log(date1);

console.log(date1.getTime());//говорит сколько прошло миллисекунд с 1970 года

console.log(new Date(1945,0,1).getTime());// если год будет меньше 1970 , то это значение будет отрицательным
console.log(new Date(0)); //показывает timeStamp

console.log(date1.getHours());//10
console.log(date1.getUTCHours());//7 показывает UTC время

console.log(date.toTimeString());// только время в виде строки
console.log(date.toDateString());// только дату в виде строки
console.log("")
console.log(date.toLocaleTimeString());// для вывода в другом формате с учетом локализации
console.log(date.toLocaleDateString());//


console.log(Date.now());//очень удобен чтобы считать прошедшее время
console.log(date.getTime());

y = Date.now()
console.log(y-x);//с помощью этого можно узнать за сколько милисекунд сработал код 