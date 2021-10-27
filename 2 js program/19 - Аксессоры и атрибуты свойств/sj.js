var person = {
    _age: 20,
    name: "Sorax",
    get age(){
        return this._age;
    },
     set age(value){
         this._age = value < 0 ? 0 : value > 122 ? 122 : value ;
     }
    };
console.log(person.age)//20
person.age = 180;
console.log(person.age)//122
person.age = -80;
console.log(person.age)//0
person.age = 34;
console.log(person.age)//34


//Помимо имени и значения каждое свойство имеет так же атрибуты // writable  //  enumerable  //  configurable  .. их можно изменять за счет дескриптора свойства

console.log(Object.getOwnPropertyDescriptor(person,"name"));//чтобы получить свойстива дескриптора 1аргумент - объект 2аргумент -имя свойства
console.log(Object.getOwnPropertyDescriptor(person,"_age"));
console.log(Object.getOwnPropertyDescriptor(person,"age"));//аксессор

/*для определения или же переопределия атрибутов свойств можем использовать статический метод defineProperty*/
Object.defineProperty(person,"gender",{
    value: "male",
    writable:false,// теперь нельзя изменить value
    enumerable:false, // не перечисляется
    configurable:false // нельзя изменять атрибуты этого свойства
});//объект,свойство,дескриптор

console.log(person.gender);
person.gender = "female";   //мы не можем изменить это свойство так как поставили false где writable  
console.log(person.gender + "\n "); //

//for in
console.log(person);//написал для наглядности 
for(property in person){
    console.log(property) //вывели в консоль все перечисляемые свойства элемента в том числе наследованные ,но из-за того , что у gender enumerable :false он не выводится (_age,name,age)
};

console.log(Object.keys(person)); //тоже возвращает название свойств (только перечисляемы)статический метод keys

console.log(person.propertyIsEnumerable("gender"));//true только для не наследовательных свойств


var o = {}
Object.defineProperties(o, {
    x: {
        value: 10,
        writable:false,
    },
    y: {
        value: 8,
        writable: false
    },
    r: {
        get: function(){
            return Math.sqrt(this.x * this.x + this.y +this.y)
        }
    }
});//(объект,свойство)
o.x = 6;
console.log(o.r);

var obj = {}
Object.preventExtensions(obj)//предотвратит расширение
console.log( Object.isExtensible(obj))//проверка объекта на расширяемость
obj.x = 2323;
console.log(obj.x);

Object.seal(obj);//теперь нельзя узменять атрибуты свойств
console.log(Object.isSealed(obj));//проверяет был ли проведен метод
 
Object.freeze(obj); // теперь все свойства доступны только для чтения
console.log(Object.isFrozen(obj));//позволяет узнать был заморожен объект или нет
















// console.log(person.name);
// person.name = "John";
// console.log(person.name);
// console.log(person)
