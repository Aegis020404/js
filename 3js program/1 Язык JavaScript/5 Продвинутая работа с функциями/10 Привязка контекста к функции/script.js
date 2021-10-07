// // Привязка контекста к функции

//     // Потеря "this"

//         let user = {
//             firstName: 'Vasya',
//             sayHi() {
//                 console.log(`Hi, ${this.firstName}!`);
//             }
//         };

//         setTimeout(user.sayHi, 1000); // Hi, undefined!
//         setTimeout(user.sayHi.apply(user), 1000) // Hi, Vasya!

    
//     // Решение 1: сделать функцию-обёртку

//         // setTimeout( function() {
//         //     user.sayHi(); // Привет, Вася
//         //     },1000)

//         user = { sayHi() {console.log('Another user in `setTimeout`')}}


//     // Решение 2: привязать контекст с помощью bind
//             //показанна раннее

//     // Частичное применение

//             function mul(a, b) {
//                 return a* b;
//             }

//             let triple = mul.bind(null, 3);
    
//             console.log( triple(8)); // 24


//     // Частичное применение без контекста

//             function partial(func, ...argsBound) {
//                 return function(...args) {
//                     return func.call(this, ...argsBound, ...args);
//             }
//             }

//             // использование
//             user = {
//                 firstName: 'John',
//                 say(time, phrase) {
//                     console.log(`[${time}] ${this.firstName}: ${phrase}`)
//                 }
//             };

//             // добавляем частично применнёный метод с фиксированным временем
//             user.sayNow = partial(user.say,new Date().getHours() + ':' + new Date().getMinutes());
//             user.sayNow('Hello')









//             // function f() {
//                 function f() {
//                     alert( this ); // ?
//                   }
                  
//                   let user = {
//                     g: f.bind(null)
//                   };
                  
//                   user.g();



// Исправьте функцию, теряющую "this"
    // function askPassword(ok, fail) {
    //     let password = prompt("Password?", '');
    //     if (password == "rockstar") ok();
    //     else fail();
    // }
    
    // let user = {
    //     name: 'Вася',
    
    //     loginOk() {
    //     alert(`${this.name} logged in`);
    //     },
    
    //     loginFail() {
    //     alert(`${this.name} failed to log in`);
    //     },
    
    // };
    
    // askPassword(user.loginOk.bind(user), user.loginFail.bind(user));



// Использование частично применённой функции для логина
   function askPassword(ok, fail) {
        let password = prompt("Password?", '');
        if (password == "rockstar") ok();
        else fail();
    }
    
    let user = {
        name: 'John',
    
        login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
        }
    };
    
    askPassword(() => user.login(true), () => user.login(false));
    
    


