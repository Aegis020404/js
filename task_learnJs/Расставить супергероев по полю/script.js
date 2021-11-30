let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );






document.addEventListener('mousedown', function(e) {
    e.preventDefault()
    let elem = e.target
    console.log(elem.classList.contains('draggable'))
    if(!elem.classList.contains('draggable')) return

    let shiftX = e.pageX - elem.getBoundingClientRect().left;
    let shiftY = e.pageY - elem.getBoundingClientRect().top;

    elem.style.position = 'absolute';
    elem.style.zIndex = 1000;
    
    moveAt(e.pageX, e.pageY);

    function moveAt(pageX, pageY) {
        if(pageX - shiftX < 0) {
            elem.style.left ='0px';
        } else if(pageX - shiftX + elem.offsetWidth> document.documentElement.clientWidth) {
            elem.style.left = document.documentElement.clientWidth - elem.offsetWidth +'px';
        } else {
            elem.style.left = pageX - shiftX + 'px';
        }


        if(pageY - shiftY < 0) {
            elem.style.top ='0px';
        } else if(pageY - shiftY + elem.offsetHeight> document.documentElement.clientHeight) {
            elem.style.top = document.documentElement.clientHeight - elem.offsetHeight +'px';
        } else {
            elem.style.top = pageY - shiftY + 'px';
        }

        
    }

    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    })
})

