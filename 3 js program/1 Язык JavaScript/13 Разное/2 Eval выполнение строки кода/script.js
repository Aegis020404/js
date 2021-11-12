    let result = eval('2+123');
    console.log(result); //125

    let code = 'console.log(`Bebraa`)';
    eval(code);

    // В строгом режиме у eval имеется своё лексическое окружение. Поэтому функции и переменные, объявленные внутри eval, нельзя увидеть снаружи:


// Eval-калькулятор
    // function calc() {
    // let string = prompt('Введите арифметическое выражение')
    // return eval(string);
    // }
    // console.log(calc())