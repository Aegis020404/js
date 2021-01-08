//объектный тип данных - сылочный тип
var a = 10, b = 20;
a = b;
b = 15;
console.log(a);

//С объектами всё будет проходить иначе

var a = {x: 10}, b = {x: 20};
a = b;
b.x = 15;
console.log(a.x);
a.x = 45;
console.log(b.x);

// Прототипы и наследование

var ObjectPhoto = {
    name: "Sorax"
};

var object = Object.create(ObjectPhoto);
console.log(object.name)//sorax


var Person = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this
    },
    greet:function() {
        console.log("Hi , my name is " + this.name);
    }
    
}

// var person = {
//     name : "John",
//     age : 24 ,
//     gender: "male",
//     greet:function() {
//         console.log("Hi , my name is " + this.name);

//     }
// }

// var anotherPerson = {
//     name : "Alex",
//     age : 35 ,
//     gender: "female",
//     greet:function() {
//         console.log("Hi , my name is " + this.name);
        
//     }
// }
// var thirdPerson = {
//     name : "Steve",
//     age : 54 ,
//     gender: "male",
//     greet:function() {
//         console.log("Hi , my name is " + this.name);
        
//     }
// }

var person , anotherPerson , thirdPerson;
person = Object.create(Person).constructor("John",35,"male");
anotherPerson = Object.create(Person).constructor("Alex",25,"female");
thirdPerson = Object.create(Person).constructor("Steve",24,"male");
 console.log(person.name);
 console.log(anotherPerson.age);
 console.log(thirdPerson.gender);

 person.greet()//эти 3 объекта имеют один сласс , так как
 anotherPerson.greet()//наследуют свои свойства от одного прототипа
 thirdPerson.greet()

 console.log(Person.isPrototypeOf(person));//является ли объект прототипом другого объкта  //true


 var webDeveloper = Object.create(Person);
  webDeveloper.constructor = function(name,age,gender,skills){
      Person.constructor.apply(this , arguments);
      this.skills = skills || [];
      return this;
  }
  var developer = Object.create(webDeveloper).constructor("jack",21,"male",["css","js","php", "mysql","html"]);

  console.log(developer);   
  console.log(developer.skills);   
  
  webDeveloper.develop = function(){
      console.log("Working...");
  }
  developer.develop();
  console.log(developer.name);
  developer.greet();