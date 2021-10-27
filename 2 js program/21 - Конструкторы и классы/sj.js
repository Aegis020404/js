var Person , person , anotherPerson;


Person = function(name){ //конструктор - это функция которая будучи вызванной с ключевым словом new возвращает новый объект
  this.name = name; // новый создаваемы объект
};

Person.prototype.greet = function() {
    console.log("Hello , my name is " + this.name)
}

person =new  Person("Jack");//новый объект
console.log(person.name);//Jack 
console.log(person);
person.greet();

anotherPerson = new Person ("Bruce");
console.log(anotherPerson.name);

//Класс это множество объектов ,которы наследуют свойства от одного прототипа

// console.log(Person.prototype);

anotherPerson.greet();