thumb.addEventListener('mousedown',function(e){
    let shiftX = e.clientX - thumb.getBoundingClientRect().left;
    thumb.style.background="red"
    thumb.style.position='absolute';
    thumb.style.zIndex= 1000;
    moveAt(e.pageX);
    thumb.style.top=slider.getBoundingClientRect().top-thumb.getBoundingClientRect().width/2+'px';
    function moveAt(pageX) {
        thumb.style.left=pageX - shiftX +'px'; 
    };

    function onMouseMove(e){
        
        e.preventDefault();
        moveAt(e.pageX);
        if(thumb.getBoundingClientRect().right>slider.getBoundingClientRect().right){
            console.log('stop');
            thumb.style.left=slider.getBoundingClientRect().right-thumb.getBoundingClientRect().width+'px';
            
        }
        if(thumb.getBoundingClientRect().left<slider.getBoundingClientRect().left){
            console.log('stope');
            thumb.style.left=slider.getBoundingClientRect().left+'px';
        }
    };
 
   
    document.addEventListener('mousemove',onMouseMove);

    document.addEventListener('mouseup',stopEvent)
    function stopEvent(){
        document.removeEventListener('mousemove',onMouseMove);
        slider.onmouseup=null;
        thumb.style.background="blue"
    }
})


