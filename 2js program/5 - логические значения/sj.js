console.log(true);//логическое значение истинна
console.log(false);//логическое значение ложь

console.log(5 === 5);//true
console.log(5 === 6);//false

console.log(Boolean(5));

//falsy values

console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(""));//false
console.log(Boolean("s"));//true

var s = "text";//true

if (s) {
    console.log("its true")
}
console.log(true && false);//&& логический оператор и
console.log(true || false);//|| логический оператор или

// Унарный оператор
console.log(!true);//false
console.log(!false);//true

var isTrue =true,
     a = 0;

isTrue && (a = 5)//если isTrue истина ,то a = 5 ,если ложное ,то а = 0

console.log(a);

var someString = "Non-empty string";
var newString = someString || "Default String";//"Default String" ||  someString ;
console.log(newString)//выведет истинное значение




















