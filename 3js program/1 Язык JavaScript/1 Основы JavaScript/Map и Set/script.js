// Map
//  Map -это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.
// Методы и свойства:

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let john={name:'john'}
let map = new Map();
map.set('1','str1');    //строка в качестве ключа
map.set(1,'num1');      // цифра как ключ
map.set(true,'bool1');  //булево значение как ключ
// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1))
console.log(map.get('1'))
console.log(map.get(true))
map.set(john,'object')
console.log(map.get(john))
// Как объект Map сравнивает ключи
// Чтобы сравнивать ключи, объект Map использует алгоритм SameValueZero. Это почти такое же сравнение, что и ===, с той лишь разницей, что NaN считается равным NaN. Так что NaN также может использоваться в качестве ключа.

// Этот алгоритм не может быть заменён или модифицирован.



//Перебор Map
for (let key of map.keys()){ //перебор по ключю
    console.log(key)
};
for (let key of map.values()){ //перебор по значению
    console.log(key)
};
for (let key of map){ //перебор по элементам в формате[ключ,значение]
    console.log(key)
};


// Object.entries: Map из Object
// При создании Map мы можем указать массив (или другой итерируемый объект) с парами ключ-значение для инициализации, как здесь:

let obj ={
    name:'John',
    12:30,
};
let map1 =new Map(Object.entries(obj));
console.log(map1.get('12'))


// Object.fromEntries: Object из Map
// Мы только что видели, как создать Map из обычного объекта при помощи Object.entries(obj)

let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4],
]);
console.log(prices.orange);
let map2 = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj1 = Object.fromEntries(map2.entries()); // make a plain object (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj1.orange); // 2


//set
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
// Его основные методы это:
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

let set = new Set();

let steve= {name:'Steve'};
let pete= {name:'Pete'};
let mary= {name:'Mary'};

//  Считаем гостей, некоторые приходят несколько раз
set.add(steve);
set.add(pete);
set.add(mary);
set.add(steve);
set.add(mary);
console.log(set.size)//3
for(let user of set){
    console.log(user.name)
};

//  Перебор объекта Set
set.forEach((value,valueAgain,set)=>{
    console.log(value)
});
// Set имеет те же встроенные методы, что и Map:

// set.values() – возвращает перебираемый объект для значений,
// set.keys() – то же самое, что и set.values(), присутствует для обратной совместимости с Map,
// set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.