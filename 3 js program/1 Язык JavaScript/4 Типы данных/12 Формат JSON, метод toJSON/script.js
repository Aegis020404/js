let user = {
        name: 'John',
        age: 30,

        toString() {
            return `{name: "${this.name}", age: ${this.age}}`;
        }
    };

    console.log(user)


// JSON.stringify
    // JSON.stringify - для преобразования объектов в JSON
    // JSON.parse - для преобразования JSON обратно в объект

    let student = {
        name: 'John',
        age: 30,
        isAdmin: false,
        cources: ['html', 'css', 'js'],
        wife: null,
    };

    let json = JSON.stringify(student);
    console.log(typeof json); // мы получили строку!
    console.log(json); // выведен объект в формате JSON

    // число в JSON остаётся числом
    console.log( JSON.stringify(1) ); // 1

    // строка в JSON по-прежнему остаётся строкой, но в двойных кавычках
    console.log( JSON.stringify('test') ); // "test"

    console.log( JSON.stringify(true) ); // true

    console.log( JSON.stringify([1, 2, 3]) ); //[1, 2, 3]


    // JSON является независимой от языка спецификацией для данных, поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScrip
    // А именно:
    // Свойства-функции (методы).
    // Символьные свойства.
    // Свойства, содержащие undefined.
    user = {
        sayHi() { // будет пропущено
            console.log('Hello');
        },
        [Symbol('id')]:123, // также будет пропушено
        something: undefined // так-же пропущено
    };
    console.log( JSON.stringify(user) ); // {} (пустой объект,)

    //  вложенные объекты поддерживаются и конвертируются автоматически.
    // Важное ограничение: не должно быть циклических ссылок.


// Исключаем и преобразуем: replacer

    // Полный синтаксис JSON.stringify:

    // let json = JSON.stringify(value[, replacer, space])

    let room = {
        number: 23
    };

    let meetup = {
        title: 'Conference',
        participants: [{name: "John"}, {name: "Alice"}],
        place: room, // room ссылается на meetup
    };
    
room.occupiedBy = meetup; // room ссылается на meetup

    console.log(JSON.stringify(meetup,['title', 'participants', 'place', 'name', 'number', ]))

    console.log( JSON.stringify(meetup, function replacer(key, value) {
        console.log(`${key}:${value}`);
        return (key == 'occupiedBy') ? undefined : value;
    }));


// Форматирование: space
    // Третий аргумент в JSON.stringify(value, replacer, space) – это количество пробелов, используемых для удобного форматирования.


// Пользовательский «toJSON»
    room = {
        number: 23,
        
        toJSON() { return this.number}
    };

    meetup = {
        title: "Conference",
        date: new Date(Date.UTC(2017, 0, 1)),
        room
    };

    console.log( JSON.stringify(room) ); // 23
    console.log( JSON.stringify(meetup) );


// JSON.parse
    // Чтобы декодировать JSON-строку, нам нужен другой метод с именем JSON.parse.

    // Синтаксис:

    // let value = JSON.parse(str, [reviver]);
    // str
    // JSON для преобразования в объект.
    // reviver
    // Необязательная функция, которая будет вызываться для каждой пары (ключ, значение) и может преобразовывать значение.

    let numbers = "[0, 1, 2, 3]";
    numbers = JSON.parse(numbers);
    console.log(numbers+'   '+typeof numbers ) // 0,1,2,3   object


// Использование reviver
    let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

     meetup = JSON.parse(str);

    // alert( meetup.date.getDate() ); // Error! Значением meetup.date является строка, а не Date объект

    meetup = JSON.parse(str, function(key, value) {
        if (key == 'date') return new Date(value);
        return value;
    });
     console.log( meetup.date.getDate() );


// Использование reviver
     str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

     meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
    });

    console.log( meetup.date.getDate() ); // 30 - теперь работает!




// Преобразуйте объект в JSON,
     user = {
        name: 'Василий Иванович',
        age:35,
    };
    let userJSON = JSON.stringify(user);
    console.log( userJSON );


// Исключить обратные ссылки
    
     room = {
        number: 23
    };

         meetup = {
        title: "Совещание",
        ocupiedBy: [{name:"Иванов"}, {name:"Петров"}],
        place:room,
    };

    // циклические ссылки
    room.occupiedBy = meetup;
    meetup.self = meetup;

    console.log( JSON.stringify(meetup, function replacer(key, value) {
    
        return (key == 'self' & value == meetup || key == 'occupiedBy' & value == meetup) ? undefined : value;

        
    }));