'use strict'
// // function индефикатор (аргументы){
// //     инструкции 
// //     return выражение
// // } 

// function greet(name){
//     return "hello "+ name;
// }//         инструкция объявления функиции

// var greet2 = function (name){
//     console.log(arguments);//этот объект говорит какие есть аргументы
//     return "Alloha "+ name;
// };//  выражение объявление функции       Анонимная функция
// // индефикатор (аргументы)
// console.log(greet2("Anonim" ,22,42,12));

// console.log(greet("Sorax"));
// console.log(greet("Sorax").toUpperCase());


// var func = function(callback) {
//     var name = "sorax"
//     callback(name);
// };
// func(function(n){
//     console.log("Hello" + n)
// });//передачи функций с помощью коллбэков


// var func = function() {
//     return function() {
//         console.log("Hi");
//     }
// };
// func()();

// var greeting = function(name) {
//     return "Hello" + name;
// }("Sorax1");
// console.log(greeting);

// let age = prompt("Cколько вам лет");
// let sayHi;
// if (age >=18) {
// //     function sayHi(){
// //         alert('Прошу вас!');
// //     }// не сработает из-за use strict
//     sayHi= function(){
//     alert('Прошу вас!');
// };
// }
// else {
//     // function sayHi(){
//     //     alert('До 18 нельзя!');
//     // };// не сработает из-за use strict
//     sayHi = function(){
//         alert('До 18 нельзя!');
//     }
// };

// sayHi()


// function ask(question,yes,no) {
//     if (confirm(question)) yes()
//     else no();
// };//yes и no яв-ся анонимными функциями

// function showOk() {
    // alert("Вы согласились.")
// };

// function showCancel() {
//     alert("Вы отказались.");
// };

// ask("Вы согласны",showOk,showCancel);



// let sum = new Function ('a,b','return a+b');//("Параметры","код")
// let result = sum(1,2);
// alert(result);//


// Функции обычное начинаются с
// show - обычно что-то показывает
// get - возвращает значение
// calc - чтото вычисляет
// create - что-то создают
// check - что-то вычесляет и возвращают логическое значение



//Функции стрелки(arrow functiouns)

//Функциональное выражение (Function Expression)
// let имя переменной = function (параметр,...параметр){
//     return выражение;
// };
// let имя переменной = (параметр, ...параметр) => выражение

// let showSum = (a,b) => console.log(a+b);//однострочная стрелочная функция return не обязательно
// showSum(2,3);

// let showSum3 = (a,b,c) => {//много строчная функция
// return a+b+c;
// };
// console.log(showSum3(1,2,3));




















