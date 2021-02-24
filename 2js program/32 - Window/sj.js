'use strict'
// var globalVariable = "value";//это переменная булет объектом window
// console.log(window);
// console.log(window.globalVariable);

// //ко всему мы мужем обращаться через объект window

// // У объекта виндов есть свойство виндов ,которая ссылается на объект виндов (вот такая рекурссия)


// setTimeout(function(){
//     console.log("2 seconds passed")
// },2000) //(callback,milliseconds)   с помощью этой функции код будет выполнятся не сразу ,а спустя некоторое время
// console.log("synchronous")//это выведется первым так как js ассинхронный язык

// var i=0;
// var timer = setInterval(function(){ //код будет выполнятся многократно
  
//     console.log('1 seconds passed')
//     console.log(++i)
// },1000)
// window.onclick = function(){//чтобы по клику функция сетинтервал останавливалась
//     clearInterval(timer);
// }//так же существует функция clearTimeout

// onclick = function(){
//     alert("hello");
//     clearInterval(timer);
// };
// var question =confirm ("U are fag?")//создаёт окно где уже можно будет согласится с чем-то, который потом выведет буливое значение либо true or false
// if(question == true){
//     alert("fuck u");
// }
// else{
//     alert("okay");
// };


// console.log(
//     prompt('yor age?') >= 18
//      ? "access granted" 
//      : "access denied" 
// );
// //Лучше использовать собственные модальные окна чем браузера

// var w = window.open('http://google.com');//открывает всплывающее окно


// setTimeout(function(){
//     w.close();
// },4000)//чтобы закрыть эту вкладку через 4 секунды


