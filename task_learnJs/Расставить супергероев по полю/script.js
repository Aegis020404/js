document.addEventListener('mousedown',function(event){
   event.preventDefault();
    if (event.target.className=='draggable'|| event.target.className=='hero draggable'){
        let shiftX=event.clientX-event.target.getBoundingClientRect().left;
        let shiftY=event.clientY-event.target.getBoundingClientRect().top;

        event.target.style.position="absolute";
        event.target.style.zIndex=1000;
        document.body.append(event.target);

        moveAt(event.pageX,event.pageY);
        function moveAt(pageX,pageY) {
           
            event.target.style.left=pageX-shiftX+'px';
            event.target.style.top=pageY-shiftY+'px';
            if(event.target.getBoundingClientRect().right>document.documentElement.offsetWidth){
                event.target.style.left=document.documentElement.offsetWidth -event.target.getBoundingClientRect().width+'px';
            };
            if(event.target.getBoundingClientRect().top<10){
                event.target.style.top=event.target.getBoundingClientRect().height/10+'px'
            };
            if(event.target.getBoundingClientRect().left<10){
                event.target.style.left=event.target.getBoundingClientRect().width/10+'px'
            };
            if((event.target.getBoundingClientRect().y+event.target.getBoundingClientRect().height*2)>document.body.clientHeight){
                event.target.style.top=document.body.clientHeight-event.target.getBoundingClientRect().height+'px';
                console.log('qwerty')
            };
            // if(event.target.top)
        };
        
        function onMouseMove(event) {
            moveAt(event.pageX,event.pageY);
      
         


        };
        document.addEventListener('mousemove',onMouseMove);

        document.onmouseup=function() {
            document.removeEventListener('mousemove',onMouseMove);
            event.target.onmouseup=null;
        }
       
    }
    event.target.ondragstart = function() {
        return false;
      };
      
})