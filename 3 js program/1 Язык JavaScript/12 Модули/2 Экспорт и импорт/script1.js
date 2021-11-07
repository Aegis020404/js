// Экспорт до объявления
    // экспорт массива
        export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // экспорт константы
        export const MODULES_BECAME_STANDARD_YEAR = 2015;

    // экспорт класса
        export class User {
            constructor(name) {
                this.name = name;
            }
        }

// Экспорт отдельно от объявления
        // 📁 say.js
    function sayHi(user) {
        console.log(`Hello, ${user}!`);
    }
    
    function sayBye(user) {
        console.log(`Bye, ${user}!`);
    }
    
    export {sayHi, sayBye}; // список экспортируемых переменных
    

// Экспортировать «как»
    export {sayHi as hi, sayBye as bye};


// Экспорт по умолчанию
    export default class Uber {
        constructor(name) {
            this.name = name;
        }
    } // заметим, в файле может быть не более одного export default

    
    // export class { // Ошибка! (необходимо имя, если это не экспорт по умолчанию)
    //     constructor() {}
    //   }
    

// Именованный экспорт	Экспорт по умолчанию
// export class User {...}	export default class User {...}
// import {User} from ...	import User from ...
