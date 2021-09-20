// Object.keys, values, entries

    // Map	                                        Object
    // Синтаксис вызова	map.keys()	Object.keys(obj), не obj.keys()
    // Возвращает перебираемый объект «реальный» массив
    let user  = {
        name: "John",
        age: 30,
    };
    console.log( Object.keys(user) ); // ["name", "age"]
    console.log( Object.values(user) ); // ["John", 30]
    console.log( Object.entries(user) ); // [ ["name","John"], ["age",30] ]

// Трансформации объекта
    // У объектов нет множества методов, которые есть в массивах, например map, filter и других.
    // Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:
        // Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
        // На нём вызываем методы массива, например, map.
        // Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
    };

    let doublePrices = Object.fromEntries(
        // преобразовать в массив, затем map, затем fromEntries обратно объект
        Object.entries(prices).map(([key,value]) => [key, value * 2])
    );

    console.log(doublePrices.meat)

hh.onclick = (function() {
    console.log('And i love you')
})