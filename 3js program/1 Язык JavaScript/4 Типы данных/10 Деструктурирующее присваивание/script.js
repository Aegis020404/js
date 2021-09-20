// Деструктизация массива
    let arr = ['Ilya', 'Kantor'];

    // деструктизируещее присваивание
    // записывает firtName = arr[0], surname = arr[1]
    let [firstName, surname] = arr;

    console.log(firstName);
    console.log(surname);

    let user = {
        name: "John",
        age: 30,
    };

    // цикл по ключам и значениям
    for (let [key, value] of Object.entries(user)) {
        console.log(`${key}:${value}`)
    }


// Деструктизация объекта
    let options = {
        title: "Menu",
        width: 100,
        height: 200,
    };

    let {title, width : w, height} = options;
    // width -> w
    console.log(title);
    console.log(w);
    console.log(height);


// Вложенная деструктизация
     options = {
        size: {
            width: 100,
            height: 200,
        },
        items: ['cake', 'Donut'],
        extra: true
    };

    // Деструктизаяция разбита на несколько строк для ясности
    let {
        size: {
            width,
            height:h
        },
        items: [item1, item2],
        titles = "Menu"
    } = options;

    console.log(titles);  // Menu
    console.log(width);  // 100
    console.log(h); // 200
    console.log(item1);  // Cake
    console.log(item2);  // Donut


// Умные параметры функций
    // мы передаём объект в функцию
    let option = {
        title: 'My menu',
        items: ['Item1', 'Item2']
    };

    // ...и она немедленно извлекает свойства в переменные
    function showMenu({title = 'Untiled', width = 200, height = 100, items = []}) {
        // title, items - взято из options,
        // width, height - используются значения по умолчанию
        console.log( `${title} ${width} ${height}` ); // My menu 200 100
        console.log(items); // item1, item2
    }

    showMenu(option);








