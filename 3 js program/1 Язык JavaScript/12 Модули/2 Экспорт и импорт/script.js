// Импорт *
    import {sayHi, sayBye} from './script1.js';

    sayHi('john');
    sayBye('john');

    // Мы можем импортировать всё сразу
    import * as say from './script1.js';

    console.log(say) // Модуль со всеми экспортами


// Импорт «как»
    // Мы также можем использовать as, чтобы импортировать под другими именами.

    // Например, для краткости импортируем sayHi в локальную переменную hi, а sayBye импортируем как bye:
    import {sayHi as hi, sayBye as bye} from './script1.js'

    hi('Johny');
    bye('Johny');


// Экспорт по умолчанию
    import Uber from './script1.js'
    let tax = new Uber('ytax');
    console.log(tax)


// Реэкспорт

    // export {sayHi} from './say.js'; // реэкспортировать sayHi

    // export {default as User} from './user.js'; // реэкспортировать default

    // import {login, logout} from './helpers.js';
    // export {login, logout};