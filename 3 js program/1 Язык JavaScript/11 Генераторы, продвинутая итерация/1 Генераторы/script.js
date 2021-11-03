// Функция-генератор
    function* generateSequence() {
        yield 1;
        yield 2;
        return 3;
    }

    // 'функция-генератора' создаёт объект 'генератор'
    let generator = generateSequence();
    console.log(String(generator)) // [Object Generator]

    let one = generator.next();

    console.log(JSON.stringify(one)); // {value: 1, done: false}

    let two = generator.next();
    console.log(JSON.stringify(two)); // {"value":2,"done":false}

    let three = generator.next();

    console.log(JSON.stringify(three)); // {"value":3,"done":true}


// Перебор генераторов
let generator1 = generateSequence();
    for(let value of generator1) {
        console.log(value); // return не выводит
    }

    let sequence = [0, ...generateSequence()];
    console.log(sequence)


// Использование генераторов для перебираемых объектов
    let range = {
        from: 1,
        to: 5,

        // for..of range вызывает этот метод один раз в самом начале
        [Symbol.iterator]() {
            // ...он возвращает перебираемый объект:
            // далее for..of работает только с этим объектом, запрашивая следующие значения
            return {
                current:this.from,
                last:this.to,

                // next() вызывается при каждой итерации цикла for..of
                next() {
                    // нужно вернуть значение как объект {done:..., value:...}
                    if(this.current <= this.last) {
                        return {done:false, value: this.current++ };
                    } else {
                        return { done: true};
                    }
                }
            };
        }
    };

    console.log([...range]) // [1, 2, 3, 4, 5]


// Композиция генераторов
{
   function* generateSequence(start, end) {
       for(let i = start; i<= end; i++) yield i;
   }

   function* generatePasswordCodes() {

        // 0..9
        yield* generateSequence(48,57);

        // A..Z
        yield* generateSequence(65, 90);

        // a..z
        yield* generateSequence(97, 122);

   }

   let str = '';

   for(let code of generatePasswordCodes()) {
    //    str+=code
    // console.log(code)
       str+= String.fromCharCode(code);
   }

   console.log(str)
}


// yield – дорога в обе стороны
{
    function* gen() {
        // Передаём вопрос во внешний код и ожидаем ответа
        let result = yield '2 + 2 = ?';

        console.log(result);
    }

    let generator = gen();

    let questuion = generator.next().value; // yield <-- возвращает значение
    
    generator.next(4)
}


// generator.throw
{
    function* gen() {
        try {
            let result = yield '2 + 2 = ?';

            console.log('Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение');
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }

    let generator = gen();
    let question = generator.next().value
    generator.throw(new Error('Ответ не найден в моей базе данных'));

}




// task 
{
    function* pseudoRandom(seed) {
        let i = seed;
        for(i = i * 16807 % 2147483647; ;i = i * 16807 % 2147483647 ) yield i;

    }


    let generator = pseudoRandom(1);

    console.log(generator.next().value); // 16807
    console.log(generator.next().value); // 282475249
    console.log(generator.next().value); // 1622650073
    console.log(generator.next().value); // 1622650073

}