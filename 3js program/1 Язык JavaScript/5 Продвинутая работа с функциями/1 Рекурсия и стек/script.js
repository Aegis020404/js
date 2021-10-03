// Два способа мышления
    // Итеративный способ: цикл for:
        function pow(x, n) {
            let result = 1;

            // умножаем result на x n раз в цикле
            for (let i = 0; i < n;i++) {
                result *= x;
            }

            return result;
        };

        console.log( pow(2, 3) ); // 8
    
    // Рекурсивный способ упрощения задачи и вызов функцией самой себе
        pow = function(x, n) { 
            if (n == 1) { // базовая рекурсия
                return x;
            } else {
                return x * pow(x, n -1) 
            }
        }
        console.log( pow(2, 4) );


// Контекст выполнения, стек
        // Теперь мы посмотрим, как работают рекурсивные вызовы. Для этого заглянем «под капот» функций.

    // Информация о процессе выполнения запущенной функции хранится в её контексте выполнения (execution context).

    // Контекст выполнения – специальная внутренняя структура данных, которая содержит информацию о вызове функции. Она включает в себя конкретное место в коде, на котором находится интерпретатор, локальные переменные функции, значение this (мы не используем его в данном примере) и прочую служебную информацию.

    // Один вызов функции имеет ровно один контекст выполнения, связанный с ним.

    // Когда функция производит вложенный вызов, происходит следующее:

    // Выполнение текущей функции приостанавливается.
    // Контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения.
    // Выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения.
    // После их завершения старый контекст достаётся из стека, и выполнение внешней функции возобновляется с того места, где она была остановлена.


// Рекурсивные  обходы

        let company = { 
            sales:[{name: "John", salary: 1000}, {name: 'Alice', salary: 600}],
            developerment: {
                sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
                internals: [{name: 'Jack', salary: 1300}]
            }
        };

        // Функция для подсчёта суммы зарплат
        function sumSalaries(department) {
            if( Array.isArray(department)){//случай 1
                return department.reduce((prev,current) => prev + current.salary,0); // сумма элементов массива
            } else {// случай (2)
                let sum = 0;
                for( let subdep of Object.values(department)){
                    console.log(subdep)
                    sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
                }
                return sum;
            }
        };

        console.log(sumSalaries(company)); //6700

       
// Рекурсивные структуры
        // Рекурсивная (рекурсивно определяемая) структура данных – это структура, которая повторяет саму себя в своих частях.

        // Мы только что видели это на примере структуры компании выше.
        
        // Отдел компании – это:
        
        // Либо массив людей.
        // Либо объект с отделами.


        // Связанный список
            let list = {
                value: 1,
                next: {
                  value: 2,
                  next: {
                    value: 3,
                    next: {
                      value: 4,
                      next: null
                    }
                  }
                }
              };
            list = { value: 1 };
            list.next = { value: 2 };
            list.next.next = { value: 3 };
            list.next.next.next = { value: 4 };

            // добавление нового элемента в список
            list = { value: "new item", next: list };

            // Чтобы удалить элемент из середины списка, нужно изменить значение next предыдущего элемента:
            list.next = list.next.next;







// Вычислить сумму чисел до данного
    function sumTo(n) { // с поиощью цикла
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += i;
        }
        return sum;
    };
    console.log(sumTo(100));


    function sumTo1(n) { // с помощью рекурсии
        if (n === 0) return n
         return n + sumTo1(n - 1)
    };
    console.log(sumTo1(100));


    function sumTo2(n) {
        return n * ( n + 1 ) / 2
    };
    console.log(sumTo2(100));


// вычислить факториал
    function factorial(n)  {
        if (n === 1) return n;
        return n * factorial(n - 1);

    };
    console.log(factorial(3))


// числа Фибоначчи
    let f = 0
    function fib(n) {
        if (n === 1 || n ===2) return 1;
        
        return fib(n - 1) + fib(n - 2) 
    };
    console.log(fib(76))
  

// Вывод односвязного списка
     list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    // function printList(list) {
    //     let temp = Object.assign(list)
    //     while(temp ) {
    //         console.log(temp.value);
    //         temp = temp.next;
    //     };
        
    // }
    

    //     function printList(list) {
    //         if (list) {
    //           console.log(list.value)
    //           list = printList(list.next)
    //     }
               
    //   };

    // printList(list)


// Вывод односвязного списка в обратном порядке

    // function printReverseList(list) {
    //     let temp = Object.assign(list)
    //     let arr = []
    //     do{
    //         arr.push(temp.value)
    //         temp = temp.next;
    //     } while( temp );
        
    //     for (let item of arr.reverse()) {
    //     console.log(item)
    //     }
    // }
    //     printReverseList(list)






    // function printReverseList(list) {
    //     let arr = []
    //   if (list) {
    //     arr.push(list.value)
    //     list = printReverseList(list.next)
    //   }
    //   if (+arr) console.log(+arr)
    // };

    // printReverseList(list)


