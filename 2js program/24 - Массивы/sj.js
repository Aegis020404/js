// var array = [1 ];// литерал массива

// console.log(array)
// console.log(array[2]);//индексикация начинается с нуля



// var months = ["January", "February", "March", "April"];//Массив из строк

// console.log(months[3]);
// console.log(months[4]);//выведется undefind мы обратились к несуществующему элементу
// months[3] = "May1"; //изменили April на May1
// months[4] = "May2"; // по индексу мы также можем изменять его или же создавать новый
// console.log(months);
// console.log(months.length);//хранит колличество элементов в этом массиве

// months[months.length] = "June";// добавляет элемент в конец массива
// console.log(months); 

// months[20] = "Something"; //можно создать индекс не по последовательности 
// console.log(months);
// console.log(months.length);//21 так как length показывает в первую очередь не длину , а индекс последнего элемента + 1

// console.log(typeof months)//массивы в js это объекты


// var myArray = new Array(34,622,1213);//функция конструктор 
// console.log(myArray)
// console.log(typeof myArray)//object
// console.log(myArray.length);
// var myArray1 = new Array(34);//функция конструктор 
// console.log(myArray1)
// console.log(myArray1.length);//в случае когда мы передаем 1 аргумент он станет длиной массива


// var thirdArray = [,,, 3];//в литералов массива мы можем пропускать элементы таким образом
// console.log(thirdArray);
// console.log(thirdArray.length);//4

// var thirdArray = [,,];//в литералов массива мы можем пропускать элементы таким образом
// console.log(thirdArray);
// console.log(thirdArray.length);//2 так как в литералах массива допускается лишняя запятая ','

// //Индексы массивов по сути тоже самое что и имена свойств объектов , но всё-же индексами должны быть неотрицательные целые числа 

// months["someProperty"] = "someValue"; 
// months["someProperty1"] = "someValue1"; 
// console.log(months);
// console.log(months.length);//не изменилось так как someProperty - это неправильное имя для индекса в массиве



=// // months.length = 5 //все индексы выше 5 были удалены 
// // console.log(months)


// delete months[3];// теперь этот индекс будет равнен undefined 
// console.log(months);  
// console.log(months[3]);  


// console.log(Array.isArray(months));//проевряет массив ли этот объект
// console.log (Array.isArray('Hello'));   


// //Методы для работы с массивами

// var array = [
//     "Some String" , "Another String" , "Third String"
// ];

// console.log(array)

// console.log(array.join());//возвращает все элементы массива с контактирировав в одну строку . По умолчанию он использует запятую в качестве разделителя но её можно заменить в его арнументе

// console.log(array.join(" "));
// console.log(array.join("||"));

// console.log(array.reverse()) //возвращает массив в обратном порядке и сохраняет его в таком виде
// console.log(array);

// console.log(array.sort());//по умолчанию сортирует массив в алфавитном порядке так-же он может принимать функцию , которая определит какое-то другое поведение при сортировке

// console.log(array.concat("Hello")); //конкантинирует массив с другими элементами , он не изменяет исходный массив ,а возвращает новый массив 
// console.log(array) 
// console.log(array.slice(1));//(start,end)выводит со старт индекса до энд (не включая самого энд). Он не изменяет исходный массив

// console.log(array)

// console.log(array.splice(1,1,"Sorax","WebDev"));//(1аргумент с которого надо начать удаление ,2аргумент сколько индексов удалить ,3аргумент добавление на место них новые индексы ) предгазначен для удаление и вставки элементов в массив // возвращает удаленный элемент 

// console.log(array);


// array.push("JavaScript");//добавляет в конец массив 1 или несколько элементов
// console.log(array);

// array.unshift("Hello there!")//добавляет в начала массива 1 или несколько элементов
// console.log(array);


// console.log(array.pop());//он удаляет последний элемент из массива и возвращает этот элемент
 
// console.log(array);

// console.log(array.shift());//он удаляет последний начальный из массива и возвращает этот элемент
// console.log(array);

// var arr = ['1','2','3','4','5','6','7','8','9','0'];

// arr.forEach(function (item, index) {
//         console.log(index,item );
//     }); //интериррование по массиву
_/+Э.0ьт
// let arr =['Vanya','Ishvan','Olya',]

// let result = arr.map (function(item,index,array){
//     return item.slice(1,arr.length +1);
// });
// console.log(arr);
// console.log(result )//преобразует массив

// let str = "Lorem ,ipsum ,dolor ,sit ";
// let strArray = str.split(',');
// console.log(strArray)//создаёт из строк массив


// let arr = ['Ваня','Иштван','Оля']



// arr.forEach(function (item, index, array){
//     console.log(item,' находятся на ',index,' позиции в ',array);
// });//метод forEach 




let arrOne = ["za",1,2,3,4,"z"]
let reduceValueOne = arrOne.reduce(function(previousValue,item,index,array) {
    return item + previousValue;

}, 0);// 0 это первоначальное значение previousValue, если мы его не укажем то он будет равен первому элементу массива
console.log(reduceValueOne)//метод reduceRight - работае так же , только с права на лево= ч



