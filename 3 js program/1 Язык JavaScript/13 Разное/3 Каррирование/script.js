// Каррирование
    // function curry(f) {
    //     return function(a) {
    //         return function(b) {
    //             return function(c) {
    //                 return f(a, b, c);
    //             }
    //         };
    //     };
    // }

    // использование

    function sum(a, b) {
        return a + b;
    }

    let curridSum0 = curry(sum);
    curridSum0(1)(2); // 30...

    
// Каррирование? Зачем?
    function log(date, importance, message) {
        console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}]`)
    }
    log = curry(log);

    log(new Date(), "DEBUG", "some debug");
    log(new Date())("DEBUG")("some debug");


// Продвинутая рпализация каррирования

    function curry(f) { 
        return function curried(...args) {
            if(args.length >= f.length) {
                return f.apply(this, args);
            } else {
                return function(...args2) {
                return curried.apply(this, args.concat(args2))
                }
            }
        };
    }

    function sum(a, b, c) {
        return a + b + c;
    }

    let curriedSum = curry(sum);


    console.log( curriedSum(1, 2, 3) ); // 6, всё ещё можно вызывать нормально
    console.log( curriedSum(1)(2,3) ); // 6, каррирование первого аргумента
    console.log( curriedSum(1)(2)(3) ); // 6, каррирование всех аргументов
    




