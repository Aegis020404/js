// Остаточные праметры

    function sum(a, b) {
        return a + b;
    }

    console.log(sum(1, 2, 3, 4, 5)); // 3

    function sumAll( ...args ) {
        let sum = 0;
        
        for ( let arg of args) sum += arg;
        return sum;
    }

    console.log(sumAll(1, 2, 3, 4, 5)); // 15


// Переменная "arguments"
    // Все аргументы функции находятся в псевдомассиве arguments под своими порядковыми номерами.

    function showName() {
        console.log( arguments.length);
        console.log( arguments[0]);
        console.log( arguments[1]);
    };

    showName('Юлий', 'Цезарь'); // для более удобной работы с аргументами лучше использовать остаточные параметры.

    // Если мы обратимся к arguments из стрелочной функции, то получим аргументы внешней «нормальной» функции.


// Оператор расширения
    let arr = [3, 5, 1];
    console.log( Math.max(...arr)) // 5