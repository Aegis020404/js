// 'use strict'
// // var globalVariable = "value";//это переменная булет объектом window
// // console.log(window);
// // console.log(window.globalVariable);

// // //ко всему мы мужем обращаться через объект window

// // // У объекта виндов есть свойство виндов ,которая ссылается на объект виндов (вот такая рекурссия)


// // setTimeout(function(){
// //     console.log("2 seconds passed")
// // },2000) //(callback,milliseconds)   с помощью этой функции код будет выполнятся не сразу ,а спустя некоторое время
// // console.log("synchronous")//это выведется первым так как js ассинхронный язык

// // var i=0;
// // var timer = setInterval(function(){ //код будет выполнятся многократно
  
// //     console.log('1 seconds passed')
// //     console.log(++i)
// // },1000)
// // window.onclick = function(){//чтобы по клику функция сетинтервал останавливалась
// //     clearInterval(timer);
// // }//так же существует функция clearTimeout

// // onclick = function(){
// //     alert("hello");
// //     clearInterval(timer);
// // };
// // var question =confirm ("U are fag?")//создаёт окно где уже можно будет согласится с чем-то, который потом выведет буливое значение либо true or false
// // if(question == true){
// //     alert("fuck u");
// // }
// // else{
// //     alert("okay");
// // };


// // console.log(
// //     prompt('yor age?') >= 18
// //      ? "access granted" 
// //      : "access denied" 
// // );
// // //Лучше использовать собственные модальные окна чем браузера

// // var w = window.open('http://google.com');//открывает всплывающее окно


// // setTimeout(function(){
// //     w.close();
// // },4000)//чтобы закрыть эту вкладку через 4 секунды


// function printNumbers(a,b){

//     let timerID = setInterval(function () {
//         if(a >= b){
//             setInterval(()=>clearInterval(timerID));
//         };
//         console.log(a);
//         a++
//     },1000 );
// };

// printNumbers(0,22)



// // function printNumbers(a,b){
// //     let timerId = setTimeout(function timeLoop () {
// //         if(a <= b){
// //             console.log(a++);
// //             timerId=setTimeout(timeLoop,1000)
// //         }
// //     },1000)
// // }
// // printNumbers(0,22)
// let end = Date.now()
// console.log(`end = ${end}`)
// let start = Date.now()
// console.log(`start = ${start}`)
// console.log(start-end)


//CallBack and Promise


// console.log('Request date...');
// setTimeout(() => {
//     console.log('Preparing date...');

//     const backendDate = {
//         server :'aws',
//         port : 2000,
//         status :'working'
//     }

//     setTimeout (() => {
//         backendDate.modified =true;
//         console.log('Date received ', backendDate);
//     },2000)
// },2000)//слишком много коллбеков


// const p = new Promise(function (resolve,reject) {
//     setTimeout( () => {
//         console.log('Preparing date...');
//             const backendDate = {
//                 server :'aws',
//                 port : 2000,
//                 status :'working'
//             }
//            resolve(backendDate) //  тем самым мы говорим ,что он завершил своё выполнение
//     },2000)
// })
// p.then(data => {
//     const p2 = new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//             // console.log('Data received', data)
//         },2000)
//     })

//     p2.then(clientData => {
//         console.log('Data received ',clientData)
//     })

//     // console.log('Promise resolved',data)

// })

//фунция resolve вызывается когда закончнна синхронная операция причем успешно



// let promise = new Promise (function(resolve, reject) {
//     //здесь находится функция исполнитель
// })//resolve и reject это колбэки , resolve(value) - если работа завершилась с успешно с резуьтатом value ; reject(error) - есали произошла ошибка , error - объект ошибки

//у объекта в конструторе new Promise есть внутренние свойства :1)state(состояние) - вначеле"pending"(Ожидание) , потом меняется на "fulfied"(выполнено успешно) при вызове resolve или на "rejected"(выполнено с ошибкой) при вызове reject
//2) result(результат) - вначале undefined , далее изменяется на value при вызове resolve(value) или на error при вызове reject(error)


// let promiseRe = new Promise (function(resolve,reject){
//     setTimeout(() => {
//         resolve('done');
//     }, 1000);
// })//то был пример успешно выполненной задачи, в результате мы получили «успешно выполненный» промис.

// let promiseRt = new Promise(function (resolve,reject){
//     //Спустя одну секунду будет сообщено , что задана с ошибкой
//     setTimeout(()=> reject(new Error('Woops!'),1000));
// });


//Универсальный метода лоя навышивания обработчиков
// Promise.then(onFulFilled, onRejected);
//onFulfilled – функция, которая будет вызвана с результатом при resolve.
//onRejected – функция, которая будет вызвана с ошибкой при reject.




// onFulfilled сработает при успешном выполнении
// Promise.then(onFullied);

// onRejected сработает при ошибке
// Promise.then(null, onRejected);
// Для того, чтобы поставить обработчик только на ошибку, вместо .then(null, onRejected) можно написать .catch(onRejected) – это то же самое.
// Promise.catch(onRejected);//тоже самое .then(null, onRejected);

// Если в функции промиса происходит синхронный throw (или иная ошибка), то вызывается reject:

// let p = new Promise((resolve,reject)=> {
//     //тот же что reject (new Error("o_0"));
//     throw new Error("o_0");
// })
// p.catch(alert);// вывдет ошибку ('o_0')



let promise = new Promise((resolve,reject)=> {

    setTimeout(()=> {reject('error')},1000)
    setTimeout(()=> {resolve('result')},1000);
});

//promise.then навешивает обработчики на успешный результат или ошибку 

promise.then(result =>{
    //первую функцию-обработчик - запустится при вызове resolve
        // alert('fulfilled: '+result);
    },
        error => {
    //Вторая функция запустится при вызове reject
        // alert('Rejected: '+error);
    }
);


var userArray = new Array(3);
console.log(userArray.toString());










//callback функции
// let n =0;
// function sayHello(i) {
   
//         console.log('Hello', );
//         n++;
//         console.log(n)
    
// };
// // let sayHello0 = () => sayHello(n)



// let clickMeButton = document.querySelector('#click_me');

// clickMeButton.addEventListener('click',sayHello)


