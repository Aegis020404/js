var myVar, doSomething;

doSomething = function(){
    alert("You typed: " + myVar);
}




window.addEventListener('mousemove', function(e){
    console.log("X: "+ e.offsetX, "Y: " + e.offsetY);//говорит где мышка и является циклом обработки событий

});
