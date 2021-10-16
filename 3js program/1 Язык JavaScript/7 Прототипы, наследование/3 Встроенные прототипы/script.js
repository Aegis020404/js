// Object.prototype

let obj = {};

console.log( obj );
console.log( obj.toString() ); // "[object Object]"

console.log( obj._proto_ === Object.prototype);


// Другие встроенные прототипы

let arr = [1, 2, 3];

// наследует ли от Array.prototype?
console.log(arr._proto_ === Array.prototype); // true

//  наследует ли от Object.prototype?
console.log(arr._proto.proto_ === Object.prototype); // true

// null на вершине иеархии
console.log(arr._proto.proto.proto_); // null


// Примитивы

// String.prototype, Number.prototype и Boolean.prototype.


// Изменение встроенных прототипов

String.prototype.show = function() {
    console.log(this);
};

'BOOM!'.show()


// Заимствование у прототипов

obj = {
    0: 'Hello',
    1: 'world',
    length:2,
};

obj.join = Array.prototype.join;

console.log( obj.join(', '))
// Это работает, потому что для внутреннего алгоритма встроенного метода join важны только корректность индексов и свойство length, он не проверяет, является ли объект на самом деле массивом. И многие встроенные методы работают так же.




// Добавить функциям метод "f.defer(ms)"
function f() {
    console.log('Hello12345');
}

Function.prototype.defer = function( ms ) {
    let self = this
    return function(...args) {
        console.log(args)
         setTimeout(()=>{
            self.apply(this,args)
         },ms)
    }
    
}
// f.defer(1000)


function f1(a, b) {
    console.log( a + b );
  }
  
  f1.defer(1000)(1, 2); // выведет 3 через 1 секунду.