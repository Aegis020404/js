
// Объявление
    let arr1 = new Array();
    let arr = [1,2,3,4,5,6,7,8];


// Методы pop/push, shift/unshift
    console.log(arr.pop()); // pop - удаляет последний элемент и возвращает его
    console.log(arr.push(8)); // push - добавляет элемент и возвращает его
    console.log(arr.shift()); // shift - удаляет первый элемент и возвращает его;
    console.log(arr.unshift(0,1)); // unshift - добавляет первый элемент и возвращает его;
    console.log(arr);


// Внутреннее устройство массива
    // Добавление нечислового свойства, например: arr.test = 5.
    // Создание «дыр», например: добавление arr[0], затем arr[1000] (между ними ничего нет).
    // Заполнение массива в обратном порядке, например: arr[1000], arr[999] и т.д.


// Эффективность
    // Для более автоматизированной работы лучшер работать c поп и пуш , шифт и аншифт не желательно


// Перебор элементов
    arr = ["apple","orange","pear"];

    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // };
    for(let fruit of arr) {
        console.log(fruit);
    } 


// Многомерные массивы
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ];
        console.log(matrix[1][1]); // 5
        

// toString
    arr = [1,2,3];
    console.log(arr); // (3) [1, 2, 3]
    console.log(String(arr)); // '1,2,3'
    console.log(String(arr) === '1,2,3') // true