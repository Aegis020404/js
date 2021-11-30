field.addEventListener('click',function(e) {
    ballLeft = e.clientX  - field.clientLeft - ball.offsetWidth/2 - field.offsetLeft +'px';
    ballTop = e.clientY  - field.clientTop - ball.offsetHeight/2 - field.offsetTop +'px';
    console.log(`${e.clientX}:${e.clientY}`);



    if(e.clientX - field.offsetLeft - field.clientLeft < ball.offsetWidth/2) {
        ball.style.left ='0px'
    } else if(e.clientX - field.offsetLeft - field.clientLeft > field.offsetWidth - ball.offsetWidth) {
        ball.style.left = field.offsetWidth - ball.offsetWidth - field.clientLeft*2+ 'px'
    } else {
        ball.style.left = ballLeft
    }
    if(e.clientY - field.offsetTop - field.clientTop < ball.offsetHeight/2) {
        ball.style.top ='0px'
    } else if(e.clientY - field.offsetTop - field.clientTop > field.offsetHeight - ball.offsetHeight) {
        ball.style.top = field.offsetHeight - ball.offsetHeight - field.clientTop*2+ 'px'
    }
    
    
    else {
        ball.style.top = ballTop
    }




    console.log(e.clientX - field.offsetLeft - field.clientLeft > field.offsetWidth - ball.offsetWidth)
    console.log(e.clientX - field.offsetLeft - field.clientLeft)



})







