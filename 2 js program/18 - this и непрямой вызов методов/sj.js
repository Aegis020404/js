var person = {  
    name: "john",
    greet: function(){
        return "hi My name is " + person.name;
    }
};
console.log(person.greet())

// this

var person1 = {  
    name: "john1",
    greet: function(){
        return "hi My name is " + this.name;//this работает как локальное соединение
    }
};
console.log(person1.greet())



var greet2 = function(greeting){
    return greeting + " ! My name is " + this.name; //использование функции в будущем в объектах
};

var person2 = {
    name:"Nikola",
    greet3: greet2
};
console.log(person2.greet3("hi"));


var person3 = {
    name:"Nikolay",
    greet3: greet2
};
console.log(person3.greet3("hi"));

// console.log(greet2())
// console.log(this)


console.log(person3.greet3.call(person2 ,"Bonjour"))//
console.log(person3.greet3.apply(person ,["Bonjour"]));//передаётся не через запятую , а массивом


var bound = greet2.bind(person3);//связывает функцию с каким-нибудь объектом

console.log(bound("Hello there"));


let userVyache = {
    name:"Vyacheslav",
    age:16,
    height:166,
    weight:60,
     info :function (){
         console.group()
         console.log(this.name);
        console.log(this.age);
        console.log(this.height);
        console.log(this.weight);
        console.groupEnd();
    }
} 
let anotherUset = {
    name:"anotherUset",
    age:16,
    height:166,
    weight:60,

} 
userVyache.info.bind(anotherUset,'')();
userVyache.info.bind(anotherUset,'');
userVyache.info.bind(anotherUset,[]);



// let user = {
//     firstName: "Вася",
//     sayHi() {
//       alert(`Привет, ${this.firstName}!`);
//     }
//   };
  
//   setTimeout(user.sayHi, 1000); // Привет, undefined!. - так как значение this будет не объект ,а window


//Решенеи 1 Сделать функцию - обёртку

// let user = {
//     firstName: "Вася",
//     sayHi() {
    //       alert(`Привет, ${this.firstName}!`);
    //     }
    //   };
      
    //   setTimeout(function() {
        //     user.sayHi(); // Привет, Вася!
        //   }, 1000); //Выглядит хорошо, но теперь в нашем коде появилась небольшая уязвимость.Что произойдёт, если до момента срабатывания setTimeout (ведь задержка составляет целую секунду!) в переменную user будет записано другое значение? Тогда вызов неожиданно будет совсем не тот!
    
    
//     function mul(a, b) {
//         return a * b;
//       }
  
//   let double = mul.bind(Number, 2);
  
//   alert( double(3) ); // = mul(2, 3) = 6
//   alert( double(4) ); // = mul(2, 4) = 8
//   alert( double(5) ); // = mul(2, 5) = 10

  
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'Вася',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
  
//   };
  
//   askPassword(user.loginOk.bind(Object), user.loginFail.bind(Object));


//Каррирование

// function sum (a){
//     return (b)=>{
//        return a+b;
//     };
// };
// console.log(sum(5)(3));//8 способ при каррирование более читабельный и удобный

// let  sum_a_6 = sum(6);
// console.log(sum_a_6(3))//9  a стольо статистическим аргументом



function curry (func) {
    return function curried (...args){
        if (args.length >= func.length) {
            return func.apply(this, args);
        }
        else {
            return function (...args2) {
                return curried.apply(this,args.concat(args2));
            };
        };
    };
};//функция каррирования других функций

function sum (a,b) {
    return a +b;
};

let sumC = curry(sum)
console.log(sumC(1)(6))//полное каррирование функций
let sumC8 = sumC(8);
console.log(sumC8(7))//15 

console.log(parseInt("1px"),
parseInt("-1.2"),
parseInt("0 минут"),
parseInt("$1.2"))
f.call(null);

function f() {
  alert(this);
}