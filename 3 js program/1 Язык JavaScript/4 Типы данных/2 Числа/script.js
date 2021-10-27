// Способы записи числа

    let billion = 1000000000;
    let billion1 = 1e9; //1 миллиард, буквально 1 и 9 нулей
    console.log(`billion ${billion1}`);

    let ms = 0.000001;
    let ms1 = 1e-6; // шесть нулей, слева от 1
    console.log(`ms ${ms1}`);


// Шестнадцатеричные, двоичные и восьмеричные числа
    console.log(0xff);//255 0x - 16xbckf
    
    let a = 0b11111111; // бинарная форма записи числа 255
    let b = 0o377; // восьмеричная форма записи числа 255
    console.log( a == b )


// toString(base)
    // Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.
    let num = 255;

    console.log(num.toString(16)); // ff
    console.log(num.toString(2)); // 11111111


// Округление
    console.log(Math.floor(3.7)); // 3, так как округление в меньшую сторону
    console.log(Math.ceil(3.1)); // 4, так как округление в большую сторону
    console.log(Math.round(3.6)); // 4, так как округление до ближайшего целого числа
    console.log(Math.trunc(3.5)); // 3, так как просто удаляет дробную часть

    console.log(12.36.toFixed(1)); // 12.4, округляет значение до n после запятой


//  Неточные вычисления
    // Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернёт бесконечность:
    console.log(1e500); // Infinity

    console.log(0.1 + 0.2) // 0.30000000000000004
    console.log((0.1 + 0.2).toFixed(1)) // 0.3


// Проверка: isFinite и isNaN
    console.log( isNaN(NaN) ) // true
    console.log( isNaN('str') ) // true
    console.log( isNaN({}) ) // true

    // isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
    console.log( isFinite('15') ) // true
    console.log( isFinite('str') ) //false
    console.log( isFinite(Infinity) ) //false


    // Сравнение Object.is
// Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

// Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
// Значения 0 и -0 разные: Object.is(0, -0) === false, это редко используется, но технически эти значения разные.
// Во всех других случаях Object.is(a, b) идентичен a === b.

// Этот способ сравнения часто используется в спецификации JavaScript. Когда внутреннему алгоритму необходимо сравнить 2 значения на предмет точного совпадения, он использует Object.is (Определение SameValue).


// parseInt и parseFloat
    console.log( +'1oopx' ); // NaN

    // Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой:
    console.log(parseInt('100.3px')); // 100
    console.log(parseFloat('100.3px')) // 100.3
