// Синтаксис:

    // let proxy = new Proxy(target, handler);
    // target – это объект, для которого нужно сделать прокси, может быть чем угодно, включая функции.
    // handler – конфигурация прокси: объект с «ловушками» («traps»): методами, которые перехватывают разные операции, например, ловушка get – для чтения свойства из target, ловушка set – для записи свойства в target и так далее.


// прокси без всяких ловушек:
    let target = [];
    let proxy = new Proxy(target, {}); // пустой handler

    proxy.test = 5; // записываем в прокси (1)
    console.log(target.test); // 5, свойство появилось в таргет!

    console.log(proxy.test); // 5, мы также можем прочитать его из прокси(2)

    for(let key in proxy) console.log(key) // test, итерация работает
     
    if ('_qwe_'.startsWith("_")) {
        console.log('okey')
    } else {
        console.log('Not OKEY')
    }
    

// Значение по умолчанию с ловушкой «get»
    let numbers = [0,1,2];

    numbers = new Proxy(numbers, {
        get(target, prop) {
            if (prop in target) {
                return target[prop];
            } else {
                return prop; // значение по умолчанию
            }
        }
    })


    console.log( numbers[1]); // 1
    console.log( numbers[123]); // 123 хотя такого нету


// Валидация с ловушкой «set»
     numbers = [];

    numbers = new Proxy(numbers, {
        set(target, prop, val) {
            if (typeof val == 'number') {
                target[prop] = val;
                return true;
            } else {
                console.log(`this is string`)
                // return false;
            }
        }
    });

    numbers.push(1); // добавилось успешно
    numbers.push(2); // добавилось успешно
    console.log(`Длина: ${numbers.length}`);
    // numbers.push('тест'); // Error


// Перебор при помощи «ownKeys» и «getOwnPropertyDescriptor»
    // В примере ниже мы используем ловушку ownKeys, чтобы цикл for..in по объекту, равно как Object.keys и Object.values пропускали свойства, начинающиеся с подчёркивания _:

    let user = {
        name: 'Vasya',
        age: 30,
        _password: '***',
    };

    for(let key in user) console.log(key); // name,age,password
    console.log(Object.getOwnPropertyNames(user)); // name,age,password

    user = new Proxy(user, {
        ownKeys(target) {
            return Object.keys(target).filter(key => !key.startsWith('_'));
        }
    })
    for(let key in user) console.log(key); // name,age
    console.log(Object.getOwnPropertyNames(user)); // name,age

// Защищённые свойства с ловушкой «deleteProperty» и другими
     user = {
    name: 'Vasya',
    age: 30,
    _password: '***',
    };

    user = new Proxy(user, {
        get(target,prop) {
            if(prop.startsWith('_')) {
                throw new Error('Отказано в доступе');
            } else {
                let value = target[prop];
                return (typeof value === 'function') ? value.bind(target) : value;
            }
        },

        set(target,prop,val) {
            if(prop.startsWith('_')) {
                throw new Error('Отказано в доступе');
            } else {
                target[prop] = val;
                return true;
            }
        },

        deleteProperty(target,property) {
            if (prop.startsWith('_')) {
                throw new Error("Отказано в доступе");
              } else {
                target[property] = val;
                return true;
              }
        },
        ownKeys(target) { 
            return Object.keys(target).filter(key => !key.startsWith('_'));
        }
    })

    try {
        console.log(user._password);
    } catch(e) {
        console.log(e)
    }
    try {
        user._password =' test'
    } catch(e) {
        console.log(e)
    }
    try {
        delete user._password
    } catch(e) {
        console.log(e)
    }
    try {
        console.log(Object.keys(user));
    } catch(e) {
        console.log(e)
    }


// «В диапазоне» с ловушкой «has»
    let range = {
        start:1,
        end:10
    };

    range = new Proxy(range,{
        has(target,prop) {
            console.log(prop)
            return prop >= target.start && target.end >= prop;
        }
    })

    console.log(5 in range); // true
    console.log(52 in range); // false


// Оборачиваем функции: «apply»
    // Ловушка apply(target, thisArg, args) активируется при вызове прокси как функции:

    function delay (f, ms) {
        return new Proxy(f, {
            apply(target, thisArg, args) {
                setTimeout(() => target.apply(thisArg,args),ms);
            }
        });
    }

    function sayHi(user) {
        console.log(`Hello, ${user}`);
    }
    sayHi = delay(sayHi,0);
    console.log(sayHi.length); // 1 если бы мы использовали обычную обёртку то мы бы потеряли аргументы
    // sayHi('Slava')


// Reflect
    // Reflect – встроенный объект, упрощающий создание прокси.

    user = {};

    Reflect.set(user,'name','Вася');

    console.log(user.name); // Вася

    user = new Proxy(user, {
        get(target,prop,receiver) {
            console.log(`GET ${prop}`)
            return Reflect.get(target,prop,receiver);
        },
        set(target,prop,val,receiver) {
            console.log(`SET ${prop} = ${val}`);
            return Reflect.set(target,prop,val,receiver);
        }
    });

    let name = user.name; // Выводит `GET NAME`
    user.name = 'Steve'; // Выводит `SET name = Steve`


// Прокси для геттера
    user = {
        _name: 'Guest',
        get name() {
            return this._name;
        }
    };

    let userPoxy = new Proxy(user, {
        get(target,prop,receiver) {
            // return target[prop];
            // return Reflect.get(target,prop,receiver);// исправление
            return Reflect.get(...arguments) // можно и короче
        }
    });

    console.log(userPoxy.name)
    

    let admin = {
        __proto__: userPoxy,
        _name:'Admin'
    };

    // Ожидается Админ
    console.log(admin.name); // Guest


// Встроенные объекты: внутренние слоты
{
    let map = new Map();
    let proxy = new Proxy(map,{});
    // proxy.set('test',1) // Error
}


{    let map = new Map();

    let proxy = new Proxy(map, {
        get(target,prop,rec) {
            let value = Reflect.get(...arguments);
            return typeof value == 'function' ? value.bind(target) : value
        }
    })
    console.log(proxy.set('test',1)); // working!!
}   


// Приватные поля
{
    class User {
        #name = 'Guest';

        getName() {
            return this.#name;
        }
    }

    let user = new User();
    user = new Proxy(user,{});
    // console.log(user.getName()) // Error
}
{
    class User {
        #name = 'GuestR';

        getName() {
            return this.#name;
        }
    }

    let user = new User();
    user = new Proxy(user,{
        get(tar,prop,rec) {
            value = Reflect.get(...arguments);
            return typeof value == 'function' ? value.bind(tar) : value
        }
    });
    console.log(user.getName()) // Error
} // такое решение имеет ряд недостатков, о которых уже говорилось: методу передаётся оригинальный объект, который может быть передан куда-то ещё, и это может поломать всю функциональность проксирования.


// Отключаемые прокси
    // let {proxy, revoke} = Proxy.revocable(target, handler)
{
    let object = {
        data: 'Impotant data'
    };

    let {proxy, revoke} = Proxy.revocable(object, {});

    // передаём прокси куда-нибудь вместо оригинального объекта...
    console.log(proxy.data)

    // позже в коде
    revoke();

    // прокси больше не работает (отключён)
    // console.log(proxy.data); // Error
}

console.clear();
// Ошибка при чтении несуществующего свойства

{
    let user = {
        name: "John"
    };
    
    function wrap(target) {
        return new Proxy(target, {
            get(tar,prop,rec) {
              if (!(prop in tar)) throw new Error('Свойтво не существует')
                return Reflect.get(...arguments)
            }
        });
    }
    
    user = wrap(user);
    
    // console.log(user.name); // John
    // console.log(user.age); // Ошибка: такого свойства не существует
}


// Получение элемента массива с отрицательной позиции
{
    let array = [1, 2, 3];
    array = new Proxy(array,{
        get(tar,prop,rec) {
             prop = prop >= 0 ? prop : tar.length + +prop
            return Reflect.get(...arguments);
        }
    })
    // console.log(array[-2]); // 2, предпоследний элемент
    // console.log(array[-3]); // 1, за два элемента до последнего
    // console.log(array[-1]); // 3, последний элемент
}


// Observable
{
    function makeObservable(target) {
        return new Proxy(target, {
            set(target,prop,value,rec){
                if(target.observe) target.observe(prop, value)
            return Reflect.set(...arguments)
            }
        })
      }
      
      let user = {};
      user = makeObservable(user);
      
      user.observe = ((key, value) => {
        console.log(`SET ${key}=${value}`);
      });
      
      user.name = "John"; // выводит: SET name=John
}