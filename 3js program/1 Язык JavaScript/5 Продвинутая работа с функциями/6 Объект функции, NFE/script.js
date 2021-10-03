// Свойство "name"
    function sayHi() {
        console.log( 'hi' );
    };

    console.log( sayHi.name ); // говорит имя функции

    function f( sayHi = function() {} ) {
        console.log( sayHi.name ); // sayHi (работает!)
      }
      
      f();


// свойство "length"

      function f1(a) {}
      function f2(a , b) {}
      function many(a , b, ...more)  {}

      console.log( f1.length ) // 1
      console.log( f2.length ) // 2
      console.log( many.length ) // 2 говорит о колличестве параметров

      function ask (question, ...handlers) {
          let isYes = confirm( question );

          for ( let handler of handlers ) {
            if ( handler.length == 0) {
                if (isYes) handler();
            } else {
                handler( isYes );
            }
          }
          
      }

    //   ask ('Вопрос?', () => console.log('Вы ответили да'), result => console.log(result))
      

// Пользовательсие свойтсва

      function sayHi() {
          console.log( 'hi' );

        //   давайте посчитаем колличество вызовов ,которые мы сделали
        sayHi.counter++
      }
      sayHi.counter = 0;
      sayHi();
      sayHi();

      console.log( ` Вызвано ${sayHi.counter} раза`);


// Named Function Expression
    // Named Function Expression или NFE – это термин для Function Expression, у которого есть имя.

    sayHi = function func(who) {
        console.log(`Hello, ${who}`)
    };

    sayHi('John');

    sayHi = function func( who ) {
        if ( who ) {
            console.log( `Hello, ${who}`);
        } else {
            func('Guest');
        }
    };

    let welcome = sayHi;
    sayHi = null;

    welcome(); // error without nfe




// Установка и уменьшение значения счётчика
    function makeCounter() {
        let count = 0;

        function counter() {
            return count++
        }

        counter.set = n => count = n;
        counter.decrease = () => count--;
        return counter;
    }

    let counter = makeCounter();

    console.log( counter() ); // 0
    console.log( counter() ); // 1

    counter.set(10); // установить новое значение счётчика

    console.log( counter() ); // 10

    counter.decrease(); // уменьшить значение счётчика на 1

    console.log( counter() ); // 10 (вместо 11)



// Сумма с произвольным количеством скобок
    
function sum(a) {

    let currentSum = a;
  
    function f(b) {
      currentSum += b;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }
  
//   alert( sum(1)(2) ); // 3

console.log(+sum(1)); 
console.log(+sum(1)(2))
console.log(+sum(5)(-1)(2)) 
console.log(+sum(6)(-1)(-2)(-3) )
console.log(+sum(0)(1)(2)(3)(4)(5) )





