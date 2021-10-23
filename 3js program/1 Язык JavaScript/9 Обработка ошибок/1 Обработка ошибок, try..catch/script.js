// Синтаксис «try…catch»
    try {
        console.log('Начало работы try');
        // код без ошибки
        console.log('Конец блока try ');
    } catch(err) {
        console.log(`Catch игнорируется, так как нет ошибок`);
    }

    try {
        console.log('Начало работы try');
        lalala; // ошибка пееременная не определена
    } catch(err) {
        console.log(`Возникла ошибка`);
        console.log(err);

    }

// Объект ошибки

    try {
        lalala;
    } catch(err) {
        console.log(err.name); // ReferenceError
        console.log(err.message); // lalala is not defined
        console.log(err.stack); // ReferenceError: lalala is not defined
    }


// Использование «try…catch»

    let json = `{"name":"John", "age":30}`; // данные с сервера

    let user = JSON.parse(json); // преобразовали текстовое представдение в js

    console.log(user.name); // John
    console.log(user.age); // 30


    json = '{ Некорректный json}';

    try {

        let user = JSON.parse(json); // тут возникает ошибка

    } catch (e) {
        // ...выполнение прыгает сюда
        console.log("Извините, в данных ошибка, мы попробуем получить их ещё раз");
        console.log(e.name);
        console.log(e.message);
    }


// Генерация собственных ошибок
    json = '{"age": 30}'; // данные неполны

    try {

        let user = JSON.parse(json); // <-- выполнится без ошибок
        console.log( user.name); // нет свойста name! поэтому выводит undefined
        
    } catch(e) {
        console.log('не выполнится')
    }


// Оператор «throw»

    let error = new Error('Ого, ошибка! о_0');
    console.log(error.name); // Error
    console.log(error.message); // Ого, ошибка! о_0


    json = '{"age": 30}'; // данные неполны

    try {

        let user = JSON.parse(json); // выполнится без ошибок
        if (!user.name) {
            throw new SyntaxError('Данные не выполнены нет имени');
        }

        console.log(user.name);
    } catch (error) {
        console.log('JSON Error: ' + error.message);
    }


// Проброс исключения

    error = new Error('Ого, ошибка! о_0');
    console.log(error.name); // Error
    console.log(error.message); // Ого, ошибка! о_0


    json = '{"age": 30}'; // данные неполны

    try {

        let user = JSON.parse(json); // выполнится без ошибок
        blabal();
    
        if (!user.name) {
            throw new SyntaxError('Данные не выполнены нет имени');
        }

        console.log(user.name);
    } catch (error) {
        // if(error.name !== "SyntaxError") throw error.stack;
        console.log('JSON Error: ' + error.message);
}





// try…catch…finally

    try {
        console.log( 'try' );
        // if (confirm('Сгенерировать ошибку?')) bad_codde();
    } catch(e) {
        console.log( 'catch' );
    } finally {
        console.log('finally');
    }
    

    let num = 0;

    let diff, resuld;

    function fib(n) {
        if(n<0 || Math.trunc(n) != n) {
            throw new Error('Должно быть целое и неотрицательное число');
        }
        return n <=1 ? n : fib(n - 1) + fib(n - 2);
    }

    let start = Date.now();


    try {
        result = fib(num);
    } catch (e) {
        result = 0
    } finally {

        diff = Date.now() - start;
    }

    console.log(result || 'Возникла ошибка');
    console.log(`Выполнение заняло ${diff} ms`);