const getHex = () => {
    let random = '#'
    for(let i = 0; i<3; i++) random +=(~~(Math.random()*255)).toString(16);
    if(random.length!=7) return getHex();
    return random;
}

console.log(getHex())

for(let i = 0;i<50; i++) {
    let box = document.createElement('div')
    box.classList.add('box');
    box.style.background = getHex()
    container.append(box)
    setInterval(()=>{
    box.style.background = getHex()
    },1000)
}



{
    let currentDroppable = null;
    
    document.onmousedown = function(e) {
        if(!e.target.classList.contains('box')) return
        e.target.ondragstart = e => {
            console.log(e)
            
        }
        
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      
        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;
    }
}