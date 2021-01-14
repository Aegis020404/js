var array = ["some string","Another String","Third String", "JavaScript","Sorax","Js"];

// array.forEach(function(element,index,array){
//     console.log(element);//вывести элементы в консоль
//     array[index] = element.toUpperCase()//преобразовывает все строки к верхнему регистру
// });

// console.log(array)


console.log(array.map(function(e){return e.toUpperCase()}));//преобразовывает все строки к верхнему регистру

var filtered = array.filter(function(e){//Позволяет отсеить элементы из массива по какому-либо критерию  
    return e.indexOf('o') === -1;
})

console.log(filtered);

console.log(array.every(function(e){ //вернет булиновое значение для всех элементов массива false если хотя-бы один элемент не правильный
return e.length > 4
}));


console.log(array.some(function(e){//вернет булиновое значение для всех элементов массива true если хотя-бы один элемент  правильный
    return e.length >4
}));
  

var numbers = [1,2,3,4,5,6,3];

var reduced = numbers.reduce(function(a, b){//1аргумент - промежуточное значение  2аргумент - значение текущего элемента
// return  a*b; //переумножит все элементы массива между собой
return a * (b % 3 === 0 ? b : 1); //переумножит все элементы , который делятся на 3 
});
console.log(reduced)

 reduced = numbers.reduceRight(function(a, b){//тепреь работает справа на лево
    return Math.pow(a,b);
    

    });
    console.log(reduced);


console.log(numbers.indexOf(3))//;2 ищет индекс со значением 3
console.log(numbers.lastIndexOf(3));//6 ищет последний
console.log(numbers.lastIndexOf(10));//-1 так как такого нету

















