console.log(5 + "5");
console.log(typeof(5+"5"));//string
console.log("5" * "4");
console.log(typeof("5" * "4"));//number так как так удобно языку
console.log("5" * "h1");//Nan
console.log(typeof("5" * "h1"));//number

console.log("5" == 5);//одно и тоже значение
console.log("5" === 5);//разные типы
console.log("0" == false);//0 = false but
console.log(Boolean("0"));//0 = true

console.log(0 == false);//true => 0 = false
console.log("5" == true);
console.log("" == false);
console.log(null ==false);//
console.log(null ==true);//
console.log(null == undefined);//null && undefined равны только друг другу
console.log(true == undefined);//
console.log(false == undefined);//

//явные преобразования

console.log(Number("555"));
console.log(typeof(Number("555")));
console.log(String(4433));
console.log(typeof(String(4433)));//преобразование в строковой тип
 console.log(Boolean(1));//преобразование в логический тип
 console.log(typeof(Boolean(1)));

 console.log(!!5)// !! - логическое
 console.log(!!0)