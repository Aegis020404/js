// // Прозрачное кеширование
//     function slow(x) {
//         console.log( `Called with ${x}`);
//         return x;
//     }

//     function cachingDecorator(func) {
//         let cache = new Map();

//         return function(x) {
//             if (cache.has(x)) { // если кеш содержит такой x,
//                 return cache.get(x); // читаем из него результат
//             }

//             let result = func(x); // иначе, вызываем функцию

//             cache.set(x, result); // и кешируем (запоминаем) результат
//             return result;
//         };
//     }

//     slow = cachingDecorator(slow);

//     console.log(slow(1)); // slow(1) кешируем
//     console.log( 'Again ' + slow(1) )
//     console.log( slow(2) )


// // Применение «func.call» для передачи контекста.
//     function sayHi() {
//         console.log( this.name );
//     }

//     let user = { name: "John" };
//     let admin = { name: "Admin"};

//     // Используем 'Call' для передачи различных объектов в качестве 'this'
//     sayHi( user );
//     sayHi.call( user );
//     sayHi.call( admin );


// // Переходим к нескольким аргументам с "func.apply"

// let worker = {
//     slow(min, max) {
//       console.log(`Called with ${min},${max}`);
//       return min + max;
//     }
//   };
  
//   function cachingDecorators(func, hash) {
//     let cache = new Map();
//     return function() {
//       let key = hash(arguments); // (*)
//       if (cache.has(key)) {
//         return cache.get(key);
//       }
  
//       let result = func.call(this, ...arguments); // (**)
  
//       cache.set(key, result);
//       return result;
//     };
//   }
  
//   function hash(args) {
//     return args[0] + ',' + args[1];
//   }
  
//   worker.slow = cachingDecorators(worker.slow, hash);

//   console.log( worker.slow(3, 5))
//   console.log( 'Again ' + worker.slow(3, 5));
// //   Единственная разница в синтаксисе между call и apply состоит в том, что call ожидает список аргументов, в то время как apply принимает псевдомассив.











// // Декоратор-шпион
// let calls = []
//     function work(a, b) {
//         console.log( a + b ); // произвольная функция или метод
//         work.calls = []
//     }
    
    
//     function spy(func) {
//         let cache = new Map();
        
//         return function() {
//             let key = hash(arguments);
//             if ( cache.has( key )) {
//                 return cache.get(key);
//             }

//             let result = func.call(this, ...arguments);
            
//             calls.push(  key )
//             work.calls = calls
           
//             cache.set (key, result);
            
//             return result;
//         };
//     }

//     function hash(args) {
//         return [args[0] ,  args[1]];
//     }



//     // function spy(func) {

//     //     function wrapper(...args) {
//     //       wrapper.calls.push(args);
//     //       return func.apply(this, arguments);
//     //     }
      
//     //     wrapper.calls = [];
      
//     //     return wrapper;
//     //   }




//     work = spy(work);

//     work(1, 2); // 3
//     work(4, 5); // 9
    
//     // for (let args of work.calls) {
//     //     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
//     //   }



// // Задерживающий декоратор
//       function delay(f, ms) {
//         return function() {
//           setTimeout(() => f.apply(this, arguments), ms)
//         }
//       }    
      
//   function f(x) {
//     console.log(x);
//   }
//   let f1000 = delay(f, 1000)
//   // f1000('test')











// console.clear()
// // Декоратор debounce
// function debounce(f, ms) {
//     let pastDate = Date.now() - ms
    
//     return function() {
//       Nower = Date.now() - pastDate 
//       // console.log(pastDate, 'qwe')
     
//       if(Nower < ms) return;
//       pastDate = Date.now()
//       // console.log(pastDate, 'q')
//     return f.apply(this, arguments)
//     }
//   }

//    f = debounce(console.log, 1000);

//   f(1); // выполняется немедленно
//   f(2); // проигнорирован
  
//   setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
//   setTimeout( () => f(4), 1100); // выполняется
//   setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

//   function debounce(f, ms) {

//     let isCooldown = false;
  
//     return function() {
//       if (isCooldown) return;
  
//       f.apply(this, arguments);
  
//       isCooldown = true;
  
//       setTimeout(() => isCooldown = false, ms);
//     };
  
//   }


// console.clear()
// Тормозящий (throttling) декоратор
// function throttle(func, ms) {
//   let timer   
  
//   let coolDown = false

//   let lastMs = ms

//   return function() {
    
//     clearTimeout(timer)
    
   
//     if(coolDown) {
      
      
     
//        timer = setTimeout(() =>{
//         func.apply(this, arguments)
//         console.log(lastMs)
//       }, lastMs )
        
          
  
//       return
//     };
    
//     func.apply(this, arguments);
    
//     coolDown = true;
    
//     setTimeout(() => coolDown = false, ms)
//   }
// }




  function f(a) {
    console.log(a)
  }
  
  // f1000 передаёт вызовы f максимум раз в 1000 мс
   f1000 = throttle(f, 1000);
  
  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3)
  setTimeout( f1000,1000,3)
  // f1000(3); // (ограничение, 1000 мс ещё нет)
  
  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано f1000(4); // (задержка - менее 1000 мс с момента последнего вызов)
    f1000(4); // (задержка - менее 1000 мс с момента последнего вызов)
    f1000(5); // (задержка - менее 1000 мс с момента последнего вызова)
    f1000(6); // (задержка - менее 1000 мс с момента последнего вызова)

    function throttle(func, ms) {

      let isthrottled = false,
      saveArgs,
      savedThis;

      function wrapper() {

        if (isthrottled) {
          savedArgs = arguments;
          savedThis = this;
          return;
        }

        func.apply(this, arguments);

        isthrottled = true;

        setTimeout(function() {
          isthrottled = false;
          if (savedArgs) {
            wrapper.apply(savedThis, savedArgs);
            savedArgs = savedThis = null;
          }
        }, ms)
      }

      return wrapper;
    }