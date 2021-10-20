// Оператор instenceof
    class Rabbit {}
    let rabbit = new Rabbit();
    // Это объект класса rabbit
    console.log( rabbit instanceof Rabbit ); // true
{
    // также это работает с функциями-конструкторами
    function rabbit() {}
    console.log( new rabbit instanceof rabbit); // true
}
    let arr = [1, 2, 3];
    console.log(arr instanceof Array ); // true
    console.log(arr instanceof Object ); // true

    // Обычно оператор instanceof просматривает для проверки цепочку прототипов. Но это поведение может быть изменено при помощи статического метода Symbol.hasInstance.

    // проверка instanceof будет полагать,
    // что всё со свойством canEat - животное Animal

    class Animal {
        static [Symbol.hasInstance](obj) {
            if (obj.canEat) return true;
        }
    }

    let obj = { canEat: true};
    console.log(obj instanceof Animal); // true: вызван Animal[Symbol.hasInstance](obj)

{
    class Animal {}
    class Rabbit extends Animal {}

    let rabbit = new Rabbit();
    
    console.log(rabbit instanceof Animal); // true

}
{
    function Rabbit() {}

        let rabbit = new Rabbit();

        Rabbit.prototype = {};
    
    console.log(rabbit instanceof Rabbit); // false
}


// Бонус: Object.prototype.toString возвращает тип
{
    let obj = {};
    console.log(obj.toString()); // [Object Object]

    // скопируем метод toString в переменную для удобства
    let objectToString = Object.prototype.toString;
    
    // какой это тип?
    let arr = [];

    console.log(objectToString.call(arr)) // [object Array]
}


// Symbol.toStringTag
    let usser = {
        [Symbol.toStringTag]: 'User'
    };
    console.log({}.toString.call(usser)) // [Object Usser]




// Странный instanceof
{
    function A() {}
    function B() {}

    A.prototype = B.prototype = {};
    
    let a = new A();

    console.log( a instanceof B ); // true
    console.log(A.prototype == B.prototype)

    // Да, действительно, выглядит странно.
    // Но instanceof не учитывает саму функцию при проверке, а только prototype, который проверяется на совпадения в прототипной цепочке.
    // 
    // // И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true.
    // 
    // // Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор.
}