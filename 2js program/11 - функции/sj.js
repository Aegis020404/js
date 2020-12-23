// function индефикатор (аргументы){
//     инструкции 
//     return выражение
// } 

function greet(name){
    return "hello "+ name;
}//         инструкция объявления функиции

var greet2 = function (name){
    console.log(arguments);//этот объект говорит какие есть аргументы
    return "Alloha "+ name;
};//  выражение объявление функции       Анонимная функция
// индефикатор (аргументы)
console.log(greet2("Anonim" ,22,42,12));

console.log(greet("Sorax"));
console.log(greet("Sorax").toUpperCase());


var func = function(callback) {
    var name = "sorax"
    callback(name);
};
func(function(n){
    console.log("Hello" + n)
});//передачи функций с помощью коллбэков


var func = function() {
    return function() {
        console.log("Hi");
    }
};
func()();

var greeting = function(name) {
    return "Hello" + name;
}("Sorax1");
console.log(greeting);