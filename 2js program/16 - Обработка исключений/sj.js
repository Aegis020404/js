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
console.log(calculate(7)());

// try{
//     инструкции
// }
// catch(индефикатор)//e {
//     инструкции
// }
// finally{
//     инструкции
// }

try{
    calculate(20);
}   catch (e) {
    console.log("Can't execute calculate: "+ e.message);
}
