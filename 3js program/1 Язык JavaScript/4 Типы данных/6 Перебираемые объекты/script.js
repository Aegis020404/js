
// Symbol.iterator

    let range = {
        from: 1,
        to: 5,
    };

    // 1. вызов for..of сначала вызывает эту функцию
    range[Symbol.iterator] = function() {

        // ...она возвращает объект итератора
        // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
        return {
            current: this.from,
            last: this.to,

            //3. next() вызывается на каждой итерации цикла for..of
            next() {
                //4. он должен вернуть значение в виде объекта {done:.., value:...}
                if (this.current <= this.last) {
                    return {done:false,value: this.current++};
                } else {
                    return {done : true};
                }
            }
        }
    }

    // Теперь работает 
    for (let num of range) {
        console.log(num); // 1, затем 2, 3, 4, 5
    }


// Строка – перебираемый объект

    for (let char of 'test') {
        // срабатывает 4 раза: по одному
        console.log( char ); // t, затем e, затем s, затем t
    }


// Явный вызов итератора
    let str = "Hello";

    // делает то же самое, что и
    // for (let char of str) console.log(char);

    let iterator = str[Symbol.iterator]();

    while (true) {
        let result = iterator.next();
        if (result.done) break;
        console.log(result.value); // выводит символы один за другим
    }


// Array.from
    // Есть универсальный метод Array.from который принимает итерируемые объект или псевдомассив и делает из него  «настоящий» Array. После этого мы уже можем использовать методы массивов.
    let arrayLike = {
        0: 'Hello',
        1: 'World',
        length: 2,
    };

    let arr = Array.from(arrayLike); // Превращение в массив
    console.log(arr.pop()); // World (метод работает)

    // range взят из примера выше
    arr = Array.from(range);
    console.log(arr); // 1,2,3,4,5 (преобразование массива через toString работает)
