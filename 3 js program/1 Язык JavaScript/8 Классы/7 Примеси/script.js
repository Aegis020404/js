// Пример примеси
    // Примесь:
    let sayHimixin = {
        sayHi() {
            console.log(`Hello, ${this.name}`);
        },
        sayBye() {
            console.log(`Bye, ${this.name}`);
        }
    };

    // использование:
    class User {
        constructor(name) {
            this.name = name;
        }
    }

    // копируем методы
    Object.assign(User.prototype, sayHimixin);

    // теперь User может сказать привет

    new User('Vasya').sayHi(); // Hello, Vasya

{
    let sayMixin = {
        say(phrase) {
            console.log(phrase);
        }
    };

    let sayHimixin = {
        __proto__: sayMixin,
        sayHi() {
            super.say(`Hello, ${this.name}`);
        },
        sayBye() {
            super.say(`Bye, ${this.name}`);
        },
       
    };

    class User {
        constructor(name) {
            this.name = name;
        }
    }
    // Копируем методы
    Object.assign(User.prototype, sayHimixin)
    new User('Vasya').sayHi();
}


// EventMixin

    let eventMixin = {
        // Подписаться на событие, использование:
        // menu.on('select, function(item) { ... })

        on(eventName, handler) {
            if (!this._eventHandlers) this._eventHandlers = {};
            if (!this._eventHandlers[eventName]) {
                this._eventHandlers[eventName] = [];
            }
            this._eventHandlers[eventName].push(handler);
        },

        // Отменить подписку использоване:
        // menu.off('select', handler)

        off(eventName, handler) {
            let handlers = this._eventHandlers && this._eventHandlers[eventName];
            if (!handlers) return;
            for (let i = 0; i < handlers.length; i++) {
                console.log(i)
              if (handlers[i] === handler) {
                handlers.splice(i--, 1);
              }
            }
          },
    

    // Сгенерировать событие с указанным имменем и данными
    // this.trigger('select', data1, data2);

    trigger(eventName, ...args) {
        if (!this._eventHandlers || !this._eventHandlers[eventName]) {
            return; // обработчика для этого события нет
        }
        
        // вызовем обработчики
        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
        }
    
    }

    // Итак, у нас есть 3 метода:

    // .on(eventName, handler) – назначает функцию handler, чтобы обработать событие с заданным именем. Обработчики хранятся в свойстве _eventHandlers, представляющим собой объект, в котором имя события является ключом, а массив обработчиков – значением.

    // .off(eventName, handler) – убирает функцию из списка обработчиков.

    // .trigger(eventName, ...args) – генерирует событие: все назначенные обработчики из _eventHandlers[eventName] вызываются, и ...args передаются им в качестве аргументов.


    class Menu {
                // choose(value) {
                //     this.trigger('select', value);
                // }

    }

    // Добавим примесь с методом для событий
    Object.assign(Menu.prototype, eventMixin);

    let menu = new Menu();

    // Добавить обработчик который будет вызван при событии select
    menu.on('select', selF);
    function selF (value) { 
        console.log(`Выбранное значение ${value}`);
    }
    menu.on('forTest', value =>console.log(`It's working ${value}`));
    // Генерирует событие => обработчик выше запускает и выводит:

            // menu.choose('123'); //Выбранное значение: 123
            // menu.choose('123'); //Выбранное значение: 123

    menu.trigger('select', 123);
    menu.trigger('forTest', 123);
    menu.off('select', selF)
    menu.trigger('select', 123);


    