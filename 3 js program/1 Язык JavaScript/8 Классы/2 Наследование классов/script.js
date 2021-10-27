    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
        run(speed) {
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}.`);
        }
        stop() {
            this.speed = 0;
            console.log(`${this.name} стоит.`);
        }
    }

    let animal = new Animal('My pet')
    // animal.run(10);
    // animal.stop();
    // console.log(animal)

    // class Rabbit {
        // constructor(name) {
            // this.name = name;
        // }
        // hide() {
            // console.log(`${this.name} прячется!`);
        // }
    // }

    // let rabbit = new Rabbit('Мой кролик');

    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} прячется!`);
        }
    }

    let rabbit = new Rabbit('Белый кролик');
    // rabbit.run(5);
    // rabbit.hide();
    // console.log(rabbit)


    function f(phrase) {
        return class {
            sayHi(){ console.log(phrase)}
        }
    }

    class User extends f('Привет') {}

    new User().sayHi(); // Привет


// Переопределение методов
    // super.method(...) вызывает родительский метод.
    // super(...) вызывает родительский конструктор (работает только внутри нашего конструктора).
{
    class Animal {

        constructor(name) {
            this.speed = 0;
            this.name = name;
        }
        run(speed) {
            this.speed = speed;
            console.log(`${this.name} бежит со скоростью ${this.speed}.`);
        }
        stop() {
            this.speed = 0
            console.log(`${this.name} стоит.`);
        }

    }

    class Rabbit extends Animal {

        hide() {
            console.log(`${this.name} прячется!`);
        }

        stop() {
            super.stop(); // вызывает родительский метд stop
            this.hide(); // и затем hide
        }
    }

    let rabbit = new Rabbit('Белый кролик');

    rabbit.run(5);
    rabbit.stop();
    console.log(rabbit)
 }


// Переопределение конструктора
{
    class Animal {
        constructor(name) {
            this.name = name;
            this.speed = 0;
        }
        // ...
    }

    class Rabbit extends Animal {
        constructor(name,earLength) {
            super(name)
            this.speed = 0;
            this.name = name;
            this.earLength = earLength;
        }

        // ...
    }
    
    // not working if will be not super(name)
    let rabbit = new Rabbit('White rabbit', 10); // Error if not super(name)
}


// Устройство super, [[HomeObject]];
{
    let animal = {
        name: 'Animal',
        eat() {
            console.log(`${this.name} ест.`);
        }
    };

    let rabbit = {
        __proto__:animal,
        name: 'Кролик',
        eat() {
            // вот как предположительно может работать super.eat()
            // this.__proto__.eat.call(this)
            super.eat();
        }
    };

    rabbit.eat(); // Кроллик ест.

    let longEar = {
        __proto__:rabbit,
        name: 'Длинноух',
        eat() {
            // // ...делаем что-то, связанное с длинными ушами и вызываем родительский (rabbit) метод
            // this.__proto__.eat.call(this);
            super.eat();
        }
    };

    longEar.eat();
}


// Методы не «свободны»
{
    let animal = {
        sayHi() {
            console.log('Я животное');
        }
    };

    // rabbit наследует от animal
    let rabbit = {
        __proto__: animal,
        sayHi() {
            super.sayHi();
        }
    };

    let plant = {
        sayHi() {
            console.log('Я растение');
        }
    };

    // tree наследует от plant
    let tree = {
        __proto__: plant,
        sayHi: rabbit.sayHi //
    };

    tree.sayHi(); // Я животное
}




// Ошибка создания экземпляра класса
{
    class Animal {
        
        constructor(name) {
            this.name = name;
        }

    }
    
    class Rabbit extends Animal {
        constructor(name) {
            super(name);
            this.name = name;
            this.created = Date.now();
        }
    }

    let rabbit = new Rabbit('White rabbit');
    console.log(rabbit.name + ' ' + rabbit.created)

}



// Улучшенные часы
{

}