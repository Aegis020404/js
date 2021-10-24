// Расширение Error
    // 'Псевдокод' всторенногое класса Error, определенного самим js
        // class Error {
        //     constructor(message) {
                
            
        //     this.message = message;
        //     this.name = 'Error'; // (разные имена для разных встроенных классов ошибок)
        //     this.stack =  // нестандартное свойство, но обычно поддерживается
        //     }
        // }

    
    class ValidationError extends Error {
        constructor(message) {
            super(message); 
            this.name = "ValidationError";
        }
    }

    function test() {
        throw new ValidationError('Упс!');
    }

    try {
        test();
    } catch (e) {
        console.log(e.message); // Упс!
        console.log(e.name); // ValidationError
        console.log(e.stack); // список вложенных вызовов с номерами строк для каждого
    }


    function readUser(json) {
        let user = JSON.parse(json);

        if (!user.age) {
            throw new ValidationError('Нет поля: age');
        }
        if (!user.name) {
            throw new ValidationError('Нет поля: name');
        }

        return user;
    }

    // Рабочий пример с try..catch

    try {
        let user = readUser('{ "age": 25}');
    } catch(e) {
        if(e instanceof ValidationError) {
            console.log('Некорректные данные: ' + e.message); // Некорректные данные: Нет поля: nam
        } else if (e instanceof SyntaxError) {
            console.log('JSON Ошибка Синтаксиста ' + e.message);
        } else {
            throw e; // неизвестная ошибка, пробросить исключиния
        }
    }


// Дальнейшее наследование
{
    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super('Нет свойста ' + property);
            this.name = 'PropertyRequiredError';
            this.property = property;
        }
    }

    // Применение
    function readUser(json) {
        let user = JSON.parse(json);

        if (!user.age) {
            throw new PropertyRequiredError('age');
        }
        if (!user.name) {
            throw new PropertyRequiredError('name');
        }

        return user;
    }

    // Рабочий пример с try..catch

    try {
        let user = readUser('{"age":25}');
    } catch (e) {
        if(e instanceof ValidationError) {
            console.log("Неверные данные: " + e.message); // Неверные данные: Нет свойства: name
            console.log(e.name); // PropertyRequiredError
            console.log(e.property); // name
        } else if (e instanceof SyntaxError) {
            console.log('Ошибка синтаксиса JSON: ' + e.message);
        } else {
            throw e;
        }
    }

}
{
    class MyError extends Error {
        constructor(message) {
            super(message);
            this.name = this.constructor.name;
        }
    }

    class ValidationError extends MyError { }

    class PropertyRequiredError extends ValidationError {
        constructor(property) {
            super('Нет свойства: ' + property);
            this.property = property;
        }
    }

    // name корректное
    console.log( new PropertyRequiredError('field').name); // PropertyRequiredError
}


// Обвёртывание исключений 
{
    class ReadError extends Error {
        constructor(message, cause) {
            super(message);
            this.cause = cause;
            this.name = 'ReadError';
        }
    }

    class ValidationError extends Error { /*...*/}
    class PropertyRequiredError extends ValidationError {/*..*/}

    function validateUser(user) {
        if(!user.age) {
            throw new PropertyRequiredError('age');
        }

        if (!user.name) {
            throw new PropertyRequiredError('name');
        }
    }

    function readUser (json) {
        let user;

        try {
            user = JSON.parse(json);
        } catch (err) {
            if (err instanceof SyntaxError) {
                throw new ReadError('Синтаксическая ошибка', err) 
            } else {
                throw err;
            }
        }
    
        try {
            validateUser(user);
        } catch (err) {
            if(err instanceof ValidationError) {
                throw new ReadError('Ошибка валидации', err);
            } else {
                throw err;
            }
    }
    }
    try {
        readUser ('{bad json}');
    } catch (e) {
        if (e instanceof ReadError) {
            console.log(e);
            // исходящая ошибка
            console.log('Исходная ошибка:' + e.cause);
        } else {
            throw e;
        }
    }
   
}



// Наследование от SyntaxError
{
    class FormatError extends SyntaxError { 
        constructor(message) {
            super(message);
            this.name = "FormatError";
        }
    }

    let err = new FormatError('Ошибка форматирования')
    console.log(err instanceof FormatError);
    console.log(err instanceof SyntaxError);
}