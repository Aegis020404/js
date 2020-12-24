var func = function(){
    var i = 10;
    return function(){
        return i;
    }
};

var myFunc = func();

var anotherFunc = function(){
    var i = 20;
    console.log(myFunc());
}

anotherFunc();