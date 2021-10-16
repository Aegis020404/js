// В объектно-ориентированном программировании класс – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы).

// Синтаксис «class»
    // Базовый синтаксис выглядит так:
    // 
    // class MyClass {
    // методы класса
    // constructor() { ... }
    // method1() { ... }
    // method2() { ... }
    // method3() { ... }
    // ...
    // }
        // // Затем используйте вызов new MyClass() для создания нового объекта со всеми перечисленными методами.
    // 
        // // При этом автоматически вызывается метод constructor(), в нём мы можем инициализировать объект.
    // 
    // Например:
    class User {
    
        constructor(name) {
            this.name = name;
        }
    
        sayHi() {
            console.log(this.name);
        }
    }
    
    // Использование:
    let user = new User('Иван');
    user.sayHi()


// Что такое класс?
    // в js класс - это разновидность функции

    console.log(typeof User) // function
    console.log( user )


// Class Expression
    User = class {
        sayHi() {
            console.log('Hello')
        }
    }

    function makeClass(phrase) {
        // объявляем класс и возвращаем его
        return class {
            sayHi() {
                console.log( phrase);
            };
        };
    }

    // создаём новый класс
     User = makeClass('Привет');

    new User().sayHi(); // привет


// Геттеры/сеттеры, другие сокращения
    class user1 {
        
        constructor(name) {
            // вызывает сеттер
            this.name = name;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            if( value.length < 4) {
                console.log('Имя слишком короткое');
                return;
            }
            this._name = value
        }

    }

    user = new user1('Ivan');
    console.log( user.name );

    user = new user1('') //Имя слишком короткое
    console.log(user.name) // undefined




// Часики тикают 
{

    class Clock {
        constructor({ template }){
            this.template = template
            
            }
        stop = function() {
            clearInterval(this.timer);
            };
        
        start = function() {
        this.render();
        this.timer = setInterval(()=> this.render(), 1000);
        };
        render() {
            let date = new Date();
        
            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            let output = this.template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);
        
            console.log(output);
        }
    }
    
    let clock = new Clock({template: 'h:m:s'});
    clock.start();
    console.log(clock)

}