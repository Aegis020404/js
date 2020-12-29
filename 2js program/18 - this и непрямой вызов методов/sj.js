var person = {  
    name: "john",
    greet: function(){
        return "hi My name is " + person.name;
    }
};
console.log(person.greet())

// this

var person1 = {  
    name: "john1",
    greet: function(){
        return "hi My name is " + this.name;//this работает как локальное соединение
    }
};
console.log(person1.greet())



var greet2 = function(greeting){
    return greeting + " ! My name is " + this.name; //использование функции в будущем в объектах
};

var person2 = {
    name:"Nikola",
    greet3: greet2
};
console.log(person2.greet3("hi"));


var person3 = {
    name:"Nikolay",
    greet3: greet2
};
console.log(person3.greet3("hi"));

// console.log(greet2())
// console.log(this)


console.log(person3.greet3.call(person2 ,"Bonjour"))//
console.log(person3.greet3.apply(person2 ,["Bonjour"]));//передаётся не через запятую , а массивом


var bound = greet2.bind(person3);//связывает функцию с каким-нибудь объектом

console.log(bound("Hello there"));





