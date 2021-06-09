function runOnKeys(func,...codes) {
    let pressed = new Set();

    document.addEventListener('keydown',function(event) {
        pressed.add(event.code);
        
        for (let code of codes){// все ли клавиши нажаты?
        
        if(!pressed.has(code)){
            return;
        }}
         // да, все

        // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
        // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
        // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
        pressed.clear();
        func();
    });

    document.addEventListener('keyup',function(event){
        pressed.delete(event.code);
        document.body.style.color="black";
    });
};
function redColor(){
    document.body.style.color="red";
};
runOnKeys(redColor,'KeyQ','KeyW');