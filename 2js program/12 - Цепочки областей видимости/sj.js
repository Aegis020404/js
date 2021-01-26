var i = 5// глобальная переменная 

var func = function() {
    var i = 10;//локальная переменная имеет больше при оритет ,чем глобальная
    console.log(i);
    var innerFunc = function(){
       var i = 15;  //var обязательно иначе мы будем менять переменную ,которая находится в следующей видемости цепочки
        console.log(i); 
    };
    innerFunc();//вложенная функция работает лишь только в фунции внутри    
    console.log(i);  
};
func();

 //только фукции в js создают локальные переменныее
 console.log("Dab")

 // Объявление переменной подъём или же hosting
 var i = 5// 

 var func = function() {
     var i = 10;
     console.log(i);
     var innerFunc = function(){
                        //                        var i;
         console.log(i); //undefined так как console.log(i)
        var i = 15;     //i = 15;  -тоесть js всегда кидает обЪявление переменных в первый ряд за счет чего он не нашел , его унарное число
    };
     innerFunc();   
     console.log(i);  
 };
 func();
 
