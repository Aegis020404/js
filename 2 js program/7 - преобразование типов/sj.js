console.log(5 + "5");
console.log(typeof(5+"5"));//string
console.log("5" * "4");
console.log(typeof("5" * "4"));//number так как так удобно языку
console.log("5" * "h1");//Nan
console.log(typeof("5" * "h1"));//number

console.log("5" == 5);//одно и тоже значение
console.log("5" === 5);//разные типы
console.log("0" == false);//0 = false but
console.log(Boolean("0"));//0 = true

console.log(0 == false);//true => 0 = false
console.log("5" == true);
console.log("" == false);
console.log(null ==false);//
console.log(null ==true);//
console.log(null == undefined);//null && undefined равны только друг другу
console.log(true == undefined);//
console.log(false == undefined);//

//явные преобразования

console.log(Number("555"));
console.log(typeof(Number("555")));
console.log(String(4433));
console.log(typeof(String(4433)));//преобразование в строковой тип
 console.log(Boolean(1));//преобразование в логический тип
 console.log(typeof(Boolean(1)));

 console.log(!!5);// !! - логическое быстрое преобразование в логический тип //true
 console.log(!!0);                                                           //false
 console.log(typeof(345 + ""));//оперативное строковое преобразование //string
 console.log(typeof + "454");// оперативное унарное преобразование //number
 
 var number = 22;
 console.log(typeof number.toString());
 number = 45;
 console.log(number.toString(2)); //переводит в другую систему счисления и преобразует в строковую переменную
 console.log(number.toString(8));
 console.log(number.toString(10));
 console.log( typeof number.toString(16));

 console.log(typeof false.toString());//string


console.log(parseInt("45 px",10));//выводит цифры//10-основание системы счисления
console.log(parseInt("45.22 px",10));//выводит цифры//10-основание системы счисления
console.log(parseFloat("12.45 em"));//выводит вещественные  цифры
console.log(parseFloat("122 12.45 eв  m"));//выводит цифры
console.log(typeof Infinity);//number
console.log( typeof String(Infinity));//переводит number в string

console.log(typeof(NaN));//number
console.log(typeof String(NaN));//now string
console.log(typeof(NaN));//now again number

console.log(+"");//0

console.log(!!"");//false
console.log(!!NaN);//f
console.log(!!0);//f
console.log(!!null);//f
console.log(!!undefined);//f 

console.log(!!"Hi");

var P4;

console.log( P4 =" 49 i");
console.log(typeof P4);
console.log(parseInt("49 i"))//обязательно первым должны быть числа или же оператор выведет "NaN";
P4 = parseInt(P4);
console.log(P4);
   
console.log(+true);//переводит булинговые значения в унарные
console.log(+false);//

var n = 5;
console.log(n.value);//переменная n была преобразованна в объект 
console.log(n);
n = "hello";
console.log(n.value);   
console.log(n);
// n = null;
// console.log(n.value);  //typeError 

 





