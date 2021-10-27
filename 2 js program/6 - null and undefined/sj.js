console.log(typeof null);//object проблема js
console.log(typeof undefined)//undefined

var temp,
    obj = {},
    a =[1,2,3,4];

function greet(name) {//функция
    return "Hello " + name;
}

console.log(temp);//undefined так как мы их не назначали
console.log(obj.property);//undefined
console.log(a[4]);//undefined

console.log(greet("Sorax"));
console.log(greet());//значение фунциии будет равно undefined
    
console.log(null == undefined);//они равны
console.log(null === undefined);//нет так как разные типы

