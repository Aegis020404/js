// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// Это потому что map.keys() возвращает итерируемый объект, а не массив.

// Мы можем конвертировать его в массив с помощью Array.from:let 
map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more