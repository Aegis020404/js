
// splice
    let arr = ['i', 'go', 'home'];

    delete arr[1]; // удалить 'go'
    console.log( arr[1] ); // undefined
    console.log( arr.length ); // 3

    arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

    // удалить 3 первых жлемента и заменить их другими
    arr.splice(0, 3 ,'Давай', 'Танцвевать');

    console.log( arr ); // теперь ["Давай", "танцевать", "прямо", "сейчас"]


// slice
    // Раюотает так-же как и со строками


// concat
    // просто конкантинирует объекты 


// Перебор: forEach
    // Метод arr.forEach позволяет запускать функцию для каждого элемента массива.
    arr.forEach(function(item,index,array) {
        console.log(`${item} имеет позицию ${index} в ${array}`);
    });


// Поиск в массиве
    // indexOf/lastIndexOf и includes
        // Методы arr.indexOf, arr.lastIndexOf и arr.includes имеют одинаковый синтаксис и делают по сути то же самое, что и их строковые аналоги, но работают с элементами вместо символов:

    // find и findIndex
        let users = [
            {id: 1, name: "Вася"},
            {id: 2, name: "Петя"},
            {id: 3, name: "Маша"}
        ];
        
        let user = users.find(item => item.id == 1);
        
        console.log(user); // Вася
        // Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.

    // filter
        let results = arr.filter(function(item,index,array) {
            // если true - элемент добавляется к результату, и перебор продолжается
            //   возвращается пустой массив в случае, если ничего не найдено    
        });
        
        let someUsers = users.filter(item => item.id < 3);
        console.log(someUsers);
    

// Преобразование массива
    // map
        // Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
        let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
        console.log(lengths);

    // sort(fn)
        // Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.
        arr = [ 1, 2, 15, 24];

        // метод сортирует сордежимое arr
        arr.sort();
        console.log(arr); // (3) [1, 15, 2] , он их сортировал как строки

        function compareNumeric(a, b) {
            if (a > b) return 1; // если первое значение больше второго
            if (a == b) return 0; // если равны
            if (a < b) return -1; // если первое значение меньше второго
        }

        // arr.sort(compareNumeric);
        arr.sort((a, b) => a - b)
        ;
        console.log(arr)
        // На самом деле от функции сравнения требуется любое положительное число, чтобы сказать «больше», и отрицательное число, чтобы сказать «меньше».

    // reverse
            // Метод arr.reverse меняет порядок элементов в arr на обратный.
        
    // split и join
            let names = `Вася, Петя, Маша`
        
            arr = names.split(', '); // Создаёт из строки несколько массивов

            for (let name of arr) {
                console.log(`Сообщение получает: ${name}`);
            };
            // У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен. На практике это редко используется:
            
            let str = arr.join(', '); // превратил обратно в строку
            console.log(str)

        // reduce/reduceRight
            
            let value = arr.reduce(function(previousValue, item, index, array) {
            })

            arr = [1, 2, 3, 4, 5];
            result = arr.reduce((sum, current) => sum + current, 0);
            console.log(result); // 15


// Array.isArray
            console.log(typeof []); // Object
            console.log(Array.isArray([])); // true


// Большинство методов поддерживают «thisArg»
    // Почти все методы массива, которые вызывают функции – такие как find, filter, map, за исключением метода sort, принимают необязательный параметр thisArg.
    // arr.find(func, thisArg);
    // arr.filter(func, thisArg);
    // arr.map(func, thisArg);
    // ...
    // thisArg - это необязательный последний аргумент
    
    let army = {
        minAge:18,
        maxAge:27,
        canJoin(user) {
            return user.age >= this.minAge && user.age < this.maxAge;
        }
    };

    users = [
        {age: 16},
        {age: 20},
        {age: 23},
        {age: 30}
    ];
    // найти пользователя, для которых army.canJoin возвращает true
    let soldiers = users.filter(army.canJoin, army);
    console.log(soldiers.length); // 2
    console.log(soldiers[0].age); // 20
    console.log(soldiers[1].age); // 23