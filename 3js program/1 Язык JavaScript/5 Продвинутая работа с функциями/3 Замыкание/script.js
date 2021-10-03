// Лексическое Окружение
    // Чтобы понять, что происходит, давайте для начала обсудим, что такое «переменная» на самом деле.

    // В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.

    // Объект лексического окружения состоит из двух частей:

    // Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).

    // Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

    // "Переменная" – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».


    function makeCounter() {
        let count = 0;

        return function() {
            return count++
        };
    }

    console.log( makeCounter()() );
    console.log( makeCounter()() );
    console.log( makeCounter()() );

// ____________________________________________________________

    function makeCounter() {
        let count = 0;

        return function() {
            return count++
        };
    }
    let counter = makeCounter()

    console.log( counter() );
    console.log( counter() );
    console.log( counter() );


// IIFE

    (function() {

        let message = "Hello";

        console.log( message );
    })();







// Сумма с помощью замыканий

    function sum(a) {
        return function(b) {
            return a + b;
        }
    } 

    console.log(sum(1)(2)); // 3




// Фильтрация с помощью функции

    let arr = [1, 2, 3, 4, 5, 6, 7, 8];

    function inBetween(a, b){
        return function(n) {
            
            return a <= n && n <= b  ? true : false
        }
    }

    console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


    function inArray (rest) {
        return function(n){
            
        
            return rest.includes(n) ? true : false
        }
    }

    console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2



// Сортировать по полю

    let users = [
        {name: "John", age: 20, surname : 'Johnson'},
        {name: "Pete", age: 18, surname : 'Peterson'},
        {name: "Ann", age: 19, surname : 'Hathaway'},
    ];

    function byField(key) {
        return function (a,b) {
           
            return a[key]  > b[key]  ? 1 : -1 
           
        }
    }




    console.log(users.sort(byField('name')));
    console.log(users.sort(byField('age')));





// Армия функций

    function makeArmy() {
        let shooters = [];
    
        let i = 0;
        while (i < 10) {
            let d = i
        let shooter = function() { 
            
                console.log(d); 
            
            
        };
        shooters.push(shooter);
        i++;
        }
    
        return shooters;
    }
    
    let army = makeArmy();
    
    army[0](); // у 0-го стрелка будет номер 10
    army[5](); // и у 5-го стрелка тоже будет номер 10
    // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...






















