//инструкции throw and try/catch/finally

// throw"Hello"

// 10 = "string"

//  var myError = new Error("Me Error Message");
//  console.log(myError.name);
//  console.log( myError.message);  
 
//  throw myError; 

var calculate = function(n) {
    if (n > 10) throw new Error("n should be lesss then 10");
    return function() {

        return n +=10;
    }
     
}
// console.log(calculate(7)());

// try{
//     инструкции
// }
// catch(индефикатор)//e {
//     инструкции
// }
// finally{
//     инструкции
// }

// try{
//     calculate(20);
// }   catch (e) {
//     console.log("Can't execute calculate: "+ e.message);
// }
try{
let age = prompt('Введите возраст');
let pattern =/[1-9]/g,
  CheckAge =age;
  if (!(pattern.test(age))) {
    throw new SyntaxError('Вы даже не ввели числа')
  };
  alert(age)}
// catch(err) {
//  alert('Понятно. ' + err.message);
// }//НАКОНЕЦ
finally{
  console.log("Ну ладно")
  setTimeout(console.clear,5000)
};