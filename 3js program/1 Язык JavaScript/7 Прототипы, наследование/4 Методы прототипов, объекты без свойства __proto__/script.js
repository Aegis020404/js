// Методы прототипов, объекты без свойства __proto__
    // Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
    // Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
    // Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto

    let animal = {
        eats: true
    };

    // create new Object with prototype animal
    let rabbit = Object.create(animal);

    console.log(rabbit.eats)

    console.log( Object.getPrototypeOf(rabbit) === animal);

    Object.setPrototypeOf(rabbit,{
        eats:false
    });


// "Простейший" объект
    // let obj = {};
    //  obj = Object.create(null);

    // let key = prompt(`What's the  key? , __proto__`);
    // obj[key] = 'some value';
    // console.log(obj[key])


{
    let dictionary = Object.create(null, {
        toString : {
            value() {
                return Object.keys(this).join();
            }
        }
    });

    
    
    // добавляем немного данных
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
    console.log(Object.keys(dictionary) + '')
    // только apple и __proto__ выведены в цикле
    // for(let key in dictionary) {
    // alert(key); // "apple", затем "__proto__"
    // }

    // ваш метод toString в действии
    console.log(dictionary + ""); // "apple,__proto__"

}




{
    function Rabbit(name) {
        this.name = name;
      }
      Rabbit.prototype.sayHi = function() {
        console.log( this.name );
      }
      
      let rabbit = new Rabbit("Rabbit");
      
      rabbit.sayHi();                        // Rabbit
      Rabbit.prototype.sayHi();              // undefined
      Object.getPrototypeOf(rabbit).sayHi(); // undefined
      rabbit.__proto__.sayHi();              // undefined
}