// var func = function(){
//     var i = 10;
//     return function() {
//         return i;
//     }
// };

// var anotherFunc = function(){
//     var i = 20;
//     console.log(func()());//замыкание выведится 10 так как сы обратились к функции func
// };

// anotherFunc();



// var counter = (function(num){
//     var count = 0;
//     return function(num){
//         count = num !== undefined ? num : count;
//         return count++;
//     };
// }());
// console.log(counter())//0
// console.log(counter())//1
// console.log(counter())//2
// console.log(counter())//3
// console.log(counter())//4
// console.log(counter())//5
// console.log(counter(100))//100
// console.log(counter())//101


// var counter = function(num){
    
//     counter.scount = num !== undefined ? num : counter.scount;
//     return counter.scount++
// };
// console.log(counter(0))//0
// console.log(counter())//1
// console.log(counter())//2
// console.log(counter())//3
// console.log(counter())//4
// console.log(counter())//5
// console.log(counter())//6
// console.log(counter())//7


// const createPrinter = () => {
//     const name = "King";

//     const printName = () => {
//         console.log(name);
//     }

//     return printName;
// }

// createPrinter();//ничего не выводит
// const myPrinter = createPrinter();
// myPrinter();//выводит King


