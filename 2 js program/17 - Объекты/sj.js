// {
//     имя:значение,
//     имя:значение,
//     имя:значение,
// }

// var person = {
//     name: "Sorax",
//     age: 20,
//     gender: "male",
//     sayHi: function () {
//         return "Hello!!";
         
//     }
// }


// // выражение.индефикатор
// console.log(person.name);//свойства объекта 
// console.log(person.gender);
 
// // выражение[выражение]

// console.log(    person["age"]); 
// person.userID = 222335;
// person.age = 21;
// console.log(person["age"]); 

// console.log(person.sayHi ());
// console.log(person);


// var object1 = new Object(); //еще один вид создания объекта
// object1.property = "value";

// console.log(object1); 

// var object2 = Object.create({x: 1, y: 2});
// console.log(object2)

// console.log(object2.hasOwnProperty("x")); //есть ли такое свойство или нет

// object2.x = 10;
// console.log(object2.x);
// console.log(object2.hasOwnProperty("x"));
// console.log(object2)
// //delete выражение    унарный оператор



// console.log("n/n/\n/n/n\n/n/n")


// delete object2.x
// console.log(object2)
// console.log(object2.hasOwnProperty("x"));//учитывает оператор наследования
// console.log("x" in object2);
// console.log("o " in object2);
// console.log(object2.x);
// console.log(object2.o);



// function userInfo (name,password,age,sity) {
// return{
//     name,
//     password,
//     age,
//     sity,
// };
// };
// let me = userInfo("Вячеслав","ыйцукеаы12321",19,"Дербент");
// console.log(me)
// let you = me;
// delete me["name"];
// console.log(me)//так как объекты становятся взаимосвязаны и бывают равны друг другу
// console.log(you)//


// Object.assign(Куда(Объект),что(свойство),что(свойство №1),что(свойство №2), ...); - для дублирования объекта


// let userInfo = {
//     name:"Вася",
//     age:30,
// };
// let user = Object.assign({},userInfo);
// user.age = 18;

// console.log(userInfo);
// console.log(user);


// let userInfo = {
//     name:"Вася",
//     age:30,
// }
// for(const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }



// for(let key in userInfo) {
//     console.log(key)//выведет ключи
//     console.log('\n',userInfo[key])//значение ключей
// };


// let name = 'alex'
// console.log(Object.values(name))//вообще работает как фор ин но может и так




