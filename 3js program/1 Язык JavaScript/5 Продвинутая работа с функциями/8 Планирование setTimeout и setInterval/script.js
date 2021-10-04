
function sayHi( pharse, who ) {
    console.log( pharse + ', ' + who );
}

let timerId = setTimeout( sayHi, 1000, "Привет" , "Джон");
console.log( timerId )

clearTimeout(timerId);

console.log(timerId)


    timerId = setTimeout(function tick() {
        console.log('tick');
        timerId = setTimeout(tick, 2000);
    }, 2000)

    clearTimeout(timerId);



// Вывод каждую секунду
    // function printNumber(from, to) {
    //     let timer = setInterval( function () {
    //         console.log(from++);
            
    //         if( from > to) clearInterval(timer)
    //     }, 1000)
    // }

    // function printNumber(from, to) {
    //      setTimeout(function next (){
    //         console.log(from++);
    //         if( from <= to) setTimeout(next , 1000)
    //     },1000)
    // }



    printNumber(1, 4)