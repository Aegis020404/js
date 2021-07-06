
// Кавычки
    let single = 'single-quoted';
    let double = "double-quoted";

    let backticks = `backticks`;


// Спецсимволы
    console.log("Guests:\n * John\n * Pete\n * Mary");
    // Есть и другие, реже используемые спецсимволы. Вот список:

    // Символ	Описание
        // \n	Перевод строки
        // \r	Возврат каретки: самостоятельно не используется. В текстовых файлах Windows для перевода строки используется комбинация символов \r\n.
        // \', \"	Кавычки
        // \\	Обратный слеш
        // \t	Знак табуляции
        // \b, \f, \v	Backspace, Form Feed и Vertical Tab — оставлены для обратной совместимости, сейчас не используются.
        // \xXX	Символ с шестнадцатеричным юникодным кодом XX, например, '\x7A' — то же самое, что 'z'.
        // \uXXXX	Символ в кодировке UTF-16 с шестнадцатеричным кодом XXXX, например, \u00A9 — юникодное представление знака копирайта, ©. Код должен состоять ровно из 4 шестнадцатеричных цифр.
        // \u{X…XXXXXX} (от 1 до 6 шестнадцатеричных цифр)	Символ в кодировке UTF-32 с шестнадцатеричным кодом от U+0000 до U+10FFFF. Некоторые редкие символы кодируются двумя 16-битными словами и занимают 4 байта. Так можно вставлять символы с длинным кодом.

        console.log("\u{20331}") // 佫, редкий китайский иероглиф


// Длина строки
    console.log(`length`.length);// 6, показывает длину строки


// Доступ к символам
    // Получить символ, который занимает позицию pos, можно с помощью квадратных скобок: [pos]. Также можно использовать метод charAt: str.charAt(pos). Первый символ занимает нулевую позицию:
    let str = `Hello`;

    // получаем первый символ
    console.log (str[0] ); // H
    console.log( str.charAt(0) ); // H


// Строки неизменяемы
    let str1 = 'Hi';
    
    str1[0] = 'h'; // ошибка
    console.log( str1[0] ) // H, не работает

    str1 = 'h' + str[1];
    console.log(str1) // hi


// Изменение регистра
    console.log( `InterFace`.toUpperCase() ); // INTERFACE
    console.log( `InterFace`.toLowerCase() ); // interface


// Поиск подстроки
    // Первый метод — str.indexOf(substr, pos).

    // Он ищет подстроку substr в строке str, начиная с позиции pos, и возвращает позицию, на которой располагается совпадение, либо -1 при отсутствии совпадений.
        str = 'Widget with id';

        console.log( str.indexOf('Widget') ); // 0, найдена в самом начале
        console.log( str.indexOf('widget') ); // -1, из-за чувствтельности к регистру
        console.log( str.indexOf(`id`) ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
        console.log( str.indexOf('id', 2) ) // 12 , второй аргумент нужен ,чтобы обозначить с какого символа искать


// Трюк с побитовым НЕ
    // Существует старый трюк с использованием побитового оператора НЕ — ~. Он преобразует число в 32-разрядное целое со знаком (signed 32-bit integer). Дробная часть, в случае, если она присутствует, отбрасывается. Затем все биты числа инвертируются.

    // На практике это означает простую вещь: для 32-разрядных целых чисел значение ~n равно -(n+1).
    console.log( ~3 ); // -4 -(3+1)


// includes, startsWidth, endsWith
    // Более современный метод str.includes(substr, pos) возвращает true, если в строке str есть подстрока substr, либо false, если нет.
    console.log( `Widget with id`.includes(`Widget`) ); //true
    console.log( `Widget with id`.includes(`widget`) ); // false

    // Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
    console.log('Widget'.startsWith('Wid')); // true
    console.log('Widget'.startsWith('get')); // false

    console.log('Widget'.endsWith('Wid')); // false
    console.log('Widget'.endsWith('get')); // true


// Получение подстроки
    // В JavaScript есть 3 метода для получения подстроки: substring, substr и slice.

        // str.slice(start [, end])
        // Возвращает часть строки от start до (не включая) end.
        str = `stringify`;
        console.log( str.slice(2) ); // ringify
        console.log( str.slice(-4, -1) ); // gif
    
    // str.substring(start [, end])
        // Возвращает часть строки между start и end.
        
        // Это — почти то же, что и slice, но можно задавать start больше end.
        console.log( str.substring(2,6) ); // ring
        console.log( str.substring(6,2) ); // ring
        // Отрицательные значения substring, в отличие от slice, не поддерживает, они интерпретируются как 0.

    // str.substr(start [, length])
        // Возвращает часть строки от start длины length.
        console.log( str.substr(2,4) ); // ring


// Сравнение строк
    // str.codePointAt(pos)
        // Возвращает код для символа, находящегося на позиции pos:
        console.log( `z`.codePointAt(0) ); //122
        console.log( `Z`.codePointAt(0) ); //90
    // String.fromCodePoint(code)
        // Создаёт символ по его коду code
        console.log( String.fromCodePoint(90) ); // Z


// Правильное сравнение
    // Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

    // Отрицательное число, если str меньше str2.
    // Положительное число, если str больше str2.
    // 0, если строки равны.
    console.log( 'Österreich'.localeCompare('Zealand') ); // -1