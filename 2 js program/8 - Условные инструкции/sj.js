// if (выражение) инструкция

if(true) console.log("Its true");//так как инструкция истинна , поэтому выполняется
if(false) console.log("Itsn't true");//так как инструкция ложная , поэтому не выполняется

var n = 5;
if (n > 3) {
    n*= 3;
    console.log(n);//работает так как инструкция верная
}
if (n < 3) {
    n*= 3;
    console.log(n);//не работает так как инструкция не верная
}
else{
    console.log(n); //работает так как инструкция не верная

    console.log(n *=n);
    console.log(n *=n);

}

var a =1;

if (a > 1) {
    console.log(">");
}
else if(a = 1){//    иначе если
    console.log("=");
}
else if(a < 1){
    console.log("<");
}

// switch(выражение) {
//     case выражение : инструкции;
//     case выражение : инструкции;
//     default : инструкции;
// }
var homecity ;
var name ="sorax";
switch(name){
    case "jo": homecity = "Boston"; break;//инструкция мгновенного выводы за счет него все остальные инструкции кроме правильной выполнятся не будут 
    case "sorax": homecity = "Belgorod"; break ;
    case "Bill": homecity = "La";
    default :homecity = "Moscow";//будет выполнятся если все остальные инструкции не подошли
}
console.log(homecity);
